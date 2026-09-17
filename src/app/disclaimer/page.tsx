import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { SUPPORT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Financial calculator and informational disclaimer for Money Tools.",
};

export default function DisclaimerPage() {
  return (
    <InfoPage eyebrow="IMPORTANT" title="Disclaimer" updated="17 September 2026">
      <h2>General information only</h2>
      <p>
        Money Tools provides calculators and general educational information. The website
        is not a financial adviser, investment adviser, tax adviser, lawyer, lender,
        broker or other professional adviser.
      </p>

      <h2>Calculator estimates</h2>
      <p>
        Calculator results are illustrative estimates. They depend on the inputs and
        mathematical assumptions used. Actual investment returns, loan costs, deposit
        maturity amounts, salary deductions and tax liabilities may differ.
      </p>

      <h2>Market-linked investments</h2>
      <p>
        Projections for SIPs, mutual funds and other market-linked investments are not
        guaranteed returns. Past performance does not guarantee future results.
      </p>

      <h2>Loans and deposits</h2>
      <p>
        Actual lender or bank calculations can differ because of processing fees,
        insurance, rate changes, daily or monthly interest calculations, rounding,
        repayment dates and product-specific terms.
      </p>

      <h2>Tax calculations</h2>
      <p>
        Tax rules, deductions, rebates, slabs and rates can change. A tax calculator on
        this website should be treated as an estimate and not as a substitute for current
        government guidance or professional tax advice. Always verify the applicable
        financial year and your individual circumstances.
      </p>

      <h2>Before making a financial decision</h2>
      <p>
        Verify important figures with the relevant bank, lender, fund house, government
        source or qualified professional. Do not make a financial decision solely from
        information on this website.
      </p>

      <h2>Contact</h2>
      <p>Email: <strong>{SUPPORT_EMAIL}</strong></p>
    </InfoPage>
  );
}
