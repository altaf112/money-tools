"use client";

import { useMemo, useState } from "react";
import { Field, ResultCard, BarChart, SelectField } from "./CalculatorUI";

const fmt = (n: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(n) ? n : 0);

const emiFor = (principal: number, annualRate: number, months: number) => {
  if (months <= 0 || principal <= 0) return 0;
  const monthlyRate = annualRate / 1200;
  if (monthlyRate === 0) return principal / months;
  return (
    (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
    (Math.pow(1 + monthlyRate, months) - 1)
  );
};

export function EmiCalculator() {
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);

  const r = useMemo(() => {
    const n = years * 12;
    const emi = emiFor(principal, rate, n);
    const total = emi * n;
    return { emi, total, interest: Math.max(0, total - principal) };
  }, [principal, rate, years]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="grid gap-5">
          <Field label="Loan amount" value={principal} setValue={setPrincipal} />
          <Field label="Interest rate" value={rate} setValue={setRate} max={30} prefix="" suffix="% p.a." />
          <Field label="Loan tenure" value={years} setValue={setYears} min={1} max={40} prefix="" suffix=" Years" />
        </div>
      </div>
      <div>
        <ResultCard title="Monthly EMI" value={fmt(r.emi)} stats={[
          { label: "Principal", value: fmt(principal) },
          { label: "Total interest", value: fmt(r.interest) },
          { label: "Total payment", value: fmt(r.total) },
          { label: "Tenure", value: `${years} years` },
        ]} />
        <BarChart items={[{ label: "Principal", value: principal }, { label: "Interest", value: r.interest }]} />
      </div>
    </div>
  );
}

export function StepUpSipCalculator() {
  const [monthly, setMonthly] = useState(10000);
  const [step, setStep] = useState(10);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(15);

  const r = useMemo(() => {
    let invested = 0;
    let future = 0;
    const m = rate / 1200;
    for (let year = 0; year < years; year++) {
      const payment = monthly * Math.pow(1 + step / 100, year);
      for (let month = 0; month < 12; month++) {
        invested += payment;
        future = m === 0 ? future + payment : future * (1 + m) + payment;
      }
    }
    return { invested, future, returns: future - invested };
  }, [monthly, step, rate, years]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <div className="grid gap-5">
          <Field label="Starting monthly SIP" value={monthly} setValue={setMonthly} />
          <Field label="Annual SIP increase" value={step} setValue={setStep} max={50} prefix="" suffix="%" />
          <Field label="Expected annual return" value={rate} setValue={setRate} max={50} prefix="" suffix="%" />
          <Field label="Investment period" value={years} setValue={setYears} min={1} max={50} prefix="" suffix=" Years" />
        </div>
      </div>
      <ResultCard title="Estimated value" value={fmt(r.future)} stats={[
        { label: "Total invested", value: fmt(r.invested) },
        { label: "Estimated returns", value: fmt(r.returns) },
      ]} />
    </div>
  );
}

export function LumpsumCalculator() {
  const [amount, setAmount] = useState(200000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);
  const result = amount * Math.pow(1 + rate / 100, years);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <Field label="Initial investment" value={amount} setValue={setAmount} />
        <Field label="Expected annual return" value={rate} setValue={setRate} max={50} prefix="" suffix="%" />
        <Field label="Investment period" value={years} setValue={setYears} min={1} max={50} prefix="" suffix=" Years" />
      </div>
      <ResultCard title="Estimated maturity value" value={fmt(result)} stats={[
        { label: "Initial investment", value: fmt(amount) },
        { label: "Estimated returns", value: fmt(result - amount) },
      ]} />
    </div>
  );
}

export function FdCalculator() {
  const [principal, setPrincipal] = useState(500000);
  const [rate, setRate] = useState(7);
  const [years, setYears] = useState(5);
  const [frequency, setFrequency] = useState("4");

  const maturity = useMemo(() => {
    const compounds = Number(frequency);
    return principal * Math.pow(1 + rate / (100 * compounds), compounds * years);
  }, [principal, rate, years, frequency]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <Field label="Deposit amount" value={principal} setValue={setPrincipal} />
        <Field label="Interest rate" value={rate} setValue={setRate} max={20} prefix="" suffix="% p.a." />
        <Field label="Tenure" value={years} setValue={setYears} min={1} max={20} prefix="" suffix=" Years" />
        <SelectField label="Compounding frequency" value={frequency} setValue={setFrequency} options={[
          { value: "1", label: "Yearly" },
          { value: "2", label: "Half-yearly" },
          { value: "4", label: "Quarterly" },
          { value: "12", label: "Monthly" },
        ]} />
      </div>
      <ResultCard title="Estimated maturity value" value={fmt(maturity)} stats={[
        { label: "Principal", value: fmt(principal) },
        { label: "Interest earned", value: fmt(maturity - principal) },
      ]} />
    </div>
  );
}

