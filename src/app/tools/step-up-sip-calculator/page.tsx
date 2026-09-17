import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { StepUpSipCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "Step-Up SIP Calculator India",
  description: "Use this Step-Up SIP calculator in India to estimate how increasing your monthly SIP every year can affect total investment, estimated returns and future value.",
  slug: "step-up-sip-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="Step-Up SIP Calculator India"
      category="INVESTMENTS"
      description="Use this Step-Up SIP calculator in India to estimate how increasing your monthly SIP every year can affect total investment, estimated returns and future value."
      slug="step-up-sip-calculator"
      intro="A Step-Up SIP increases the monthly investment by a chosen percentage, commonly once a year. This calculator models the higher contributions year by year and projects the resulting corpus using the assumed annual return. It is an illustration, not a guaranteed investment outcome."
      howToUse={["Enter your starting monthly SIP amount.","Enter the percentage by which you want to increase the SIP each year.","Enter the assumed annual return and investment period.","Review total contributions, estimated returns and projected future value."]}
      faq={[{ question: "What is a Step-Up SIP?", answer: "A Step-Up SIP is a recurring investment strategy where the SIP contribution is increased periodically, usually once each year." },{ question: "What does a 10% annual step-up mean?", answer: "A 10% step-up means the monthly SIP increases by 10% at the start of each new investment year. For example, a ₹10,000 SIP becomes ₹11,000 in year two." },{ question: "Does a Step-Up SIP guarantee higher returns?", answer: "No. Increasing the contribution increases the amount invested, but mutual-fund returns are market-linked and are not guaranteed." },{ question: "Can I use this calculator for long-term SIP planning?", answer: "Yes. You can model different contribution increases and investment periods, but the projected return is only an assumption and actual market performance can differ." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "Lumpsum Calculator", href: "/tools/lumpsum-calculator" },{ title: "CAGR Calculator", href: "/tools/cagr-calculator" }]}
    >
      <StepUpSipCalculator />
    </CalculatorPage>
  );
}
