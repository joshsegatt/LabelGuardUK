/**
 * Generates EAN-13 checksum for a 12-digit string.
 */
export const calculateEan13Checksum = (code: string): number => {
    if (code.length !== 12) {
        throw new Error('EAN-13 code must be 12 digits before checksum.');
    }
    let sum = 0;
    for (let i = 0; i < 12; i++) {
        const digit = parseInt(code[i], 10);
        sum += i % 2 === 0 ? digit : digit * 3;
    }
    const checksum = (10 - (sum % 10)) % 10;
    return checksum;
};

/**
 * Validates a full 13-digit EAN-13 barcode.
 */
export const validateEan13 = (barcode: string): boolean => {
    if (!/^\d{13}$/.test(barcode)) return false;
    const digits = barcode.slice(0, 12);
    const check = parseInt(barcode[12], 10);
    return calculateEan13Checksum(digits) === check;
};
