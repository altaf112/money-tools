import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { StepUpSipCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "Step-Up SIP Calculator",
  description: "Calculate the projected value of a SIP that increases by a fixed percentage every year. Compare total investment with estimated returns.",
  slug: "step-up-sip-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="Step-Up SIP Calculator"
      category="INVESTMENTS"
      description="Calculate the projected value of a SIP that increases by a fixed percentage every year. Compare total investment with estimated returns."
      slug="step-up-sip-calculator"
      intro="A step-up SIP increases the monthly investment periodically, commonly once a year. This calculator shows how increasing contributions can change the projected corpus over time."
      howToUse={["Enter your starting monthly SIP.", "Enter the annual step-up percentage.", "Enter the assumed annual return and investment period.", "Review the projected investment and returns."]}
      faq={[{ question: "What is a step-up SIP?", answer: "It is a SIP strategy where the contribution is increased periodically, usually each year." },{ question: "Does increasing the SIP guarantee higher returns?", answer: "No. Increasing the investment amount increases the amount invested, but market-linked returns are not guaranteed." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "CAGR Calculator", href: "/tools/cagr-calculator" }]}
    >
      <StepUpSipCalculator />
    </CalculatorPage>
  );
}
