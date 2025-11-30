import { LabelData } from '../types';

export const EXAMPLE_LABELS: LabelData[] = [
    {
        id: 'example-1',
        productName: 'Artisan Sourdough Bread',
        ingredients: 'Wheat Flour, Water, Salt, Sourdough Starter (Wheat Flour, Water)',
        allergens: ['Gluten'],
        useByDate: new Date(Date.now() + 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 2 days from now
        template: 'classic',
        createdAt: new Date().toISOString()
    },
    {
        id: 'example-2',
        productName: 'Chocolate Brownies',
        ingredients: 'Dark Chocolate (Cocoa Mass, Sugar), Butter, Eggs, Sugar, Wheat Flour, Cocoa Powder',
        allergens: ['Gluten', 'Eggs', 'Milk'],
        useByDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 3 days from now
        template: 'modern',
        createdAt: new Date().toISOString()
    },
    {
        id: 'example-3',
        productName: 'Vegan Hummus',
        ingredients: 'Chickpeas, Tahini (Sesame Seeds), Lemon Juice, Garlic, Olive Oil, Salt',
        allergens: ['Sesame'],
        useByDate: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days from now
        template: 'minimal',
        createdAt: new Date().toISOString()
    }
];

/**
 * Initialize example labels on first visit
 */
export function initializeExampleLabels(): void {
    const hasVisited = localStorage.getItem('labelguard_has_visited');

    if (!hasVisited) {
        // First time visitor - add example labels
        const existingLabels = localStorage.getItem('labelguard_labels');

        if (!existingLabels) {
            localStorage.setItem('labelguard_labels', JSON.stringify(EXAMPLE_LABELS));
        }

        localStorage.setItem('labelguard_has_visited', 'true');
    }
}

/**
 * Check if current labels are examples (for showing a hint)
 */
export function hasOnlyExampleLabels(): boolean {
    const stored = localStorage.getItem('labelguard_labels');
    if (!stored) return false;

    try {
        const labels: LabelData[] = JSON.parse(stored);
        return labels.every(label => label.id?.startsWith('example-'));
    } catch {
        return false;
    }
}
