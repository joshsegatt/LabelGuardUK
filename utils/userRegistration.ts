/**
 * Utility to track user registration via IP
 */

interface UserRegistration {
    ip: string;
    timestamp: string;
    plan: 'free' | 'pro';
    userAgent: string;
}

/**
 * Fetch user's IP address from a public API
 */
async function fetchUserIP(): Promise<string> {
    try {
        const response = await fetch('https://api.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Failed to fetch IP:', error);
        // Fallback to a placeholder if API fails
        return 'unknown';
    }
}

/**
 * Register user when they start using the Free plan
 */
export async function registerFreeUser(): Promise<void> {
    try {
        // Check if already registered
        const existingRegistration = localStorage.getItem('labelguard_user_registration');

        if (existingRegistration) {
            console.log('User already registered');
            return;
        }

        // Fetch IP address
        const ip = await fetchUserIP();

        // Create registration record
        const registration: UserRegistration = {
            ip,
            timestamp: new Date().toISOString(),
            plan: 'free',
            userAgent: navigator.userAgent
        };

        // Save to localStorage
        localStorage.setItem('labelguard_user_registration', JSON.stringify(registration));

        // Also track in a separate analytics key for easy querying
        const analytics = {
            firstVisit: registration.timestamp,
            lastActive: registration.timestamp,
            totalSessions: 1
        };
        localStorage.setItem('labelguard_analytics', JSON.stringify(analytics));

        console.log('✅ User registered successfully:', { ip, timestamp: registration.timestamp });
    } catch (error) {
        console.error('Failed to register user:', error);
    }
}

/**
 * Update last active timestamp
 */
export function updateLastActive(): void {
    try {
        const analyticsData = localStorage.getItem('labelguard_analytics');
        if (analyticsData) {
            const analytics = JSON.parse(analyticsData);
            analytics.lastActive = new Date().toISOString();
            analytics.totalSessions = (analytics.totalSessions || 0) + 1;
            localStorage.setItem('labelguard_analytics', JSON.stringify(analytics));
        }
    } catch (error) {
        console.error('Failed to update analytics:', error);
    }
}

/**
 * Get user registration info
 */
export function getUserRegistration(): UserRegistration | null {
    try {
        const data = localStorage.getItem('labelguard_user_registration');
        return data ? JSON.parse(data) : null;
    } catch {
        return null;
    }
}

/**
 * Check if user is registered
 */
export function isUserRegistered(): boolean {
    return !!localStorage.getItem('labelguard_user_registration');
}
