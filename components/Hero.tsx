import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Hero: React.FC = () => {
    const [textIndex, setTextIndex] = useState(0);
    const rotatingTexts = [
        { main: 'Professional', sub: 'Food Labels' },
        { main: 'Compliant', sub: 'Allergen Labels' },
        { main: 'Print-Ready', sub: 'A4 Labels' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prev) => (prev + 1) % rotatingTexts.length);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1F1F1F]">
            {/* Ultra Wild Background Effects */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(236,236,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,236,236,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

            {/* Dramatic Gradient Orbs */}
            <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-[#CC785C]/10 rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#CC785C]/5 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3"></div>

            {/* Diagonal Accent Line */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#CC785C] via-[#CC785C]/50 to-transparent"></div>

            {/* Content - Balanced Premium Layout */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 lg:px-16 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                    {/* Left - Text Content (7 columns) */}
                    <div className="lg:col-span-7 space-y-10">
                        {/* Super Badge */}
                        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-[#2A2A2A] to-[#1F1F1F] border border-[#CC785C]/30 shadow-lg shadow-[#CC785C]/10 animate-fade-in">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                            </span>
                            <span className="text-sm text-[#ECECEC] font-semibold tracking-wide">Natasha's Law Compliant</span>
                            <div className="w-px h-4 bg-[#3A3A3A]"></div>
                            <span className="text-xs text-[#888]">FSA Approved</span>
                        </div>

                        {/* Rotating Text Heading - Fixed */}
                        <div className="space-y-4">
                            <h1 className="text-7xl lg:text-8xl font-black text-[#ECECEC] leading-[0.95] tracking-tighter">
                                <div className="relative h-[100px] lg:h-[120px] overflow-hidden">
                                    {rotatingTexts.map((text, index) => (
                                        <span
                                            key={index}
                                            className={`absolute top-0 left-0 transition-all duration-700 ease-in-out ${index === textIndex
                                                    ? 'opacity-100 translate-y-0'
                                                    : index < textIndex
                                                        ? 'opacity-0 -translate-y-8'
                                                        : 'opacity-0 translate-y-8'
                                                }`}
                                        >
                                            {text.main}
                                        </span>
                                    ))}
                                </div>
                                <div className="relative h-[100px] lg:h-[120px] overflow-hidden">
                                    {rotatingTexts.map((text, index) => (
                                        <span
                                            key={index}
                                            className={`absolute top-0 left-0 inline-block transition-all duration-700 ease-in-out ${index === textIndex
                                                    ? 'opacity-100 translate-y-0'
                                                    : index < textIndex
                                                        ? 'opacity-0 -translate-y-8'
                                                        : 'opacity-0 translate-y-8'
                                                }`}
                                        >
                                            {text.sub}
                                            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-[#CC785C] to-transparent"></div>
                                        </span>
                                    ))}
                                </div>
                            </h1>
                            <div className="flex items-center gap-4">
                                <div className="h-px flex-1 bg-gradient-to-r from-[#CC785C]/50 to-transparent"></div>
                                <h2 className="text-5xl lg:text-6xl font-light text-[#CC785C] tracking-tight animate-slide-up" style={{ animationDelay: '0.1s' }}>
                                    In Minutes
                                </h2>
                            </div>
                        </div>

                        {/* Enhanced Subtitle */}
                        <p className="text-xl lg:text-2xl text-[#A8A8A8] leading-relaxed font-light animate-slide-up" style={{ animationDelay: '0.2s' }}>
                            Generate compliant allergen labels for your UK food business.
                            <br />
                            <span className="text-[#ECECEC] font-semibold bg-gradient-to-r from-[#CC785C]/10 to-transparent px-2 py-1 rounded">
                                Fast, easy, and legally compliant
                            </span>
                            {' '}with Natasha's Law.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                            <Link
                                to="/app"
                                className="group relative px-10 py-5 bg-gradient-to-r from-[#CC785C] to-[#B8694D] text-white font-bold text-lg rounded-xl
                                         hover:shadow-2xl hover:shadow-[#CC785C]/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                <span className="relative flex items-center gap-3">
                                    Start Creating Free
                                    <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </span>
                            </Link>
                            <Link
                                to="/pricing"
                                className="group px-10 py-5 text-[#ECECEC] hover:text-white font-semibold text-lg transition-all duration-200 flex items-center gap-2"
                            >
                                View Pricing
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-[#888] animate-slide-up" style={{ animationDelay: '0.4s' }}>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>No Credit Card Required</span>
                            </div>
                            <div className="w-px h-4 bg-[#3A3A3A]"></div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>GDPR Compliant</span>
                            </div>
                            <div className="w-px h-4 bg-[#3A3A3A]"></div>
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Instant Setup</span>
                            </div>
                        </div>
                    </div>

                    {/* Right - 3D Animated Labels (5 columns) */}
                    <div className="lg:col-span-5 relative h-[600px] hidden lg:block [perspective:1000px]">
                        {/* Label 1 - Premium Dark */}
                        <div className="absolute top-0 right-0 w-80 h-auto bg-[#1a1a1a] rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.8)] p-6 transform rotate-6 hover:rotate-0 transition-all duration-700 ease-out animate-float border border-[#333] group cursor-default" style={{ animationDelay: '0s' }}>
                            <div className="absolute inset-1 border border-[#C5A059]/30 rounded-sm"></div>
                            <div className="relative z-10">
                                <div className="flex justify-between items-start border-b border-[#C5A059]/30 pb-4 mb-4">
                                    <div>
                                        <h3 className="text-2xl font-serif text-[#E8DCC0] tracking-wide">ARTISAN</h3>
                                        <div className="text-[#C5A059] text-xs tracking-[0.2em] uppercase mt-1">Brownie</div>
                                    </div>
                                    <div className="w-8 h-8 rounded-full border border-[#C5A059] flex items-center justify-center text-[#C5A059]">
                                        <span className="text-xs">£</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="text-xs text-[#999] font-light leading-relaxed">
                                        <strong className="text-[#C5A059]">INGREDIENTS:</strong> Dark Chocolate (70%), <span className="text-white font-medium border-b border-[#C5A059]/50">Eggs</span>, Butter, Sugar, <span className="text-white font-medium border-b border-[#C5A059]/50">Walnuts</span>, Sea Salt.
                                    </div>
                                    <div className="flex items-center gap-2 mt-4">
                                        <span className="px-2 py-1 bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-[10px] tracking-wider uppercase">Contains Nuts</span>
                                    </div>
                                </div>
                                <div className="mt-6 flex justify-between items-end border-t border-[#333] pt-4">
                                    <div className="text-[10px] text-[#666]">
                                        BEST BEFORE<br />
                                        <span className="text-[#E8DCC0] text-sm font-serif">15 DEC 2024</span>
                                    </div>
                                    <div className="h-6 w-24 bg-[#E8DCC0] opacity-80 mix-blend-overlay"></div>
                                </div>
                            </div>
                        </div>

                        {/* Label 2 - Minimalist White */}
                        <div className="absolute top-40 right-40 w-80 h-auto bg-[#F9F9F9] rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] p-6 transform -rotate-3 hover:rotate-0 transition-all duration-700 ease-out animate-float border border-[#E5E5E5]" style={{ animationDelay: '1.5s' }}>
                            <div className="relative z-10">
                                <div className="text-center border-b-2 border-black pb-3 mb-4">
                                    <h3 className="text-xl font-bold text-black tracking-tight uppercase">Organic Greens</h3>
                                    <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">Fresh & Local</div>
                                </div>
                                <div className="text-xs text-gray-600 font-medium leading-relaxed mb-4">
                                    Spinach, Rocket, Cherry Tomatoes, Cucumber, <span className="bg-black text-white px-1">Pine Nuts</span>, Balsamic Glaze.
                                </div>
                                <div className="bg-black text-white p-2 text-center mb-4">
                                    <div className="text-[10px] tracking-widest uppercase opacity-70">Allergen Alert</div>
                                    <div className="text-xs font-bold tracking-wide">NUTS • SULPHITES</div>
                                </div>
                                <div className="flex justify-between items-center text-[10px] font-bold text-black border-t border-gray-200 pt-3">
                                    <div>KEEP REFRIGERATED</div>
                                    <div>180g e</div>
                                </div>
                            </div>
                        </div>

                        {/* Label 3 - Rustic Kraft */}
                        <div className="absolute bottom-10 right-10 w-80 h-auto bg-[#E3D4C1] rounded-sm shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)] p-6 transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out animate-float border border-[#D4C5B0]" style={{ animationDelay: '0.8s' }}>
                            <div className="absolute inset-2 border-2 border-dashed border-[#8B7355] opacity-50"></div>
                            <div className="relative z-10 text-[#5D4037]">
                                <div className="flex flex-col items-center mb-4">
                                    <div className="w-10 h-10 border-2 border-[#5D4037] rounded-full flex items-center justify-center mb-2">
                                        <span className="font-serif text-xl">S</span>
                                    </div>
                                    <h3 className="font-serif text-lg font-bold tracking-wide">SOURDOUGH</h3>
                                    <div className="text-[10px] uppercase tracking-widest opacity-80">Artisan Bakery</div>
                                </div>
                                <div className="text-xs font-medium leading-relaxed text-center mb-4 px-2">
                                    <span className="font-bold">Wheat Flour</span>, Water, Sea Salt, Natural Leaven (<span className="font-bold">Rye</span>).
                                </div>
                                <div className="text-center border-t border-[#5D4037]/30 pt-2">
                                    <div className="font-mono text-sm">14.12.24</div>
                                </div>
                            </div>
                        </div>

                        {/* Enhanced Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-l from-[#CC785C]/20 via-[#CC785C]/5 to-transparent blur-3xl pointer-events-none"></div>
                    </div>
                </div>
            </div>

            {/* CSS Animations */}
            <style>{`
                @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
                @keyframes slide-up { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes float { 
                    0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate)); }
                    50% { transform: translateY(-20px) rotate(var(--tw-rotate)); }
                }
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.1; }
                    50% { opacity: 0.15; }
                }
                .animate-fade-in { animation: fade-in 0.8s ease-out; }
                .animate-slide-up { animation: slide-up 0.8s ease-out backwards; }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
            `}</style>
        </section>
    );
};
