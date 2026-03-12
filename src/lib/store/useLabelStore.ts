import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type LabelTemplate = 'classic' | 'modern' | 'minimal' | 'bold' | 'elegant';

export interface LabelData {
    id?: string;
    productName: string;
    brand: string;
    weight: string;
    ingredients: string[];
    allergens: string[];
    template: LabelTemplate;
    barcodeValue?: string;
    useByDate?: string;
}

interface LabelState {
    currentLabel: LabelData;
    setLabelData: (data: Partial<LabelData>) => void;
    resetLabel: () => void;
    addIngredient: (ingredient: string) => void;
    removeIngredient: (index: number) => void;
    updateIngredient: (index: number, value: string) => void;
    reorderIngredients: (startIndex: number, endIndex: number) => void;
}

const initialLabel: LabelData = {
    productName: '',
    brand: '',
    weight: '',
    ingredients: [],
    allergens: [],
    template: 'classic',
};

export const useLabelStore = create<LabelState>()(
    persist(
        (set) => ({
            currentLabel: initialLabel,
            setLabelData: (data) =>
                set((state) => ({
                    currentLabel: { ...state.currentLabel, ...data },
                })),
            resetLabel: () => set({ currentLabel: initialLabel }),
            addIngredient: (ingredient) =>
                set((state) => ({
                    currentLabel: {
                        ...state.currentLabel,
                        ingredients: [...state.currentLabel.ingredients, ingredient],
                    },
                })),
            removeIngredient: (index) =>
                set((state) => ({
                    currentLabel: {
                        ...state.currentLabel,
                        ingredients: state.currentLabel.ingredients.filter((_, i) => i !== index),
                    },
                })),
            updateIngredient: (index, value) =>
                set((state) => {
                    const newIngredients = [...state.currentLabel.ingredients];
                    newIngredients[index] = value;
                    return {
                        currentLabel: { ...state.currentLabel, ingredients: newIngredients },
                    };
                }),
            reorderIngredients: (startIndex, endIndex) =>
                set((state) => {
                    const newIngredients = [...state.currentLabel.ingredients];
                    const [removed] = newIngredients.splice(startIndex, 1);
                    newIngredients.splice(endIndex, 0, removed);
                    return {
                        currentLabel: { ...state.currentLabel, ingredients: newIngredients },
                    };
                }),
        }),
        {
            name: 'labelguard_builder_state', // State for the active builder
        }
    )
);
