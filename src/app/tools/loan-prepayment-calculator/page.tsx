import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { LoanPrepaymentCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "Loan Prepayment Calculator",
  description: "Estimate how an extra loan payment can affect outstanding principal, interest cost and repayment period.",
  slug: "loan-prepayment-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="Loan Prepayment Calculator"
      category="LOANS"
      description="Estimate how an extra loan payment can affect outstanding principal, interest cost and repayment period."
      slug="loan-prepayment-calculator"
      intro="Loan prepayment can reduce the outstanding principal and may reduce future interest. The actual effect depends on the lender\u2019s rules and whether the borrower reduces EMI, tenure, or both."
      howToUse={["Enter the outstanding loan details.", "Enter the planned prepayment amount.", "Choose the relevant repayment assumptions.", "Compare the estimated interest and balance impact."]}
      faq={[{ question: "What is loan prepayment?", answer: "It is an additional payment toward the outstanding principal before the scheduled loan maturity." },{ question: "Can prepayment charges apply?", answer: "They can, depending on the lender, loan type, agreement and applicable rules. Check your lender\u2019s current terms." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "Home Loan Calculator", href: "/tools/home-loan-calculator" }]}
    >
      <LoanPrepaymentCalculator />
    </CalculatorPage>
  );
}
