'use client';

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { MouseEvent } from 'react';
import { Check, Star, Zap, Crown } from 'lucide-react';

const tiers = [
    {
        name: 'Free',
        id: 'tier-free',
        href: '/dashboard',
        priceMonthly: '£0',
        description: 'Perfect for small local vendors and testing.',
        features: [
            '5 labels per month',
            'Standard templates',
            'Allergen highlighting',
            'PDF export',
            'Email support',
        ],
        mostPopular: false,
        icon: Star,
        cta: 'Start for free',
    },
    {
        name: 'Pro',
        id: 'tier-pro',
        href: '/dashboard',
        priceMonthly: '£14.99',
        description: 'The professional choice for growing food businesses.',
        features: [
            'Unlimited labels',
            'Commercial templates',
            'EAN-13 Barcodes',
            'Logo & brand customisation',
            'Priority support',
            'Bulk export',
        ],
        mostPopular: true,
        icon: Crown,
        cta: 'Go Pro now',
    },
];

function PricingCard({ tier, index }: { tier: typeof tiers[0], index: number }) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            onMouseMove={handleMouseMove}
            className={`
                relative flex flex-col justify-between rounded-[2.5rem] p-8 lg:p-10 transition-all duration-500 ease-out overflow-hidden group hover:-translate-y-2
                backdrop-blur-xl border
                ${tier.mostPopular
                    ? 'bg-white/[0.03] border-white/20 shadow-[0_0_80px_rgba(255,255,255,0.03)] hover:border-white/40 hover:shadow-[0_0_100px_rgba(255,255,255,0.05)]'
                    : 'bg-white/[0.01] border-white/10 hover:border-white/20'
                }
            `}
        >
            {/* Spotlight Glow Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-[2.5rem] opacity-0 transition duration-500 group-hover:opacity-100 z-0"
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${tier.mostPopular ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)'}, transparent 80%)`
                }}
            />

            {/* Pro Glow Outline */}
            {tier.mostPopular && (
                <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
            )}

            {/* Top Inner Highlight */}
            <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/${tier.mostPopular ? '50' : '20'} to-transparent opacity-50 z-10`} />

            {tier.mostPopular && (
                <div className="absolute top-6 right-6 z-20">
                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-black text-[10px] font-black tracking-widest uppercase shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        <Zap className="w-3 h-3 fill-black" /> Recommended
                    </div>
                </div>
            )}

            <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                    <div className={`p-4 rounded-2xl transition-all duration-500 group-hover:scale-110 ${tier.mostPopular ? 'bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]' : 'bg-white/5 text-white/40 border border-white/10'}`}>
                        <tier.icon className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white tracking-tight">{tier.name}</h3>
                        <p className="text-white/40 text-sm font-medium tracking-tight">Best for individuals</p>
                    </div>
                </div>

                <p className="text-white/70 text-[16px] leading-relaxed mb-8 font-medium">{tier.description}</p>

                <div className="flex items-baseline gap-x-1 mb-8">
                    <span className="text-6xl font-black tracking-tighter text-white">{tier.priceMonthly}</span>
                    <span className="text-sm font-bold leading-6 text-white/50 uppercase tracking-widest ml-1">/mo</span>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent mb-8" />

                <ul role="list" className="space-y-4 mb-10">
                    {tier.features.map((feature) => (
                        <li key={feature} className="flex gap-x-3 items-center group/item transition-all duration-300">
                            <div className="flex-shrink-0 w-5 h-5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover/item:border-white/50 group-hover/item:bg-white/10 transition-all duration-300 group-hover/item:scale-110">
                                <Check className="h-3 w-3 text-white/40 group-hover/item:text-white transition-colors" strokeWidth={3} />
                            </div>
                            <span className="text-white/80 text-[15px] font-medium tracking-tight group-hover/item:text-white transition-colors group-hover/item:translate-x-1 duration-300">{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <a
                href={tier.href}
                className={`
                    relative z-10 block rounded-xl px-4 py-4 text-center text-sm font-black tracking-widest uppercase transition-all duration-300 transform
                    ${tier.mostPopular
                        ? 'bg-white text-black hover:bg-white/90 shadow-[0_10px_40px_rgba(255,255,255,0.2)] hover:-translate-y-1'
                        : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20 shadow-sm hover:-translate-y-1'
                    }
                `}
            >
                {tier.cta}
            </a>
        </motion.div>
    );
}

export const Pricing = () => {
    return (
        <section id="pricing" className="py-24 sm:py-32 relative overflow-hidden bg-[#050505]">
            {/* Background grid */}
            <div className="absolute inset-0 bg-grid opacity-[0.05] pointer-events-none" />

            {/* Ambient glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="mx-auto max-w-4xl text-center mb-16">
                    <h2 className="text-xs sm:text-sm font-bold leading-7 text-primary uppercase tracking-[0.2em] mb-4">Pricing Plans</h2>
                    <p className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-6">
                        Scale your kitchen.
                    </p>
                    <p className="mx-auto text-base sm:text-lg md:text-xl text-white/50 font-medium leading-relaxed max-w-2xl">
                        Simple, transparent pricing for food businesses of all sizes. No hidden fees, cancel anytime.
                    </p>
                </div>

                <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:gap-x-12">
                    {tiers.map((tier, index) => (
                        <PricingCard key={tier.id} tier={tier} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

