import React, { useState } from 'react';
import { PlanType, PLAN_PRICES, createLicense, saveLicense } from '../utils/license';

interface PaymentModalProps {
    selectedPlan?: PlanType;
    onClose: () => void;
    onSuccess: () => void;
}

const planDetails = {
    pro: {
        name: 'Pro',
        price: PLAN_PRICES.pro,
        features: [
            'Unlimited labels',
            'No watermarks',
            'PDF export',
            'Barcode generator',
            'Premium templates',
            'Priority support'
        ]
    }
};

export const PaymentModal: React.FC<PaymentModalProps> = ({ selectedPlan = 'pro', onClose, onSuccess }) => {
    const [email, setEmail] = useState('');
    const [isProcessing, setIsProcessing] = useState(false);
    const [error, setError] = useState('');

    const currentPlan = planDetails.pro;

    const handleCheckout = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        // Validation
        if (!email) {
            setError('Please enter your email address');
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }

        setIsProcessing(true);

        // TODO: Replace with actual Lemon Squeezy checkout URL
        // For now, simulate the process
        setTimeout(() => {
            try {
                // Generate and save license (temporary - will be handled by Lemon Squeezy webhook in production)
                const license = createLicense('pro', email);
                saveLicense(license);

                alert(`🎉 Upgrade Successful!\n\nYour Pro license has been activated!\n\nLicense Key: ${license.key}\n\nA confirmation email has been sent to ${email}`);

                setIsProcessing(false);
                onSuccess();
            } catch (err) {
                setError('Something went wrong. Please try again.');
                setIsProcessing(false);
            }
        }, 2000);

        // In production, you would redirect to Lemon Squeezy:
        // window.location.href = `https://your-store.lemonsqueezy.com/checkout/buy/YOUR_VARIANT_ID?checkout[email]=${email}`;
    };

    return (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-md z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div className="bg-[#18181B] border border-white/10 rounded-2xl max-w-lg w-full relative shadow-2xl" onClick={(e) => e.stopPropagation()}>
                {/* Top Accent */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#CC785C] via-[#CC785C]/50 to-transparent"></div>

                {/* Header */}
                <div className="sticky top-0 bg-[#18181B]/95 backdrop-blur border-b border-white/5 p-6 flex justify-between items-center z-10">
                    <div>
                        <h2 className="text-2xl font-light text-white tracking-tight">Upgrade to <span className="font-bold text-[#CC785C]">Pro</span></h2>
                        <p className="text-[#888] text-sm mt-1 font-light">Unlock unlimited labels and premium features</p>
                    </div>
                    <button onClick={onClose} className="text-[#666] hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="p-8">
                    {/* Pricing Display */}
                    <div className="mb-8 text-center">
                        <div className="inline-flex items-baseline gap-2 mb-2">
                            <span className="text-5xl font-light text-white">£{currentPlan.price}</span>
                            <span className="text-[#888] text-lg">/month</span>
                        </div>
                        <p className="text-sm text-[#666]">Cancel anytime • 14-day money-back guarantee</p>
                    </div>

                    {/* Features */}
                    <div className="mb-8 p-5 bg-black/20 rounded-xl border border-white/5">
                        <h3 className="text-xs font-bold text-[#666] mb-4 uppercase tracking-widest">What's included</h3>
                        <ul className="grid grid-cols-2 gap-3">
                            {currentPlan.features.map((feature, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-[#CCC]">
                                    <svg className="w-4 h-4 text-[#CC785C] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Checkout Form */}
                    <form onSubmit={handleCheckout} className="space-y-5">
                        {/* Email */}
                        <div className="group/input">
                            <label className="block text-xs font-bold text-[#666] mb-1.5 uppercase tracking-widest group-focus-within/input:text-[#CC785C] transition-colors">
                                Email Address
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-[#444]
                                         focus:outline-none focus:border-[#CC785C] focus:bg-white/10 transition-all font-light"
                                required
                            />
                            <p className="text-xs text-[#666] mt-1.5">You'll receive your license key and receipt here</p>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm flex items-center gap-2">
                                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="w-full py-4 bg-[#CC785C] hover:bg-[#B8694D] text-white font-bold rounded-xl
                                     shadow-lg shadow-[#CC785C]/20 hover:shadow-[#CC785C]/30
                                     transform hover:-translate-y-0.5 transition-all duration-300
                                     disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none
                                     flex items-center justify-center gap-2 text-sm uppercase tracking-wider"
                        >
                            {isProcessing ? (
                                <>
                                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Processing...
                                </>
                            ) : (
                                <>
                                    Continue to Checkout
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </>
                            )}
                        </button>

                        {/* Security Note */}
                        <p className="text-[10px] text-[#666] text-center flex items-center justify-center gap-1">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                            Secure payment powered by Lemon Squeezy
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
