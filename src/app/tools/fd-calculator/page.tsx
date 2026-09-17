import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { FdCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "FD Calculator",
  description: "Estimate fixed deposit maturity amount and interest from principal, interest rate, tenure and compounding frequency.",
  slug: "fd-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="FD Calculator"
      category="SAVINGS"
      description="Estimate fixed deposit maturity amount and interest from principal, interest rate, tenure and compounding frequency."
      slug="fd-calculator"
      intro="A fixed deposit calculator estimates maturity value using the principal, annual interest rate, tenure and compounding frequency. Actual bank products can have different rates, compounding conventions and tax treatment."
      howToUse={["Enter the FD principal.", "Enter the annual interest rate.", "Enter the tenure.", "Select the compounding frequency used by your assumption."]}
      faq={[{ question: "Is FD interest guaranteed?", answer: "The contracted interest rate on a fixed deposit is generally specified by the bank for the product and tenure, subject to its terms." },{ question: "Is FD interest taxable?", answer: "Interest income can be taxable. The applicable tax treatment depends on your circumstances and current tax rules." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "FD Calculator", href: "/tools/fd-calculator" }]}
    >
      <FdCalculator />
    </CalculatorPage>
  );
}
