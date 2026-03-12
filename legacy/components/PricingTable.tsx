import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { registerFreeUser } from '../utils/userRegistration';

const plans = [
    {
        name: "Free",
        price: "£0",
        description: "Try it out",
        features: ["5 labels/month", "All allergens", "Basic templates", "Local storage"],
        cta: "Start Free",
        link: "/app",
        isFree: true
    },
    {
        name: "Pro",
        price: "£14.99",
        description: "For small businesses",
        features: [
            "Unlimited labels",
            "No watermarks",
            "PDF export",
            "Barcode generator",
            "Premium templates",
            "Priority support"
        ],
        cta: "Get Started",
        link: "/app?upgrade=pro",
        popular: true
    }
];

export const PricingTable: React.FC = () => {
    const navigate = useNavigate();

    const handleFreePlanClick = async (e: React.MouseEvent) => {
        e.preventDefault();

        // Register user with IP tracking
        await registerFreeUser();

        // Redirect to app
        navigate('/app');
    };

    return (
        <section className="py-32 bg-transparent relative z-10">
            <div className="max-w-[1400px] mx-auto px-12 lg:px-20">
                {/* Header */}
                <div className="mb-20">
                    <h2 className="text-5xl font-bold text-[#ECECEC] mb-4">
                        Simple Pricing
                    </h2>
                    <p className="text-xl text-[#A8A8A8]">
                        Start free, upgrade when you need more
                    </p>
                </div>

                {/* Pricing Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative p-8 rounded-2xl border transition-all duration-200 ${plan.popular
                                    ? 'border-[#CC785C] bg-[#2A2A2A] shadow-lg shadow-[#CC785C]/10'
                                    : 'border-[#3A3A3A] bg-[#2A2A2A] hover:border-[#4A4A4A]'
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-3 left-8">
                                    <span className="px-3 py-1 bg-[#CC785C] text-white text-xs font-semibold rounded-full">
                                        Popular
                                    </span>
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className="text-lg font-semibold text-[#ECECEC] mb-2">{plan.name}</h3>
                                <p className="text-sm text-[#A8A8A8] mb-4">{plan.description}</p>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-5xl font-bold text-[#ECECEC]">{plan.price}</span>
                                    {plan.price !== "£0" && <span className="text-[#A8A8A8]">/mo</span>}
                                </div>
                            </div>

                            {plan.isFree ? (
                                <button
                                    onClick={handleFreePlanClick}
                                    className="block w-full py-3 px-6 rounded-lg font-semibold text-center mb-8 transition-all bg-[#3A3A3A] text-[#ECECEC] hover:bg-[#4A4A4A]"
                                >
                                    {plan.cta}
                                </button>
                            ) : (
                                <Link
                                    to={plan.link}
                                    className={`block w-full py-3 px-6 rounded-lg font-semibold text-center mb-8 transition-all ${plan.popular
                                            ? 'bg-[#CC785C] text-white hover:bg-[#B8694D]'
                                            : 'bg-[#3A3A3A] text-[#ECECEC] hover:bg-[#4A4A4A]'
                                        }`}
                                >
                                    {plan.cta}
                                </Link>
                            )}

                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3 text-sm text-[#A8A8A8]">
                                        <svg className="w-4 h-4 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
