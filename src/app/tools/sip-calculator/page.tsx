import CalculatorPage from "@/components/CalculatorPage";
import { createToolMetadata } from "@/lib/seo";
import SipCalculator from "@/components/calculators/SipCalculator";

export const metadata = createToolMetadata({
  title: "SIP Calculator",
  description: "Estimate SIP investment value in India using monthly investment, expected annual return and investment duration. See total investment, estimated returns and future value.",
  slug: "sip-calculator",
});

export default function Page() {
  return (
    <CalculatorPage
      title="SIP Calculator"
      category="INVESTMENTS"
      description="Estimate SIP investment value in India using monthly investment, expected annual return and investment duration. See total investment, estimated returns and future value."
      slug="sip-calculator"
      intro="A SIP calculator helps estimate the future value of regular investments made at fixed intervals. Enter the amount you plan to invest each month, an assumed annual return and the investment period. The result is an estimate, not a guaranteed return."
      howToUse={["Enter your monthly SIP amount.", "Enter an assumed annual return percentage.", "Choose the investment duration in years.", "Review the invested amount, estimated returns and projected value."]}
      faq={[{ question: "How does a SIP calculator work?", answer: "It uses a standard monthly compounding model to estimate the future value of recurring investments based on the assumptions entered." },{ question: "Are SIP returns guaranteed?", answer: "No. Mutual fund returns are market-linked and actual returns can be higher or lower than the assumed rate." }]}
      related={[{ title: "SIP Calculator", href: "/tools/sip-calculator" },{ title: "EMI Calculator", href: "/tools/emi-calculator" },{ title: "CAGR Calculator", href: "/tools/cagr-calculator" }]}
    >
      <SipCalculator />
    </CalculatorPage>
  );
}
