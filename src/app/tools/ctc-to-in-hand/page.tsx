import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import { CtcCalculator } from "@/components/calculators/GenericCalculators";

export const metadata = createToolMetadata({
  title: "CTC to In-Hand Salary Calculator India: Monthly Take-Home Pay",
  description: "Estimate monthly take-home salary from CTC in India. Understand CTC full form, gross salary, employee PF, income-tax TDS, variable pay and common deductions.",
  slug: "ctc-to-in-hand",
});

export default function Page() {
  return (
    <CalculatorPage
      title="CTC to In-Hand Salary Calculator"
      category="SALARY"
      description="Estimate monthly take-home pay from annual CTC in India. Learn what Cost to Company means and how PF, tax, variable pay and employer benefits can affect your bank credit."
      slug="ctc-to-in-hand"
      intro="CTC stands for Cost to Company: the estimated total annual cost an employer incurs for employing you. It is not the same as gross salary or monthly in-hand salary. CTC may include fixed pay, employer provident fund contributions, gratuity, insurance, bonuses and benefits that are not paid as monthly cash. Use this calculator for an estimate, then compare the assumptions with your offer letter and payroll structure."
      howToUse={["Enter your annual CTC as shown in the offer letter.", "Check whether the CTC includes variable pay, employer PF, gratuity, insurance or other benefits.", "Review the salary components and deductions represented by the calculator; adjust available inputs to match your structure.", "Compare the estimated monthly take-home with the fixed-pay portion of your offer letter and confirm the final figure with payroll."]}
      faq={[
        { question: "What is the full form of CTC in salary?", answer: "CTC stands for Cost to Company. It is the total annual cost an employer attributes to employing a person and may include salary, employer contributions, benefits and variable compensation. It is not necessarily the amount paid into the employee’s bank account." },
        { question: "What does CTC mean in a job offer?", answer: "In a job offer, CTC is a broad annual compensation figure. Review the fixed salary, variable pay, employer PF, gratuity, insurance and other benefits to understand which parts are monthly cash and which are benefits or conditional payments." },
        { question: "What is the difference between CTC, gross salary and in-hand salary?", answer: "CTC may include employer-paid contributions and benefits. Gross salary generally refers to earnings before employee-side deductions. In-hand salary is the amount credited after applicable deductions and adjustments. Definitions and components can vary by employer, so check the salary annexure." },
        { question: "How do I calculate in-hand salary from CTC?", answer: "Start with annual CTC, identify fixed cash salary, and account for employer contributions and benefits included in CTC but not paid as monthly cash. Then subtract employee PF, professional tax, income-tax TDS and other payroll deductions. Treat bonuses and variable pay separately." },
        { question: "Why is CTC different from monthly in-hand salary?", answer: "CTC can include employer PF contributions, gratuity, insurance, bonuses and benefits in addition to salary. Employee-side deductions such as PF, professional tax and income-tax TDS can further reduce the amount credited to your bank account." },
        { question: "Is variable pay included in monthly take-home salary?", answer: "Not necessarily. Variable pay may be paid quarterly, annually or only when performance conditions are met. Check your offer letter and avoid treating the full variable component as guaranteed monthly salary." },
        { question: "Does the new tax regime affect in-hand salary?", answer: "Yes. The income-tax TDS estimate depends on the applicable tax year, your taxable income and eligible deductions or rebates. Confirm current rules and your employer's payroll assumptions before relying on an estimate." },
        { question: "Can this calculator replace my payslip?", answer: "No. Payroll calculations depend on your employer's exact salary structure, declarations, statutory deductions and applicable tax rules. Use your payslip or payroll team to confirm the actual amount." }
      ]}
      related={[{ title: "CTC Full Form and Meaning Guide", href: "/guides/ctc-to-in-hand-salary-guide" },{ title: "Income Tax Calculator", href: "/tools/income-tax-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" }]}
    >
      <CtcCalculator />
    </CalculatorPage>
  );
}
