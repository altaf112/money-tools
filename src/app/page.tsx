import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import AllCalculators from "@/components/calculators/AllCalculators";
import Footer from "@/components/Footer";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import CalculatorSearch from "@/components/CalculatorSearch";

export const metadata: Metadata = {
  title: "Financial Calculators for Indians",
  description:
    "Free India-focused financial calculators for SIP, EMI, FD, RD, PPF, loans, salary and tax planning.",
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl("/"),
    siteName: SITE_NAME,
    title: "Financial Calculators for Indians",
    description:
      "Free India-focused financial calculators for SIP, EMI, FD, RD, PPF, loans, salary and tax planning.",
  },
};

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${absoluteUrl("/")}#website`,
        url: absoluteUrl("/"),
        name: SITE_NAME,
        description: "India-focused financial calculators and educational explanations.",
        inLanguage: "en-IN",
      },
      {
        "@type": "Organization",
        "@id": `${absoluteUrl("/")}#organization`,
        name: SITE_NAME,
        url: absoluteUrl("/"),
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader />
      <section className="hero-grid overflow-hidden border-b border-slate-200/70 bg-white/60">
        <div className="container relative py-16 text-center md:py-24">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700"><Sparkles size={14}/> Built for Indian money decisions</div>
          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-black tracking-[-.04em] text-slate-950 md:text-6xl lg:text-7xl">Your money. Your numbers. <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Made simple.</span></h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">Free financial calculators for SIPs, EMIs, savings, salary and more — designed for everyday Indian users.</p>
          <CalculatorSearch />
          <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-xs font-semibold text-slate-500"><span><Zap className="mr-1 inline text-blue-600" size={15}/>Instant calculations</span><span><ShieldCheck className="mr-1 inline text-blue-600" size={15}/>Transparent assumptions</span><span><CheckCircle2 className="mr-1 inline text-blue-600" size={15}/>Mobile friendly</span></div>
        </div>
      </section>
      <section className="container pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-extrabold text-slate-950">Investment calculators</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Estimate SIP, step-up SIP, lumpsum and CAGR scenarios using clear assumptions and easy-to-read results.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-extrabold text-slate-950">Loan calculators</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Compare EMI, home-loan and prepayment scenarios to understand principal, interest and repayment costs.</p>
          </article>
          <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
            <h2 className="text-xl font-extrabold text-slate-950">Savings & tax tools</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">Explore FD, RD, PPF, salary and income-tax estimates with assumptions clearly shown on every page.</p>
          </article>
        </div>
      </section>

      <AllCalculators/>

      <section className="container pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft md:p-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[.2em] text-blue-700">ABOUT TOOLMONEY</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 md:text-4xl">Financial calculations explained in plain language</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">ToolMoney is a free, India-focused collection of financial calculators and educational guides. The purpose is simple: help you understand the numbers behind common money decisions before you act on them. Instead of presenting a single result without context, our tools show the inputs, assumptions and important figures that influence the calculation.</p>
            <p className="mt-4 text-base leading-8 text-slate-600">You can use ToolMoney to explore different scenarios for investing, borrowing, saving, salary and tax planning. Change one assumption at a time and compare the result. This makes it easier to see how monthly contributions, investment periods, interest rates, loan tenure or other inputs can change an estimate.</p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-extrabold text-slate-950">How our calculators are designed</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Each calculator starts with a defined calculation method and clearly labelled inputs. Results are presented as estimates based on the values you enter. Where a result depends on an assumption, such as an expected investment return, the assumption is shown rather than hidden. This helps you understand what the number means and what it does not mean.</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">Our calculators are intended for education and planning. They are not a promise of future investment returns, a loan approval, a guaranteed tax liability or a substitute for documents issued by a bank, employer, government department or financial institution.</p>
            </article>
            <article className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-xl font-extrabold text-slate-950">A better way to use a calculator</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">Start with a realistic input rather than the result you hope to see. Then test a lower and higher scenario. For example, when exploring an investment projection, compare different monthly amounts and time periods. For a loan, compare tenure and interest assumptions and look at total repayment, not only the monthly EMI.</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">After calculating, read the matching ToolMoney guide. The guide explains the formula, gives examples and points out common limitations so that you can interpret the result correctly.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft md:p-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[.2em] text-blue-700">EXPLORE THE TOOLS</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Choose a calculator based on the question you are trying to answer</h2>
            <p className="mt-3 leading-7 text-slate-600">Different financial questions require different calculations. The short descriptions below can help you choose the right starting point.</p>
          </div>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">SIP Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Estimate the future value of regular monthly investments using your contribution, time period and assumed annual return.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">Step-Up SIP Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Explore a SIP where the monthly contribution increases periodically. Useful for comparing a flat contribution with a growing investment amount.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">Lumpsum Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Project how a one-time investment could grow under an assumed annual rate over a chosen period.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">CAGR Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Calculate the compound annual growth rate between a starting value and ending value over a specified number of years.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">EMI Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Estimate the monthly instalment and total repayment for a reducing-balance loan using principal, interest rate and tenure.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">Home Loan EMI Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Explore home-loan EMI, total interest and repayment scenarios and understand how loan amount, rate and tenure affect the estimate.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">Loan Prepayment Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Compare the effect of making an additional loan payment on the remaining repayment schedule and interest cost.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">FD Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Estimate maturity value and interest from a fixed deposit using the deposit amount, rate, tenure and applicable compounding assumption.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">RD Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Estimate the maturity value of recurring monthly deposits using the contribution, interest rate and deposit period.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">PPF Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Explore a long-term PPF projection using contributions and an assumed rate. Check current official rules separately because government schemes can change.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">CTC to In-Hand Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Break down an indicative salary estimate from CTC by considering common salary components and deductions.</p></article>
            <article className="rounded-2xl border border-slate-200 p-5"><h3 className="font-extrabold text-slate-950">Income Tax Calculator</h3><p className="mt-2 text-sm leading-6 text-slate-600">Use an estimate to understand how income, deductions and the selected tax assumptions can affect an indicative tax calculation.</p></article>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft md:p-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[.2em] text-blue-700">UNDERSTAND BEFORE YOU DECIDE</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Why the number on a calculator is only the beginning</h2>
            <p className="mt-4 leading-8 text-slate-600">A financial calculation is useful because it turns assumptions into a number that can be compared. It is not useful when the assumptions are ignored. An investment projection can change when the assumed return, contribution or time period changes. A loan estimate can change when the interest rate, tenure, fees or repayment structure changes. A salary estimate can differ from an actual payslip because employers use different compensation structures and deductions. A tax estimate can depend on the applicable financial year, income details and current rules.</p>
            <p className="mt-4 leading-8 text-slate-600">For that reason, ToolMoney encourages scenario-based planning. Calculate a base case, then change one input and calculate again. Look at the difference. This approach helps you understand sensitivity instead of treating one projected number as certain.</p>
            <p className="mt-4 leading-8 text-slate-600">For products, rates and government schemes, always confirm the current terms with the relevant bank, financial institution or official government source before making a decision. ToolMoney provides calculators and educational information; it does not guarantee returns, approve loans or provide personalised financial, tax or legal advice.</p>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="rounded-3xl border border-blue-100 bg-blue-50/70 p-7 md:p-10">
          <div className="max-w-4xl">
            <p className="text-xs font-bold tracking-[.2em] text-blue-700">MONEY GUIDES</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Learn the calculation before using the result</h2>
            <p className="mt-3 leading-7 text-slate-600">ToolMoney guides are written to answer the questions people commonly have after opening a calculator: What does this number mean? Which formula is being used? What assumptions are involved? What mistakes should I avoid? Start with a calculator for the numbers, then use the related guide for the context.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <Link href="/guides/sip-calculator-guide" className="font-semibold text-blue-700 hover:underline">SIP calculation guide →</Link>
              <Link href="/guides/step-up-sip-calculator-guide" className="font-semibold text-blue-700 hover:underline">Step-Up SIP guide →</Link>
              <Link href="/guides/lumpsum-calculator-guide" className="font-semibold text-blue-700 hover:underline">Lumpsum guide →</Link>
              <Link href="/guides/cagr-calculator-guide" className="font-semibold text-blue-700 hover:underline">CAGR guide →</Link>
              <Link href="/guides/emi-calculator-guide" className="font-semibold text-blue-700 hover:underline">EMI guide →</Link>
              <Link href="/guides/home-loan-emi-guide" className="font-semibold text-blue-700 hover:underline">Home-loan guide →</Link>
              <Link href="/guides/loan-prepayment-guide" className="font-semibold text-blue-700 hover:underline">Loan prepayment guide →</Link>
              <Link href="/guides/fd-calculator-guide" className="font-semibold text-blue-700 hover:underline">FD guide →</Link>
              <Link href="/guides/rd-calculator-guide" className="font-semibold text-blue-700 hover:underline">RD guide →</Link>
              <Link href="/guides/ppf-guide" className="font-semibold text-blue-700 hover:underline">PPF guide →</Link>
              <Link href="/guides/ctc-to-in-hand-salary-guide" className="font-semibold text-blue-700 hover:underline">Salary guide →</Link>
              <Link href="/guides/income-tax-calculator-guide" className="font-semibold text-blue-700 hover:underline">Income-tax guide →</Link>
            </div>
            <Link href="/guides" className="mt-7 inline-flex items-center font-bold text-blue-700">Browse all money guides <ArrowRight className="ml-2" size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft md:p-10">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-950">Frequently asked questions about ToolMoney</h2>
          <div className="mt-7 grid gap-6 md:grid-cols-2">
            <article><h3 className="font-extrabold text-slate-950">Are ToolMoney calculators free?</h3><p className="mt-2 text-sm leading-7 text-slate-600">Yes. The calculators are designed as free educational tools for people who want to explore financial numbers without building spreadsheets from scratch.</p></article>
            <article><h3 className="font-extrabold text-slate-950">Are calculator results guaranteed?</h3><p className="mt-2 text-sm leading-7 text-slate-600">No. Results are estimates based on the inputs and assumptions used. Investment returns, interest rates, taxes, fees and product terms can change.</p></article>
            <article><h3 className="font-extrabold text-slate-950">Should I use one calculation before making a decision?</h3><p className="mt-2 text-sm leading-7 text-slate-600">It is better to compare scenarios. Test different amounts, rates and time periods where relevant, and verify actual product terms with the responsible institution.</p></article>
            <article><h3 className="font-extrabold text-slate-950">Does ToolMoney provide financial advice?</h3><p className="mt-2 text-sm leading-7 text-slate-600">ToolMoney provides calculators and general educational information. It does not provide personalised investment, tax, legal or loan approval advice.</p></article>
          </div>
        </div>
      </section>

      <section className="container pb-12">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-soft md:p-10">
          <p className="text-xs font-bold tracking-[.2em] text-blue-700">OUR APPROACH</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950">Clear calculations, transparent assumptions and useful context</h2>
          <p className="mt-4 max-w-4xl leading-8 text-slate-600">We aim to keep financial information understandable without hiding the details that matter. Every tool should make it clear what you entered, what the calculation estimates and which assumptions can affect the outcome. When rules or product terms can change, readers should verify the latest information from the appropriate official or financial institution source.</p>
          <p className="mt-4 max-w-4xl leading-8 text-slate-600">If you find an error in a calculation or explanation, please contact us with the page URL and the issue you found. We can investigate the calculation and correct factual or technical errors when necessary. For more information about how ToolMoney creates and maintains its content, visit our <Link href="/editorial-policy" className="font-semibold text-blue-700 hover:underline">Editorial Policy</Link>.</p>
        </div>
      </section>

      <section className="container pb-8"><div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-8 text-white md:p-12"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.2em] text-blue-300">BUILT FOR CLARITY</p><h2 className="mt-3 text-3xl font-extrabold">Calculate first. Understand second. Plan better.</h2><p className="mt-3 leading-7 text-slate-300">Every calculator is designed to show the important numbers clearly, with assumptions and explanations instead of confusing spreadsheets.</p><Link href="/tools/sip-calculator" className="mt-6 inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950">Try SIP Calculator <ArrowRight className="ml-2" size={16}/></Link></div></div></section>
      <Footer/>
    </main>
  );
}
