
import React from 'react';

interface FormLabelProps {
    htmlFor: string;
    children: React.ReactNode;
}

export const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, children }) => (
    <label htmlFor={htmlFor} className="flex items-center text-xs uppercase font-semibold text-slate-300 tracking-[0.15em] mb-3">
        <span className="w-0.5 h-3 mr-3 rounded-full bg-gradient-to-b from-blue-500 to-indigo-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]"></span>
        {children}
    </label>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input: React.FC<InputProps> = (props) => (
    <input
        {...props}
        className={`
            w-full bg-[rgba(15,23,42,0.5)] text-slate-100 placeholder-slate-500
            px-5 py-4 rounded-[14px]
            border border-[rgba(148,163,184,0.15)]
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            focus:outline-none focus:ring-[3px] focus:ring-blue-500/40 focus:border-blue-500
            focus:-translate-y-px
            hover:border-slate-400/20 hover:bg-[rgba(15,23,42,0.75)]
            ring-1 ring-inset ring-white/5
            shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]
            ${props.className}
        `}
    />
);

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea: React.FC<TextareaProps> = (props) => (
     <textarea
        {...props}
        className={`
            w-full bg-[rgba(15,23,42,0.5)] text-slate-100 placeholder-slate-500
            px-5 py-4 rounded-[14px]
            border border-[rgba(148,163,184,0.15)]
            transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]
            focus:outline-none focus:ring-[3px] focus:ring-blue-500/40 focus:border-blue-500
            focus:-translate-y-px
            hover:border-slate-400/20 hover:bg-[rgba(15,23,42,0.75)]
            ring-1 ring-inset ring-white/5
            shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset]
            min-h-[120px] resize-y
            ${props.className}
        `}
    />
);
