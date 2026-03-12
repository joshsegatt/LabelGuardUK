import React, { useEffect, useRef, useState } from 'react';
import JsBarcode from 'jsbarcode';

interface BarcodeGeneratorProps {
    value: string;
    format?: 'CODE128' | 'EAN13' | 'UPC';
    width?: number;
    height?: number;
    displayValue?: boolean;
}

export const BarcodeGenerator: React.FC<BarcodeGeneratorProps> = ({
    value,
    format = 'CODE128',
    width = 2,
    height = 50,
    displayValue = true
}) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (!canvasRef.current || !value) return;

        try {
            setError('');
            JsBarcode(canvasRef.current, value, {
                format: format,
                width: width,
                height: height,
                displayValue: displayValue,
                fontSize: 12,
                margin: 5,
                background: '#ffffff',
                lineColor: '#000000'
            });
        } catch (err) {
            setError('Invalid barcode value');
            console.error('Barcode generation error:', err);
        }
    }, [value, format, width, height, displayValue]);

    if (!value) {
        return (
            <div className="flex items-center justify-center h-20 bg-slate-800/50 rounded-lg border border-slate-700/50">
                <p className="text-sm text-slate-500">Enter a value to generate barcode</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center h-20 bg-red-500/10 rounded-lg border border-red-500/50">
                <p className="text-sm text-red-400">{error}</p>
            </div>
        );
    }

    return (
        <div className="flex items-center justify-center bg-white rounded-lg p-2">
            <canvas ref={canvasRef} />
        </div>
    );
};

/**
 * Generate barcode as data URL for printing
 */
export function generateBarcodeDataURL(value: string, format: 'CODE128' | 'EAN13' | 'UPC' = 'CODE128'): string {
    const canvas = document.createElement('canvas');

    try {
        JsBarcode(canvas, value, {
            format: format,
            width: 2,
            height: 40,
            displayValue: true,
            fontSize: 10,
            margin: 2,
            background: '#ffffff',
            lineColor: '#000000'
        });
        return canvas.toDataURL('image/png');
    } catch (err) {
        console.error('Barcode generation error:', err);
        return '';
    }
}

/**
 * Validate barcode value for given format
 */
export function validateBarcodeValue(value: string, format: 'CODE128' | 'EAN13' | 'UPC'): boolean {
    if (!value) return false;

    switch (format) {
        case 'EAN13':
            return /^\d{13}$/.test(value);
        case 'UPC':
            return /^\d{12}$/.test(value);
        case 'CODE128':
            return value.length > 0 && value.length <= 80;
        default:
            return false;
    }
}

/**
 * Generate random barcode for testing
 */
export function generateRandomBarcode(format: 'CODE128' | 'EAN13' | 'UPC' = 'CODE128'): string {
    switch (format) {
        case 'EAN13':
            return Array.from({ length: 13 }, () => Math.floor(Math.random() * 10)).join('');
        case 'UPC':
            return Array.from({ length: 12 }, () => Math.floor(Math.random() * 10)).join('');
        case 'CODE128':
            return `LG${Date.now().toString().slice(-8)}`;
        default:
            return '';
    }
}
