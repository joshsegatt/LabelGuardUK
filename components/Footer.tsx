import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const openModal = (modalName: string) => setActiveModal(modalName);
    const closeModal = () => setActiveModal(null);

    return (
        <footer className="bg-[#1F1F1F] border-t border-[#3A3A3A] py-8">
            <div className="w-full px-6 md:px-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    {/* Left: Brand & Copyright */}
                    <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
                        <span className="text-lg font-bold text-[#ECECEC] tracking-tight">
                            LabelGuard UK
                        </span>
                        <span className="text-[#A8A8A8] text-sm">
                            © {new Date().getFullYear()} All rights reserved.
                        </span>
                    </div>

                    {/* Right: Links */}
                    <div className="flex items-center gap-6 text-sm font-medium">
                        <button onClick={() => openModal('privacy')} className="text-[#A8A8A8] hover:text-[#ECECEC] transition-colors">
                            Privacy
                        </button>
                        <button onClick={() => openModal('terms')} className="text-[#A8A8A8] hover:text-[#ECECEC] transition-colors">
                            Terms
                        </button>
                        <a href="mailto:support@labelguard.uk" className="text-[#A8A8A8] hover:text-[#ECECEC] transition-colors">
                            Support
                        </a>

                        {/* Social Icons */}
                        <div className="flex items-center gap-4 pl-6 border-l border-[#3A3A3A] ml-2">
                            <a href="#" className="text-[#A8A8A8] hover:text-[#CC785C] transition-colors">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modals - Mantidos para funcionalidade */}
            {activeModal && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                    <div className="bg-[#2A2A2A] border border-[#3A3A3A] rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
                        <div className="p-6 border-b border-[#3A3A3A] flex justify-between items-center sticky top-0 bg-[#2A2A2A] z-10">
                            <h3 className="text-xl font-bold text-[#ECECEC] capitalize">
                                {activeModal.replace('-', ' ')}
                            </h3>
                            <button onClick={closeModal} className="text-[#A8A8A8] hover:text-[#ECECEC]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="p-8 text-[#A8A8A8] leading-relaxed space-y-4">
                            {activeModal === 'privacy' && (
                                <>
                                    <p>Your privacy is paramount. LabelGuard UK operates on a "local-first" principle.</p>
                                    <p>We do not store your label data on our servers. All your recipes, ingredients, and saved labels are stored locally on your device's browser storage.</p>
                                </>
                            )}
                            {activeModal === 'terms' && (
                                <>
                                    <p>By using LabelGuard UK, you agree to our terms of service.</p>
                                    <p>While we strive for 100% accuracy, the ultimate responsibility for allergen labelling lies with the food business operator. Always double-check your labels before printing.</p>
                                </>
                            )}
                        </div>
                        <div className="p-6 border-t border-[#3A3A3A] bg-[#2A2A2A] sticky bottom-0">
                            <button onClick={closeModal} className="w-full py-3 bg-[#3A3A3A] text-[#ECECEC] font-semibold rounded-lg hover:bg-[#4A4A4A] transition-colors">
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </footer>
    );
};
