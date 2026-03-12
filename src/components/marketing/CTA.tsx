'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';

export function CTA() {
    return (
        <section className="py-24 relative overflow-hidden bg-[#050505]">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <motion.div 
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="relative isolate overflow-hidden bg-white/[0.02] backdrop-blur-2xl px-6 py-24 shadow-[0_0_100px_rgba(0,0,0,0.5)] rounded-[3.5rem] sm:px-24 xl:py-32 border border-white/10 group"
                >
                    {/* Multi-color Ambient Glows */}
                    <motion.div 
                        animate={{ 
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-40 -left-20 w-96 h-96 bg-primary/30 blur-[120px] rounded-full pointer-events-none" 
                    />
                    <motion.div 
                        animate={{ 
                            scale: [1.2, 1, 1.2],
                            opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-40 -right-20 w-96 h-96 bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none" 
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-br from-primary/5 via-transparent to-indigo-500/5 pointer-events-none" />

                    <div className="mx-auto max-w-2xl text-center relative z-10">
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-primary text-[10px] font-black tracking-[0.2em] uppercase mb-8 shadow-xl backdrop-blur-md"
                        >
                            <Sparkles className="w-3.5 h-3.5 fill-primary" /> Ready to scale?
                        </motion.div>
                        
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8 leading-[1.1]"
                        >
                            Start building <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">compliant labels</span> today.
                        </motion.h2>

                        <motion.p 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mx-auto mt-6 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-white/50 font-medium"
                        >
                            Join hundreds of smart food vendors who have automated their compliance. No credit card required to start.
                        </motion.p>

                        <motion.div 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mt-12 flex items-center justify-center gap-x-6"
                        >
                            <Link
                                href="/dashboard"
                                className="group relative inline-flex items-center gap-3 overflow-hidden rounded-2xl bg-white px-10 py-5 text-sm font-black text-black transition-all hover:scale-105 shadow-[0_20px_60px_rgba(255,255,255,0.2)] active:scale-95"
                            >
                                <span className="relative z-10 uppercase tracking-[0.1em]">Get Started for Free</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                                
                                {/* Shine effect */}
                                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-black/5 to-transparent skew-x-12" />
                            </Link>
                        </motion.div>
                    </div>

                    {/* Decorative radial pattern */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:32px_32px] pointer-events-none opacity-40" />
                    
                    {/* Top inner light leak */}
                    <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                </motion.div>
            </div>
        </section>
    );
}
