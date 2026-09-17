import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Editorial & Accuracy Policy",
  description: "How Money Tools develops, reviews and updates financial calculator content.",
};

export default function EditorialPolicyPage() {
  return (
    <InfoPage eyebrow="OUR STANDARDS" title="Editorial & Accuracy Policy" updated="17 September 2026">
      <h2>Original content</h2>
      <p>
        Money Tools aims to publish original explanations, calculator logic and educational
        material. We do not intend to copy or republish articles from other websites as
        our own.
      </p>

      <h2>Calculation methodology</h2>
      <p>
        Each calculator should document the main assumptions used to produce its result.
        Where a standard mathematical formula is used, the page may explain the formula
        in plain language.
      </p>

      <h2>Financial-year-sensitive information</h2>
      <p>
        Tax rules, contribution limits and government schemes can change. Pages that depend
        on such rules should identify the relevant financial year or effective date and be
        reviewed when official rules change.
      </p>

      <h2>Corrections</h2>
      <p>
        If you find a calculation or factual error, please contact us with the page URL,
        input values and details of the suspected error. We will investigate and, when
        appropriate, update the page.
      </p>

      <h2>Sources</h2>
      <p>
        When current rules or rates materially affect a calculator, we aim to use
        authoritative sources such as government departments, regulators, banks or official
        product documentation and identify relevant sources on the applicable page.
      </p>

      <h2>Important limitation</h2>
      <p>
        This policy describes our publishing approach and does not guarantee that every
        page is error-free at every moment.
      </p>
    </InfoPage>
  );
}
