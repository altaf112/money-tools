"use client";
import Link from "next/link";
import { Calculator, ChevronDown, IndianRupee, Menu, X } from "lucide-react";
import { useState } from "react";

const menus = [
  { label: "Investments", links: [["SIP Calculator","/tools/sip-calculator"],["Step-up SIP","/tools/step-up-sip-calculator"],["Lumpsum","/tools/lumpsum-calculator"],["CAGR","/tools/cagr-calculator"]] },
  { label: "Loans", links: [["EMI Calculator","/tools/emi-calculator"],["Home Loan","/tools/home-loan-calculator"],["Prepayment","/tools/loan-prepayment-calculator"]] },
  { label: "Savings", links: [["FD Calculator","/tools/fd-calculator"],["RD Calculator","/tools/rd-calculator"],["PPF Calculator","/tools/ppf-calculator"]] },
  { label: "Salary & Tax", links: [["CTC to In-hand","/tools/ctc-to-in-hand"],["Income Tax","/tools/income-tax-calculator"]] }
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="container flex h-[70px] items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20"><IndianRupee size={20}/></span>
          <span className="text-xl font-extrabold tracking-tight">Money<span className="text-blue-600">Tools</span></span>
        </Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {menus.map(m => (
            <div key={m.label} className="group relative">
              <button type="button" aria-haspopup="true" className="flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-600 hover:bg-slate-100 hover:text-slate-950">
                {m.label}<ChevronDown size={15}/>
              </button>
              <div className="invisible absolute left-0 top-full w-56 translate-y-2 rounded-2xl border border-slate-200 bg-white p-2 opacity-0 shadow-2xl transition group-hover:visible group-hover:translate-y-1 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-1 group-focus-within:opacity-100">
                {m.links.map(([label,href]) => <Link key={href} href={href} className="block rounded-xl px-3 py-2.5 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700">{label}</Link>)}
              </div>
            </div>
          ))}
          <Link href="/guides" className="ml-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:border-blue-200 hover:text-blue-700">Guides</Link>
          <Link href="/#calculators" className="ml-2 rounded-xl bg-slate-950 px-4 py-2.5 text-sm font-semibold text-white hover:bg-slate-800"><Calculator className="mr-1.5 inline" size={15}/>All Calculators</Link>
        </nav>
        <button aria-label="Open menu" onClick={() => setOpen(!open)} className="rounded-xl border border-slate-200 p-2 lg:hidden">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-slate-200 bg-white px-4 pb-5 lg:hidden">
        <div className="container pt-3"><Link onClick={()=>setOpen(false)} href="/guides" className="block border-b border-slate-100 py-3 text-sm font-semibold">Guides</Link>{menus.flatMap(m => m.links).map(([label,href]) => <Link onClick={()=>setOpen(false)} key={href} href={href} className="block border-b border-slate-100 py-3 text-sm font-semibold">{label}</Link>)}</div>
      </div>}
    </header>
  );
}
