import React from 'react';
import { Link } from 'react-router-dom';
import { getCurrentPlanLimits, getLabelUsage } from '../utils/license';

export const SubscriptionCard: React.FC = () => {
    const limits = getCurrentPlanLimits();
    const usage = getLabelUsage();

    const percentage = limits.maxLabels === Infinity
        ? 0
        : Math.min(100, (usage / limits.maxLabels) * 100);

    const isPro = limits.type === 'pro' || limits.type === 'business';

    return (
        <div className="bg-[#1A1A1A] rounded-2xl shadow-2xl border border-white/5 p-6 relative overflow-hidden">
            {/* Background Gradient */}
            <div className={`absolute inset-0 opacity-10 ${isPro ? 'bg-gradient-to-br from-emerald-500 to-emerald-900' : 'bg-gradient-to-br from-gray-500 to-gray-900'}`}></div>

            <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                    <div>
                        <h2 className="text-sm font-medium text-[#888] uppercase tracking-wider mb-1">Current Plan</h2>
                        <div className="flex items-center gap-2">
                            <span className={`text-2xl font-bold ${isPro ? 'text-white' : 'text-[#ECECEC]'}`}>
                                {limits.type === 'free' ? 'Free Starter' : limits.type === 'pro' ? 'Pro License' : 'Business'}
                            </span>
                            {isPro && <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 text-[10px] font-bold rounded uppercase border border-emerald-500/30">Active</span>}
                        </div>
                    </div>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isPro ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-700/30 text-gray-400'}`}>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                </div>

                {/* Usage Bar */}
                <div className="mb-6">
                    <div className="flex justify-between text-xs mb-2 font-medium">
                        <span className="text-[#888]">Monthly Usage</span>
                        <span className="text-white">
                            {usage} <span className="text-[#666]">/</span> {limits.maxLabels === Infinity ? '∞' : limits.maxLabels}
                        </span>
                    </div>
                    <div className="w-full bg-[#0F0F0F] rounded-full h-2 overflow-hidden border border-[#333]">
                        <div
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${isPro ? 'bg-emerald-500' : 'bg-[#CC785C]'}`}
                            style={{ width: `${limits.maxLabels === Infinity ? 2 : percentage}%` }}
                        ></div>
                    </div>
                </div>

                {/* Upgrade CTA */}
                {!isPro && (
                    <Link
                        to="/pricing"
                        className="block w-full py-3 px-4 bg-[#CC785C] hover:bg-[#B8694D] text-white text-center text-sm font-bold rounded-xl transition-all shadow-lg shadow-[#CC785C]/20 hover:translate-y-[-1px]"
                    >
                        Upgrade to Pro
                    </Link>
                )}

                {isPro && (
                    <div className="flex items-center gap-2 text-xs text-[#888]">
                        <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                        <span>All Pro features active</span>
                    </div>
                )}
            </div>
        </div>
    );
};
