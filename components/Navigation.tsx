import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const isActive = (path: string) => location.pathname === path;

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'bg-[#1F1F1F] py-4 shadow-xl shadow-black/20'
            : 'bg-transparent py-6'
            }`}>
            {/* Full width container with minimal padding for "full left" look */}
            <div className="w-full px-6 md:px-10">
                <div className="flex items-center justify-between">
                    {/* Logo - Text Only */}
                    <Link to="/" className="group">
                        <span className="text-xl font-bold text-[#ECECEC] tracking-tight group-hover:text-white transition-colors">
                            LabelGuard UK
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <Link
                            to="/"
                            className={`text-sm font-medium transition-colors ${isActive('/')
                                ? 'text-white'
                                : 'text-[#A8A8A8] hover:text-white'
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/pricing"
                            className={`text-sm font-medium transition-colors ${isActive('/pricing')
                                ? 'text-white'
                                : 'text-[#A8A8A8] hover:text-white'
                                }`}
                        >
                            Pricing
                        </Link>
                        <Link
                            to="/app"
                            className="px-5 py-2 bg-[#CC785C] text-white text-sm font-semibold rounded-lg
                                     hover:bg-[#B8694D] transition-all duration-200 shadow-lg shadow-[#CC785C]/20
                                     transform hover:-translate-y-0.5"
                        >
                            Get Started
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="md:hidden text-[#ECECEC]">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};
