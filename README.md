# 🏷️ LabelGuard UK

**Professional Food Label Generator for UK Businesses**

[![License](https://img.shields.io/badge/License-Proprietary-red.svg)](LICENSE)
[![React](https://img.shields.io/badge/React-18.3-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-purple.svg)](https://vitejs.dev/)

> Generate compliant allergen labels for your UK food business in minutes. Fast, easy, and legally compliant with Natasha's Law.

🌐 **Live Demo:** [labelguard.uk](https://labelguard.uk) *(coming soon)*

---

## ✨ Features

### 🎨 **Premium Design**
- **Ultra Wild Hero** - Dramatic animated hero section with rotating text
- **3D Label Preview** - Realistic 3D animated label cards
- **Modern UI/UX** - Dark mode with coral accents, glassmorphism effects
- **Mobile-First** - Fully responsive design for all devices

### 🏷️ **Label Generation**
- **Natasha's Law Compliant** - Full ingredient lists with allergens emphasized
- **Multiple Templates** - Classic, Modern, Minimal, Bold, Elegant
- **Print-Ready** - A4 format, optimized for standard printers
- **Barcode Generator** - EAN-13 barcodes (Pro plan)
- **PDF Export** - Professional PDF output (Pro plan)

### 📊 **Business Features**
- **Free Tier** - 5 labels/month, all allergens, basic templates
- **Pro Tier** - £14.99/month, unlimited labels, premium features
- **Local Storage** - Your data stays private in your browser
- **IP Tracking** - Automatic user registration (privacy-focused)
- **Analytics** - Session tracking and usage statistics

### 🔒 **Compliance & Security**
- **FSA Approved** - Meets Food Standards Agency requirements
- **GDPR Compliant** - Privacy-first approach
- **Natasha's Law** - Full compliance with UK allergen labelling law
- **14 Allergens** - All major allergens covered

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/joshsegatt/LabelGuardUK.git

# Navigate to project directory
cd LabelGuardUK

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Environment Setup

No environment variables required for basic functionality. For payment integration:

```env
# Optional: Lemon Squeezy (see LEMON_SQUEEZY_SETUP.md)
VITE_LEMON_SQUEEZY_VARIANT_ID=your_variant_id
```

---

## 📁 Project Structure

```
LabelGuardUK/
├── components/           # React components
│   ├── Hero.tsx         # Animated hero section
│   ├── PricingTable.tsx # Pricing cards
│   ├── TrustSection.tsx # Social proof section
│   ├── TemplateSelector.tsx
│   └── ...
├── pages/               # Page components
│   ├── LandingPage.tsx  # Marketing landing page
│   ├── AppPage.tsx      # Label generator app
│   └── PricingPage.tsx  # Pricing page
├── utils/               # Utility functions
│   ├── license.ts       # License management
│   ├── onboarding.ts    # User onboarding
│   └── userRegistration.ts # IP tracking
├── constants/           # App constants
├── types/              # TypeScript types
├── public/             # Static assets
└── docs/               # Documentation
    ├── COMPETITIVE_ANALYSIS.md
    ├── USER_REGISTRATION_SYSTEM.md
    ├── LEMON_SQUEEZY_SETUP.md
    └── IMPROVEMENTS_SUMMARY.md
```

---

## 🎯 Tech Stack

### Frontend
- **React 18.3** - UI library
- **TypeScript 5.6** - Type safety
- **Vite 6.0** - Build tool & dev server
- **React Router 7.1** - Client-side routing
- **Tailwind CSS** - Utility-first CSS (via inline classes)

### Features
- **Local Storage** - Client-side data persistence
- **IP Tracking** - User registration via ipify.org API
- **Print Optimization** - CSS print media queries
- **SEO** - Schema.org structured data

### Development
- **ESLint** - Code linting
- **TypeScript** - Static type checking
- **Vite HMR** - Hot module replacement

---

## 📖 Documentation

- **[Competitive Analysis](COMPETITIVE_ANALYSIS.md)** - Market analysis vs. competitors
- **[User Registration System](USER_REGISTRATION_SYSTEM.md)** - IP tracking documentation
- **[Lemon Squeezy Setup](LEMON_SQUEEZY_SETUP.md)** - Payment integration guide
- **[Improvements Summary](IMPROVEMENTS_SUMMARY.md)** - Feature changelog

---

## 🎨 Design System

### Colors
```css
--background: #1F1F1F    /* Matte dark background */
--surface: #2A2A2A       /* Card background */
--border: #3A3A3A        /* Borders */
--text-primary: #ECECEC  /* Primary text */
--text-secondary: #A8A8A8 /* Secondary text */
--accent: #CC785C        /* Coral accent */
--accent-hover: #B8694D  /* Coral hover */
```

### Typography
- **Headings:** System font stack (optimized for performance)
- **Body:** Sans-serif system fonts
- **Monospace:** For dates and codes

---

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start dev server (http://localhost:5173)
npm run build        # Build for production
npm run preview      # Preview production build

# Linting
npm run lint         # Run ESLint

# Type Checking
npm run type-check   # Run TypeScript compiler check
```

---

## 🌐 Deployment

### Recommended Platforms
- **Vercel** - Zero-config deployment
- **Netlify** - Continuous deployment
- **GitHub Pages** - Free static hosting

### Build Command
```bash
npm run build
```

### Output Directory
```
dist/
```

---

## 📊 Pricing

| Plan | Price | Features |
|------|-------|----------|
| **Free** | £0/month | 5 labels/month, All allergens, Basic templates, Local storage |
| **Pro** | £14.99/month | Unlimited labels, No watermarks, PDF export, Barcode generator, Premium templates, Priority support |

---

## 🤝 Contributing

**This is a proprietary project.** Contributions are not accepted at this time.

For bug reports or feature requests, please contact: [josh@labelguard.uk](mailto:josh@labelguard.uk)

---

## 📄 License

**Copyright © 2024 LabelGuard UK. All Rights Reserved.**

This software is proprietary and confidential. Unauthorized copying, modification, distribution, or use of this software, via any medium, is strictly prohibited.

### Restrictions

❌ **You MAY NOT:**
- Copy, modify, or distribute this code
- Use this code for commercial purposes
- Create derivative works
- Reverse engineer the software
- Remove or alter any proprietary notices

✅ **You MAY:**
- View the code for educational purposes only
- Report bugs or security issues
- Use the hosted service at [labelguard.uk](https://labelguard.uk)

### Third-Party Licenses

This project uses open-source libraries. See individual package licenses in `node_modules/`.

For licensing inquiries, contact: [legal@labelguard.uk](mailto:legal@labelguard.uk)

---

## 🔒 Security

### Reporting Security Issues

If you discover a security vulnerability, please email: [security@labelguard.uk](mailto:security@labelguard.uk)

**Do NOT** open public issues for security vulnerabilities.

### Security Features
- ✅ No server-side data storage
- ✅ Local-only data persistence
- ✅ HTTPS-only in production
- ✅ No third-party tracking (except IP registration)
- ✅ GDPR compliant

---

## 📞 Support

### For Users
- **Email:** [support@labelguard.uk](mailto:support@labelguard.uk)
- **Documentation:** [docs.labelguard.uk](https://docs.labelguard.uk) *(coming soon)*

### For Developers
- **Technical Issues:** [josh@labelguard.uk](mailto:josh@labelguard.uk)
- **Business Inquiries:** [hello@labelguard.uk](mailto:hello@labelguard.uk)

---

## 🏆 Credits

**Created by:** Josh Segatt  
**Company:** LabelGuard UK  
**Year:** 2024

### Acknowledgments
- Food Standards Agency (FSA) for Natasha's Law guidance
- UK food business community for feedback
- Open-source community for amazing tools

---

## 📈 Roadmap

### Q1 2025
- [ ] Launch beta program
- [ ] Lemon Squeezy payment integration
- [ ] Mobile app (iOS/Android)
- [ ] Nutritional calculator

### Q2 2025
- [ ] Barcode scanner
- [ ] Bulk label generation
- [ ] API for developers
- [ ] White-label solution

### Q3 2025
- [ ] EU compliance (INCO regulation)
- [ ] Multi-language support
- [ ] Advanced analytics dashboard

---

## 📊 Stats

![GitHub repo size](https://img.shields.io/github/repo-size/joshsegatt/LabelGuardUK)
![GitHub last commit](https://img.shields.io/github/last-commit/joshsegatt/LabelGuardUK)
![GitHub issues](https://img.shields.io/github/issues/joshsegatt/LabelGuardUK)

---

## ⚖️ Legal

**LabelGuard UK** is a registered trademark.

This software is provided "as is" without warranty of any kind. Use at your own risk.

For full terms and conditions, visit: [labelguard.uk/terms](https://labelguard.uk/terms) *(coming soon)*

---

<div align="center">

**Made with ❤️ in the UK**

[Website](https://labelguard.uk) • [Documentation](https://docs.labelguard.uk) • [Support](mailto:support@labelguard.uk)

</div>
