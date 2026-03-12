'use client';

import Link from 'next/link';
import { ShieldCheck, Mail, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-white/5 py-12 relative overflow-hidden">
            {/* Ambient background glow */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[200px] bg-primary/5 blur-[80px] rounded-full pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    {/* Brand Section */}
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <ShieldCheck className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
                            <span className="font-black text-xl tracking-tight text-white uppercase italic">
                                LabelGuard<span className="text-primary not-italic tracking-normal lowercase ml-0.5 opacity-80">uk</span>
                            </span>
                        </Link>
                    </div>

                    {/* Links & Legal Section */}
                    <div className="flex flex-col items-center md:items-end gap-6">
                        <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
                            {[
                                { name: 'Features', href: '/#features' },
                                { name: 'Pricing', href: '/#pricing' },
                                { name: 'Documentation', href: '/docs' },
                                { name: 'Privacy Policy', href: '/privacy' },
                                { name: 'Terms', href: '/terms' },
                            ].map((link) => (
                                <Link 
                                    key={link.name} 
                                    href={link.href} 
                                    className="text-white/40 hover:text-white text-xs font-bold uppercase tracking-[0.15em] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                        <div className="flex items-center gap-6">
                            <p className="text-white/20 text-[10px] font-bold tracking-[0.2em] uppercase">
                                © {new Date().getFullYear()} LABELGUARDUK
                            </p>
                            <div className="w-px h-3 bg-white/10 hidden sm:block" />
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-white/40 text-[9px] font-bold uppercase tracking-widest leading-none">Status: OK</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
