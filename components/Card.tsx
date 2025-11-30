
import React from 'react';

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
    return (
        <div className={`
            bg-gradient-to-br from-[rgba(30,41,59,0.95)] to-[rgba(15,23,42,1)]
            backdrop-blur-lg
            border border-[rgba(148,163,184,0.15)]
            rounded-2xl
            p-8
            shadow-[0_1px_2px_theme(colors.black/0.1),_0_2px_4px_theme(colors.black/0.1),_0_4px_8px_theme(colors.black/0.1),_0_8px_16px_theme(colors.black/0.2),_0_16px_32px_theme(colors.black/0.2),_0_32px_64px_theme(colors.black/0.2)]
            ring-1 ring-inset ring-white/5
            transition-all duration-300
            ${className}
        `}>
            {children}
        </div>
    );
};

interface CardHeaderProps {
    title: string;
    description: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ title, description }) => (
    <div className="relative mb-8 pb-4 border-b border-[rgba(148,163,184,0.15)]">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-transparent -mx-8 -mt-8 rounded-t-2xl pointer-events-none"></div>
        <div className="absolute bottom-[-1px] left-0 h-0.5 w-1/3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        <h2 className="text-2xl font-bold text-slate-100 tracking-tight">{title}</h2>
        <p className="text-slate-400 mt-1 text-sm font-normal">{description}</p>
    </div>
);


export default Card;
