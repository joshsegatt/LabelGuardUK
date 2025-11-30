import React from 'react';

interface StripeBuyButtonProps {
    onClose: () => void;
}

export const StripeBuyButton: React.FC<StripeBuyButtonProps> = ({ onClose }) => {
    // Use Environment Variable if available, otherwise fallback to the hardcoded link
    const STRIPE_CHECKOUT_URL = import.meta.env.VITE_STRIPE_CHECKOUT_URL || 'https://buy.stripe.com/dRm6oG2Qt74g0Tcfg10VO00';

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-[#2A2A2A] rounded-2xl max-w-md w-full p-8 relative border border-[#3A3A3A] shadow-2xl">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#888] hover:text-[#ECECEC] transition-colors"
                    aria-label="Close"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-[#CC785C]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg className="w-8 h-8 text-[#CC785C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-[#ECECEC] mb-2">
                        Upgrade to Pro
                    </h2>
                    <p className="text-[#A8A8A8]">
                        Get unlimited access instantly
                    </p>
                </div>

                {/* Pro Plan Summary */}
                <div className="mb-8 p-4 bg-[#1F1F1F] rounded-xl border border-[#3A3A3A]">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-[#ECECEC] font-medium">Pro Subscription</span>
                        <span className="text-[#CC785C] font-bold">£14.99/mo</span>
                    </div>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm text-[#888]">
                            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            Unlimited Labels
                        </li>
                        <li className="flex items-center gap-2 text-sm text-[#888]">
                            <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                            PDF Export & Barcodes
                        </li>
                    </ul>
                </div>

                {/* Checkout Button */}
                <a
                    href={STRIPE_CHECKOUT_URL}
                    className="block w-full py-4 px-6 bg-[#635BFF] hover:bg-[#5851E1] text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] text-center shadow-lg shadow-[#635BFF]/25 mb-4 group"
                >
                    <span className="flex items-center justify-center gap-2">
                        Proceed to Secure Checkout
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </span>
                </a>

                <p className="text-xs text-[#666] text-center mb-6">
                    You'll be redirected to Stripe to complete your purchase securely.
                </p>

                {/* Trust Indicators */}
                <div className="flex items-center justify-center gap-4 text-[10px] text-[#555] uppercase tracking-wider font-medium">
                    <span className="flex items-center gap-1">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                        SSL Secure
                    </span>
                    <span className="w-1 h-1 bg-[#333] rounded-full"></span>
                    <span>Apple Pay</span>
                    <span className="w-1 h-1 bg-[#333] rounded-full"></span>
                    <span>Google Pay</span>
                </div>
            </div>
        </div>
    );
};
