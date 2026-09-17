import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { RdCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "RD Calculator",
  description: "Estimate recurring deposit maturity value from a monthly deposit, interest rate, tenure and compounding assumption.",
  slug: "rd-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="RD Calculator"
      category="SAVINGS"
      description="Estimate recurring deposit maturity value from a monthly deposit, interest rate, tenure and compounding assumption."
      slug="rd-calculator"
      intro="A recurring deposit involves regular deposits over a selected tenure. This calculator provides an estimate based on the inputs and compounding assumption; actual bank calculations may vary."
      howToUse={["Enter the monthly deposit.", "Enter the annual interest rate.", "Enter the tenure.", "Review total deposits, estimated interest and maturity value."]}
      faq={[{ question: "How does an RD work?", answer: "An RD generally involves depositing a fixed amount periodically for a defined tenure, with interest paid according to the bank\u2019s product terms." },{ question: "Will the result exactly match my bank?", answer: "Not necessarily. Banks can use product-specific calculation conventions, dates and rates." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "FD Calculator", href: "/tools/fd-calculator" }]}
    >
      <RdCalculator />
    </CalculatorPage>
  );
}
