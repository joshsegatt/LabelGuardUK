'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { StepProductInfo } from '@/components/builder/StepProductInfo';
import { StepIngredients } from '@/components/builder/StepIngredients';
import { StepAllergens } from '@/components/builder/StepAllergens';
import { StepTemplate } from '@/components/builder/StepTemplate';
import { StepPreview } from '@/components/builder/StepPreview';
import { ChevronLeft, ChevronRight, Save } from 'lucide-react';

const steps = [
    { id: 1, name: 'Product Info' },
    { id: 2, name: 'Ingredients' },
    { id: 3, name: 'Allergens' },
    { id: 4, name: 'Template' },
    { id: 5, name: 'Preview' },
];

export default function BuilderPage() {
    const [currentStep, setCurrentStep] = useState(1);

    const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, steps.length));
    const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

    return (
        <div className="min-h-screen bg-background p-6 md:p-12 lg:p-24">
            <div className="max-w-4xl mx-auto">
                <header className="mb-12">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                        Create New Label
                    </h1>
                    <p className="mt-2 text-muted-foreground">
                        Follow the steps below to generate a compliant food label.
                    </p>
                </header>

                {/* Progress Bar */}
                <div className="relative mb-12">
                    <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/5 -translate-y-1/2" />
                    <div
                        className="absolute top-1/2 left-0 h-0.5 bg-primary transition-all duration-500 -translate-y-1/2"
                        style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                    />
                    <div className="relative flex justify-between">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`
                            w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                            ${currentStep >= step.id ? 'bg-primary text-black scale-110 shadow-lg shadow-primary/20' : 'bg-white/5 text-white/40'}
                        `}
                            >
                                {step.id}
                                <span className="absolute -bottom-8 text-[10px] whitespace-nowrap hidden md:block uppercase tracking-wider font-bold">
                                    {step.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass rounded-2xl p-8 min-h-[400px] flex flex-col">
                    <div className="flex-grow">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentStep}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.2 }}
                            >
                                {currentStep === 1 && <StepProductInfo />}
                                {currentStep === 2 && <StepIngredients />}
                                {currentStep === 3 && <StepAllergens />}
                                {currentStep === 4 && <StepTemplate />}
                                {currentStep === 5 && <StepPreview />}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    <div className="mt-12 flex items-center justify-between">
                        <button
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/80 disabled:opacity-30 disabled:pointer-events-none transition-all"
                        >
                            <ChevronLeft className="h-4 w-4" />
                            Back
                        </button>

                        <div className="flex gap-4">
                            <button className="flex items-center gap-2 px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-foreground transition-all">
                                <Save className="h-4 w-4" />
                                Save Draft
                            </button>
                            <button
                                onClick={nextStep}
                                className="flex items-center gap-2 px-8 py-2 rounded-lg bg-primary text-black font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                            >
                                {currentStep === steps.length ? 'Finalize' : 'Next Step'}
                                <ChevronRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
