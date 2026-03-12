import React from 'react';
import { LabelData } from '../types';

interface SavedLabelsCardProps {
    savedLabels: LabelData[];
    onLoad: (label: LabelData) => void;
    onDelete: (id: string) => void;
}

export const SavedLabelsCard: React.FC<SavedLabelsCardProps> = ({
    savedLabels,
    onLoad,
    onDelete
}) => {
    return (
        <div className="bg-[#1A1A1A] rounded-2xl shadow-2xl border border-white/5 p-6 h-full flex flex-col relative overflow-hidden">
            <div className="relative z-10 flex flex-col h-full">
                <h2 className="text-sm font-medium text-[#888] uppercase tracking-wider mb-4 flex items-center justify-between">
                    <span>Saved Labels</span>
                    <span className="bg-[#333] text-white text-[10px] px-2 py-0.5 rounded-full">{savedLabels.length}</span>
                </h2>

                <div className="flex-grow overflow-y-auto pr-2 space-y-2 custom-scrollbar -mr-2">
                    {savedLabels.length === 0 ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-6 border-2 border-dashed border-[#333] rounded-xl bg-[#0F0F0F]/50">
                            <div className="w-12 h-12 rounded-full bg-[#222] flex items-center justify-center mb-3 text-[#555]">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                            </div>
                            <p className="text-[#888] text-sm font-medium">No labels yet</p>
                            <p className="text-[#555] text-xs mt-1">Your saved designs will appear here</p>
                        </div>
                    ) : (
                        savedLabels.map((label) => (
                            <div
                                key={label.id}
                                className="group bg-[#0F0F0F] border border-[#333] rounded-xl p-3 hover:border-[#CC785C]/50 hover:bg-[#141414] transition-all duration-200"
                            >
                                <div className="flex justify-between items-start mb-3">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2">
                                            <h3 className="font-bold text-white text-sm truncate max-w-[100px]">
                                                {label.productName || 'Untitled Label'}
                                            </h3>
                                            {label.id?.startsWith('example-') && (
                                                <span className="text-[9px] text-[#CC785C] bg-[#CC785C]/10 px-1.5 py-0.5 rounded uppercase tracking-wider">
                                                    Example
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-[10px] text-[#666] block mt-0.5">
                                            {new Date(label.createdAt).toLocaleDateString()}
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => onDelete(label.id)}
                                        className="text-[#444] hover:text-red-400 transition-colors p-1"
                                        title="Delete"
                                    >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                    </button>
                                </div>

                                <button
                                    onClick={() => onLoad(label)}
                                    className="w-full py-2 bg-[#222] text-[#ECECEC] text-xs font-medium rounded-lg hover:bg-[#CC785C] hover:text-white transition-colors flex items-center justify-center gap-2"
                                >
                                    <span>Load Design</span>
                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};
