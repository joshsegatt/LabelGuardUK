'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ShieldCheck, ArrowRight, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Features', href: '/#features' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'Documentation', href: '/docs' },
    ];

    const isActive = (path: string) => pathname === path;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                    ? 'py-4 bg-black/60 backdrop-blur-xl border-b border-white/5 shadow-2xl shadow-black/40'
                    : 'py-6 bg-transparent'
                }`}
        >
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-3 group">
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                            <ShieldCheck className="h-7 w-7 text-primary relative z-10 group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <span className="font-black text-xl tracking-tight text-white uppercase italic">
                            LabelGuard<span className="text-primary not-italic tracking-normal lowercase ml-0.5 opacity-80">uk</span>
                        </span>
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="hidden lg:flex lg:gap-x-1 font-medium">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${isActive(link.href)
                                    ? 'text-white bg-white/5'
                                    : 'text-white/70 hover:text-white hover:bg-white/5'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex flex-1 justify-end items-center gap-4">
                    <Link
                        href="/login"
                        className="text-sm font-bold text-white/50 hover:text-white transition-colors hidden sm:block px-4 py-2"
                    >
                        Login
                    </Link>
                    <Link
                        href="/dashboard"
                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-2.5 text-sm font-black text-black transition-all hover:bg-gray-100"
                    >
                        <span className="relative z-10 uppercase tracking-wider">Get Started</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-white p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/5 p-6 shadow-2xl"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="text-lg font-bold text-white/70 hover:text-primary transition-colors py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-white/5 my-2" />
                            <Link
                                href="/login"
                                className="text-lg font-bold text-white/70 py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                Login
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
