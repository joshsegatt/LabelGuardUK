# Lemon Squeezy Integration Guide

## Current Status
The payment modal is currently set up with a **mock/simulation** that generates a license locally. This allows you to test the full user flow without real payments.

## When You're Ready to Accept Real Payments

### Step 1: Create Your Lemon Squeezy Account
1. Go to https://lemonsqueezy.com
2. Sign up for an account
3. Complete your store setup

### Step 2: Create Your Product
1. In Lemon Squeezy dashboard, create a new product called "LabelGuard UK Pro"
2. Set the price to £14.99/month
3. Enable subscription billing
4. Note down the **Variant ID** (you'll need this)

### Step 3: Update PaymentModal.tsx

Replace the TODO section in `components/PaymentModal.tsx` (around line 67):

```typescript
// Current (mock):
setTimeout(() => {
    const license = createLicense('pro', email);
    saveLicense(license);
    alert('Success!');
    onSuccess();
}, 2000);

// Replace with (real Lemon Squeezy):
const checkoutUrl = `https://labelguarduk.lemonsqueezy.com/checkout/buy/YOUR_VARIANT_ID?checkout[email]=${encodeURIComponent(email)}&checkout[custom][user_id]=${Date.now()}`;
window.location.href = checkoutUrl;
```

### Step 4: Set Up Webhooks (Important!)

Lemon Squeezy will send webhooks when:
- A customer completes payment
- A subscription renews
- A subscription is cancelled

You'll need a simple backend to:
1. Receive the webhook
2. Verify it's from Lemon Squeezy
3. Generate and email the license key to the customer

**Simple Backend Options:**
- **Vercel Serverless Function** (easiest for this project)
- **Netlify Functions**
- **AWS Lambda**

Example webhook endpoint (`/api/webhooks/lemon-squeezy.ts`):
```typescript
export default async function handler(req, res) {
    if (req.method !== 'POST') return res.status(405).end();
    
    const event = req.body;
    
    if (event.meta.event_name === 'order_created') {
        const email = event.data.attributes.user_email;
        const license = createLicense('pro', email);
        
        // Send email with license key
        await sendEmail(email, license.key);
    }
    
    res.status(200).json({ received: true });
}
```

### Step 5: Success/Cancel URLs

Set these in your Lemon Squeezy product settings:
- **Success URL**: `https://yourdomain.com/app?payment=success`
- **Cancel URL**: `https://yourdomain.com/pricing?payment=cancelled`

Then update `AppPage.tsx` to check for `?payment=success` and show a welcome message.

## Testing

Lemon Squeezy provides test mode:
1. Enable test mode in your dashboard
2. Use test card: `4242 4242 4242 4242`
3. Any future date for expiry
4. Any 3 digits for CVC

## Current Pricing
- **Free**: £0 (5 labels/month)
- **Pro**: £14.99/month (unlimited labels + all features)

## Notes
- Lemon Squeezy handles VAT/tax automatically (huge benefit!)
- They act as "Merchant of Record" so you don't need to worry about international tax compliance
- Fees: ~5% + 50¢ per transaction (slightly higher than Stripe but includes tax handling)
