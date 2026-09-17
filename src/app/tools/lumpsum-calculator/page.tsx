import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { LumpsumCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "Lumpsum Calculator India",
  description: "Use this Lumpsum calculator in India to estimate the future value, investment gains and total value of a one-time investment using an assumed annual return.",
  slug: "lumpsum-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="Lumpsum Calculator India"
      category="INVESTMENTS"
      description="Use this Lumpsum calculator in India to estimate the future value, investment gains and total value of a one-time investment using an assumed annual return."
      slug="lumpsum-calculator"
      intro="A lumpsum investment is a one-time investment made at the beginning of an investment period. This calculator applies the assumed annual growth rate to estimate how the initial amount could grow over time. Actual market returns can vary from year to year."
      howToUse={["Enter the amount you want to invest as a one-time investment.","Enter the assumed annual return.","Enter the investment period in years.","Review the estimated maturity value and estimated gain."]}
      faq={[{ question: "What is a lumpsum investment?", answer: "A lumpsum investment is a one-time investment rather than a series of recurring contributions." },{ question: "How is lumpsum growth calculated?", answer: "The calculator uses compound growth: FV = P × (1 + r)^n, where P is the initial investment, r is the annual rate and n is the number of years." },{ question: "Is a lumpsum return guaranteed?", answer: "No. The result is based on the return assumption entered. Market-linked investments can rise or fall and actual returns can differ." },{ question: "What is better, SIP or lumpsum?", answer: "They are different investment approaches. SIP spreads contributions over time, while lumpsum invests a larger amount at once. The suitable approach depends on cash flow, risk and investment goals." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "Step-Up SIP Calculator", href: "/tools/step-up-sip-calculator" },{ title: "CAGR Calculator", href: "/tools/cagr-calculator" }]}
    >
      <LumpsumCalculator />
    </CalculatorPage>
  );
}
