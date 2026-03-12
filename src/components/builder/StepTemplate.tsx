'use client';

import { useLabelStore, LabelTemplate } from '@/lib/store/useLabelStore';
import { Check } from 'lucide-react';

const templates: { id: LabelTemplate; name: string; description: string; colors: string }[] = [
    { id: 'classic', name: 'Classic', description: 'Standard industrial look.', colors: 'bg-white border-black' },
    { id: 'modern', name: 'Modern', description: 'Clean sans-serif typography.', colors: 'bg-slate-50 border-slate-900' },
    { id: 'minimal', name: 'Minimal', description: 'Space-efficient design.', colors: 'bg-white border-slate-200' },
    { id: 'bold', name: 'Bold', description: 'High-contrast for visibility.', colors: 'bg-yellow-50 border-black' },
    { id: 'elegant', name: 'Elegant', description: 'Premium serif style.', colors: 'bg-stone-50 border-stone-800' },
];

export const StepTemplate = () => {
    const { currentLabel, setLabelData } = useLabelStore();

    return (
        <div className="space-y-6">
            <div>
                <h3 className="text-sm font-medium text-foreground">Select Template</h3>
                <p className="text-xs text-muted-foreground">Choose a design style for your label.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template) => {
                    const isSelected = currentLabel.template === template.id;
                    return (
                        <button
                            key={template.id}
                            onClick={() => setLabelData({ template: template.id })}
                            className={`
                relative flex flex-col items-start p-4 rounded-xl border-2 transition-all text-left
                ${isSelected
                                    ? 'border-primary bg-primary/5 shadow-lg shadow-primary/5'
                                    : 'border-white/5 bg-white/5 hover:border-white/10 hover:bg-white/10'
                                }
              `}
                        >
                            <div className={`w-full h-24 rounded-lg mb-4 ${template.colors} border p-2 flex flex-col gap-1 overflow-hidden`}>
                                <div className="h-2 w-3/4 bg-current opacity-20 rounded" />
                                <div className="h-1 w-full bg-current opacity-10 rounded" />
                                <div className="h-1 w-full bg-current opacity-10 rounded" />
                                <div className="mt-auto flex justify-between gap-1">
                                    <div className="h-6 w-8 bg-current opacity-10 rounded" />
                                    <div className="h-6 w-8 bg-current opacity-10 rounded" />
                                </div>
                            </div>
                            <p className="text-sm font-bold text-foreground">{template.name}</p>
                            <p className="text-[10px] text-muted-foreground mt-1">{template.description}</p>

                            {isSelected && (
                                <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
                                    <Check className="h-3 w-3" />
                                </div>
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};
