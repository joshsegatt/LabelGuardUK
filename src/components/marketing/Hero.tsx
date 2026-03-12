'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export const Hero = () => {
    return (
        <div className="relative isolate overflow-hidden min-h-[90vh] flex flex-col justify-center">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 -z-10 bg-grid opacity-40"></div>

            {/* Spotlight Glows */}
            <div className="absolute top-[-10%] left-1/2 -z-10 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-[100%] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:flex lg:items-center lg:gap-x-10 lg:px-8 w-full pt-20 pb-16">

                {/* Left Side: Copy & CTA */}
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 pt-8 relative z-10">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                        className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05]"
                    >
                        Compliance, <br />
                        <span className="text-gradient">Automated.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                        className="mt-6 text-base sm:text-lg md:text-xl tracking-tight text-white/70 leading-relaxed max-w-lg"
                    >
                        The ultimate UK food label generator designed for modern vendors. Ensure Natasha's Law compliance with zero effort using our real-time 3D builder and high-res PDF engine.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
                        className="mt-10 flex items-center gap-x-6"
                    >
                        <Link href="/dashboard" className="shimmer-button inline-flex items-center gap-2">
                            Start Building Free <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link href="/docs" className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors flex items-center gap-1 group">
                            View Documentation <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform">→</span>
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 flex items-center gap-4 text-xs font-medium text-white/50"
                    >
                        <div className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-primary" /> No credit card required</div>
                        <div className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-primary" /> 5 Free Labels / mo</div>
                        <div className="flex items-center gap-1"><CheckCircle2 className="h-3 w-3 text-primary" /> EAN-13 Barcodes</div>
                    </motion.div>
                </div>

                {/* Right Side: Elite Floating Glass Mockup */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, rotateY: 15 }}
                    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: 'spring', bounce: 0.4 }}
                    className="mx-auto mt-16 lg:mt-0 w-full max-w-2xl lg:max-w-none lg:flex-1 relative z-10 perspective-1000"
                >
                    <div className="relative w-full rounded-2xl bg-black/40 border border-white/10 shadow-[0_0_100px_rgba(255,255,255,0.05)] backdrop-blur-2xl overflow-hidden group">
                        {/* Mockup Header */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                            </div>
                            <div className="ml-4 px-2 py-0.5 rounded-md bg-white/5 text-[10px] font-mono text-white/50 tracking-wider">
                                builder.tsx
                            </div>
                        </div>

                        {/* Mockup Body */}
                        <div className="p-6 grid grid-cols-12 gap-6 h-[400px]">
                            {/* Editor Sidebar */}
                            <div className="col-span-12 sm:col-span-5 flex flex-col gap-4">
                                <div className="space-y-1.5">
                                    <label className="text-[9px] font-bold text-white/50 uppercase tracking-widest pl-1">Product Name</label>
                                    <div className="h-9 w-full rounded-md bg-white/5 border border-white/10 px-3 flex items-center text-[13px] font-medium text-white shadow-inner">Artisan Loaf</div>
                                </div>
                                <div className="space-y-1.5 flex-grow">
                                    <label className="text-[9px] font-bold text-white/50 uppercase tracking-widest pl-1">Ingredients List</label>
                                    <div className="h-28 w-full rounded-lg bg-white/[0.03] border border-white/10 p-3 flex flex-col relative group/textarea cursor-text shadow-inner">
                                        <div className="text-[12px] text-white/80 leading-relaxed font-mono">
                                            Wheat Flour, Water, Sourdough Starter, Sea Salt.
                                        </div>
                                        {/* Fake cursor */}
                                        <div className="absolute top-[34px] left-[55px] w-[2px] h-3.5 bg-primary animate-pulse opacity-0 group-hover/textarea:opacity-100"></div>
                                    </div>
                                    <div className="mt-3 flex gap-2">
                                        <div className="h-6 px-2.5 rounded-md bg-red-500/10 text-red-400 text-[10px] font-bold flex items-center gap-1.5 border border-red-500/20 shadow-[0_0_15px_rgba(239,68,68,0.15)]">
                                            <ShieldAlert className="w-3 h-3" strokeWidth={3} /> MILK
                                        </div>
                                        <div className="h-6 px-2.5 rounded-md bg-orange-500/10 text-orange-400 text-[10px] font-bold flex items-center gap-1.5 border border-orange-500/20 shadow-[0_0_15px_rgba(249,115,22,0.15)]">
                                            <ShieldAlert className="w-3 h-3" strokeWidth={3} /> WHEAT
                                        </div>
                                    </div>
                                </div>
                                <div className="h-10 w-full rounded-lg bg-primary border border-white/10 flex items-center justify-center text-primary-foreground text-sm font-bold shadow-[0_0_30px_rgba(var(--primary),0.4)] hover:opacity-90 transition-opacity cursor-pointer transform group-hover:-translate-y-0.5 duration-300">
                                    Generate Print PDF
                                </div>
                            </div>

                            {/* Preview Area */}
                            <div className="col-span-12 sm:col-span-7 bg-[#121212] border border-white/5 rounded-xl p-4 flex items-center justify-center relative overflow-hidden group-hover:border-primary/30 transition-colors duration-700">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"></div>
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:16px_16px] opacity-100 z-0"></div>

                                {/* Label Document Mock */}
                                <div className="w-[210px] bg-white rounded-md shadow-[0_20px_50px_rgba(0,0,0,0.5)] p-5 flex flex-col relative z-10 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
                                    <div className="h-[2px] w-12 bg-black mb-5 mx-auto"></div>
                                    <h3 className="text-black font-black text-center text-lg leading-tight uppercase tracking-widest mb-5 border-b-2 border-black pb-3">Artisan Loaf</h3>

                                    <div className="text-[9px] leading-[1.6] text-black font-semibold mb-8">
                                        <span className="font-black uppercase text-[8px] tracking-wider block mb-1">Ingredients:</span>
                                        <span className="font-black bg-black/10 px-[3px] py-[1px] rounded-[2px] border border-black/20">WHEAT</span> Flour, Water, Sourdough Starter, Sea Salt.
                                    </div>

                                    <div className="mt-auto border-t-2 border-black pt-3 flex justify-between items-end">
                                        <div className="mb-0.5">
                                            <div className="text-[6px] font-black uppercase text-black/60 tracking-widest mb-1">Use By</div>
                                            <div className="text-[11px] font-mono font-bold text-black border border-black/30 rounded px-1.5 py-0.5 bg-black/5 shadow-inner">24/10</div>
                                        </div>
                                        <div className="flex flex-col items-center">
                                            <div className="h-8 flex items-end gap-[1.5px]">
                                                {/* Fake Barcode bars */}
                                                {[...Array(16)].map((_, i) => (
                                                    <div key={i} className={`bg-black rounded-t-[1px] ${i % 2 === 0 ? 'w-[1.5px] h-full' : i % 3 === 0 ? 'w-[1px] h-[80%]' : 'w-[2.5px] h-full'}`}></div>
                                                ))}
                                            </div>
                                            <div className="text-[5px] font-mono font-bold text-black tracking-widest mt-1">501234 567890</div>
                                        </div>
                                    </div>

                                    {/* Highlight Badge */}
                                    <div className="absolute -top-3 -right-3 bg-green-500 text-white text-[9px] font-bold px-2.5 py-1 rounded-full shadow-[0_5px_15px_rgba(34,197,94,0.4)] border-2 border-white flex items-center gap-1 transform rotate-6 scale-90 group-hover:scale-100 transition-transform duration-500 delay-200">
                                        <CheckCircle2 className="w-3 h-3" strokeWidth={3} /> Compliant
                                    </div>
                                </div>

                                {/* Scanning Laser Effect */}
                                <div className="absolute top-0 left-0 w-full h-[2px] bg-primary shadow-[0_0_20px_rgba(var(--primary),1)] opacity-0 group-hover:opacity-100 group-hover:animate-scan z-20 mix-blend-screen" />
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
