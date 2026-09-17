import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import { guides } from "@/content/guides";

export const metadata: Metadata = {
  title: "Money Guides for India | ToolMoney",
  description: "Practical, original guides explaining investing, loans, savings, salary and tax calculations in plain language.",
  alternates: { canonical: absoluteUrl("/guides") },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl("/guides"),
    siteName: SITE_NAME,
    title: "Money Guides for India | ToolMoney",
    description: "Practical, original guides explaining investing, loans, savings, salary and tax calculations in plain language.",
  },
};

const categories = ["INVESTING", "LOANS", "HOME LOAN", "SAVINGS", "SALARY", "TAX"];

export default function GuidesIndex() {
  return (
    <main>
      <SiteHeader />
      <section className="hero-grid border-b border-slate-200/70 bg-white/60">
        <div className="container py-14 md:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-bold tracking-[.2em] text-blue-700">TOOLMONEY GUIDES</div>
            <h1 className="mt-4 text-4xl font-black tracking-[-.04em] text-slate-950 md:text-6xl">
              Understand the number before you act.
            </h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Original, practical explanations for the calculations people use when planning investments, loans, savings, salary and tax. Each guide explains the assumptions behind its calculator so you can interpret the result instead of treating it as a promise.
            </p>
          </div>
        </div>
      </section>

      <section className="container py-10 md:py-14">
        <div className="grid gap-5 md:grid-cols-2">
          {guides.map((guide) => (
            <article key={guide.slug} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft transition hover:-translate-y-1 hover:border-blue-200">
              <div className="text-xs font-bold tracking-[.15em] text-blue-700">{guide.category}</div>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950">{guide.title}</h2>
              <p className="mt-3 leading-7 text-slate-600">{guide.description}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href={`/guides/${guide.slug}`} className="rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-bold text-white">
                  Read guide
                </Link>
                <Link href={guide.calculator} className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-800">
                  Use calculator
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-slate-200 bg-white p-7">
          <h2 className="text-2xl font-extrabold text-slate-950">What these guides are for</h2>
          <div className="mt-4 grid gap-5 md:grid-cols-3">
            {categories.slice(0, 3).map((category) => (
              <div key={category}>
                <h3 className="font-extrabold text-slate-900">{category}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Learn the meaning behind the numbers, the assumptions used by the calculator and the questions worth asking before acting.
                </p>
              </div>
            ))}
            {categories.slice(3).map((category) => (
              <div key={category}>
                <h3 className="font-extrabold text-slate-900">{category}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Use the guide as a planning reference, then verify current product terms and rules with the relevant official source.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
