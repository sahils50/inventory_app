inventory_app/
├── app/
│ ├── \_layout.tsx ← Root stack
│ ├── index.tsx ← Redirects to tabs
│ │
│ ├──(app)
│ | ├── (tabs)/ ← Bottom Tabs
│ | │ ├── \_layout.tsx ← Tabs navigator
│ | │ │
│ | │ ├── home/
| | | | ├──_layout.tsx
│ | │ │ ├── index.tsx ← Home tab main
│ | │ │ └── notifications.tsx ← Home sub-screen
│ | │ │
│ | │ ├── sales/
| | | | ├──_layout.tsx
│ | │ │ ├── index.tsx ← Sales tab main
│ | │ │ ├── sale-details.tsx
│ | │ │ └── new-sale.tsx
│ | │ │
│ | │ ├── inventory/
| | | | ├──_layout.tsx
│ | │ │ ├── index.tsx ← Inventory tab main
│ | │ │ ├── item-details.tsx
│ | │ │ └── add-item.tsx
│ | │ │
│ | │ ├── reports/
| | | | ├──_layout.tsx
│ | │ │ ├── index.tsx ← Reports tab main
│ | │ │ └── report-details.tsx
│ | │ │
│ | │ └── settings/
| | | | ├──_layout.tsx
│ | │ │ ├── index.tsx ← Setting tab main
│ | │ ├── ChangePassword.tsx
│ | │ ├── EditProfile.tsx
│ | │ ├── Security.tsx
│ | │ ├── Appearance.tsx
│ | │ ├── HelpCenter.tsx
│ | │ ├── Review.tsx
│ | │ ├── Aboutus.tsx
│ | │ ├── privacy/
│ | │ | ├── index.tsx
│ | │ | ├── \_layout.tsx
│ | │ | ├── PrivacyPolicy.tsx
│ | │ | ├── TermNConditions.tsx
│ | │ | ├── DeleteAccountData.tsx
│ | │ | ├── DataRetentionPolicy.tsx
│ | │
│ | └── index.tsx
│ | └── +not-found.tsx
│ ├─(auth)
| | ├──_layout.tsx
| | ├──Forgot.tsx
| | ├──index.tsx
| | ├──Signup.tsx
|
├── components/ ← Reusable UI
│ ├── ui/
│ │ ├── Button.tsx
│ │ ├── Input.tsx
│ │ └── Card.tsx
│ ├── headers/
│ └── lists/
│
├── hooks/
│ └── useTheme.ts
│
├── services/
│ ├── api.ts
│ └── sales.service.ts
│
├── constants/
│ ├── colors.ts
│ └── routes.ts
│
├── assets/
│ ├── icons/
│ └── images/
│
├── app.json
├── global.css
├── babel.config.js
├── metro.config.js
├── nativewind-env.d.ts
├── tailwind.config..js
├── package.json
└── tsconfig.json
