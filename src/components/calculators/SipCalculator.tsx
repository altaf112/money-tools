"use client";

import { useMemo, useState } from "react";
import { Field, ResultCard, BarChart } from "./CalculatorUI";
import { money } from "@/lib/format";

export default function SipCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const r = useMemo(() => {
    const n = years * 12;
    const m = rate / 100 / 12;
    const invested = monthly * n;
    const future = m === 0 ? invested : monthly * ((Math.pow(1 + m, n) - 1) / m);
    return { invested, future, returns: future - invested };
  }, [monthly, rate, years]);

  return (
    <div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
          <div className="grid gap-5">
            <Field label="Monthly investment" value={monthly} setValue={setMonthly} />
            <Field label="Expected annual return" value={rate} setValue={setRate} max={50} prefix="" suffix="%" />
            <Field label="Investment period" value={years} setValue={setYears} min={1} max={50} prefix="" suffix=" Years" />
          </div>
        </div>
        <ResultCard
          title="Estimated value"
          value={money.format(r.future)}
          stats={[
            { label: "Total invested", value: money.format(r.invested) },
            { label: "Estimated returns", value: money.format(r.returns) },
          ]}
        />
      </div>
      <BarChart items={[{ label: "Invested amount", value: r.invested }, { label: "Estimated returns", value: r.returns }]} />
    </div>
  );
}
