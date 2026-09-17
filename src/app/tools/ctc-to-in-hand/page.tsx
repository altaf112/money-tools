import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { CtcCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "CTC to In-Hand Salary Calculator",
  description: "Estimate monthly in-hand salary from annual CTC using common salary components and deductions. Use the result as an estimate, not an official payroll calculation.",
  slug: "ctc-to-in-hand",
});

export default function Page() {
  return (
    <CalculatorPage
      title="CTC to In-Hand Salary Calculator"
      category="SALARY"
      description="Estimate monthly in-hand salary from annual CTC using common salary components and deductions. Use the result as an estimate, not an official payroll calculation."
      slug="ctc-to-in-hand"
      intro="CTC-to-in-hand calculations depend on salary structure, provident fund, professional tax, income tax, bonuses, allowances and employer-specific policies."
      howToUse={["Enter annual CTC.", "Review the assumed salary components and deductions.", "Adjust inputs where the calculator provides them.", "Compare the estimated monthly take-home with your payslip or offer letter."]}
      faq={[{ question: "Why is CTC different from in-hand salary?", answer: "CTC can include employer contributions, benefits, bonuses and other components that are not paid as monthly cash salary." },{ question: "Can this calculator replace my payslip?", answer: "No. Payroll calculations depend on your employer\u2019s exact structure and applicable tax and statutory rules." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "Income Tax Calculator", href: "/tools/income-tax-calculator" }]}
    >
      <CtcCalculator />
    </CalculatorPage>
  );
}
