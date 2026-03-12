
import React from 'react';

export const Header: React.FC = () => (
    <header className="text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-slate-100 to-slate-400 tracking-tight">
            LabelGuard <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-indigo-500">UK</span>
        </h1>
        <p className="mt-3 text-slate-400 tracking-[0.15em] text-xs sm:text-sm uppercase font-medium">
            Premium Food Labelling for Natasha's Law
        </p>
    </header>
);
