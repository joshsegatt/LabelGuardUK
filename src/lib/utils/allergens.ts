export const UK_ALLERGENS = [
    'Celery',
    'Cereals containing gluten',
    'Crustaceans',
    'Eggs',
    'Fish',
    'Lupin',
    'Milk',
    'Molluscs',
    'Mustard',
    'Nuts',
    'Peanuts',
    'Sesame seeds',
    'Soya',
    'Sulphur dioxide',
];

/**
 * Highlights allergens in a string by wrapping them in <strong> tags.
 * Follows Natasha's Law (UK) requirement for bolding allergens.
 */
export const highlightAllergens = (text: string, allergens: string[]): string => {
    if (!text) return '';
    let highlighted = text;

    // Sort allergens by length descending to avoid partial matches (e.g., 'Nuts' vs 'Peanuts')
    const sortedAllergens = [...allergens].sort((a, b) => b.length - a.length);

    sortedAllergens.forEach((allergen) => {
        const regex = new RegExp(`(${allergen})`, 'gi');
        highlighted = highlighted.replace(regex, '<strong>$1</strong>');
    });

    return highlighted;
};
