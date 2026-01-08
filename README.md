project-root/
├── app/
│ ├── \_layout.tsx ← Root stack
│ ├── index.tsx ← Redirects to tabs
│ │
│ ├── (tabs)/ ← Bottom Tabs
│ │ ├── \_layout.tsx ← Tabs navigator
│ │ │
│ │ ├── home/
│ │ │ ├── index.tsx ← Home tab main
│ │ │ └── notifications.tsx ← Home sub-screen
│ │ │
│ │ ├── sales/
│ │ │ ├── index.tsx ← Sales tab main
│ │ │ ├── sale-details.tsx
│ │ │ └── new-sale.tsx
│ │ │
│ │ ├── inventory/
│ │ │ ├── index.tsx ← Inventory tab main
│ │ │ ├── item-details.tsx
│ │ │ └── add-item.tsx
│ │ │
│ │ ├── reports/
│ │ │ ├── index.tsx ← Reports tab main
│ │ │ └── report-details.tsx
│ │ │
│ │ └── settings/
│ │ ├── index.tsx ← Settings tab main
│ │ ├── profile.tsx
│ │ └── preferences.tsx
│ │
│ └── +not-found.tsx
│
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
├── babel.config.js
├── package.json
└── tsconfig.json
