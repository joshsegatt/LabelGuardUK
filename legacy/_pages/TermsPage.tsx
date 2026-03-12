import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const TermsPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#111] text-[#ECECEC]">
            <nav className="border-b border-[#333] bg-[#111] sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-white">LabelGuard UK</Link>
                    <Link to="/" className="text-sm text-[#888] hover:text-white">Back to Home</Link>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-8 text-white">Terms of Service</h1>
                <p className="text-[#888] mb-8">Last updated: November 30, 2025</p>

                <div className="space-y-8 text-[#CCC]">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
                        <p>By accessing or using LabelGuard UK, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Use License</h2>
                        <p>Permission is granted to temporarily download one copy of the materials (information or software) on LabelGuard UK's website for personal, non-commercial transitory viewing only.</p>
                        <p className="mt-2">This is the grant of a license, not a transfer of title, and under this license you may not:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2 text-[#888]">
                            <li>modify or copy the materials;</li>
                            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
                            <li>attempt to decompile or reverse engineer any software contained on LabelGuard UK's website;</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Subscriptions</h2>
                        <p>Some parts of the Service are billed on a subscription basis ("Subscription(s)"). You will be billed in advance on a recurring and periodic basis ("Billing Cycle"). Billing cycles are set on a monthly basis.</p>
                        <p className="mt-2">You may cancel your Subscription renewal either through your online account management page or by contacting LabelGuard UK customer support team.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Refunds</h2>
                        <p>Certain refund requests for Subscriptions may be considered by LabelGuard UK on a case-by-case basis and granted at the sole discretion of LabelGuard UK.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Disclaimer</h2>
                        <p>The materials on LabelGuard UK's website are provided on an 'as is' basis. LabelGuard UK makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Natasha's Law Compliance</h2>
                        <p>While LabelGuard UK is designed to help businesses comply with Natasha's Law (PPDS), the ultimate responsibility for accuracy and compliance rests with the business user. LabelGuard UK is a tool to assist in compliance, not a substitute for professional legal or food safety advice.</p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
