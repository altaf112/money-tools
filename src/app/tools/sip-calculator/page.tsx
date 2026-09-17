import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import SipCalculator from "@/components/calculators/SipCalculator";

export const metadata = createToolMetadata({
  title: "SIP Calculator India",
  description: "Use this SIP calculator for India to estimate your total investment, expected returns and future value from a monthly SIP, assumed return and investment period.",
  slug: "sip-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="SIP Calculator India"
      category="INVESTMENTS"
      description="Use this SIP calculator for India to estimate your total investment, expected returns and future value from a monthly SIP, assumed return and investment period."
      slug="sip-calculator"
      intro="A SIP calculator helps estimate how a regular monthly investment could grow over time. Enter your monthly SIP amount, an assumed annual return and the investment period. This calculator assumes each SIP instalment is invested at the end of the month and compounds at a constant monthly rate. The result is an illustration, not a guaranteed return."
      howToUse={["Enter your monthly SIP amount.", "Enter an assumed annual return percentage.", "Choose the investment duration in years.", "Review the invested amount, estimated returns and projected value."]}
      faq={[
      { question: "How does a SIP calculator work?", answer: "It estimates the future value of regular monthly investments using the monthly rate derived from the assumed annual return and the number of monthly instalments." },
      { question: "Are SIP returns guaranteed?", answer: "No. Mutual fund returns are market-linked and actual returns can be higher or lower than the assumed rate." },
      { question: "What happens if I invest ₹10,000 every month?", answer: "Enter ₹10,000 as the monthly investment, then choose your assumed annual return and investment period. The calculator will show the total amount invested, estimated returns and projected value." },
      { question: "Can I use this calculator for mutual funds in India?", answer: "Yes, it is designed as an educational projection for regular mutual-fund SIP investments in India. Actual results depend on market performance, NAVs, fees and taxes." }
    ]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "CAGR Calculator", href: "/tools/cagr-calculator" }]}
    >
      <SipCalculator />
    </CalculatorPage>
  );
}
