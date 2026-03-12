import React from 'react';

interface ProductDetailsCardProps {
    productName: string;
    setProductName: (name: string) => void;
    ingredients: string;
    setIngredients: (ingredients: string) => void;
    useByDate: string;
    setUseByDate: (date: string) => void;
    barcode?: string;
    setBarcode?: (barcode: string) => void;
    showBarcode?: boolean;
}

export const ProductDetailsCard: React.FC<ProductDetailsCardProps> = ({
    productName,
    setProductName,
    ingredients,
    setIngredients,
    useByDate,
    setUseByDate,
    barcode,
    setBarcode,
    showBarcode = false
}) => {
    return (
        <div className="bg-[#18181B] rounded-xl border border-white/5 shadow-xl p-5 h-full flex flex-col relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#CC785C] via-[#CC785C]/50 to-transparent opacity-50"></div>

            <div className="mb-5">
                <h2 className="text-lg font-light text-white tracking-tight">Details</h2>
            </div>

            <div className="space-y-5 flex-grow">
                {/* Product Name */}
                <div className="group/input">
                    <label className="block text-[10px] font-bold text-[#666] mb-1.5 uppercase tracking-[0.2em] group-focus-within/input:text-[#CC785C] transition-colors">
                        Product Name
                    </label>
                    <input
                        type="text"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        placeholder="e.g. Artisan Sourdough"
                        className="w-full px-0 py-2 bg-transparent border-b border-[#333] text-lg text-white placeholder-[#333]
                                 focus:outline-none focus:border-[#CC785C] transition-all font-light"
                    />
                </div>

                {/* Ingredients */}
                <div className="group/input flex-grow flex flex-col">
                    <label className="block text-[10px] font-bold text-[#666] mb-1.5 uppercase tracking-[0.2em] group-focus-within/input:text-[#CC785C] transition-colors">
                        Ingredients
                    </label>
                    <div className="relative flex-grow">
                        <textarea
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                            placeholder="Flour, Water, Salt..."
                            className="w-full p-4 bg-white/5 border border-white/5 rounded-lg text-white placeholder-[#444]
                                     focus:outline-none focus:bg-white/10 focus:border-white/10 transition-all 
                                     resize-none h-full min-h-[100px] leading-relaxed text-sm"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Use By Date */}
                    <div className="group/input">
                        <label className="block text-[10px] font-bold text-[#666] mb-1.5 uppercase tracking-[0.2em] group-focus-within/input:text-[#CC785C] transition-colors">
                            Use By
                        </label>
                        <input
                            type="date"
                            value={useByDate}
                            onChange={(e) => setUseByDate(e.target.value)}
                            className="w-full px-3 py-2 bg-white/5 border border-white/5 rounded-md text-white text-sm
                                     focus:outline-none focus:bg-white/10 transition-all [color-scheme:dark]"
                        />
                    </div>

                    {/* Barcode - Only for Pro/Business */}
                    {showBarcode ? (
                        setBarcode && (
                            <div className="group/input">
                                <label className="block text-[10px] font-bold text-[#666] mb-1.5 uppercase tracking-[0.2em] group-focus-within/input:text-[#CC785C] transition-colors">
                                    Barcode
                                </label>
                                <input
                                    type="text"
                                    value={barcode || ''}
                                    onChange={(e) => setBarcode(e.target.value)}
                                    placeholder="Optional"
                                    className="w-full px-3 py-2 bg-white/5 border border-white/5 rounded-md text-white placeholder-[#444] text-sm
                                             focus:outline-none focus:bg-white/10 transition-all font-mono"
                                />
                            </div>
                        )
                    ) : (
                        <div className="group/input opacity-50 cursor-not-allowed relative">
                            <label className="block text-[10px] font-bold text-[#666] mb-1.5 uppercase tracking-[0.2em]">
                                Barcode <span className="text-[#CC785C] ml-1 text-[9px] border border-[#CC785C] px-1 rounded">PRO</span>
                            </label>
                            <div className="w-full px-3 py-2 bg-white/5 border border-white/5 rounded-md text-[#444] text-sm font-mono flex items-center justify-between">
                                <span>Locked</span>
                                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};