import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { ProductDetailsCard } from '../components/ProductDetailsCard';
import { AllergensCard } from '../components/AllergensCard';
import { PreviewSaveCard } from '../components/PreviewSaveCard';
import { SavedLabelsCard } from '../components/SavedLabelsCard';
import { SubscriptionCard } from '../components/SubscriptionCard';
import { PaymentModal } from '../components/PaymentModal';
import { Footer } from '../components/Footer';
import { LabelData } from '../types';
import { LabelTemplate, getTemplateStyles } from '../components/TemplateSelector';
import { ALLERGENS_LIST } from '../constants';
import { canCreateLabel, incrementLabelUsage, getCurrentPlanLimits, PlanType } from '../utils/license';
import { initializeExampleLabels } from '../utils/onboarding';
import { registerFreeUser, updateLastActive } from '../utils/userRegistration';

export const AppPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [productName, setProductName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [useByDate, setUseByDate] = useState('');
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    const [savedLabels, setSavedLabels] = useState<LabelData[]>([]);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<PlanType>('pro');
    const [template, setTemplate] = useState<LabelTemplate>('classic');

    useEffect(() => {
        // Initialize example labels for first-time visitors
        initializeExampleLabels();

        // Register user if not already registered
        registerFreeUser();

        // Update last active timestamp
        updateLastActive();


        const stored = localStorage.getItem('labelguard_labels');
        if (stored) {
            try {
                setSavedLabels(JSON.parse(stored));
            } catch (e) {
                console.error('Failed to parse saved labels', e);
            }
        }

        // Check for upgrade parameter
        const upgrade = searchParams.get('upgrade');
        if (upgrade === 'pro') {
            setSelectedPlan(upgrade);
            setShowPaymentModal(true);
            // Remove parameter from URL
            searchParams.delete('upgrade');
            setSearchParams(searchParams);
        }
    }, []);

    const currentLabel: LabelData = {
        id: Date.now().toString(),
        productName,
        ingredients,
        allergens: selectedAllergens,
        useByDate,
        template,
        createdAt: new Date().toISOString(),
    };

    const toggleAllergen = useCallback((allergen: string) => {
        setSelectedAllergens(prev =>
            prev.includes(allergen)
                ? prev.filter(a => a !== allergen)
                : [...prev, allergen]
        );
    }, []);

    const handleSaveLabel = useCallback(() => {
        if (!productName.trim()) {
            alert('Please enter a product name');
            return;
        }

        // Check if user can create more labels
        if (!canCreateLabel()) {
            alert('⚠️ Label limit reached!\n\nYou\'ve used all your labels for this month.\n\nUpgrade to Pro for unlimited labels!');
            return;
        }

        const newLabel: LabelData = {
            ...currentLabel,
            id: Date.now().toString(),
        };

        const updated = [...savedLabels, newLabel];
        setSavedLabels(updated);
        localStorage.setItem('labelguard_labels', JSON.stringify(updated));

        // Increment usage counter
        incrementLabelUsage();

        alert('✅ Label saved successfully!');
    }, [productName, currentLabel, savedLabels]);

    const handleLoadLabel = useCallback((label: LabelData) => {
        setProductName(label.productName);
        setIngredients(label.ingredients);
        setSelectedAllergens(label.allergens);
        setUseByDate(label.useByDate);
        if (label.template) setTemplate(label.template as LabelTemplate);
    }, []);

    const handleDeleteLabel = useCallback((id: string) => {
        const updated = savedLabels.filter(l => l.id !== id);
        setSavedLabels(updated);
        localStorage.setItem('labelguard_labels', JSON.stringify(updated));
    }, [savedLabels]);

    const handlePrintRequest = useCallback(() => {
        // Check limits before printing
        if (!canCreateLabel()) {
            alert('⚠️ Monthly Limit Reached (5/5)\n\nYou have used all your free labels for this month.\n\nUpgrade to Pro for UNLIMITED printing!');
            return;
        }

        // Increment usage for Free plan users when they print
        incrementLabelUsage();

        window.print();
    }, []);

    const limits = getCurrentPlanLimits();

    return (
        <>
            {/* Navigation - Only visible on screen, not print */}
            <nav className="print:hidden border-b border-[#3A3A3A] bg-[#1F1F1F] sticky top-0 z-50 shadow-xl shadow-black/20">
                <div className="w-full px-6 md:px-10 py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="group">
                            <span className="text-xl font-bold text-[#ECECEC] tracking-tight hover:text-white transition-colors">
                                LabelGuard UK
                            </span>
                        </Link>
                        <div className="flex items-center gap-6">
                            <Link to="/" className="text-[#A8A8A8] hover:text-white transition-colors font-medium text-sm">
                                Home
                            </Link>
                            <Link to="/pricing" className="text-[#A8A8A8] hover:text-white transition-colors font-medium text-sm">
                                Pricing
                            </Link>
                            {limits.hasWatermark && (
                                <Link
                                    to="/pricing"
                                    className="px-4 py-2 bg-[#CC785C] text-white font-bold text-sm rounded-lg
                                             hover:bg-[#B8694D] shadow-lg shadow-[#CC785C]/20 transition-all duration-200"
                                >
                                    Upgrade to Pro
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main App */}
            <div className="min-h-screen bg-[#1F1F1F] text-[#ECECEC] p-4 sm:p-6 lg:p-12 print:p-0 relative">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 h-[600px] bg-[linear-gradient(rgba(236,236,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,236,236,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>
                <div className="absolute inset-0 h-[600px] bg-gradient-to-b from-transparent to-[#1F1F1F] pointer-events-none"></div>

                <div className="w-full px-6 lg:px-8 relative z-10">
                    <main className="mt-6 print:mt-0">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 print:block">

                            {/* Left Column - Meta & History (3 cols) */}
                            <div className="lg:col-span-3 flex flex-col gap-6 print:hidden">
                                <SubscriptionCard />
                                <div className="flex-grow">
                                    <SavedLabelsCard
                                        savedLabels={savedLabels}
                                        onLoad={handleLoadLabel}
                                        onDelete={handleDeleteLabel}
                                    />
                                </div>
                            </div>

                            {/* Center Column - Inputs (5 cols) */}
                            <div className="lg:col-span-5 flex flex-col gap-6 print:hidden">
                                <ProductDetailsCard
                                    productName={productName}
                                    setProductName={setProductName}
                                    ingredients={ingredients}
                                    setIngredients={setIngredients}
                                    useByDate={useByDate}
                                    setUseByDate={setUseByDate}
                                    showBarcode={limits.hasBarcodeGenerator}
                                />
                                <div className="flex-grow">
                                    <AllergensCard
                                        allAllergens={ALLERGENS_LIST}
                                        selectedAllergens={selectedAllergens}
                                        toggleAllergen={toggleAllergen}
                                    />
                                </div>
                            </div>

                            {/* Right Column - Preview (4 cols) */}
                            <div className="lg:col-span-4 print:hidden">
                                <PreviewSaveCard
                                    labelData={currentLabel}
                                    onTemplateChange={setTemplate}
                                    onSave={handleSaveLabel}
                                    onPrint={handlePrintRequest}
                                />
                            </div>
                        </div>
                    </main>
                    <div className="print:hidden">
                        <Footer />
                    </div>
                </div>
            </div>

            {/* Payment Modal */}
            {showPaymentModal && (
                <PaymentModal
                    selectedPlan={selectedPlan}
                    onClose={() => setShowPaymentModal(false)}
                    onSuccess={() => {
                        setShowPaymentModal(false);
                        window.location.reload();
                    }}
                />
            )}

            {/* Print Area (Hidden on Screen, Visible on Print) */}
            <div id="print-area" className="hidden print:grid print:grid-cols-2 print:gap-4 print:p-4 print:w-[210mm] print:h-[297mm] print:bg-white print:fixed print:top-0 print:left-0 print:z-[9999]">
                {Array(10).fill(currentLabel).map((label, index) => {
                    const styles = getTemplateStyles(label.template || 'classic');
                    return (
                        <div key={index} className={`relative border border-dashed border-gray-300 p-2 flex flex-col h-[55mm] overflow-hidden break-inside-avoid`}>
                            {/* Cutting Guides */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-black"></div>
                            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-black"></div>
                            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-black"></div>
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-black"></div>

                            <div className={`h-full flex flex-col p-2 ${styles.containerClass} !shadow-none !transform-none`}>
                                <div className="text-center border-b border-current pb-1 mb-1">
                                    <h3 className={`text-base leading-none ${styles.titleClass}`}>
                                        {label.productName || 'PRODUCT NAME'}
                                    </h3>
                                </div>

                                <div className="flex-grow mb-1 overflow-hidden">
                                    <div className={`text-[9px] leading-tight mb-1 ${styles.ingredientsClass}`}>
                                        <span className="font-bold">INGREDIENTS:</span>{' '}
                                        {label.ingredients}
                                    </div>

                                    {label.allergens && label.allergens.length > 0 && (
                                        <div className={`text-[8px] font-bold mt-1 ${styles.allergensClass}`}>
                                            CONTAINS: {label.allergens.join(', ')}
                                        </div>
                                    )}
                                </div>

                                <div className={`mt-auto border border-current flex text-[9px] ${styles.dateClass}`}>
                                    <div className="flex-1 p-0.5 border-r border-current text-center">
                                        <span className="block font-bold uppercase text-[7px]">Use By</span>
                                        <span className="font-mono font-bold">{label.useByDate}</span>
                                    </div>
                                    <div className="flex-1 p-0.5 border-r border-current text-center">
                                        <span className="block font-bold uppercase text-[7px]">Price</span>
                                        <span className="font-mono font-bold">£0.00</span>
                                    </div>
                                    <div className="flex-[1.5] p-0.5 flex items-center justify-center bg-current text-white text-center">
                                        {/* Using mix-blend-difference to ensure text is visible on black bar, or rely on template styles */}
                                        <span className="font-bold uppercase text-[7px]">Keep Refrigerated</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};