export function RdCalculator() {
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(6.5);
  const [years, setYears] = useState(5);

  const result = useMemo(() => {
    const months = years * 12;
    const quarterlyRate = rate / 400;
    const maturity = quarterlyRate === 0
      ? monthly * months
      : monthly * ((Math.pow(1 + quarterlyRate, months / 3) - 1) / (1 - Math.pow(1 + quarterlyRate, -1 / 3)));
    const deposits = monthly * months;
    return { maturity, deposits, interest: maturity - deposits };
  }, [monthly, rate, years]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <Field label="Monthly deposit" value={monthly} setValue={setMonthly} />
        <Field label="Interest rate" value={rate} setValue={setRate} max={15} prefix="" suffix="% p.a." />
        <Field label="Tenure" value={years} setValue={setYears} min={1} max={10} prefix="" suffix=" Years" />
      </div>
      <ResultCard title="Estimated maturity" value={fmt(result.maturity)} stats={[
        { label: "Total deposits", value: fmt(result.deposits) },
        { label: "Estimated interest", value: fmt(result.interest) },
      ]} />
    </div>
  );
}

export function PpfCalculator() {
  const [annual, setAnnual] = useState(150000);
  const [rate, setRate] = useState(7.1);
  const [years, setYears] = useState(15);
  const [mode, setMode] = useState("annual");

  const value = useMemo(() => {
    const contribution = Math.min(150000, Math.max(0, annual));
    const monthlyContribution = contribution / 12;
    const annualRate = rate / 100;
    let balance = 0;

    for (let year = 0; year < years; year++) {
      let interest = 0;
      if (mode === "annual") {
        balance += contribution;
        interest = balance * annualRate;
      } else {
        for (let month = 0; month < 12; month++) {
          balance += monthlyContribution;
          interest += balance * (annualRate / 12);
        }
      }
      balance += interest;
    }
    return balance;
  }, [annual, rate, years, mode]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <Field label="Annual contribution" value={annual} setValue={setAnnual} max={150000} />
        <Field label="Assumed PPF interest rate" value={rate} setValue={setRate} max={15} prefix="" suffix="% p.a." />
        <Field label="Period" value={years} setValue={setYears} min={1} max={15} prefix="" suffix=" Years" />
        <SelectField label="Contribution assumption" value={mode} setValue={setMode} options={[
          { value: "annual", label: "Annual contribution at the start of the year" },
          { value: "monthly", label: "Equal monthly contributions" },
        ]} />
      </div>
      <ResultCard title="Illustrative maturity value" value={fmt(value)} stats={[
        { label: "Total contributions", value: fmt(annual * years) },
        { label: "Illustrative interest", value: fmt(value - annual * years) },
      ]} />
    </div>
  );
}

export function CagrCalculator() {
  const [start, setStart] = useState(100000);
  const [end, setEnd] = useState(250000);
  const [years, setYears] = useState(5);
  const cagr = start > 0 && years > 0 && end >= 0 ? (Math.pow(end / start, 1 / years) - 1) * 100 : 0;

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <Field label="Starting value" value={start} setValue={setStart} />
        <Field label="Ending value" value={end} setValue={setEnd} />
        <Field label="Period" value={years} setValue={setYears} min={1} max={50} prefix="" suffix=" Years" />
      </div>
      <ResultCard title="CAGR" value={`${cagr.toFixed(2)}%`} stats={[
        { label: "Growth in value", value: fmt(end - start) },
        { label: "Starting value", value: fmt(start) },
      ]} />
    </div>
  );
}

