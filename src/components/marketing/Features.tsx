'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import { ShieldAlert, Barcode, LayoutTemplate, Zap } from 'lucide-react';

const features = [
    {
        title: "Real-time PDF Engine",
        description: "Generate print-ready PDFs instantly. No waiting, no loading spinners. Just pure speed with our proprietary rendering engine.",
        icon: Zap,
        className: "md:col-span-2 md:row-span-2",
        visual: (
            <div className="absolute right-0 top-0 bottom-0 w-full md:w-4/5 pointer-events-none overflow-hidden rounded-r-3xl flex items-center justify-end">
                {/* Gradient mask */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0D0D0D] via-[#0D0D0D]/80 to-transparent z-10" />

                {/* Abstract Geometric Representation of "Engine/Speed" */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[150%] h-[150%] opacity-[0.03] group-hover:opacity-[0.12] transition-opacity duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ backgroundImage: 'radial-gradient(circle at center, white 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                >
                    <div className="absolute top-1/2 right-[10%] w-[500px] h-[500px] bg-primary/40 rounded-full blur-[120px] -translate-y-1/2 group-hover:bg-primary/50 group-hover:scale-125 transition-all duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
            </div>
        )
    },
    {
        title: "Natasha's Law",
        description: "Automatic detection and bolding of all 14 major allergens.",
        icon: ShieldAlert,
        className: "md:col-span-1 md:row-span-1",
        visual: (
            <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none rounded-br-3xl overflow-hidden flex items-end justify-end p-8">
                <div className="absolute inset-0 bg-gradient-to-tl from-[#0D0D0D] to-transparent z-10" />

                <div className="flex flex-col gap-3 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-40 group-hover:opacity-100 z-20 w-3/4">
                    <div className="w-full h-1.5 bg-white/10 rounded-full" />
                    <div className="flex gap-2 w-[90%]">
                        <div className="w-1/3 h-1.5 bg-white/10 rounded-full" />
                        <div className="w-1/4 h-1.5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)] bg-opacity-80" />
                        <div className="w-1/3 h-1.5 bg-white/10 rounded-full" />
                    </div>
                    <div className="flex gap-2 w-full">
                        <div className="w-1/4 h-1.5 bg-orange-500 rounded-full shadow-[0_0_15px_rgba(249,115,22,0.5)] bg-opacity-80 delay-75" />
                        <div className="w-2/3 h-1.5 bg-white/10 rounded-full" />
                    </div>
                    <div className="w-1/2 h-1.5 bg-white/10 rounded-full" />
                </div>

                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-orange-500/5 blur-[80px] rounded-full group-hover:bg-orange-500/15 transition-colors duration-1000 z-0" />
            </div>
        )
    },
    {
        title: "EAN-13 Barcodes",
        description: "Auto-generate scannable barcodes instantly on every label.",
        icon: Barcode,
        className: "md:col-span-1 md:row-span-1",
        visual: (
            <div className="absolute bottom-0 right-0 w-full h-full pointer-events-none rounded-br-3xl overflow-hidden flex items-end justify-end p-6">
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] to-transparent z-10" />

                <div className="w-48 h-20 flex items-end justify-between opacity-30 group-hover:opacity-80 transition-opacity duration-1000 z-20 relative px-4">
                    {[...Array(24)].map((_, i) => (
                        <div
                            key={i}
                            className={`bg-white rounded-t-sm origin-bottom transform scale-y-[0.2] group-hover:scale-y-100 transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${i % 3 === 0 ? 'h-full' : i % 5 === 0 ? 'h-3/5' : 'h-4/5'} ${i % 2 === 0 ? 'w-px' : 'w-[2px]'}`}
                            style={{ transitionDelay: `${i * 15}ms` }}
                        />
                    ))}
                    {/* Laser line overlay */}
                    <div className="absolute top-1/2 left-0 w-full h-px bg-red-500 shadow-[0_0_12px_rgba(239,68,68,1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300" />
                </div>
            </div>
        )
    },
    {
        title: "Premium Templates",
        description: "Professionally designed, conversion-optimized layouts.",
        icon: LayoutTemplate,
        className: "md:col-span-2 md:row-span-1",
        visual: (
            <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none rounded-b-3xl overflow-hidden flex items-end justify-center">
                <div className="absolute inset-x-0 bottom-0 h-[150%] bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/60 to-transparent z-10" />

                <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 flex items-end justify-center gap-6 z-20 w-full max-w-sm">
                    {/* Left Card: Artisan/Bakery Label */}
                    <div className="w-28 h-40 rounded-xl bg-white border border-white/20 shadow-[0_0_30px_rgba(0,0,0,0.8)] transform -rotate-12 translate-y-8 group-hover:-rotate-[15deg] group-hover:-translate-y-4 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col p-3 z-10 overflow-hidden relative">
                        <div className="absolute top-0 inset-x-0 h-1 bg-yellow-600"></div>
                        <div className="w-12 h-12 border-2 border-yellow-600/20 rounded-full mx-auto mb-2 flex flex-col items-center justify-center p-1">
                            <div className="text-[6px] font-serif font-bold text-yellow-800 text-center uppercase tracking-widest leading-none">Artisan<br />Loaf</div>
                        </div>
                        <div className="border-t border-b border-black/10 py-1 mb-2">
                            <div className="text-[4px] font-bold text-black uppercase text-center tracking-widest">Ingredients</div>
                            <div className="text-[3px] text-black/70 text-center mt-0.5 px-2 leading-tight">WHEAT Flour, <br />Water, Salt.</div>
                        </div>
                        <div className="mt-auto flex justify-center">
                            <div className="flex gap-[1px] opacity-40">
                                {[...Array(12)].map((_, i) => <div key={i} className={`bg-black h-4 ${i % 2 === 0 ? 'w-[1px]' : 'w-[2px]'}`}></div>)}
                            </div>
                        </div>
                    </div>

                    {/* Center Card: Standard/Nutritional Label */}
                    <div className="w-36 h-48 rounded-xl bg-white shadow-[0_20px_50px_rgba(0,0,0,1)] z-20 transform translate-y-4 group-hover:-translate-y-8 group-hover:scale-105 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] p-4 flex flex-col overflow-hidden relative">
                        <div className="h-4 w-full bg-black flex items-center justify-center mb-3">
                            <span className="text-white text-[7px] font-bold tracking-widest uppercase">Sandwich Co.</span>
                        </div>
                        <div className="text-[10px] font-bold text-black border-b-2 border-black pb-1 mb-1">CHICKEN MALT</div>
                        <div className="text-[5px] text-black leading-[1.2] mb-2 line-clamp-3">
                            Chicken Breast (30%), Malted Bread (Wheat), Mayonnaise (Egg, Mustard), Black Pepper.
                        </div>

                        {/* Mini Nutritional Table */}
                        <div className="border-t-4 border-black pt-1 mb-1">
                            <div className="text-[6px] font-black leading-none mb-1">Nutrition Facts</div>
                            <div className="flex justify-between border-b border-black text-[4px] py-[1px]"><span>Energy</span><span className="font-bold">450kcal</span></div>
                            <div className="flex justify-between border-b border-black text-[4px] py-[1px]"><span>Fat</span><span>12g</span></div>
                            <div className="flex justify-between border-b border-black text-[4px] py-[1px]"><span>Carbs</span><span>45g</span></div>
                        </div>
                        <div className="absolute bottom-3 right-3 flex flex-col items-center">
                            <div className="text-[4px] font-bold mb-0.5">£3.50</div>
                            <div className="flex gap-[1px] opacity-80">
                                {[...Array(15)].map((_, i) => <div key={i} className={`bg-black h-6 ${i % 3 === 0 ? 'w-[1px]' : 'w-[1.5px]'}`}></div>)}
                            </div>
                        </div>
                    </div>

                    {/* Right Card: Minimal/Deli Label */}
                    <div className="w-28 h-40 rounded-xl bg-[#FDFBF7] border border-[#E8E6E1] shadow-[0_0_30px_rgba(0,0,0,0.8)] transform rotate-12 translate-y-8 group-hover:rotate-[15deg] group-hover:-translate-y-4 transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col p-3 z-10 overflow-hidden relative">
                        <div className="h-full border border-black/10 rounded-lg p-2 flex flex-col justify-between">
                            <div>
                                <div className="text-[5px] text-black/50 uppercase tracking-widest mb-1">— Fresh Deli —</div>
                                <div className="text-[9px] font-serif font-bold text-black leading-tight">POTATO<br />SALAD</div>
                                <div className="text-[4px] font-bold text-red-600 bg-red-50 inline-block px-1 py-0.5 rounded-sm">USE BY: 24 OCT</div>
                                <div className="text-[3.5px] text-black/60 leading-tight">Potatoes, Mayo (EGG), Chives, Onion.</div>
                            </div>
                            <div className="flex gap-[1px] opacity-50 mt-2">
                                {[...Array(14)].map((_, i) => <div key={i} className={`bg-black h-3 ${i % 2 === 0 ? 'w-[1px]' : 'w-[1.5px]'}`}></div>)}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-white/5 blur-[80px] rounded-full group-hover:bg-white/10 transition-colors duration-1000 z-0" />
            </div>
        )
    }
];

function BentoCard({ feature, i }: { feature: { title: string; description: string; icon: React.ElementType; className: string; visual: React.ReactNode; }, i: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
            onMouseMove={handleMouseMove}
            className={`bg-[#0D0D0D] border border-white/5 rounded-3xl relative overflow-hidden group p-8 flex flex-col justify-start hover:border-white/10 hover:-translate-y-1 transition-all duration-500 ease-out hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.8)] ${feature.className}`}
        >
            {/* Spotlight Glow Effect on Hover */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-500 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`radial-gradient(450px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.04), transparent 80%)`
                }}
            />

            {/* Inner Top Highlight */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50 z-10" />

            <div className="flex items-center gap-4 mb-4 relative z-20">
                <div className="p-2.5 rounded-xl bg-white/[0.02] border border-white/5 shadow-[inner_0_1px_1px_rgba(255,255,255,0.05)] group-hover:bg-primary/10 group-hover:text-primary transition-all duration-500">
                    <feature.icon className="h-5 w-5 text-white/80 group-hover:text-primary transition-colors duration-500" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium text-white tracking-tight">{feature.title}</h3>
            </div>

            <p className="text-white/70 text-[15px] leading-relaxed max-w-[85%] relative z-20 mb-12">
                {feature.description}
            </p>

            {feature.visual}
        </motion.div>
    );
}

export const Features = () => {
    return (
        <section id="features" className="py-24 sm:py-32 relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-xs sm:text-sm font-semibold leading-7 text-primary tracking-widest uppercase mb-2">Everything you need</h2>
                    <p className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
                        A workflow designed for speed.
                    </p>
                    <p className="mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-muted-foreground/80 max-w-xl mx-auto">
                        Stop wasting hours in Word documents. Our tools are purpose-built to get you fully compliant labels in seconds.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 auto-rows-[300px] gap-6">
                    {features.map((feature, i) => (
                        <BentoCard key={feature.title} feature={feature} i={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};
