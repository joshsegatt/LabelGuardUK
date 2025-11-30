# User Registration & IP Tracking System

## Overview
This system automatically tracks users when they start using the Free plan, capturing their IP address and usage analytics for better user management and insights.

## How It Works

### 1. **Free Plan Click (Pricing Page)**
When a user clicks "Start Free" on the pricing page:
- The system fetches their IP address from `api.ipify.org`
- Creates a registration record with:
  - IP address
  - Timestamp
  - Plan type (free)
  - User agent (browser info)
- Saves to `localStorage` under `labelguard_user_registration`
- Redirects to `/app`

### 2. **App Page Access**
When a user accesses the app (even directly):
- Checks if already registered
- If not, automatically registers them
- Updates `lastActive` timestamp
- Increments session counter

### 3. **Data Stored**

#### Registration Data (`labelguard_user_registration`)
```json
{
  "ip": "123.456.789.0",
  "timestamp": "2024-12-15T14:30:00.000Z",
  "plan": "free",
  "userAgent": "Mozilla/5.0..."
}
```

#### Analytics Data (`labelguard_analytics`)
```json
{
  "firstVisit": "2024-12-15T14:30:00.000Z",
  "lastActive": "2024-12-15T16:45:00.000Z",
  "totalSessions": 12
}
```

## API Used

**IP Detection:** `https://api.ipify.org?format=json`
- Free public API
- No authentication required
- Returns user's public IP address
- Fallback to 'unknown' if API fails

## Privacy Considerations

1. **Local Storage Only:** All data is stored locally in the user's browser
2. **No Server Tracking:** IP is NOT sent to any backend server
3. **User Control:** Users can clear their browser data to remove tracking
4. **Transparent:** IP is only used for local session management

## Functions Available

### `registerFreeUser()`
Registers a new user (called automatically on first visit)

### `updateLastActive()`
Updates the last active timestamp (called on each app visit)

### `getUserRegistration()`
Returns the user's registration data or null

### `isUserRegistered()`
Returns boolean indicating if user is registered

## Usage Example

```typescript
import { getUserRegistration, isUserRegistered } from '../utils/userRegistration';

// Check if user is registered
if (isUserRegistered()) {
  const userData = getUserRegistration();
  console.log('User IP:', userData?.ip);
  console.log('Registered:', userData?.timestamp);
}
```

## Future Enhancements

If you want to send this data to a backend in the future:

1. Create an API endpoint (e.g., `/api/register-user`)
2. Modify `registerFreeUser()` to POST the data
3. Store in a database for analytics
4. Add GDPR compliance notices

## Files Modified

- `utils/userRegistration.ts` - Core registration logic
- `components/PricingTable.tsx` - Free plan click handler
- `pages/AppPage.tsx` - Auto-registration on app access

## Testing

1. Clear localStorage: `localStorage.clear()`
2. Click "Start Free" on pricing page
3. Check console for: `✅ User registered successfully`
4. Inspect localStorage:
   - `labelguard_user_registration`
   - `labelguard_analytics`
