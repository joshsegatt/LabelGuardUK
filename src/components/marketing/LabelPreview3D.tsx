'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';

export const LabelPreview3D = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative h-[450px] w-full max-w-[320px] rounded-xl bg-white/5 mx-auto perspective-1000 flex items-center justify-center p-4 border border-white/10"
        >
            <motion.div
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full w-full rounded-lg bg-white p-6 text-black shadow-2xl flex flex-col"
            >
                <div style={{ transform: "translateZ(50px)" }} className="flex flex-col h-full">
                    <div className="border-b-2 border-black pb-2 mb-4 text-center">
                        <h3 className="text-xl font-bold tracking-tight uppercase">Premium Smoked Salmon</h3>
                        <p className="text-[10px] font-medium opacity-60">SCOTTISH HIGHLANDS ORIGIN</p>
                    </div>

                    <div className="flex-grow space-y-4">
                        <div className="text-[10px] leading-relaxed">
                            <span className="font-bold">INGREDIENTS:</span> Atlantic Salmon (<span className="font-bold">Fish</span>) 97%, Sea Salt, Oak Smoke.
                        </div>

                        <div className="bg-black/5 p-2 rounded text-[9px] font-bold">
                            CONTAINS: FISH
                        </div>
                    </div>

                    <div className="mt-auto border-2 border-black">
                        <div className="grid grid-cols-2 divide-x-2 divide-black border-b-2 border-black">
                            <div className="p-2 text-center">
                                <p className="text-[8px] font-bold uppercase opacity-60">Use By</p>
                                <p className="text-sm font-mono font-bold">28/02</p>
                            </div>
                            <div className="p-2 text-center">
                                <p className="text-[8px] font-bold uppercase opacity-60">Price</p>
                                <p className="text-sm font-mono font-bold">£8.50</p>
                            </div>
                        </div>
                        <div className="bg-black text-white py-1 text-center text-[8px] font-bold uppercase tracking-wider">
                            Keep Refrigerated
                        </div>
                    </div>

                    {/* Barcode Mock */}
                    <div className="mt-4 flex justify-center">
                        <div className="w-24 h-8 bg-[url('https://www.scandit.com/wp-content/uploads/2021/05/barcode-ean-13.png')] bg-contain bg-no-repeat bg-center opacity-80" />
                    </div>
                </div>
            </motion.div>
        </div>
    );
};
