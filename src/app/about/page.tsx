import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { SUPPORT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Money Tools and our goal of making financial calculations easier for Indian users.",
};

export default function AboutPage() {
  return (
    <InfoPage eyebrow="ABOUT MONEY TOOLS" title="About Money Tools" updated="17 September 2026">
      <p>
        Money Tools is an independent financial calculator website created to make common
        money calculations easier to understand.
      </p>
      <p>
        Our goal is simple: provide fast, easy-to-use calculators for Indian users and
        explain what the numbers mean instead of presenting a result without context.
      </p>

      <h2>What we provide</h2>
      <ul>
        <li>Investment calculators such as SIP, step-up SIP, lumpsum and CAGR.</li>
        <li>Loan calculators such as EMI, home loan and loan prepayment.</li>
        <li>Savings calculators such as FD, RD and PPF.</li>
        <li>Salary and tax tools that explain their assumptions clearly.</li>
      </ul>

      <h2>Our approach</h2>
      <p>
        We aim to keep our calculators transparent. Important assumptions are shown on
        calculator pages, and educational explanations are provided alongside the results.
        Calculators are not intended to replace professional financial, tax or legal advice.
      </p>

      <h2>Accuracy and updates</h2>
      <p>
        Financial rates, tax rules, contribution limits and other rules can change.
        We review calculation logic and update pages when applicable rules change. Where
        a calculation depends on a particular financial year or an external rate, the page
        should identify the relevant assumption or source.
      </p>

      <h2>Contact</h2>
      <p>
        If you find an error, have a correction, or want to suggest a calculator, contact
        us at <strong>{SUPPORT_EMAIL}</strong>. The support address is configured through the site environment before publishing.
      </p>
    </InfoPage>
  );
}
