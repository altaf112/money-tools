import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { EmiCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "EMI Calculator India",
  description: "Use this EMI calculator in India to estimate monthly EMI, total interest and total repayment for a reducing-balance loan.",
  slug: "emi-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="EMI Calculator India"
      category="LOANS"
      description="Use this EMI calculator in India to estimate monthly EMI, total interest and total repayment for a reducing-balance loan."
      slug="emi-calculator"
      intro="An EMI calculator estimates the regular payment for a reducing-balance loan using the loan amount, annual interest rate and repayment tenure. It helps you compare loan scenarios before evaluating an actual lender offer."
      howToUse={["Enter the loan amount.","Enter the annual interest rate.","Enter the repayment tenure in years.","Review monthly EMI, total interest and total repayment."]}
      faq={[{ question: "How is EMI calculated?", answer: "For a standard reducing-balance loan, EMI = P × r × (1+r)^n / ((1+r)^n − 1), where P is principal, r is the monthly interest rate and n is the number of monthly payments." },{ question: "Does a lower interest rate reduce EMI?", answer: "Yes. Keeping the loan amount and tenure unchanged, a lower interest rate generally reduces the EMI and total interest." },{ question: "Does a longer tenure reduce EMI?", answer: "Usually yes, but a longer tenure can increase the total interest paid because the loan remains outstanding for more months." },{ question: "Does this calculator include bank fees?", answer: "No. Processing fees, insurance, legal charges, taxes and other lender-specific costs are not included unless they are part of the loan amount you enter." }]}
      related={[{ title: "Home Loan EMI Calculator", href: "/tools/home-loan-calculator" },{ title: "Loan Prepayment Calculator", href: "/tools/loan-prepayment-calculator" },{ title: "SIP Calculator", href: "/tools/sip-calculator" }]}
    >
      <EmiCalculator />
    </CalculatorPage>
  );
}
