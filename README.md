# Money Tools

India-focused financial calculators built with Next.js, React, TypeScript and Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

## Production environment

Copy `.env.example` to `.env.local` and set:

```env
NEXT_PUBLIC_SITE_URL=https://your-real-domain.com
NEXT_PUBLIC_SUPPORT_EMAIL=support@your-real-domain.com
```

Do not deploy with the placeholder domain or support email. The final domain is intentionally left configurable until the production domain is chosen.

## SEO

The project includes:

- Page-specific metadata and canonical URLs
- Open Graph and Twitter metadata
- `sitemap.xml`
- `robots.txt`
- Breadcrumb structured data
- Calculator structured data
- Internal links between related calculators
- Calculator search on the homepage
- Original methodology and limitations sections
- Legal, privacy and editorial pages

## Important financial-calculation notes

- SIP and step-up SIP are projection models and do not guarantee market returns.
- FD supports selectable mathematical compounding frequency; actual bank terms may differ.
- RD is a quarterly-compounding approximation; bank maturity schedules can differ.
- PPF follows the monthly-balance principle with explicit contribution-timing assumptions.
- Loan prepayment supports EMI-reduction and tenure-reduction scenarios.
- Income Tax is an estimate based on the published AY 2026-27 individual slab/rebate assumptions and should be checked against current Income Tax Department guidance for later tax years or complex cases.

## Deployment

Use a current Node.js 20+ runtime compatible with Next.js 16. Install dependencies from `package.json` before building. Run the production build successfully on the deployment server before switching the live domain.
