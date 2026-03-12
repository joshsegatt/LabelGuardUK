'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Tag, HelpCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function DashboardPage() {
    const [savedCount, setSavedCount] = useState(0);

    useEffect(() => {
        const stored = localStorage.getItem('labelguard_labels');
        if (stored) {
            try {
                const labels = JSON.parse(stored);
                setTimeout(() => setSavedCount(labels.length), 0);
            } catch (err) {
                console.error(err);
            }
        }
    }, []);

    return (
        <div className="min-h-screen bg-background p-6 md:p-12 lg:p-24 pt-32">
            <div className="max-w-5xl mx-auto">
                <header className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-white">
                            Dashboard
                        </h1>
                        <p className="mt-2 text-muted-foreground">
                           &quot;Natasha&apos;s Law is a game changer for our business. Finally, a tool that makes compliance simple and elegant.&quot;
                        </p>
                    </div>
                    <Link
                        href="/dashboard/labels/new"
                        className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-black shadow-lg shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all w-fit"
                    >
                        <Plus className="h-5 w-5" />
                        Create New Label
                    </Link>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="glass rounded-2xl p-6 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/5 rounded-lg text-primary">
                                <Tag className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg text-white">Saved Labels</h3>
                        </div>
                        <p className="text-3xl font-bold text-white mb-2">{savedCount}</p>
                        <h3 className="text-lg font-bold text-white mb-2">Natasha&apos;s Law Compliant</h3>
                        <p className="text-sm text-muted-foreground mb-6">Labels created and saved to your local storage.</p>
                        <Link href="/dashboard/labels" className="text-white text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            View all labels <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="glass rounded-2xl p-6 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-colors"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-white/5 rounded-lg text-emerald-400">
                                <HelpCircle className="h-6 w-6" />
                            </div>
                            <h3 className="font-semibold text-lg text-white">Active Plan</h3>
                        </div>
                        <div className="flex items-baseline gap-2 mb-2">
                            <p className="text-3xl font-bold text-white">Free</p>
                            <span className="text-xs font-semibold px-2 py-1 rounded bg-white/10 text-muted-foreground whitespace-nowrap">5/month</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">You&apos;re currently on the free tier.</p>
                        <Link href="/#pricing" className="text-emerald-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                            Upgrade to Pro <ArrowRight className="h-4 w-4" />
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass rounded-2xl p-6 relative overflow-hidden group border border-white/5 hover:border-white/10 transition-colors md:col-span-1"
                    >
                        <h3 className="font-semibold text-lg text-white mb-2">Need help?</h3>
                        <p className="text-sm text-muted-foreground mb-6">Check out our guide on Natasha&apos;s Law compliance.</p>
                        <div className="w-full h-32 bg-white/5 rounded-xl border border-dashed border-white/10 flex items-center justify-center text-muted-foreground text-sm">
                            Compliance Guide
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
