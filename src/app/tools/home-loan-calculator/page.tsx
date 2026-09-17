import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { EmiCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "Home Loan EMI Calculator",
  description: "Estimate home loan EMI, total interest and total repayment for an Indian home loan using loan amount, interest rate and tenure.",
  slug: "home-loan-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="Home Loan EMI Calculator"
      category="LOANS"
      description="Estimate home loan EMI, total interest and total repayment for an Indian home loan using loan amount, interest rate and tenure."
      slug="home-loan-calculator"
      intro="A home loan EMI calculator helps you understand the monthly payment and overall interest cost for a housing loan. Actual loan terms depend on the lender and borrower profile."
      howToUse={["Enter the required home loan amount.", "Enter the applicable annual interest rate.", "Select the repayment tenure.", "Compare EMI and total interest before evaluating a loan offer."]}
      faq={[{ question: "Does a home loan EMI stay fixed?", answer: "For a standard fixed EMI schedule on a floating-rate loan, the lender may change tenure or EMI when the rate changes." },{ question: "Does this calculator show the exact bank offer?", answer: "No. It provides a mathematical estimate. The lender\u2019s sanction terms and charges determine the actual repayment schedule." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "Home Loan Calculator", href: "/tools/home-loan-calculator" }]}
    >
      <EmiCalculator />
    </CalculatorPage>
  );
}
