import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { PpfCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "PPF Calculator",
  description: "Estimate PPF maturity value from annual contribution, investment period and assumed PPF interest rate.",
  slug: "ppf-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="PPF Calculator"
      category="SAVINGS"
      description="Estimate PPF maturity value from annual contribution, investment period and assumed PPF interest rate."
      slug="ppf-calculator"
      intro="The Public Provident Fund is a government-backed small-savings scheme with rules governing contributions, interest, tenure and withdrawals. Use current official rules when making decisions."
      howToUse={["Enter your planned annual contribution.", "Enter the assumed annual interest rate.", "Enter the investment period.", "Review the illustrative projected value."]}
      faq={[{ question: "Is the PPF interest rate fixed forever?", answer: "No. The PPF interest rate is notified by the government and can change over time." },{ question: "Can I withdraw from PPF anytime?", answer: "PPF has specific rules for partial withdrawals, loans and maturity. Check the current government or official scheme rules before acting." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "FD Calculator", href: "/tools/fd-calculator" }]}
    >
      <PpfCalculator />
    </CalculatorPage>
  );
}
