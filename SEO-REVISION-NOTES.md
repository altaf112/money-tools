# ToolMoney SEO revision notes

This revision is a focused first pass based on the supplied Google Search Console export and source code.

## Changes made
- Expanded the CTC-to-In-Hand Salary Calculator metadata to better match Indian salary-search intent.
- Improved the salary calculator page introduction and usage instructions to explain CTC versus monthly take-home pay, employer contributions, variable pay and deductions.
- Expanded the salary calculator FAQs to answer specific user questions in natural language.
- Removed a hard-coded review date from guide pages so the site does not imply every article was reviewed on that date. Removed hard-coded Article publication/modification dates because the project did not maintain verified per-article dates.
- Clarified the default site description to identify the main India-focused calculator categories.

## Before deployment
1. Run `npm ci` and `npm run build` in a Node.js environment.
2. Review the CTC calculator's actual calculation model against its displayed assumptions; this SEO revision does not change calculation formulas.
3. Check all pages on mobile and verify `/sitemap.xml`, `/robots.txt`, canonical URLs and page titles after deployment.
4. In Search Console, compare query/page clicks, impressions, CTR and position over the next 28 days against the previous 28 days.

SEO changes cannot guarantee a ranking or a particular number of daily clicks. Keep content accurate and make only genuine editorial updates; do not change review dates unless a real review occurred.

## SEO revision 2 (20 October 2026)

This revision adds useful worked-example content to the SIP, CAGR, EMI, home-loan and lumpsum calculator pages, plus an FD example. Each example states its assumptions and cautions that actual outcomes can differ. It also improves the homepage title/description and adds page-specific canonical URLs to the informational pages.

### Canonical URL change
The root layout no longer sets `/` as a canonical URL inherited by every route. The homepage and tool/guide routes define their own canonicals, and informational pages now have explicit route-level canonicals. This avoids accidentally declaring the homepage as the canonical for pages such as About, Privacy and Contact.

### Validation before deployment
- Run `npm ci` and `npm run build`.
- Inspect the rendered source for `/`, each tool page, each guide page, and the informational pages. Confirm each canonical points to its own preferred URL.
- Open `/robots.txt` and `/sitemap.xml` after deployment and confirm all listed URLs use `https://toolmoney.in`.
- Test the worked examples against the live calculator formulas before publishing.
- In Search Console, track query/page clicks, impressions, CTR and average position. Compare a full 28-day period against the prior 28 days; rankings and traffic are not guaranteed.



## Revision 3 — CTC full-form and meaning search intent

- Updated the CTC-to-In-Hand calculator metadata and introductory copy to clearly explain that CTC means Cost to Company and differs from gross and in-hand salary.
- Added FAQs for “CTC full form in salary”, “CTC meaning in a job offer”, and the difference between CTC, gross salary and in-hand salary.
- Repositioned the existing salary guide to target informational intent around CTC full form and meaning, rather than creating several near-duplicate pages.
- Added a dedicated guide section explaining the full form and a section comparing CTC, gross salary and in-hand salary.
- Added a contextual internal link from the calculator to the guide.
- The existing guide URL is preserved, avoiding a new URL and unnecessary duplicate content.

The keyword tool's volume and difficulty figures are estimates, not guaranteed traffic or ranking outcomes. Review Search Console query and page data after deployment to assess results.
