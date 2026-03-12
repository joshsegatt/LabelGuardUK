'use client';

import { useLabelStore } from '@/lib/store/useLabelStore';
import { UK_ALLERGENS } from '@/lib/utils/allergens';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

export const StepAllergens = () => {
    const { currentLabel, setLabelData } = useLabelStore();

    const toggleAllergen = (allergen: string) => {
        const isSelected = currentLabel.allergens.includes(allergen);
        if (isSelected) {
            setLabelData({
                allergens: currentLabel.allergens.filter((a) => a !== allergen),
            });
        } else {
            setLabelData({
                allergens: [...currentLabel.allergens, allergen],
            });
        }
    };

    // Auto-detect allergens from ingredients list
    const detectAllergens = () => {
        const detected: string[] = [];
        const ingredientsText = currentLabel.ingredients.join(' ').toLowerCase();

        UK_ALLERGENS.forEach(allergen => {
            if (ingredientsText.includes(allergen.toLowerCase())) {
                detected.push(allergen);
            }
        });

        // Add only new ones
        const newAllergens = Array.from(new Set([...currentLabel.allergens, ...detected]));
        setLabelData({ allergens: newAllergens });
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h3 className="text-sm font-medium text-foreground">Select Allergens</h3>
                    <p className="text-xs text-muted-foreground">Select the allergens present in your product.</p>
                </div>
                <button
                    onClick={detectAllergens}
                    className="text-xs font-bold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                    <AlertCircle className="h-3 w-3" />
                    Auto-Detect
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {UK_ALLERGENS.map((allergen) => {
                    const isSelected = currentLabel.allergens.includes(allergen);
                    return (
                        <button
                            key={allergen}
                            onClick={() => toggleAllergen(allergen)}
                            title="Ensure Natasha&apos;s Law compliance with zero effort."
                            className={`
                flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200
                ${isSelected
                                    ? 'bg-primary/10 border-primary text-primary shadow-lg shadow-primary/5'
                                    : 'bg-white/5 border-white/5 text-muted-foreground hover:bg-white/10 hover:border-white/10'
                                }
              `}
                        >
                            {allergen}
                            {isSelected && <CheckCircle2 className="h-4 w-4" />}
                        </button>
                    );
                })}
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 flex gap-4 mt-8">
                <AlertCircle className="h-6 w-6 text-primary shrink-0" />
                <div className="space-y-1">
                    <p className="text-sm font-bold text-foreground">Natasha&apos;s Law Compliance</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                        The UK Food Standards Agency requires allergens to be emphasized in the ingredients list (e.g., in <strong>bold</strong> or CAPITAL letters). LabelGuardUK handles this automatically based on your selection here.
                    </p>
                </div>
            </div>
        </div>
    );
};
