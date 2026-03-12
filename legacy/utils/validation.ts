/**
 * Input validation and sanitization utilities
 * Protects against XSS and injection attacks
 */

import DOMPurify from 'dompurify';

/**
 * Sanitize product name
 * Max 100 characters, no HTML tags
 */
export function sanitizeProductName(name: string): string {
    if (!name) return '';

    return DOMPurify.sanitize(name, { ALLOWED_TAGS: [] })
        .trim()
        .slice(0, 100);
}

/**
 * Sanitize ingredients list
 * Max 1000 characters, no HTML tags
 */
export function sanitizeIngredients(ingredients: string): string {
    if (!ingredients) return '';

    return DOMPurify.sanitize(ingredients, { ALLOWED_TAGS: [] })
        .trim()
        .slice(0, 1000);
}

/**
 * Sanitize use-by date
 * Only allows valid date format
 */
export function sanitizeDate(date: string): string {
    if (!date) return '';

    // Remove any HTML
    const clean = DOMPurify.sanitize(date, { ALLOWED_TAGS: [] });

    // Validate date format (YYYY-MM-DD or DD/MM/YYYY)
    const dateRegex = /^\d{4}-\d{2}-\d{2}$|^\d{2}\/\d{2}\/\d{4}$/;

    return dateRegex.test(clean) ? clean : '';
}

/**
 * Sanitize general text input
 * Allows basic formatting but removes dangerous tags
 */
export function sanitizeText(text: string, maxLength: number = 500): string {
    if (!text) return '';

    return DOMPurify.sanitize(text, {
        ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'br'],
        ALLOWED_ATTR: []
    })
        .trim()
        .slice(0, maxLength);
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Sanitize HTML content (for rich text)
 * Use with extreme caution
 */
export function sanitizeHTML(html: string): string {
    return DOMPurify.sanitize(html, {
        ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'u', 'b', 'i', 'ul', 'ol', 'li'],
        ALLOWED_ATTR: ['class']
    });
}

/**
 * Rate limiting check
 */
export function checkRateLimit(
    key: string,
    maxAttempts: number = 10,
    windowMs: number = 60000
): boolean {
    const attemptsKey = `${key}_attempts`;
    const timestampKey = `${key}_timestamp`;

    const attempts = localStorage.getItem(attemptsKey);
    const timestamp = localStorage.getItem(timestampKey);

    const now = Date.now();

    if (!attempts || !timestamp) {
        localStorage.setItem(attemptsKey, '1');
        localStorage.setItem(timestampKey, now.toString());
        return true;
    }

    const lastAttempt = parseInt(timestamp);
    const attemptCount = parseInt(attempts);

    // Reset if window expired
    if (now - lastAttempt >= windowMs) {
        localStorage.setItem(attemptsKey, '1');
        localStorage.setItem(timestampKey, now.toString());
        return true;
    }

    // Check if limit exceeded
    if (attemptCount >= maxAttempts) {
        return false;
    }

    // Increment counter
    localStorage.setItem(attemptsKey, (attemptCount + 1).toString());
    return true;
}
