import Link from "next/link";
const groups = [
 {title:"Investments",accent:"from-blue-600 to-violet-600",items:[["SIP Calculator","/tools/sip-calculator","📈","Estimate monthly SIP growth"],["Step-up SIP Calculator","/tools/step-up-sip-calculator","🚀","Increase your SIP yearly"],["Lumpsum Calculator","/tools/lumpsum-calculator","💰","Estimate one-time investment growth"],["CAGR Calculator","/tools/cagr-calculator","📊","Calculate annualized growth"]]},
 {title:"Loans",accent:"from-emerald-500 to-cyan-500",items:[["EMI Calculator","/tools/emi-calculator","🏠","Calculate your monthly EMI"],["Home Loan Calculator","/tools/home-loan-calculator","🏡","Plan a home purchase"],["Loan Prepayment Calculator","/tools/loan-prepayment-calculator","⚡","See interest savings"]]},
 {title:"Savings",accent:"from-orange-500 to-amber-500",items:[["FD Calculator","/tools/fd-calculator","🏦","Estimate FD maturity"],["RD Calculator","/tools/rd-calculator","🪙","Estimate recurring deposit maturity"],["PPF Calculator","/tools/ppf-calculator","🛡️","Plan long-term PPF growth"]]},
 {title:"Salary & Tax",accent:"from-fuchsia-500 to-rose-500",items:[["CTC to In-hand","/tools/ctc-to-in-hand","💼","Estimate take-home salary"],["Income Tax Calculator","/tools/income-tax-calculator","🧾","Estimate tax liability"]]}
];
export default function AllCalculators(){
 return <section id="calculators" className="container py-16">
  <div className="mb-10"><p className="text-xs font-extrabold tracking-[.2em] text-blue-600">EXPLORE TOOLS</p><h2 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">Everything you need to plan your money</h2><p className="mt-3 max-w-2xl text-slate-500">Start with a calculation, understand the result, and explore related tools.</p></div>
  <div className="space-y-12">{groups.map(g=><div key={g.title}><div className="mb-4 flex items-center gap-3"><span className={`h-9 w-1.5 rounded-full bg-gradient-to-b ${g.accent}`}/><div><h3 className="text-xl font-bold">{g.title}</h3></div></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{g.items.map(([name,href,icon,text])=><Link key={href} href={href} className="card-hover rounded-2xl border border-slate-200 bg-white p-5 shadow-soft"><div className="flex items-center justify-between"><span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-xl">{icon}</span><span className="text-slate-300">↗</span></div><h4 className="mt-5 font-bold">{name}</h4><p className="mt-1 text-sm leading-5 text-slate-500">{text}</p></Link>)}</div></div>)}</div>
 </section>
}
