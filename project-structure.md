
.
├── .env.example
├── .env.local
├── .eslintrc.json
├── .gitignore
├── .prettierrc
├── components.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
├── mdx-components.tsx
├── public/
│ ├── fonts/
│ │ └── ITWeralionis.otf
│ ├── images/
│ │ ├── og-bg.png
│ │ └── logo.svg
│ └── robots.txt
├── .github/
│ └── workflows/
│ └── ci.yml
├── content/
│ └── docs/
│ ├── v1/
│ │ ├── getting-started/
│ │ │ ├── installation.mdx
│ │ │ └── introduction.mdx
│ │ └── api-reference/
│ │ └── endpoints.mdx
│ └── v2/
│ └── getting-started/
│ └── migration.mdx
├── scripts/
│ └── sync-sheets.ts
├── app/
│ ├── favicon.ico
│ ├── globals.css
│ ├── layout.tsx
│ ├── not-found.tsx
│ ├── error.tsx
│ ├── sitemap.ts
│ ├── (marketing)/
│ │ ├── layout.tsx
│ │ └── page.tsx
│ ├── docs/
│ │ ├── layout.tsx
│ │ └── [...slug]/
│ │ ├── layout.tsx
│ │ ├── loading.tsx
│ │ ├── page.tsx
│ │ └── not-found.tsx
│ └── api/
│ ├── og/
│ │ └── route.tsx
│ ├── search/
│ │ └── route.ts
│ └── revalidate/
│ └── route.ts
├── components/
│ ├── icons/
│ │ ├── index.tsx
│ │ └── custom-icons.tsx
│ ├── layout/
│ │ ├── site-header.tsx
│ │ ├── site-footer.tsx
│ │ ├── main-nav.tsx
│ │ ├── mobile-nav.tsx
│ │ └── mode-toggle.tsx
│ ├── docs/
│ │ ├── sidebar.tsx
│ │ ├── sidebar-item.tsx
│ │ ├── table-of-contents.tsx
│ │ ├── pager.tsx
│ │ ├── breadcrumbs.tsx
│ │ └── docs-search.tsx
│ ├── mdx/
│ │ ├── mdx-remote.tsx
│ │ ├── code-block.tsx
│ │ ├── callout.tsx
│ │ ├── card.tsx
│ │ └── steps.tsx
│ ├── sheets/
│ │ ├── project-card.tsx
│ │ └── data-table.tsx
│ └── ui/
│ ├── accordion.tsx
│ ├── button.tsx
│ ├── scroll-area.tsx
│ ├── separator.tsx
│ ├── sheet.tsx
│ ├── skeleton.tsx
│ └── ...
├── config/
│ ├── site.ts
│ ├── docs.ts
│ ├── marketing.ts
│ └── navigation.ts
├── hooks/
│ ├── use-config.ts
│ ├── use-media-query.ts
│ ├── use-mounted.ts
│ └── use-scroll.ts
├── lib/
│ ├── utils.ts
│ ├── constants.ts
│ ├── docs/
│ │ ├── get-docs.ts
│ │ ├── get-toc.ts
│ │ └── utils.ts
│ └── google/
│ ├── auth.ts
│ ├── sheets-client.ts
│ ├── sheets-fetcher.ts
│ └── transformers.ts
├── actions/
│ ├── get-sheet-data.ts
│ └── submit-feedback.ts
└── types/
├── index.d.ts
├── nav.ts
├── doc.ts
└── google-sheets.ts