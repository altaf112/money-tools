import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { CagrCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "CAGR Calculator India",
  description: "Calculate CAGR in India from an initial value, final value and investment period. Understand the annualized growth rate of an investment.",
  slug: "cagr-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="CAGR Calculator India"
      category="INVESTMENTS"
      description="Calculate CAGR in India from an initial value, final value and investment period. Understand the annualized growth rate of an investment."
      slug="cagr-calculator"
      intro="CAGR, or Compound Annual Growth Rate, is an annualized rate that connects a beginning value to an ending value over a specified period. It is useful for comparing growth over different time periods, but it does not show the actual ups and downs experienced during the period."
      howToUse={["Enter the starting value.","Enter the ending value.","Enter the investment period in years.","Review the annualized CAGR percentage."]}
      faq={[{ question: "What is CAGR?", answer: "CAGR stands for Compound Annual Growth Rate. It represents the constant annualized growth rate that would turn the starting value into the ending value over the selected period." },{ question: "What is the CAGR formula?", answer: "CAGR = (Ending Value / Starting Value)^(1 / Years) − 1." },{ question: "Does CAGR show year-by-year returns?", answer: "No. CAGR summarizes the beginning and ending values into one annualized rate and does not show volatility or the path between them." },{ question: "Is CAGR the same as XIRR?", answer: "No. CAGR is suited to a beginning value and ending value over a period. XIRR is generally used when there are multiple cash flows occurring on different dates." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "Lumpsum Calculator", href: "/tools/lumpsum-calculator" },{ title: "Step-Up SIP Calculator", href: "/tools/step-up-sip-calculator" }]}
    >
      <CagrCalculator />
    </CalculatorPage>
  );
}