export function LoanPrepaymentCalculator() {
  const [principal, setPrincipal] = useState(2500000);
  const [rate, setRate] = useState(8.5);
  const [years, setYears] = useState(20);
  const [prepay, setPrepay] = useState(500000);
  const [mode, setMode] = useState("emi");

  const result = useMemo(() => {
    const n = years * 12;
    const emi = emiFor(principal, rate, n);
    const originalInterest = Math.max(0, emi * n - principal);
    const newPrincipal = Math.max(0, principal - Math.min(prepay, principal));
    if (newPrincipal === 0) return { emi, newEmi: 0, newPrincipal, savedInterest: originalInterest, newTenure: 0 };

    if (mode === "emi") {
      const newEmi = emiFor(newPrincipal, rate, n);
      const newInterest = Math.max(0, newEmi * n - newPrincipal);
      return { emi, newEmi, newPrincipal, savedInterest: Math.max(0, originalInterest - newInterest), newTenure: n };
    }

    let balance = newPrincipal;
    let months = 0;
    const monthlyRate = rate / 1200;
    while (balance > 0.01 && months < n) {
      const interest = balance * monthlyRate;
      const principalPart = Math.min(balance, Math.max(0, emi - interest));
      balance -= principalPart;
      months += 1;
      if (monthlyRate === 0) break;
    }
    const newInterest = Math.max(0, emi * months - newPrincipal);
    return { emi, newEmi: emi, newPrincipal, savedInterest: Math.max(0, originalInterest - newInterest), newTenure: months };
  }, [principal, rate, years, prepay, mode]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <Field label="Outstanding loan" value={principal} setValue={setPrincipal} />
        <Field label="Interest rate" value={rate} setValue={setRate} max={30} prefix="" suffix="% p.a." />
        <Field label="Remaining tenure" value={years} setValue={setYears} min={1} max={40} prefix="" suffix=" Years" />
        <Field label="Planned prepayment" value={prepay} setValue={setPrepay} />
        <SelectField label="After prepayment" value={mode} setValue={setMode} options={[
          { value: "emi", label: "Reduce EMI, keep tenure" },
          { value: "tenure", label: "Keep EMI, reduce tenure" },
        ]} />
      </div>
      <ResultCard title="Estimated interest saved" value={fmt(result.savedInterest)} stats={[
        { label: "Current EMI", value: fmt(result.emi) },
        { label: "New EMI", value: fmt(result.newEmi) },
        { label: "Balance after prepayment", value: fmt(result.newPrincipal) },
        { label: "New tenure", value: `${Math.ceil(result.newTenure / 12)} years` },
      ]} />
    </div>
  );
}

const NEW_SLABS = [
  [400000, 0], [800000, 0.05], [1200000, 0.1], [1600000, 0.15], [2000000, 0.2], [2400000, 0.25], [Infinity, 0.3],
] as const;

function slabTax(income: number, slabs: readonly (readonly [number, number])[], base = 0) {
  let tax = base;
  let lower = 0;
  for (const [upper, rate] of slabs) {
    if (income <= lower) break;
    const taxableSlice = Math.min(income, upper) - lower;
    tax += taxableSlice * rate;
    if (income <= upper) break;
    lower = upper;
  }
  return tax;
}

function oldRegimeTax(income: number, age: string) {
  const first = age === "80+" ? 500000 : age === "60-79" ? 300000 : 250000;
  const slabs: [number, number][] = [
    [first, 0],
    [500000, 0.05],
    [1000000, 0.2],
    [Infinity, 0.3],
  ];
  return slabTax(income, slabs);
}

function surchargeRate(income: number, regime: "new" | "old") {
  if (income <= 5000000) return 0;
  if (income <= 10000000) return 0.1;
  if (income <= 20000000) return 0.15;
  if (income <= 50000000) return 0.25;
  return regime === "new" ? 0.25 : 0.37;
}

