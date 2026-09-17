import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { CagrCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "CAGR Calculator",
  description: "Calculate CAGR in India from an initial value, final value and investment period. Understand the annualized growth rate.",
  slug: "cagr-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="CAGR Calculator"
      category="INVESTMENTS"
      description="Calculate CAGR in India from an initial value, final value and investment period. Understand the annualized growth rate."
      slug="cagr-calculator"
      intro="CAGR, or Compound Annual Growth Rate, expresses the annualized growth rate between a beginning value and an ending value over a period of time."
      howToUse={["Enter the starting value.", "Enter the ending value.", "Enter the number of years.", "Review the annualized CAGR percentage."]}
      faq={[{ question: "What does CAGR mean?", answer: "CAGR is the constant annual growth rate that would turn the starting value into the ending value over the selected period." },{ question: "Does CAGR show the actual year-by-year return?", answer: "No. CAGR is an annualized measure and does not show the path taken between the starting and ending values." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "CAGR Calculator", href: "/tools/cagr-calculator" }]}
    >
      <CagrCalculator />
    </CalculatorPage>
  );
}
