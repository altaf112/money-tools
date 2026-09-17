import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { EmiCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "Home Loan EMI Calculator India",
  description: "Use this home loan EMI calculator in India to estimate monthly EMI, total interest and total repayment for a housing loan.",
  slug: "home-loan-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="Home Loan EMI Calculator India"
      category="LOANS"
      description="Use this home loan EMI calculator in India to estimate monthly EMI, total interest and total repayment for a housing loan."
      slug="home-loan-calculator"
      intro="A home loan EMI calculator helps you compare housing-loan amounts, interest rates and repayment periods. The mathematical estimate can help with budgeting, but the actual sanction amount, interest rate, fees and repayment schedule depend on the lender and borrower profile."
      howToUse={["Enter the home loan amount you want to evaluate.","Enter the annual interest rate offered or assumed.","Select the repayment tenure.","Compare the estimated EMI, total interest and total repayment."]}
      faq={[{ question: "How is home loan EMI calculated?", answer: "Home loan EMI is commonly calculated using the standard reducing-balance EMI formula based on principal, monthly interest rate and number of payments." },{ question: "Does a floating-rate home loan always have the same EMI?", answer: "Not necessarily. When a lender changes the interest rate, the EMI, tenure or both may change according to the lender's repayment policy." },{ question: "Does the calculator tell me how much the bank will approve?", answer: "No. Loan eligibility and sanction depend on income, existing obligations, credit profile, property valuation, lender policy and other factors." },{ question: "Does the estimate include processing fees and insurance?", answer: "No. Lender-specific processing fees, insurance, legal costs and other charges are separate from this mathematical EMI estimate." }]}
      related={[{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "Loan Prepayment Calculator", href: "/tools/loan-prepayment-calculator" },{ title: "SIP Calculator", href: "/tools/sip-calculator" }]}
    >
      <EmiCalculator />
    </CalculatorPage>
  );
}
