import React, { useEffect } from 'react';

interface StripeBuyButtonProps {
    onClose: () => void;
}

// Declare Stripe custom element type
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'stripe-buy-button': {
                'buy-button-id': string;
                'publishable-key': string;
            };
        }
    }
}

export const StripeBuyButton: React.FC<StripeBuyButtonProps> = ({ onClose }) => {
    useEffect(() => {
        // Load Stripe Buy Button script
        const script = document.createElement('script');
        script.src = 'https://js.stripe.com/v3/buy-button.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            // Cleanup script on unmount
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-[#2A2A2A] rounded-2xl max-w-2xl w-full p-8 relative border border-[#3A3A3A]">
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
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-[#ECECEC] mb-2">
                        Upgrade to Pro
                    </h2>
                    <p className="text-[#A8A8A8]">
                        Unlock unlimited labels and premium features
                    </p>
                </div>

                {/* Pro Plan Features */}
                <div className="mb-8 p-6 bg-[#1F1F1F] rounded-xl border border-[#CC785C]/30">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-[#ECECEC]">Pro Plan</h3>
                        <div className="text-right">
                            <div className="text-3xl font-bold text-[#CC785C]">£14.99</div>
                            <div className="text-sm text-[#888]">per month</div>
                        </div>
                    </div>

                    <ul className="space-y-3">
                        {[
                            'Unlimited labels',
                            'No watermarks',
                            'PDF export',
                            'Barcode generator',
                            'Premium templates',
                            'Priority support'
                        ].map((feature, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-[#A8A8A8]">
                                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Stripe Buy Button */}
                <div className="flex flex-col items-center gap-4">
                    <stripe-buy-button
                        buy-button-id="buy_btn_1SZDRWBnZ9NnHSqOAboSpIGU"
                        publishable-key="pk_live_51SZD5KBnZ9NnHSqOzyJL8WIjBLfpUbPJgvVnv8Pvs68wJIgo2czfP6VWJ7wMxRHlgi7WuVrwEmDNaJDn9wCd87K600bpCMSLxg"
                    />

                    <p className="text-xs text-[#666] text-center max-w-md">
                        Secure payment powered by Stripe. Cancel anytime. No questions asked.
                    </p>
                </div>

                {/* Trust Indicators */}
                <div className="mt-6 pt-6 border-t border-[#3A3A3A] flex items-center justify-center gap-6 text-xs text-[#666]">
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        <span>Secure Payment</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Cancel Anytime</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Instant Access</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
