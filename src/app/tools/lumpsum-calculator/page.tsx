import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { LumpsumCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "Lumpsum Calculator",
  description: "Calculate the estimated future value of a one-time investment using an assumed annual return and investment period.",
  slug: "lumpsum-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="Lumpsum Calculator"
      category="INVESTMENTS"
      description="Calculate the estimated future value of a one-time investment using an assumed annual return and investment period."
      slug="lumpsum-calculator"
      intro="A lumpsum investment is a one-time investment rather than a recurring monthly contribution. Use this calculator to model how an initial amount could grow under an assumed annual rate."
      howToUse={["Enter the initial investment amount.", "Enter the assumed annual return.", "Enter the investment duration.", "Review the estimated maturity value and growth."]}
      faq={[{ question: "What is a lumpsum investment?", answer: "It is a one-time investment made at the beginning of the selected investment period." },{ question: "Are the calculated returns guaranteed?", answer: "No. The result is based on the return assumption entered and actual market performance can differ." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "CAGR Calculator", href: "/tools/cagr-calculator" }]}
    >
      <LumpsumCalculator />
    </CalculatorPage>
  );
}
