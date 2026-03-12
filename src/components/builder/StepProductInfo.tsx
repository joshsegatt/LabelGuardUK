'use client';

import { useLabelStore } from '@/lib/store/useLabelStore';

export const StepProductInfo = () => {
    const { currentLabel, setLabelData } = useLabelStore();

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <label htmlFor="productName" className="text-sm font-medium text-foreground">
                    Product Name
                </label>
                <input
                    id="productName"
                    type="text"
                    value={currentLabel.productName}
                    onChange={(e) => setLabelData({ productName: e.target.value })}
                    placeholder="e.g. Traditional Margherita Pizza"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label htmlFor="brand" className="text-sm font-medium text-foreground">
                        Brand Name
                    </label>
                    <input
                        id="brand"
                        type="text"
                        value={currentLabel.brand}
                        onChange={(e) => setLabelData({ brand: e.target.value })}
                        placeholder="e.g. Mamma's Kitchen"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="weight" className="text-sm font-medium text-foreground">
                        Weight / Volume
                    </label>
                    <input
                        id="weight"
                        type="text"
                        value={currentLabel.weight}
                        onChange={(e) => setLabelData({ weight: e.target.value })}
                        placeholder="e.g. 400g"
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="useBy" className="text-sm font-medium text-foreground">
                    Use By / Best Before
                </label>
                <input
                    id="useBy"
                    type="text"
                    value={currentLabel.useByDate}
                    onChange={(e) => setLabelData({ useByDate: e.target.value })}
                    placeholder="e.g. 25/12"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
            </div>
        </div>
    );
};
