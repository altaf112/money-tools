"use client";

import { money } from "@/lib/format";

export { money };

export function Field({ label, value, setValue, min = 0, max = 100000000, step = 1, prefix = "₹", suffix }: any) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 focus-within:border-blue-500 focus-within:bg-white">
        {prefix && <span className="text-slate-400">{prefix}</span>}
        <input
          type="number"
          min={min}
          max={max}
          step={step}
          value={value}
          inputMode="decimal"
          onChange={(e) => setValue(Math.min(max, Math.max(min, Number(e.target.value))))}
          className="w-full bg-transparent px-2 py-3 outline-none"
        />
        {suffix && <span className="text-xs text-slate-400">{suffix}</span>}
      </div>
    </label>
  );
}

export function SelectField({ label, value, setValue, options }: { label: string; value: string; setValue: (value: string) => void; options: { value: string; label: string }[] }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-slate-700">{label}</span>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 outline-none focus:border-blue-500 focus:bg-white"
      >
        {options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
      </select>
    </label>
  );
}

export function Slider({ label, value, setValue, min, max, step = 1, suffix = "", prefix = "₹" }: any) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span className="font-semibold text-slate-700">{label}</span>
        <span className="font-bold text-blue-700">{prefix}{value.toLocaleString("en-IN")}{suffix}</span>
      </div>
      <input className="mt-3 w-full" type="range" min={min} max={max} step={step} value={value} onChange={(e) => setValue(Number(e.target.value))} />
      <div className="mt-1 flex justify-between text-[11px] text-slate-400"><span>{prefix}{min.toLocaleString("en-IN")}{suffix}</span><span>{prefix}{max.toLocaleString("en-IN")}{suffix}</span></div>
    </div>
  );
}

export function Stat({ label, value }: any) {
  return <div className="rounded-xl border border-white/10 bg-white/5 p-4"><p className="text-xs text-slate-400">{label}</p><p className="mt-1 font-bold text-white">{value}</p></div>;
}

export function ResultCard({ title, value, stats }: any) {
  return <div className="rounded-3xl bg-slate-950 p-6 shadow-2xl shadow-slate-900/10"><p className="text-sm text-slate-400">{title}</p><p className="mt-2 text-4xl font-extrabold tracking-tight text-white">{value}</p><div className="mt-7 grid grid-cols-2 gap-3">{stats.map((s: any) => <Stat key={s.label} {...s} />)}</div></div>;
}

export function BarChart({ items }: any) {
  const max = Math.max(...items.map((x: any) => Math.max(0, x.value)), 1);
  return <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5"><p className="mb-4 text-sm font-bold">Breakdown</p>{items.map((x: any) => <div key={x.label} className="mb-4 last:mb-0"><div className="mb-1 flex justify-between text-xs"><span className="text-slate-500">{x.label}</span><span className="font-bold">{money.format(x.value)}</span></div><div className="h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-gradient-to-r from-blue-600 to-violet-500" style={{ width: `${Math.max(0, x.value) / max * 100}%` }} /></div></div>)}</div>;
}

export function CalculatorLayout({ children, side }: any) { return <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">{children}{side}</div>; }
