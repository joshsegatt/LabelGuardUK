'use client';

import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
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
                        Terms of <span className="text-white/30">Service</span>
                    </h1>
                    <p className="text-xl text-white/60 leading-relaxed font-medium max-w-2xl">
                        Guidelines for using the LabelGuardUK platform and our commitment to your business.
                    </p>
                </motion.div>

                <div className="space-y-12 prose prose-invert max-w-none">
                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Platform Usage
                        </h2>
                        <p className="text-white/50 leading-relaxed">
                            LabelGuardUK provides tools for generating food compliance labels. While we strive for 100% accuracy in our automation and Natasha&apos;s Law highlighting, final compliance verification remains the responsibility of the food business operator.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Subscriptions & Billing
                        </h2>
                        <p className="text-white/50 leading-relaxed">
                            Our Pro plans are billed monthly. You can cancel at any time through the dashboard. Free plans are limited to 5 labels per month for personal or small vendor testing.
                        </p>
                    </section>

                    <section className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-xl">
                        <div className="flex items-start gap-4">
                            <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-bold mb-2">Liability Notice</h3>
                                <p className="text-white/40 text-sm leading-relaxed">
                                    Labels generated must be reviewed by your quality control team. LabelGuardUK provides the infrastructure, but the user is responsible for ensuring the input data (ingredients, allergens) is correct and up-to-date with current regulations.
                                </p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold flex items-center gap-3 mb-6">
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            Intellectual Property
                        </h2>
                        <p className="text-white/50 leading-relaxed">
                            You retain all rights to your product information and generated labels. The LabelGuardUK generator engine, templates, and trademarks are our exclusive property.
                        </p>
                    </section>

                    <footer className="pt-12 border-t border-white/5">
                        <p className="text-white/30 text-sm">
                            Last updated: March 12, 2026. By using our service, you agree to these terms.
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}
