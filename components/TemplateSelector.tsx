import React from 'react';

export type LabelTemplate = 'classic' | 'modern' | 'minimal' | 'bold' | 'elegant';

interface TemplateSelectorProps {
    selectedTemplate: LabelTemplate;
    onSelect: (template: LabelTemplate) => void;
    isPremium: boolean;
}

const templates: Array<{
    id: LabelTemplate;
    name: string;
    premium: boolean;
    color: string;
}> = [
        { id: 'classic', name: 'Classic', premium: false, color: 'bg-white' },
        { id: 'modern', name: 'Modern', premium: true, color: 'bg-blue-50' },
        { id: 'minimal', name: 'Minimal', premium: true, color: 'bg-gray-50' },
        { id: 'bold', name: 'Bold', premium: true, color: 'bg-yellow-400' },
        { id: 'elegant', name: 'Elegant', premium: true, color: 'bg-amber-50' }
    ];

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
    selectedTemplate,
    onSelect,
    isPremium
}) => {
    return (
        <div className="flex items-center gap-3 overflow-x-auto pb-2 custom-scrollbar">
            {templates.map((template) => {
                const isLocked = template.premium && !isPremium;
                const isSelected = selectedTemplate === template.id;

                return (
                    <button
                        key={template.id}
                        onClick={() => !isLocked && onSelect(template.id)}
                        disabled={isLocked}
                        className={`
                            relative group flex-shrink-0 w-16 h-16 rounded-xl border-2 transition-all duration-300
                            flex flex-col items-center justify-center gap-1
                            ${isSelected
                                ? 'border-[#CC785C] shadow-[0_0_15px_rgba(204,120,92,0.3)] scale-105'
                                : 'border-white/10 hover:border-white/30 hover:bg-white/5'
                            }
                            ${isLocked ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                        `}
                        title={template.name}
                    >
                        {/* Mini Preview Dot */}
                        <div className={`w-6 h-6 rounded-full shadow-sm ${template.color} border border-black/10`}></div>

                        <span className={`text-[10px] font-medium ${isSelected ? 'text-[#CC785C]' : 'text-[#888]'}`}>
                            {template.name}
                        </span>

                        {/* Lock Icon */}
                        {isLocked && (
                            <div className="absolute top-1 right-1">
                                <svg className="w-3 h-3 text-[#666]" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        )}
                    </button>
                );
            })}
        </div>
    );
};

// ... (Keep getTemplateStyles function as is, or move to a separate file if preferred, but for now I'll include it to ensure it works)
export function getTemplateStyles(template: LabelTemplate): {
    containerClass: string;
    titleClass: string;
    ingredientsClass: string;
    allergensClass: string;
    dateClass: string;
    fontFamily?: string;
    backgroundColor?: string;
    textColor?: string;
} {
    const baseStyles = {
        classic: {
            containerClass: 'bg-white border-2 border-black print:print-color-adjust-exact',
            titleClass: 'text-center font-bold uppercase border-b-2 border-black',
            ingredientsClass: 'text-sm',
            allergensClass: 'bg-yellow-100 border-l-4 border-orange-500 font-bold print:print-color-adjust-exact',
            dateClass: 'text-center font-bold border-t border-gray-400',
            fontFamily: 'Arial, sans-serif',
            backgroundColor: 'white',
            textColor: 'black'
        },
        modern: {
            containerClass: 'bg-gradient-to-br from-white to-gray-50 border border-gray-300 shadow-lg print:bg-white print:print-color-adjust-exact',
            titleClass: 'text-center font-extrabold uppercase text-blue-600 border-b-2 border-blue-500 print:text-blue-600',
            ingredientsClass: 'text-sm text-gray-700',
            allergensClass: 'bg-blue-50 border-l-4 border-blue-500 font-semibold text-blue-900 print:bg-blue-50 print:print-color-adjust-exact',
            dateClass: 'text-center font-bold text-gray-800 bg-gray-100 rounded print:bg-gray-100 print:print-color-adjust-exact',
            fontFamily: 'Inter, sans-serif',
            backgroundColor: '#f8fafc',
            textColor: '#1e293b'
        },
        minimal: {
            containerClass: 'bg-white border border-gray-200 print:print-color-adjust-exact',
            titleClass: 'text-center font-light uppercase tracking-wider text-gray-900',
            ingredientsClass: 'text-xs text-gray-600 leading-relaxed',
            allergensClass: 'bg-gray-100 border-l-2 border-gray-400 font-medium text-gray-800 print:bg-gray-100 print:print-color-adjust-exact',
            dateClass: 'text-center font-medium text-gray-700',
            fontFamily: 'Helvetica Neue, sans-serif',
            backgroundColor: 'white',
            textColor: '#374151'
        },
        bold: {
            containerClass: 'bg-black text-white border-4 border-yellow-400 print:bg-black print:text-white print:print-color-adjust-exact',
            titleClass: 'text-center font-black uppercase text-yellow-400 text-xl print:text-yellow-400',
            ingredientsClass: 'text-sm text-white print:text-white',
            allergensClass: 'bg-yellow-400 text-black border-l-4 border-red-600 font-black print:bg-yellow-400 print:text-black print:print-color-adjust-exact',
            dateClass: 'text-center font-black text-yellow-400 bg-gray-900 print:bg-gray-900 print:text-yellow-400 print:print-color-adjust-exact',
            fontFamily: 'Impact, sans-serif',
            backgroundColor: 'black',
            textColor: 'white'
        },
        elegant: {
            containerClass: 'bg-gradient-to-b from-amber-50 to-white border-2 border-amber-200 shadow-xl print:bg-amber-50 print:print-color-adjust-exact',
            titleClass: 'text-center font-serif font-bold uppercase text-amber-900 border-b-2 border-amber-300 print:text-amber-900',
            ingredientsClass: 'text-sm text-gray-700 font-serif',
            allergensClass: 'bg-amber-100 border-l-4 border-amber-600 font-semibold text-amber-900 print:bg-amber-100 print:print-color-adjust-exact',
            dateClass: 'text-center font-serif font-bold text-amber-900 bg-amber-50 rounded print:bg-amber-50 print:print-color-adjust-exact',
            fontFamily: 'Georgia, serif',
            backgroundColor: '#fffbeb',
            textColor: '#78350f'
        }
    };

    return baseStyles[template];
}
