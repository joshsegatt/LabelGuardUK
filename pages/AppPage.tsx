import React, { useState, useEffect, useCallback } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Barcode from 'react-barcode';
import { ProductDetailsCard } from '../components/ProductDetailsCard';
import { AllergensCard } from '../components/AllergensCard';
import { PreviewSaveCard } from '../components/PreviewSaveCard';
import { SavedLabelsCard } from '../components/SavedLabelsCard';
import { SubscriptionCard } from '../components/SubscriptionCard';
import { StripeBuyButton } from '../components/StripeBuyButton';
import { Footer } from '../components/Footer';
import { LabelData } from '../types';
import { LabelTemplate, getTemplateStyles } from '../components/TemplateSelector';
import { ALLERGENS_LIST } from '../constants';
import { canCreateLabel, incrementLabelUsage, getCurrentPlanLimits, PlanType, activateProPlan } from '../utils/license';
import { initializeExampleLabels } from '../utils/onboarding';
import { registerFreeUser, updateLastActive } from '../utils/userRegistration';

export const AppPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [productName, setProductName] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [useByDate, setUseByDate] = useState('');
    const [barcode, setBarcode] = useState('');
    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    const [savedLabels, setSavedLabels] = useState<LabelData[]>([]);
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<PlanType>('pro');
    const [template, setTemplate] = useState<LabelTemplate>('classic');

    useEffect(() => {
        // Initialize example labels for first-time visitors
        initializeExampleLabels();

        // Register user if not already registered
        registerFreeUser();

        // Update last active timestamp
        updateLastActive();

        // Check for successful payment redirect
        if (searchParams.get('success') === 'true') {
            activateProPlan();
            setShowSuccessModal(true);
            // Clean URL
            setSearchParams({});
        }

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
    }, [searchParams, setSearchParams]);

    const currentLabel: LabelData = {
        id: Date.now().toString(),
        productName,
        ingredients,
        allergens: selectedAllergens,
        useByDate,
        barcode,
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
        setBarcode(label.barcode || '');
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
                <div className="w-full px-4 md:px-10 py-3 md:py-4">
                    <div className="flex justify-between items-center">
                        <Link to="/" className="group">
                            <span className="text-lg md:text-xl font-bold text-[#ECECEC] tracking-tight hover:text-white transition-colors">
                                LabelGuard UK
                            </span>
                        </Link>
                        <div className="flex items-center gap-4 md:gap-6">
                            <Link to="/" className="hidden md:block text-[#A8A8A8] hover:text-white transition-colors font-medium text-sm">
                                Home
                            </Link>
                            <Link to="/pricing" className="hidden md:block text-[#A8A8A8] hover:text-white transition-colors font-medium text-sm">
                                Pricing
                            </Link>
                            {limits.hasWatermark && (
                                <Link
                                    to="/pricing"
                                    className="px-3 py-1.5 md:px-4 md:py-2 bg-[#CC785C] text-white font-bold text-xs md:text-sm rounded-lg
                                             hover:bg-[#B8694D] shadow-lg shadow-[#CC785C]/20 transition-all duration-200 whitespace-nowrap"
                                >
                                    Upgrade to Pro
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main App */}
            <div className="min-h-screen bg-[#1F1F1F] text-[#ECECEC] p-2 md:p-6 lg:p-12 print:p-0 relative">
                {/* Subtle Grid Background */}
                <div className="absolute inset-0 h-[600px] bg-[linear-gradient(rgba(236,236,236,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(236,236,236,0.03)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none"></div>
                <div className="absolute inset-0 h-[600px] bg-gradient-to-b from-transparent to-[#1F1F1F] pointer-events-none"></div>

                <div className="w-full px-2 md:px-6 lg:px-8 relative z-10">
                    <main className="mt-4 md:mt-6 print:mt-0">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 print:block">

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
                                    barcode={barcode}
                                    setBarcode={setBarcode}
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

            {/* Stripe Payment Modal */}
            {showPaymentModal && (
                <StripeBuyButton
                    onClose={() => setShowPaymentModal(false)}
                />
            )}

            {/* Success Modal */}
            {showSuccessModal && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="bg-[#2A2A2A] rounded-2xl max-w-md w-full p-8 relative border border-emerald-500/30 shadow-2xl text-center">
                        <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-4">Welcome to Pro! 🎉</h2>
                        <p className="text-[#A8A8A8] mb-8">
                            Your account has been successfully upgraded. You now have unlimited access to all premium features.
                        </p>
                        <button
                            onClick={() => {
                                setShowSuccessModal(false);
                                window.location.reload(); // Reload to refresh limits
                            }}
                            className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-colors"
                        >
                            Start Creating Labels
                        </button>
                    </div>
                </div>
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

                            {/* Content */}
                            <div className="h-full flex flex-col" style={{
                                fontFamily: styles.fontFamily,
                                backgroundColor: styles.backgroundColor,
                                color: styles.textColor
                            }}>
                                <div className="text-center border-b-2 border-black pb-1 mb-1">
                                    <h2 className="text-lg font-bold uppercase leading-tight">{label.productName || 'PRODUCT NAME'}</h2>
                                </div>

                                <div className="flex-grow text-[10px] leading-tight overflow-hidden">
                                    <p className="font-bold mb-0.5">INGREDIENTS:</p>
                                    <p className="text-justify">{label.ingredients || 'Ingredients list...'}</p>
                                </div>

                                <div className="mt-1 pt-1 border-t border-black">
                                    {label.allergens && label.allergens.length > 0 && (
                                        <div className="mb-1">
                                            <p className="font-bold text-[10px] uppercase">
                                                ALLERGENS: <span className="font-bold">{label.allergens.join(', ')}</span>
                                            </p>
                                        </div>
                                    )}

                                    <div className="flex justify-between items-end gap-2">
                                        <div className="text-sm font-bold whitespace-nowrap">
                                            USE BY: {label.useByDate || 'DD/MM/YYYY'}
                                        </div>
                                        {label.barcode && (
                                            <div className="overflow-hidden flex-shrink-0 opacity-90 mix-blend-multiply">
                                                <Barcode
                                                    value={label.barcode}
                                                    width={1}
                                                    height={22}
                                                    fontSize={8}
                                                    margin={0}
                                                    displayValue={false}
                                                    background="transparent"
                                                />
                                            </div>
                                        )}
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
