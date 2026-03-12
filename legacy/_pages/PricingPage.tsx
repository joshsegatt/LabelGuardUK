import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { PricingTable } from '../components/PricingTable';
import { Footer } from '../components/Footer';

const faqs = [
    {
        question: "Do I need a credit card for the free plan?",
        answer: "No! The free plan is completely free with no credit card required. You can create up to 5 labels per month forever."
    },
    {
        question: "Can I cancel my subscription anytime?",
        answer: "Yes, you can cancel your subscription at any time. No questions asked, no cancellation fees."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit and debit cards through Lemon Squeezy, including Visa, Mastercard, and American Express."
    },
    {
        question: "Is there a discount for annual billing?",
        answer: "Yes! Pay annually and save 20%. Contact us for annual pricing details."
    },
    {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Absolutely! You can upgrade to Pro at any time. Downgrades take effect at the end of your billing cycle."
    },
    {
        question: "Do you offer refunds?",
        answer: "We offer a 14-day money-back guarantee. If you're not satisfied, contact us for a full refund."
    },
    {
        question: "What happens if I exceed my label limit?",
        answer: "On the free plan, you'll be prompted to upgrade to Pro for unlimited labels."
    },
    {
        question: "Is my data safe?",
        answer: "Yes! All data is stored locally on your device. We don't store your labels on our servers. We're GDPR compliant."
    }
];

export const PricingPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#1F1F1F] relative">
            {/* Subtle Grid Background - Matches Hero */}
            <div className="absolute inset-0 h-[800px] bg-[linear-gradient(rgba(236,236,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,236,236,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>
            <div className="absolute inset-0 h-[800px] bg-gradient-to-b from-transparent to-[#1F1F1F] pointer-events-none"></div>

            <Navigation />

            <div className="pt-16 relative z-10">
                <PricingTable />

                {/* FAQ Section */}
                <section id="faq" className="py-24 bg-[#2A2A2A]">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h3 className="text-3xl font-bold text-[#ECECEC] text-center mb-12">
                            Frequently Asked Questions
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {faqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-[#1F1F1F] border border-[#3A3A3A] rounded-xl p-8
                                             hover:border-[#CC785C] transition-all duration-200 group"
                                >
                                    <h4 className="text-lg font-bold text-[#ECECEC] mb-3 group-hover:text-[#CC785C] transition-colors">
                                        {faq.question}
                                    </h4>
                                    <p className="text-[#A8A8A8] leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20 bg-[#1F1F1F]">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h3 className="text-4xl font-bold text-[#ECECEC] mb-6">
                            Ready to Get Started?
                        </h3>
                        <p className="text-xl text-[#A8A8A8] mb-8">
                            Join hundreds of UK food businesses creating compliant labels in minutes.
                        </p>
                        <Link
                            to="/app"
                            className="inline-flex items-center gap-2 px-8 py-4 bg-[#CC785C] text-white font-bold text-lg rounded-xl
                                     hover:bg-[#B8694D] transform hover:-translate-y-0.5 transition-all duration-200
                                     shadow-lg shadow-[#CC785C]/20"
                        >
                            <span>Start Creating Free</span>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};
