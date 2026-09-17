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
      <AllCalculators/>
      <section className="container pb-8"><div className="rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-blue-950 p-8 text-white md:p-12"><div className="max-w-2xl"><p className="text-xs font-bold tracking-[.2em] text-blue-300">BUILT FOR CLARITY</p><h2 className="mt-3 text-3xl font-extrabold">Calculate first. Understand second. Plan better.</h2><p className="mt-3 leading-7 text-slate-300">Every calculator is designed to show the important numbers clearly, with assumptions and explanations instead of confusing spreadsheets.</p><Link href="/tools/sip-calculator" className="mt-6 inline-flex items-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950">Try SIP Calculator <ArrowRight className="ml-2" size={16}/></Link></div></div></section>
      <Footer/>
    </main>
  );
}
