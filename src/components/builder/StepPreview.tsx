'use client';

import { useLabelStore } from '@/lib/store/useLabelStore';
import { highlightAllergens } from '@/lib/utils/allergens';
import { motion } from 'framer-motion';
import { Download, Printer, Share2, Loader2 } from 'lucide-react';
import dynamicImport from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { LabelData } from '@/lib/store/useLabelStore';

// Dynamically import PDF components to avoid SSR issues
import LabelPDF from './LabelPDF';

const PDFDownloadLink = dynamicImport(
    () => import('@react-pdf/renderer').then((mod) => mod.PDFDownloadLink),
    { ssr: false }
);

export const StepPreview = () => {
    const { currentLabel, resetLabel } = useLabelStore();
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        // Simulate a small delay for premium feel
        setTimeout(() => {
            const savedData = localStorage.getItem('labelguard_labels');
            let labels = [];
            if (savedData) {
                try {
                    labels = JSON.parse(savedData);
                } catch (e) {
                    labels = [];
                }
            }

            const newLabel = {
                ...currentLabel,
                id: Math.random().toString(36).substr(2, 9),
                createdAt: new Date().toISOString(),
            };

            labels.unshift(newLabel);
            localStorage.setItem('labelguard_labels', JSON.stringify(labels));
            
            // Clear builder state after saving
            resetLabel();
            
            router.push('/dashboard');
        }, 1000);
    };

    const getTemplateStyles = () => {
        switch (currentLabel.template) {
            case 'modern': return 'font-sans';
            case 'bold': return 'font-bold uppercase';
            case 'elegant': return 'font-serif italic';
            case 'minimal': return 'tracking-tight';
            default: return 'font-mono';
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex flex-col items-center">
                {/* Real-time Label Render */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className={`
                w-full max-w-[400px] min-h-[250px] bg-white text-black p-8 shadow-2xl rounded-sm border-2 border-black
                flex flex-col relative overflow-hidden ${getTemplateStyles()}
            `}
                >
                    <div className="border-b-4 border-black pb-4 mb-4 text-center">
                        <h2 className="text-3xl font-black leading-none mb-1">
                            {currentLabel.productName || 'PRODUCT NAME'}
                        </h2>
                        <p className="text-xs font-bold tracking-widest opacity-60">
                            {currentLabel.brand || 'BRAND NAME'}
                        </p>
                    </div>

                    <div className="flex-grow space-y-4">
                        <div className="text-xs leading-relaxed">
                            <span className="font-black">INGREDIENTS:</span>{' '}
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: highlightAllergens(currentLabel.ingredients.join(', '), currentLabel.allergens)
                                }}
                            />
                        </div>

                        {currentLabel.allergens.length > 0 && (
                            <div className="bg-black/5 p-3 rounded text-[10px] font-black border border-black/10">
                                CONTAINS: {currentLabel.allergens.join(', ').toUpperCase()}
                            </div>
                        )}
                    </div>

                    <div className="mt-6 border-2 border-black">
                        <div className="grid grid-cols-2 divide-x-2 divide-black border-b-2 border-black">
                            <div className="p-2 text-center">
                                <p className="text-[9px] font-black uppercase opacity-60">Use By</p>
                                <p className="text-lg font-black">{currentLabel.useByDate || 'DD/MM'}</p>
                            </div>
                            <div className="p-2 text-center">
                                <p className="text-[9px] font-black uppercase opacity-60">Weight</p>
                                <p className="text-lg font-black">{currentLabel.weight || '0g'}</p>
                            </div>
                        </div>
                        <div className="bg-black text-white py-1.5 text-center text-[9px] font-black uppercase tracking-[0.2em]">
                            Keep Refrigerated Below 5°C
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-14">
                <div className="contents">
                    <PDFDownloadLink
                        document={<LabelPDF data={currentLabel} /> as any}
                        fileName={`${currentLabel.productName || 'label'}.pdf`}
                    >
                        {({ loading }: { loading: boolean }) => (
                            <button className="w-full h-full flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold text-sm disabled:opacity-50">
                                {loading ? (
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                ) : (
                                    <Download className="h-4 w-4" />
                                )}
                                Download PDF
                            </button>
                        )}
                    </PDFDownloadLink>
                </div>
                
                <button 
                    onClick={() => window.print()}
                    className="flex items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold text-sm"
                >
                    <Printer className="h-4 w-4" />
                    Print Label
                </button>

                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-black text-black shadow-xl shadow-primary/20 hover:bg-primary/90 hover:scale-105 transition-all uppercase tracking-widest disabled:opacity-50 disabled:pointer-events-none"
                >
                    {isSaving ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                        <Share2 className="h-4 w-4" />
                    )}
                    Finalize & Save
                </button>
            </div>
        </div>
    );
};
