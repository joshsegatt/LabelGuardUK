'use client';

import { useState } from 'react';
import { useLabelStore } from '@/lib/store/useLabelStore';
import { Plus, X, GripVertical } from 'lucide-react';
import { motion, Reorder } from 'framer-motion';

export const StepIngredients = () => {
    const { currentLabel, addIngredient, removeIngredient, updateIngredient, reorderIngredients, setLabelData } = useLabelStore();
    const [newIngredient, setNewIngredient] = useState('');

    const handleAdd = () => {
        if (newIngredient.trim()) {
            addIngredient(newIngredient.trim());
            setNewIngredient('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            handleAdd();
        }
    };

    return (
        <div className="space-y-6">
            <div className="space-y-2">
                <label className="text-sm font-medium text-foreground">
                    Ingredients List
                </label>
                <p className="text-xs text-muted-foreground mb-4">
                    Add ingredients one by one. You can drag to reorder them based on weight (highest first).
                </p>

                <div className="flex gap-2 mb-6">
                    <input
                        type="text"
                        value={newIngredient}
                        onChange={(e) => setNewIngredient(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Add ingredient..."
                        className="flex-grow bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                    <button
                        onClick={handleAdd}
                        className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-all"
                    >
                        <Plus className="h-6 w-6" />
                    </button>
                </div>

                <Reorder.Group
                    axis="y"
                    values={currentLabel.ingredients}
                    onReorder={(newOrder) => setLabelData({ ingredients: newOrder })}
                    className="space-y-2"
                >
                    {currentLabel.ingredients.map((ingredient, index) => (
                        <Reorder.Item
                            key={`${ingredient}-${index}`}
                            value={ingredient}
                            className="flex items-center gap-3 bg-white/5 border border-white/5 rounded-lg p-3 group hover:border-white/10 transition-all"
                        >
                            <div className="cursor-grab active:cursor-grabbing text-muted-foreground/30 group-hover:text-muted-foreground transition-colors">
                                <GripVertical className="h-5 w-5" />
                            </div>
                            <input
                                type="text"
                                value={ingredient}
                                onChange={(e) => updateIngredient(index, e.target.value)}
                                className="flex-grow bg-transparent border-none focus:outline-none text-foreground text-sm"
                            />
                            <button
                                onClick={() => removeIngredient(index)}
                                className="text-muted-foreground/30 hover:text-destructive transition-colors"
                                title="Remove ingredient"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </Reorder.Item>
                    ))}
                </Reorder.Group>

                {currentLabel.ingredients.length === 0 && (
                    <div className="text-center py-12 border-2 border-dashed border-white/5 rounded-xl text-muted-foreground text-sm">
                        No ingredients added yet.
                    </div>
                )}
            </div>
        </div>
    );
};
