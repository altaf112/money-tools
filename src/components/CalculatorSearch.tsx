"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

const calculators = [
  ["SIP Calculator", "/tools/sip-calculator", "investment monthly SIP"],
  ["Step-Up SIP Calculator", "/tools/step-up-sip-calculator", "investment yearly increase"],
  ["Lumpsum Calculator", "/tools/lumpsum-calculator", "investment one time"],
  ["CAGR Calculator", "/tools/cagr-calculator", "investment annual growth"],
  ["EMI Calculator", "/tools/emi-calculator", "loan monthly EMI"],
  ["Home Loan EMI Calculator", "/tools/home-loan-calculator", "loan home housing"],
  ["Loan Prepayment Calculator", "/tools/loan-prepayment-calculator", "loan interest savings"],
  ["FD Calculator", "/tools/fd-calculator", "savings fixed deposit"],
  ["RD Calculator", "/tools/rd-calculator", "savings recurring deposit"],
  ["PPF Calculator", "/tools/ppf-calculator", "savings public provident fund"],
  ["CTC to In-hand Salary Calculator", "/tools/ctc-to-in-hand", "salary take home"],
  ["Income Tax Calculator India", "/tools/income-tax-calculator", "tax income tax"],
] as const;

export default function CalculatorSearch() {
  const [query, setQuery] = useState("");
  const matches = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return calculators.filter(([name, , keywords]) => `${name} ${keywords}`.toLowerCase().includes(q)).slice(0, 5);
  }, [query]);

  return (
    <div className="relative mx-auto mt-9 max-w-2xl">
      <div className="glass shadow-soft flex items-center gap-2 rounded-2xl border border-slate-200 p-2 text-left">
        <Search className="ml-3 shrink-0 text-slate-400" size={20} aria-hidden="true" />
        <input
          aria-label="Search calculators"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search SIP, EMI, FD, salary..."
          className="min-w-0 flex-1 bg-transparent px-1 py-3 outline-none"
        />
        <Link href="/#calculators" className="rounded-xl bg-slate-950 px-5 py-3 text-sm font-bold text-white hover:bg-slate-800">Explore</Link>
      </div>
      {matches.length > 0 && (
        <div className="absolute left-0 right-0 top-full z-40 mt-2 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 text-left shadow-2xl">
          {matches.map(([name, href]) => (
            <Link key={href} href={href} onClick={() => setQuery("")} className="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-700">{name}</Link>
          ))}
        </div>
      )}
    </div>
  );
}
