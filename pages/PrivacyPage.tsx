import React from 'react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const PrivacyPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#111] text-[#ECECEC]">
            <nav className="border-b border-[#333] bg-[#111] sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                    <Link to="/" className="text-xl font-bold text-white">LabelGuard UK</Link>
                    <Link to="/" className="text-sm text-[#888] hover:text-white">Back to Home</Link>
                </div>
            </nav>

            <main className="max-w-3xl mx-auto px-6 py-12">
                <h1 className="text-4xl font-bold mb-8 text-white">Privacy Policy</h1>
                <p className="text-[#888] mb-8">Last updated: November 30, 2025</p>

                <div className="space-y-8 text-[#CCC]">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                        <p>LabelGuard UK ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Data We Collect</h2>
                        <p>We collect minimal data to provide our service:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2 text-[#888]">
                            <li><strong>Usage Data:</strong> IP address, browser type, and operating system.</li>
                            <li><strong>Local Storage:</strong> Your labels and preferences are stored locally on your device. We do not sync this data to our servers.</li>
                            <li><strong>Payment Data:</strong> If you upgrade to Pro, payment is processed securely by Stripe. We do not store your credit card details.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. How We Use Your Data</h2>
                        <p>We use your data to:</p>
                        <ul className="list-disc pl-6 mt-2 space-y-2 text-[#888]">
                            <li>Provide and maintain our service.</li>
                            <li>Process your subscription payments via Stripe.</li>
                            <li>Monitor usage to prevent abuse and improve performance.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>
                        <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way. Payment transactions are encrypted via SSL technology.</p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                        <p>If you have any questions about this privacy policy, please contact us at support@labelguard.uk.</p>
                    </section>
                </div>
            </main>

            <Footer />
        </div>
    );
};
