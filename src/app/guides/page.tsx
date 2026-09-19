import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import { guides } from "@/content/guides";

export const metadata: Metadata = {
  title: "Money Guides for India | ToolMoney",
  description:
    "Practical India-focused guides for understanding SIPs, loans, savings, salary and tax calculations, with examples, assumptions and links to the related calculators.",
  alternates: { canonical: absoluteUrl("/guides") },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl("/guides"),
    siteName: SITE_NAME,
    title: "Money Guides for India | ToolMoney",
    description:
      "Practical India-focused guides for understanding SIPs, loans, savings, salary and tax calculations, with examples, assumptions and links to the related calculators.",
  },
};

const categoryDetails: Record<string, { intro: string; note: string }> = {
  INVESTING: {
    intro:
      "These guides explain how contribution amount, time and return assumptions interact in SIP, step-up SIP, lumpsum and CAGR calculations.",
    note:
      "For market-linked examples, the numbers are illustrations rather than promises of future performance.",
  },
  LOANS: {
    intro:
      "Use these explanations to understand EMI, interest, tenure and prepayment calculations before comparing different repayment scenarios.",
    note:
      "Actual loan costs depend on the lender, rate, fees, dates and terms in your loan documents.",
  },
  "HOME LOAN": {
    intro:
      "The home-loan material focuses on the relationship between principal, interest rate, tenure and total repayment so you can read an EMI projection correctly.",
    note:
      "A calculator estimate does not replace the sanction letter or the lender's current terms.",
  },
  SAVINGS: {
    intro:
      "These guides cover common savings calculations such as FD, RD and PPF, including the assumptions that affect an estimated maturity value.",
    note:
      "Rates and scheme rules can change. Check the relevant institution or official source for current terms before acting.",
  },
  SALARY: {
    intro:
      "The salary guide explains how CTC components can translate into estimated monthly in-hand pay and why deductions make the two numbers different.",
    note:
      "Payroll deductions vary by employer, salary structure, benefits and applicable tax rules.",
  },
  TAX: {
    intro:
      "Tax guidance focuses on understanding the calculation inputs and comparing an estimate with the rules that apply to your situation.",
    note:
      "Tax rules can change and individual circumstances matter, so verify current provisions before filing or making a financial decision.",
  },
};

const categoryOrder = ["INVESTING", "LOANS", "HOME LOAN", "SAVINGS", "SALARY", "TAX"];

export default function GuidesIndex() {
  const groupedGuides = categoryOrder.map((category) => ({
    category,
    guides: guides.filter((guide) => guide.category === category),
  }));

  return (
    <main>
      <SiteHeader />

      <section className="hero-grid border-b border-slate-200/70 bg-white/60">
        <div className="container py-14 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-bold tracking-[.2em] text-blue-700">
              TOOLMONEY GUIDES
            </div>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] text-slate-950 md:text-6xl">
              Understand the number before you act.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              These guides are written to sit alongside ToolMoney&apos;s calculators.
              Instead of stopping at a result, each guide explains what the inputs
              mean, how the calculation is modelled, where the estimate can differ
              from real life, and what to check before using the number in a plan.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="mb-10 rounded-3xl border border-blue-100 bg-blue-50/60 p-6 md:p-8">
          <h2 className="text-2xl font-extrabold text-slate-950">
            How to use the ToolMoney guides
          </h2>
          <div className="mt-4 grid gap-5 text-sm leading-7 text-slate-600 md:grid-cols-3">
            <div>
              <h3 className="font-extrabold text-slate-900">1. Start with the question</h3>
              <p className="mt-1">
                Decide whether you are trying to estimate an investment value,
                compare a loan repayment scenario, understand a savings maturity
                amount, or translate salary into an approximate take-home figure.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900">2. Read the assumptions</h3>
              <p className="mt-1">
                Check the contribution schedule, interest or return assumption,
                time period and calculation convention before interpreting the
                result.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900">3. Compare scenarios</h3>
              <p className="mt-1">
                Change one important input at a time. Comparing scenarios is more
                useful than treating one projected number as a guaranteed outcome.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-10">
          {groupedGuides.map(({ category, guides: categoryGuides }) => {
            if (categoryGuides.length === 0) return null;
            const details = categoryDetails[category];

            return (
              <section key={category} aria-labelledby={`category-${category.toLowerCase().replaceAll(" ", "-")}`}>
                <div className="mb-5 max-w-3xl">
                  <div className="text-xs font-bold tracking-[.18em] text-blue-700">
                    {category}
                  </div>
                  <h2
                    id={`category-${category.toLowerCase().replaceAll(" ", "-")}`}
                    className="mt-2 text-2xl font-black tracking-tight text-slate-950 md:text-3xl"
                  >
                    {category === "INVESTING"
                      ? "Investing and compounding"
                      : category === "LOANS"
                        ? "Loan repayment and borrowing"
                        : category === "HOME LOAN"
                          ? "Home-loan planning"
                          : category === "SAVINGS"
                            ? "Savings and fixed-return calculations"
                            : category === "SALARY"
                              ? "Salary and take-home pay"
                              : "Tax calculation"}
                  </h2>
                  <p className="mt-2 leading-7 text-slate-600">{details.intro}</p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  {categoryGuides.map((guide) => (
                    <article
                      key={guide.slug}
                      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200"
                    >
                      <div className="text-xs font-bold tracking-[.15em] text-blue-700">
                        {guide.category}
                      </div>
                      <h3 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">
                        {guide.title}
                      </h3>
                      <p className="mt-3 leading-7 text-slate-600">
                        {guide.description}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-3">
                        <Link
                          href={`/guides/${guide.slug}`}
                          className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white"
                        >
                          Read guide
                        </Link>
                        <Link
                          href={guide.calculator}
                          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-800"
                        >
                          {guide.calculatorLabel}
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  <span className="font-semibold text-slate-700">Planning note:</span>{" "}
                  {details.note}
                </p>
              </section>
            );
          })}
        </div>

        <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 md:p-8">
          <h2 className="text-2xl font-extrabold text-slate-950">
            What ToolMoney guides do — and do not do
          </h2>
          <div className="mt-4 grid gap-6 text-sm leading-7 text-slate-600 md:grid-cols-2">
            <div>
              <h3 className="font-extrabold text-slate-900">They help you understand the numbers</h3>
              <p className="mt-1">
                Each guide connects a calculator to the underlying inputs and
                calculation method. Examples are included to make the relationship
                between the inputs and the estimated result easier to follow.
              </p>
            </div>
            <div>
              <h3 className="font-extrabold text-slate-900">They are not personalised financial advice</h3>
              <p className="mt-1">
                ToolMoney does not know your complete financial situation. Calculator
                results are estimates based on the information entered and the stated
                assumptions. For current rates, tax provisions and product-specific
                terms, check the relevant official source.
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}
