import React from 'react';

export const TrustSection: React.FC = () => {
    return (
        <section className="py-16 bg-[#2A2A2A] border-y border-[#3A3A3A]">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#CC785C] mb-1">12,453</div>
                        <div className="text-sm text-[#888] uppercase tracking-wider">Labels Created</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#CC785C] mb-1">850+</div>
                        <div className="text-sm text-[#888] uppercase tracking-wider">UK Businesses</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#CC785C] mb-1">4.8★</div>
                        <div className="text-sm text-[#888] uppercase tracking-wider">Average Rating</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-[#CC785C] mb-1">100%</div>
                        <div className="text-sm text-[#888] uppercase tracking-wider">FSA Compliant</div>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-[#3A3A3A]">
                    <div className="flex items-center gap-2 text-[#888] text-sm">
                        <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Natasha's Law Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#888] text-sm">
                        <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#888] text-sm">
                        <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>No Credit Card Required</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#888] text-sm">
                        <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Instant Label Generation</span>
                    </div>
                </div>

                {/* Trusted By - Refined Business Logos */}
                <div className="text-center mt-12">
                    <p className="text-xs text-[#666] uppercase tracking-widest mb-8">Trusted by UK Food Businesses</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
                        {/* Bakery */}
                        <div className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#CC785C]/30 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CC785C]/20 to-[#CC785C]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-[#CC785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <span className="text-xs text-[#CCC] font-medium">Bakeries</span>
                        </div>

                        {/* Cafe */}
                        <div className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#CC785C]/30 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CC785C]/20 to-[#CC785C]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-[#CC785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <span className="text-xs text-[#CCC] font-medium">Cafes</span>
                        </div>

                        {/* Deli */}
                        <div className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#CC785C]/30 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CC785C]/20 to-[#CC785C]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-[#CC785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <span className="text-xs text-[#CCC] font-medium">Delis</span>
                        </div>

                        {/* Market Stalls */}
                        <div className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#CC785C]/30 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CC785C]/20 to-[#CC785C]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-[#CC785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <span className="text-xs text-[#CCC] font-medium">Markets</span>
                        </div>

                        {/* Catering */}
                        <div className="flex flex-col items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-[#CC785C]/30 transition-all group">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#CC785C]/20 to-[#CC785C]/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                                <svg className="w-6 h-6 text-[#CC785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <span className="text-xs text-[#CCC] font-medium">Catering</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
