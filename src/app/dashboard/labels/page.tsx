'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, Plus, Download, Trash2, Calendar, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

import LabelPDF from '@/components/builder/LabelPDF';

const PDFDownloadLink = dynamic(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
    { ssr: false }
);

export default function LabelsListPage() {
    const [labels, setLabels] = useState<any[]>([]);

    useEffect(() => {
        const stored = localStorage.getItem('labelguard_labels');
        if (stored) {
            try {
                setLabels(JSON.parse(stored));
            } catch (e) {
                console.error("Failed to parse labels", e);
            }
        }
    }, []);

    const deleteLabel = (id: string) => {
        const updated = labels.filter(l => l.id !== id);
        setLabels(updated);
        localStorage.setItem('labelguard_labels', JSON.stringify(updated));
    };

    return (
        <div className="min-h-screen bg-[#050505] p-6 md:p-12 lg:p-24 pt-32">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12">
                    <Link href="/dashboard" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest">
                        <ArrowLeft className="w-4 h-4" /> Back to Dashboard
                    </Link>
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-2">
                                Your <span className="text-white/30">Labels</span>
                            </h1>
                            <p className="text-white/50 font-medium">
                                Manage and download your saved Natasha's Law compliant labels.
                            </p>
                        </div>
                        <Link
                            href="/dashboard/labels/new"
                            className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-black text-black shadow-xl shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all uppercase tracking-widest"
                        >
                            <Plus className="h-5 w-5" />
                            New Label
                        </Link>
                    </div>
                </header>

                {labels.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence mode="popLayout">
                            {labels.map((label, index) => (
                                <motion.div
                                    key={label.id}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="glass rounded-3xl p-6 border border-white/5 hover:border-white/10 transition-all flex flex-col group overflow-hidden"
                                >
                                    <div className="flex items-start justify-between mb-6">
                                        <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                                            <ShoppingBag className="h-6 w-6" />
                                        </div>
                                        <button 
                                            onClick={() => deleteLabel(label.id)}
                                            className="p-2 text-white/40 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-all"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </button>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{label.productName}</h3>
                                    <p className="text-white/40 text-sm mb-6">{label.brand}</p>

                                    <div className="space-y-3 mb-8 pt-4 border-t border-white/5">
                                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white/30">
                                            <Calendar className="w-3 h-3" />
                                            {new Date(label.createdAt).toLocaleDateString()}
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {label.allergens.slice(0, 2).map((a: string) => (
                                                <span key={a} className="px-2 py-0.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-[9px] font-black uppercase">
                                                    {a}
                                                </span>
                                            ))}
                                            {label.allergens.length > 2 && (
                                                <span className="text-[9px] text-white/20 font-bold self-center">+{label.allergens.length - 2} more</span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="mt-auto pt-4">
                                        <PDFDownloadLink
                                            document={<LabelPDF data={label} /> as any}
                                            fileName={`${label.productName}.pdf`}
                                            className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 text-white text-sm font-bold transition-all group-hover:bg-white group-hover:text-black"
                                        >
                                            <Download className="h-4 w-4" />
                                            Download PDF
                                        </PDFDownloadLink>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                ) : (
                    <div className="text-center py-32 glass rounded-[3rem] border border-white/5">
                        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/5 mb-8">
                            <ShoppingBag className="w-10 h-10 text-white/20" />
                        </div>
                        <h2 className="text-2xl font-black text-white mb-4 italic uppercase tracking-tighter">No labels found</h2>
                        <p className="text-white/40 max-w-sm mx-auto mb-10 font-medium">
                            You haven't generated any food labels yet. Start building your first compliant label in seconds.
                        </p>
                        <Link
                            href="/dashboard/labels/new"
                            className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-sm font-black text-black hover:scale-105 transition-all uppercase tracking-widest"
                        >
                            <Plus className="h-5 w-5" />
                            Create First Label
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
