'use client';

import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white py-24 px-6 md:px-12">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <Link href="/" className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-opacity mb-8 text-sm font-bold uppercase tracking-widest">
                        ← Back to Home
                    </Link>
                    <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-8">
                        Privacy <span className="text-white/30">Policy</span>
                    </h1>
                    <p className="text-xl text-white/60 leading-relaxed font-medium max-w-2xl">
                        Here&apos;s how we handle your information at LabelGuardUK.
                    </p>
                </motion.div>

                <div className="space-y-12 prose prose-invert max-w-none">
                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Data Collection
                        </h2>
                        <p className="text-white/50 leading-relaxed">
                            We will not be liable for any loss or damage of any nature. We do not guarantee that the generated labels will meet your local authority&apos;s requirements.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Security Protocol
                        </h2>
                        <p className="text-white/50 leading-relaxed">
                            All label data is encrypted at rest and in transit. We use industry-standard security measures to ensure your product formulations and business data remain private. We never share your information with third parties without your explicit consent.
                        </p>
                    </section>

                    <section className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                        <div className="flex items-start gap-4">
                            <ShieldAlert className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold mb-2">GDPR Compliance</h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    LabelGuardUK is fully compliant with UK and EU data protection regulations. You have the right to access, export, or delete your data at any time through your dashboard settings.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Cookies & Analytics
                        </h2>
                        <p className="text-white/50 leading-relaxed">
                            We use essential cookies for authentication and session management. Minimal analytics help us understand how to optimize the label builder for speed and accuracy.
                        </p>
                    </section>

                    <footer className="pt-12 border-t border-white/5">
                        <p className="text-white/30 text-sm">
                            Last updated: March 12, 2026. For privacy inquiries, please reach out via our support channel.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
