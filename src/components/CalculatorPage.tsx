import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";

type FAQ = { question: string; answer: string };

type Props = {
  title: string;
  category: string;
  description: string;
  slug: string;
  children: React.ReactNode;
  intro?: string;
  howToUse?: string[];
  faq?: FAQ[];
  related?: { title: string; href: string }[];
  methodology?: string;
  limitations?: string;
  source?: { label: string; href: string };
};

const formulas: Record<string, string> = {
  "sip-calculator": "FV = P × [((1 + r)^n − 1) / r], assuming each monthly SIP is invested at the end of the month.",
  "step-up-sip-calculator": "Each investment year uses a higher monthly SIP based on the selected annual step-up percentage; each monthly contribution is then projected using the assumed monthly rate.",
  "lumpsum-calculator": "FV = P × (1 + r)^n, where P is the initial investment, r is the assumed annual return and n is the number of years.",
  "cagr-calculator": "CAGR = (Ending Value / Starting Value)^(1 / Years) − 1.",
  "emi-calculator": "EMI = P × r × (1 + r)^n / [(1 + r)^n − 1], where P is principal, r is the monthly interest rate and n is the number of monthly payments.",
  "home-loan-calculator": "The estimate uses the standard reducing-balance EMI formula with a monthly interest rate and the selected number of monthly payments.",
  "loan-prepayment-calculator": "The estimate models the outstanding balance after the planned prepayment and compares the resulting repayment schedule with the original schedule.",
  "fd-calculator": "FV = P × (1 + r/m)^(m×t), where m is the assumed compounding frequency.",
  "rd-calculator": "The calculator uses a recurring-deposit estimate based on regular monthly deposits and the stated quarterly-compounding assumption.",
  "ppf-calculator": "The illustration applies the selected annual PPF rate using the contribution timing assumption shown by the calculator.",
  "ctc-to-in-hand": "The estimate starts from CTC and subtracts the payroll components and deductions represented by this simplified model.",
  "income-tax-calculator": "Tax is estimated from the selected Indian tax regime's slab and deduction assumptions used by this calculator."
};

const guidance: Record<string, { methodology: string; limitations: string; source?: { label: string; href: string } }> = {
  "sip-calculator": {
    methodology: "The calculator uses a standard monthly-compounding SIP model. The monthly contribution is assumed to be invested at the end of each month, and the annual return entered by the user is converted to a monthly rate for the estimate.",
    limitations: "Actual mutual-fund returns vary over time. The result does not account for expense ratios, taxes, exit loads, market volatility or the exact NAV on each instalment date.",
  },
  "step-up-sip-calculator": {
    methodology: "The starting monthly SIP is increased once at the beginning of each investment year by the selected step-up percentage. Each month's contribution is then compounded using the assumed monthly return.",
    limitations: "This is a projection, not a return guarantee. Actual mutual-fund performance and the timing of investments can differ from the assumptions.",
  },
  "lumpsum-calculator": {
    methodology: "The calculation applies annual compounding to the initial investment using the annual return entered by the user: future value = principal × (1 + rate)^years.",
    limitations: "The assumed return is constant in this model. Real investments may have uneven returns, taxes, fees and periods of loss.",
  },
  "cagr-calculator": {
    methodology: "CAGR is calculated as (ending value / starting value)^(1 / years) − 1. It expresses the constant annualized growth rate that connects the two values.",
    limitations: "CAGR does not describe volatility or the path taken between the starting and ending values. It is not the same as an XIRR calculation for cash flows at different dates.",
  },
  "emi-calculator": {
    methodology: "The EMI estimate uses the standard reducing-balance formula with a monthly interest rate and the selected number of monthly payments.",
    limitations: "Actual lender schedules can include fees, insurance, rate resets, rounding and other charges. Floating-rate loans can change EMI or tenure when rates change.",
  },
  "home-loan-calculator": {
    methodology: "The home-loan estimate uses the standard reducing-balance EMI formula with monthly instalments. It is intended to help compare loan amount, rate and tenure scenarios.",
    limitations: "Sanction amount, property valuation, processing fees, insurance, rate resets and lender-specific terms are not modelled unless explicitly entered.",
  },
  "loan-prepayment-calculator": {
    methodology: "The calculator first estimates the original repayment schedule, subtracts the planned immediate prepayment from the outstanding principal, and then models either a lower EMI at the same tenure or the same EMI with a shorter tenure.",
    limitations: "The model assumes the prepayment happens immediately and does not include lender-specific prepayment charges, rate changes, taxes or rounding differences.",
  },
  "fd-calculator": {
    methodology: "The FD estimate uses compound interest with the frequency selected by the user. The formula is principal × (1 + annual rate / compounding frequency)^(frequency × years).",
    limitations: "Banks may use product-specific compounding, payout and rounding conventions. Tax on interest and premature-closure penalties are not included.",
  },
  "rd-calculator": {
    methodology: "The RD estimate uses the common Indian recurring-deposit approximation with quarterly compounding and equal monthly deposits. It is presented as an estimate rather than a bank-specific maturity quote.",
    limitations: "Banks can apply their own deposit-date, rounding and product conventions. Always compare the result with the bank's disclosed maturity schedule before investing.",
  },
  "ppf-calculator": {
    methodology: "The PPF model uses the government-notified annual rate entered by the user and applies the scheme's monthly-balance principle. The annual-contribution option assumes the contribution is made at the start of the year; the monthly option assumes equal contributions at the start of each month.",
    limitations: "PPF rates are notified by the government and can change. The calculator is an illustration and does not model every account event, withdrawal, loan, default or extension rule.",
    source: { label: "India Post PPF rules", href: "https://www.indiapost.gov.in/" },
  },
  "ctc-to-in-hand": {
    methodology: "The estimate separates annual variable pay from fixed CTC, assumes 40% of the fixed component as basic salary and estimates employee PF using the selected percentage, subject to the simplified PF cap used by this tool.",
    limitations: "CTC structures differ widely between employers. HRA, professional tax, income tax, gratuity, insurance, employer PF, variable pay and other payroll components can materially change actual take-home pay.",
  },
  "income-tax-calculator": {
    methodology: "The calculator uses the published Indian individual tax slabs for AY 2026-27, applies the standard deduction assumption, regime-specific deductions, Section 87A rebate where applicable, surcharge and 4% health and education cess. It is intended for estimation rather than filing.",
    limitations: "Special-rate income, capital gains, dividends, agricultural income, marginal relief, detailed exemptions and several taxpayer-specific provisions are outside this simplified calculator. Verify complex cases against the Income Tax Department before filing.",
    source: { label: "Income Tax Department — AY 2026-27", href: "https://www.incometax.gov.in/" },
  },
};

