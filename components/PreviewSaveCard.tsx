import React from 'react';
import { LabelData } from '../types';
import { TemplateSelector, getTemplateStyles, LabelTemplate } from './TemplateSelector';

interface PreviewSaveCardProps {
    labelData: LabelData;
    onSave: () => void;
    onPrint: () => void;
    onTemplateChange: (template: LabelTemplate) => void;
}

export const PreviewSaveCard: React.FC<PreviewSaveCardProps> = ({
    labelData,
    onSave,
    onPrint,
    onTemplateChange
}) => {
    const styles = getTemplateStyles(labelData.template || 'classic');

    return (
        <div className="bg-[#18181B] rounded-xl border border-white/5 shadow-xl p-5 h-full flex flex-col relative overflow-hidden">
            {/* Header Compacto */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-light text-white tracking-tight">Preview</h2>
                <div className="flex gap-2">
                    <button
                        onClick={onSave}
                        className="p-1.5 rounded-md bg-white/5 text-[#888] hover:bg-white/10 hover:text-white transition-colors"
                        title="Save Draft"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" /></svg>
                    </button>
                </div>
            </div>

            {/* Template Toolbar Compacta */}
            <div className="mb-4">
                <TemplateSelector
                    selectedTemplate={labelData.template || 'classic'}
                    onSelect={onTemplateChange}
                    isPremium={false}
                />
            </div>

            {/* Palco Integrado (Sem fundo preto quadrado) */}
            <div className="flex-grow relative flex items-center justify-center overflow-hidden p-2 group perspective-1000">
                {/* Luzes de Fundo Sutis (Direto no card) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#CC785C]/5 blur-[80px] rounded-full pointer-events-none"></div>

                {/* Label Maior e Flutuante */}
                <div
                    className={`
                        relative w-[340px] min-h-[220px] bg-white text-black shadow-2xl
                        transform transition-transform duration-300 ease-out
                        group-hover:scale-[1.02] group-hover:-translate-y-1
                        ${styles.containerClass}
                    `}
                >
                    <div className="flex flex-col h-full p-5">
                        {/* Product Title */}
                        <div className="mb-3 text-center border-b-2 border-black pb-2">
                            <h3 className={`text-2xl leading-none ${styles.titleClass}`}>
                                {labelData.productName || 'PRODUCT NAME'}
                            </h3>
                        </div>

                        {/* Ingredients & Allergens */}
                        <div className="flex-grow mb-3">
                            <div className={`text-xs leading-snug mb-2 ${styles.ingredientsClass}`}>
                                <span className="font-bold">INGREDIENTS:</span>{' '}
                                {labelData.ingredients || 'Ingredients list...'}
                            </div>

                            {labelData.allergens && labelData.allergens.length > 0 && (
                                <div className={`text-[10px] font-bold p-1.5 bg-black/5 rounded ${styles.allergensClass}`}>
                                    CONTAINS: {labelData.allergens.join(', ')}
                                </div>
                            )}
                        </div>

                        {/* Fixed Data Table */}
                        <div className={`mt-auto border-2 border-black ${styles.dateClass}`}>
                            <div className="grid grid-cols-2 divide-x-2 divide-black border-b-2 border-black">
                                <div className="p-1.5 text-center">
                                    <p className="text-[9px] font-bold uppercase opacity-70">Use By</p>
                                    <p className="text-base font-mono font-bold">{labelData.useByDate || 'DD/MM'}</p>
                                </div>
                                <div className="p-1.5 text-center">
                                    <p className="text-[9px] font-bold uppercase opacity-70">Price</p>
                                    <p className="text-base font-mono font-bold">£0.00</p>
                                </div>
                            </div>
                            <div className="p-1 text-center bg-black text-white">
                                <p className="text-[9px] font-bold uppercase tracking-wider">Keep Refrigerated Below 5°C</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Botão Compacto */}
            <div className="mt-4">
                <button
                    onClick={onPrint}
                    className="w-full py-3 bg-[#CC785C] hover:bg-[#B8694D] text-white font-bold text-sm rounded-lg transition-all shadow-lg shadow-[#CC785C]/20 flex items-center justify-center gap-2"
                >
                    <span>🖨️</span> Print Label
                </button>
            </div>
        </div>
    );
};
