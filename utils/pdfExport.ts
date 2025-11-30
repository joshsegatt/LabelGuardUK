import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { LabelData } from '../types';

/**
 * Export single label as PDF
 */
export async function exportLabelAsPDF(labelData: LabelData, includeBarcode: boolean = false): Promise<void> {
    const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [100, 50] // 100mm x 50mm label
    });

    // Create label HTML
    const labelHTML = generateLabelHTML(labelData, includeBarcode);

    // Create temporary container
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.width = '100mm';
    container.style.height = '50mm';
    container.innerHTML = labelHTML;
    document.body.appendChild(container);

    try {
        // Convert to canvas
        const canvas = await html2canvas(container, {
            scale: 2,
            backgroundColor: '#ffffff',
            logging: false
        });

        // Add to PDF
        const imgData = canvas.toDataURL('image/png');
        pdf.addImage(imgData, 'PNG', 0, 0, 100, 50);

        // Download
        const filename = `${labelData.productName.replace(/[^a-z0-9]/gi, '_')}_label.pdf`;
        pdf.save(filename);
    } finally {
        // Cleanup
        document.body.removeChild(container);
    }
}

/**
 * Export multiple labels as PDF (A4 sheet with 10 labels)
 */
export async function exportMultipleLabelsAsPDF(
    labelData: LabelData,
    count: number = 10,
    includeBarcode: boolean = false
): Promise<void> {
    const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4'
    });

    const labelHTML = generateLabelHTML(labelData, includeBarcode);

    // A4 dimensions: 210mm x 297mm
    // Label dimensions: ~95mm x 52mm
    // 2 columns x 5 rows = 10 labels
    const labelWidth = 95;
    const labelHeight = 52;
    const marginX = 10;
    const marginY = 10;
    const gapX = 5;
    const gapY = 5;

    // Create temporary container for each label
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.left = '-9999px';
    container.style.width = `${labelWidth}mm`;
    container.style.height = `${labelHeight}mm`;
    container.innerHTML = labelHTML;
    document.body.appendChild(container);

    try {
        // Convert label to canvas once
        const canvas = await html2canvas(container, {
            scale: 2,
            backgroundColor: '#ffffff',
            logging: false
        });
        const imgData = canvas.toDataURL('image/png');

        // Add labels to PDF in grid
        let labelsAdded = 0;
        for (let row = 0; row < 5 && labelsAdded < count; row++) {
            for (let col = 0; col < 2 && labelsAdded < count; col++) {
                const x = marginX + col * (labelWidth + gapX);
                const y = marginY + row * (labelHeight + gapY);

                pdf.addImage(imgData, 'PNG', x, y, labelWidth, labelHeight);
                labelsAdded++;
            }
        }

        // Download
        const filename = `${labelData.productName.replace(/[^a-z0-9]/gi, '_')}_labels_x${count}.pdf`;
        pdf.save(filename);
    } finally {
        // Cleanup
        document.body.removeChild(container);
    }
}

/**
 * Generate label HTML for PDF export
 */
function generateLabelHTML(labelData: LabelData, includeBarcode: boolean): string {
    const { productName, ingredients, allergens, useByDate } = labelData;

    // Highlight allergens in ingredients
    let highlightedIngredients = ingredients;
    if (allergens && allergens.length > 0) {
        const sortedAllergens = [...allergens].sort((a, b) => b.length - a.length);
        sortedAllergens.forEach(allergen => {
            const escapedAllergen = allergen.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
            const regex = new RegExp(`\\b(${escapedAllergen})\\b`, 'gi');
            highlightedIngredients = highlightedIngredients.replace(
                regex,
                '<strong style="background: #fef3c7; padding: 1px 2px; border-left: 3px solid #f59e0b;">$1</strong>'
            );
        });
    }

    return `
        <div style="
            width: 100%;
            height: 100%;
            padding: 8px;
            font-family: Arial, sans-serif;
            font-size: 9pt;
            background: white;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
        ">
            <!-- Product Name -->
            <div style="
                text-align: center;
                font-size: 11pt;
                font-weight: bold;
                text-transform: uppercase;
                margin-bottom: 6px;
                padding-bottom: 4px;
                border-bottom: 2px solid #000;
            ">
                ${productName}
            </div>

            <!-- Ingredients -->
            <div style="flex-grow: 1; margin-bottom: 6px; font-size: 8pt; line-height: 1.3;">
                <strong>INGREDIENTS:</strong> ${highlightedIngredients}
            </div>

            <!-- Allergens -->
            ${allergens && allergens.length > 0 ? `
                <div style="
                    background: #fef3c7;
                    border-left: 4px solid #f59e0b;
                    padding: 4px 6px;
                    margin-bottom: 6px;
                    font-size: 7pt;
                    font-weight: bold;
                ">
                    ALLERGENS: ${allergens.join(', ')}
                </div>
            ` : ''}

            <!-- Date -->
            <div style="
                text-align: center;
                font-size: 9pt;
                font-weight: bold;
                padding-top: 4px;
                border-top: 1px solid #ccc;
            ">
                ${useByDate ? `USE BY: ${new Date(useByDate).toLocaleDateString('en-GB')}` : ''}
            </div>

            ${includeBarcode ? `
                <!-- Barcode placeholder -->
                <div style="text-align: center; margin-top: 4px;">
                    <div style="
                        display: inline-block;
                        padding: 2px 8px;
                        background: #f0f0f0;
                        border: 1px solid #ccc;
                        font-size: 7pt;
                    ">
                        BARCODE
                    </div>
                </div>
            ` : ''}
        </div>
    `;
}

/**
 * Email PDF as attachment (requires backend)
 */
export async function emailLabelPDF(
    labelData: LabelData,
    recipientEmail: string,
    includeBarcode: boolean = false
): Promise<void> {
    // This would require a backend service
    // For now, just download and show instructions
    await exportLabelAsPDF(labelData, includeBarcode);

    alert(
        `📧 PDF Downloaded!\n\n` +
        `To email this PDF:\n` +
        `1. Open your email client\n` +
        `2. Attach the downloaded PDF\n` +
        `3. Send to: ${recipientEmail}\n\n` +
        `Pro tip: Upgrade to Business plan for automatic email delivery!`
    );
}
