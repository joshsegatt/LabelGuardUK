import React from 'react';

interface AllergensCardProps {
    allAllergens: string[];
    selectedAllergens: string[];
    toggleAllergen: (allergen: string) => void;
}

export const AllergensCard: React.FC<AllergensCardProps> = ({
    allAllergens,
    selectedAllergens,
    toggleAllergen
}) => {
    return (
        <div className="bg-[#18181B] rounded-xl border border-white/5 shadow-xl p-5 h-full flex flex-col relative overflow-hidden">
            <div className="mb-5 flex items-end justify-between">
                <h2 className="text-lg font-light text-white tracking-tight">Allergens</h2>
                {selectedAllergens.length > 0 && (
                    <span className="text-[10px] font-bold text-[#CC785C] bg-[#CC785C]/10 px-2 py-0.5 rounded-full border border-[#CC785C]/20">
                        {selectedAllergens.length} SELECTED
                    </span>
                )}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                {allAllergens.map((allergen) => {
                    const isSelected = selectedAllergens.includes(allergen);
                    return (
                        <button
                            key={allergen}
                            onClick={() => toggleAllergen(allergen)}
                            className={`
                                relative h-10 rounded-lg text-xs font-medium transition-all duration-200 flex items-center justify-center
                                ${isSelected
                                    ? 'bg-[#CC785C] text-white shadow-md shadow-[#CC785C]/20 translate-y-[-1px]'
                                    : 'bg-white/5 text-[#888] hover:bg-white/10 hover:text-white'
                                }
                            `}
                        >
                            {allergen}
                        </button>
                    );
                })}
            </div>

            <div className="mt-auto pt-4 text-center">
                <p className="text-[10px] text-[#444]">
                    Selected allergens will be bolded automatically.
                </p>
            </div>
        </div>
    );
};