export default function CalculatorPage({ title, category, description, slug, children, intro, howToUse, faq = [], related = [], methodology, limitations, source }: Props) {
  const url = absoluteUrl(`/tools/${slug}`);
  const pageGuidance = guidance[slug];
  const effectiveMethodology = methodology ?? pageGuidance?.methodology;
  const effectiveLimitations = limitations ?? pageGuidance?.limitations;
  const effectiveSource = source ?? pageGuidance?.source;
  const structuredBreadcrumb = [
    { name: "Home", url: absoluteUrl("/") },
    { name: title, url },
  ];
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: title,
        description,
        isPartOf: { "@id": `${absoluteUrl("/")}#website` },
      },
      {
        "@type": "WebApplication",
        "@id": `${url}#calculator`,
        name: title,
        url,
        applicationCategory: "FinanceApplication",
        operatingSystem: "All",
        isAccessibleForFree: true,
        description,
        publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: structuredBreadcrumb.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, item: item.url })),
      },
      ...(faq.length ? [{
        "@type": "FAQPage",
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      }] : []),
    ],
  };
  const filteredRelated = related.filter((item) => item.href !== `/tools/${slug}`);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader />
      <section className="container py-10 md:py-14">
        <div className="mx-auto max-w-5xl">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="hover:text-blue-600" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700">{category}</li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="font-medium text-slate-900">{title}</li>
            </ol>
          </nav>

          <p className="text-xs font-extrabold tracking-[.2em] text-blue-600">{category}</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">{description}</p>
          <div className="mt-9">{children}</div>

          {intro && <article className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-soft"><h2 className="text-2xl font-extrabold">About {title}</h2><p className="mt-3 leading-7 text-slate-600">{intro}</p></article>}

          <article className="mt-6 rounded-3xl border border-blue-100 bg-blue-50/60 p-6">
            <h2 className="text-xl font-extrabold text-slate-950">Want to understand this calculation?</h2>
            <p className="mt-2 leading-7 text-slate-700">Read our detailed guide for the assumptions, examples, common mistakes and practical ways to interpret the result.</p>
            <Link href={`/guides/${slug}-guide`} className="mt-4 inline-flex font-bold text-blue-700 hover:text-blue-800">Read the {title} guide →</Link>
          </article>

          {howToUse?.length ? <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-soft"><h2 className="text-2xl font-extrabold">How to use this calculator</h2><ol className="mt-4 list-decimal space-y-2 pl-6 text-slate-600">{howToUse.map((step) => <li key={step} className="leading-7">{step}</li>)}</ol></article> : null}

          {effectiveMethodology && <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-soft"><h2 className="text-2xl font-extrabold">Calculation methodology</h2><p className="mt-3 leading-7 text-slate-600">{effectiveMethodology}</p>{formulas[slug] && <div className="mt-5 rounded-2xl bg-slate-50 p-5"><h3 className="font-bold text-slate-900">Formula / calculation model</h3><p className="mt-2 text-sm leading-6 text-slate-600">{formulas[slug]}</p></div>}{effectiveSource && <p className="mt-4 text-sm text-slate-500">Reference: <a href={effectiveSource.href} target="_blank" rel="noopener noreferrer" className="font-semibold text-blue-700 underline">{effectiveSource.label}</a></p>}</article>}

          {effectiveLimitations && <article className="mt-6 rounded-3xl border border-amber-200 bg-amber-50/60 p-7"><h2 className="text-2xl font-extrabold">Important assumptions and limitations</h2><p className="mt-3 leading-7 text-slate-700">{effectiveLimitations}</p></article>}

          {faq.length ? <article className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-soft"><h2 className="text-2xl font-extrabold">Frequently asked questions</h2><div className="mt-5 space-y-6">{faq.map((item) => <div key={item.question}><h3 className="font-bold text-slate-900">{item.question}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.answer}</p></div>)}</div></article> : null}

          {filteredRelated.length ? <aside className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-soft"><h2 className="text-2xl font-extrabold">Related calculators</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{filteredRelated.map((item) => <Link key={item.href} href={item.href} className="rounded-2xl border border-slate-200 p-4 font-semibold transition hover:-translate-y-0.5 hover:border-blue-300 hover:text-blue-600">{item.title} →</Link>)}</div></aside> : null}

          <p className="mt-8 text-xs leading-5 text-slate-400">Disclaimer: Results are estimates for educational and informational purposes. They are not financial, tax, legal or investment advice. Rates, tax rules and product terms can change; verify current applicable rules before making financial decisions.</p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
