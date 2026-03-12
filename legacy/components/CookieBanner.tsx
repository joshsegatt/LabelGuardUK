import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('labelguard_cookie_consent');
        if (!consent) {
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('labelguard_cookie_consent', 'true');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-[#1F1F1F] border-t border-[#333] p-4 z-[9999] shadow-2xl">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-sm text-[#CCC]">
                    We use local storage to save your labels and preferences. By using our site, you agree to our{' '}
                    <Link to="/privacy" className="text-[#CC785C] hover:underline">Privacy Policy</Link> and{' '}
                    <Link to="/terms" className="text-[#CC785C] hover:underline">Terms of Service</Link>.
                </div>
                <button
                    onClick={handleAccept}
                    className="px-6 py-2 bg-[#CC785C] text-white font-bold text-sm rounded-lg hover:bg-[#B8694D] transition-colors whitespace-nowrap"
                >
                    Accept & Close
                </button>
            </div>
        </div>
    );
};
