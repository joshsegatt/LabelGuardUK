import { v4 as uuidv4 } from 'uuid';

export type PlanType = 'free' | 'pro';

export interface License {
    key: string;
    plan: PlanType;
    email: string;
    createdAt: string;
    expiresAt: string;
    isActive: boolean;
}

export interface PlanLimits {
    labelsPerMonth: number | 'unlimited';
    hasWatermark: boolean;
    hasPdfExport: boolean;
    hasBarcodeGenerator: boolean;
    hasPremiumTemplates: boolean;
    hasMultiUser: boolean;
    hasApiAccess: boolean;
    supportLevel: 'email' | 'priority';
}

export const PLAN_LIMITS: Record<PlanType, PlanLimits> = {
    free: {
        labelsPerMonth: 5,
        hasWatermark: false,
        hasPdfExport: false,
        hasBarcodeGenerator: false,
        hasPremiumTemplates: false,
        hasMultiUser: false,
        hasApiAccess: false,
        supportLevel: 'email'
    },
    pro: {
        labelsPerMonth: 'unlimited',
        hasWatermark: false,
        hasPdfExport: true,
        hasBarcodeGenerator: true,
        hasPremiumTemplates: true,
        hasMultiUser: false,
        hasApiAccess: false,
        supportLevel: 'priority'
    }
};

export const PLAN_PRICES = {
    free: 0,
    pro: 14.99
};

/**
 * Generate a license key in format: PLAN-XXXX-XXXX-XXXX
 */
export function generateLicenseKey(plan: PlanType): string {
    const prefix = plan.toUpperCase();
    const uuid = uuidv4().replace(/-/g, '').toUpperCase();

    // Format: PLAN-XXXX-XXXX-XXXX
    const part1 = uuid.substring(0, 4);
    const part2 = uuid.substring(4, 8);
    const part3 = uuid.substring(8, 12);

    return `${prefix}-${part1}-${part2}-${part3}`;
}

/**
 * Create a new license
 */
export function createLicense(plan: PlanType, email: string): License {
    const now = new Date();
    const expiresAt = new Date(now);
    expiresAt.setFullYear(expiresAt.getFullYear() + 1); // 1 year from now

    return {
        key: generateLicenseKey(plan),
        plan,
        email,
        createdAt: now.toISOString(),
        expiresAt: expiresAt.toISOString(),
        isActive: true
    };
}

/**
 * Activate Pro Plan (called after successful payment)
 */
export function activateProPlan(): void {
    // In a real backend app, we would validate the Stripe session_id here.
    // For MVP, we trust the redirect and create a local license.
    const license = createLicense('pro', 'user@local');
    saveLicense(license);

    // Clear any usage limits if needed, or let them reset naturally
    console.log('🌟 Pro Plan Activated:', license.key);
}

/**
 * Validate a license key format
 */
export function validateLicenseFormat(key: string): boolean {
    // Format: PLAN-XXXX-XXXX-XXXX
    const regex = /^(FREE|PRO|BUSINESS)-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;
    return regex.test(key);
}

/**
 * Extract plan from license key
 */
export function getPlanFromKey(key: string): PlanType | null {
    if (!validateLicenseFormat(key)) return null;

    const plan = key.split('-')[0].toLowerCase();
    if (plan === 'free' || plan === 'pro' || plan === 'business') {
        return plan as PlanType;
    }
    return null;
}

/**
 * Check if license is expired
 */
export function isLicenseExpired(license: License): boolean {
    const now = new Date();
    const expiresAt = new Date(license.expiresAt);
    return now > expiresAt;
}

/**
 * Get current license from localStorage
 */
export function getCurrentLicense(): License | null {
    const stored = localStorage.getItem('labelguard_license_data');
    if (!stored) return null;

    try {
        const license: License = JSON.parse(stored);
        if (isLicenseExpired(license)) {
            return null;
        }
        return license;
    } catch {
        return null;
    }
}

/**
 * Save license to localStorage
 */
export function saveLicense(license: License): void {
    localStorage.setItem('labelguard_license_data', JSON.stringify(license));
    localStorage.setItem('labelguard_license', license.key);
}

/**
 * Get plan limits for current license
 */
export function getCurrentPlanLimits(): PlanLimits {
    const license = getCurrentLicense();
    if (!license) return PLAN_LIMITS.free;
    return PLAN_LIMITS[license.plan];
}

/**
 * Check if user can create more labels this month
 */
export function canCreateLabel(): boolean {
    const limits = getCurrentPlanLimits();
    if (limits.labelsPerMonth === 'unlimited') return true;

    // Get labels created this month
    const now = new Date();
    const monthKey = `${now.getFullYear()}-${now.getMonth()}`;
    const stored = localStorage.getItem(`labelguard_usage_${monthKey}`);
    const usage = stored ? parseInt(stored) : 0;

    return usage < limits.labelsPerMonth;
}

/**
 * Increment label usage counter
 */
export function incrementLabelUsage(): void {
    const now = new Date();
    const monthKey = `${now.getFullYear()}-${now.getMonth()}`;
    const stored = localStorage.getItem(`labelguard_usage_${monthKey}`);
    const usage = stored ? parseInt(stored) : 0;
    localStorage.setItem(`labelguard_usage_${monthKey}`, (usage + 1).toString());
}

/**
 * Get remaining labels for current month
 */
export function getRemainingLabels(): number | 'unlimited' {
    const limits = getCurrentPlanLimits();
    if (limits.labelsPerMonth === 'unlimited') return 'unlimited';

    const now = new Date();
    const monthKey = `${now.getFullYear()}-${now.getMonth()}`;
    const stored = localStorage.getItem(`labelguard_usage_${monthKey}`);
    const usage = stored ? parseInt(stored) : 0;

    return Math.max(0, limits.labelsPerMonth - usage);
}

/**
 * Get current label usage count for this month
 */
export function getLabelUsage(): number {
    const now = new Date();
    const monthKey = `${now.getFullYear()}-${now.getMonth()}`;
    const stored = localStorage.getItem(`labelguard_usage_${monthKey}`);
    return stored ? parseInt(stored) : 0;
}
