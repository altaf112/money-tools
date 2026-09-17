import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { EmiCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "EMI Calculator",
  description: "Calculate monthly loan EMI, total interest and total repayment using loan amount, interest rate and tenure.",
  slug: "emi-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="EMI Calculator"
      category="LOANS"
      description="Calculate monthly loan EMI, total interest and total repayment using loan amount, interest rate and tenure."
      slug="emi-calculator"
      intro="An EMI calculator estimates the fixed periodic payment for a reducing-balance loan using the principal, annual interest rate and tenure."
      howToUse={["Enter the loan amount.", "Enter the annual interest rate.", "Enter the loan tenure.", "Review monthly EMI, total interest and total repayment."]}
      faq={[{ question: "How is EMI calculated?", answer: "For a standard reducing-balance loan, EMI is calculated using the principal, periodic interest rate and number of payments." },{ question: "Does the EMI calculator include bank fees?", answer: "Not unless those charges are included in the inputs. Processing fees, insurance and other charges may be separate." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "Home Loan Calculator", href: "/tools/home-loan-calculator" }]}
    >
      <EmiCalculator />
    </CalculatorPage>
  );
}
