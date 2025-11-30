import React, { useState } from 'react';
import { XIcon } from './icons/XIcon';
import { KeyIcon } from './icons/KeyIcon';
import { SparklesIcon } from './icons/SparklesIcon';

interface LicenseGateModalProps {
    onClose: () => void;
    onValidate: (key: string) => boolean;
}

export const LicenseGateModal: React.FC<LicenseGateModalProps> = ({ onClose, onValidate }) => {
    const [licenseKey, setLicenseKey] = useState('');
    const [error, setError] = useState('');

    const handleValidate = () => {
        const isValid = onValidate(licenseKey);
        if (!isValid) {
            setError('Invalid license key. Please check and try again.');
        } else {
            setError('');
        }
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setError('');
        setLicenseKey(e.target.value);
    }

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-[fade-in_0.3s_ease-out]"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                className="relative w-full max-w-lg bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-700 rounded-2xl p-8 shadow-2xl shadow-black/50 ring-1 ring-inset ring-white/10 animate-[scale-up_0.4s_ease-out_forwards] transform-gpu origin-bottom"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-500 rounded-full hover:bg-slate-800 hover:text-slate-100 transition-colors duration-200"
                    aria-label="Close dialog"
                >
                    <XIcon className="w-6 h-6" />
                </button>

                <div className="text-center">
                    <div className="mx-auto w-16 h-16 mb-4 flex items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30">
                        <KeyIcon className="w-8 h-8 text-blue-300" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-100 tracking-tight">Premium Feature Locked</h2>
                    <p className="text-slate-400 mt-2">
                        Printing is a premium feature. Please enter your license key to unlock printing without watermarks.
                    </p>
                </div>

                <div className="mt-8 space-y-4">
                    <div>
                        <input
                            type="text"
                            placeholder="Enter your license key..."
                            value={licenseKey}
                            onChange={handleInputChange}
                            className={`
                                w-full bg-[rgba(15,23,42,0.75)] text-slate-100 placeholder-slate-500
                                text-center px-5 py-4 rounded-xl
                                border border-[rgba(148,163,184,0.2)]
                                transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                                focus:outline-none focus:ring-[3px] focus:ring-blue-500/40 focus:border-blue-500
                                ${error ? 'border-red-500/50 focus:ring-red-500/40' : ''}
                            `}
                        />
                        {error && <p className="text-red-400 text-sm mt-2 text-center">{error}</p>}
                    </div>
                    <button
                        onClick={handleValidate}
                        className="group relative w-full flex justify-center items-center gap-3 text-base font-bold tracking-[0.08em] uppercase px-6 py-4 rounded-xl text-white
                                   bg-gradient-to-r from-blue-500 to-indigo-600
                                   shadow-lg shadow-blue-500/30
                                   transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
                                   hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40
                                   active:scale-[0.98] active:brightness-90"
                    >
                        Validate & Print
                    </button>
                </div>
                
                <div className="mt-6 text-center">
                    <a href="#" className="group inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors duration-200">
                         <SparklesIcon className="w-5 h-5 text-indigo-400 group-hover:scale-110 transition-transform"/>
                         Don't have a key? <span className="font-semibold text-indigo-400 group-hover:underline">Buy Now</span>
                    </a>
                </div>
            </div>
        </div>
    );
};