export function IncomeTaxCalculator() {
  const [income, setIncome] = useState(1200000);
  const [deduction, setDeduction] = useState(150000);
  const [regime, setRegime] = useState<"new" | "old">("new");
  const [age, setAge] = useState("under-60");

  const result = useMemo(() => {
    const standardDeduction = regime === "new" ? 75000 : 50000;
    const allowedDeductions = regime === "new" ? 0 : Math.max(0, deduction);
    const taxable = Math.max(0, income - standardDeduction - allowedDeductions);
    const baseTax = regime === "new" ? slabTax(taxable, NEW_SLABS) : oldRegimeTax(taxable, age);
    const rebate = regime === "new" && taxable <= 1200000 ? Math.min(baseTax, 60000) : regime === "old" && taxable <= 500000 ? Math.min(baseTax, 12500) : 0;
    const taxAfterRebate = Math.max(0, baseTax - rebate);

    const liabilityBeforeCess = (amount: number) => {
      const rate = surchargeRate(amount, regime);
      return taxAfterRebate + taxAfterRebate * rate;
    };
    let surcharge = taxAfterRebate * surchargeRate(taxable, regime);
    const surchargeThresholds = [5000000, 10000000, 20000000, 50000000];
    for (const threshold of surchargeThresholds) {
      if (taxable > threshold) {
        const thresholdBaseTax = regime === "new" ? slabTax(threshold, NEW_SLABS) : oldRegimeTax(threshold, age);
        const thresholdRebate = regime === "new" && threshold <= 1200000 ? Math.min(thresholdBaseTax, 60000) : regime === "old" && threshold <= 500000 ? Math.min(thresholdBaseTax, 12500) : 0;
        const thresholdTax = Math.max(0, thresholdBaseTax - thresholdRebate);
        const thresholdLiability = thresholdTax * (1 + surchargeRate(threshold, regime));
        const excessIncome = taxable - threshold;
        const currentLiability = liabilityBeforeCess(taxable);
        if (currentLiability > thresholdLiability + excessIncome) {
          surcharge = Math.max(0, thresholdLiability + excessIncome - taxAfterRebate);
        }
      }
    }
    const cess = (taxAfterRebate + surcharge) * 0.04;
    const total = taxAfterRebate + surcharge + cess;
    return { standardDeduction, taxable, baseTax, rebate, surcharge, cess, total };
  }, [income, deduction, regime, age]);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <Field label="Annual salary / pension income" value={income} setValue={setIncome} max={100000000} />
        <SelectField label="Tax regime" value={regime} setValue={(value: string) => setRegime(value as "new" | "old")} options={[
          { value: "new", label: "New tax regime" },
          { value: "old", label: "Old tax regime" },
        ]} />
        <SelectField label="Age group" value={age} setValue={setAge} options={[
          { value: "under-60", label: "Below 60 years" },
          { value: "60-79", label: "60 to 79 years" },
          { value: "80+", label: "80 years or above" },
        ]} />
        {regime === "old" && <Field label="Eligible deductions (old regime)" value={deduction} setValue={setDeduction} max={10000000} />}
        <p className="text-xs leading-5 text-slate-500">The calculator applies the published AY 2026-27 individual slab, standard-deduction, rebate, surcharge and 4% cess assumptions. It is intended for salary or pension estimates rather than complex returns.</p>
      </div>
      <ResultCard title="Estimated total tax" value={fmt(result.total)} stats={[
        { label: "Taxable income", value: fmt(result.taxable) },
        { label: "Tax before rebate", value: fmt(result.baseTax) },
        { label: "Rebate", value: fmt(result.rebate) },
        { label: "Cess + surcharge", value: fmt(result.cess + result.surcharge) },
      ]} />
    </div>
  );
}

export function CtcCalculator() {
  const [ctc, setCtc] = useState(1200000);
  const [bonus, setBonus] = useState(100000);
  const [pf, setPf] = useState(12);
  const fixed = Math.max(0, ctc - Math.min(bonus, ctc));
  const basic = fixed * 0.4;
  const employeePf = Math.min((basic * pf) / 100, 1800 * 12);
  const monthly = Math.max(0, (fixed - employeePf) / 12);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="grid gap-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
        <Field label="Annual CTC" value={ctc} setValue={setCtc} />
        <Field label="Annual bonus / variable" value={bonus} setValue={setBonus} />
        <Field label="Employee PF assumption" value={pf} setValue={setPf} max={20} prefix="" suffix="% of basic" />
      </div>
      <ResultCard title="Estimated monthly take-home" value={fmt(monthly)} stats={[
        { label: "Annual fixed component", value: fmt(fixed) },
        { label: "Estimated employee PF", value: fmt(employeePf) },
        { label: "Illustrative basic", value: fmt(basic) },
      ]} />
    </div>
  );
}
