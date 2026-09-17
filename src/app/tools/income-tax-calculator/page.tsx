import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { IncomeTaxCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "Income Tax Calculator India",
  description: "Estimate income tax in India using the applicable financial year, tax regime and your entered income and deductions. Verify current official tax rules before filing.",
  slug: "income-tax-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="Income Tax Calculator India"
      category="TAX"
      description="Estimate income tax in India using the applicable financial year, tax regime and your entered income and deductions. Verify current official tax rules before filing."
      slug="income-tax-calculator"
      intro="Income tax calculations in India depend on the financial year, tax regime, income sources, deductions, exemptions, rebates, surcharge, cess and other rules. A production calculator must be kept aligned with current official provisions."
      howToUse={["Select the relevant financial year.", "Choose the applicable tax regime.", "Enter your taxable income and eligible deductions.", "Compare the estimated tax with official guidance before filing."]}
      faq={[{ question: "Which financial year should I select?", answer: "Use the financial year that matches the income you are calculating. Tax rules can change between financial years." },{ question: "Is this calculator a substitute for filing software or professional advice?", answer: "No. Use it as an estimate and verify the result against current official Income Tax Department guidance and your records." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "Income Tax Calculator", href: "/tools/income-tax-calculator" }]}
    >
      <IncomeTaxCalculator />
    </CalculatorPage>
  );
}
