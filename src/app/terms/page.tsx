import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { SUPPORT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms governing use of Money Tools calculators and website content.",
};

export default function TermsPage() {
  return (
    <InfoPage eyebrow="LEGAL" title="Terms of Use" updated="17 September 2026">
      <h2>1. Acceptance</h2>
      <p>
        By accessing or using Money Tools, you agree to these Terms of Use. If you do not
        agree with these terms, please do not use the website.
      </p>

      <h2>2. Informational service</h2>
      <p>
        Money Tools provides calculators, explanations and general educational information.
        The website does not provide personalized investment, financial, tax or legal advice.
      </p>

      <h2>3. Calculator results</h2>
      <p>
        Calculator results are estimates based on the values and assumptions entered by the
        user. Actual outcomes may differ because rates, fees, taxes, compounding methods,
        product rules and other conditions may vary.
      </p>

      <h2>4. No guarantee</h2>
      <p>
        We do not guarantee that any result, estimate, projection, article or other
        information is complete, accurate, current or suitable for a particular purpose.
        Important financial decisions should be independently verified with the relevant
        institution or a qualified professional.
      </p>

      <h2>5. Acceptable use</h2>
      <p>
        You agree not to misuse the website, interfere with its operation, attempt
        unauthorized access, introduce malicious code, scrape the service in a manner that
        harms its operation, or use the website for unlawful purposes.
      </p>

      <h2>6. Intellectual property</h2>
      <p>
        Unless otherwise stated, website design, original text, calculator implementations,
        graphics and branding are owned by or licensed to Money Tools. You may use the
        calculators for personal informational purposes but may not reproduce substantial
        portions of the website without permission.
      </p>

      <h2>7. Third-party links</h2>
      <p>
        The website may link to third-party websites. We are not responsible for the
        content, availability, security or privacy practices of third-party services.
      </p>

      <h2>8. Advertising</h2>
      <p>
        The website may display third-party advertisements. Advertisements do not constitute
        endorsements by Money Tools, and users should independently evaluate products or
        services advertised.
      </p>

      <h2>9. Availability</h2>
      <p>
        We may modify, suspend or discontinue any part of the website without notice.
        We do not guarantee uninterrupted availability.
      </p>

      <h2>10. Changes</h2>
      <p>
        We may update these terms as the service evolves. Continued use of the website
        after changes are published constitutes acceptance of the updated terms.
      </p>

      <h2>11. Contact</h2>
      <p>Email: <strong>{SUPPORT_EMAIL}</strong></p>
    </InfoPage>
  );
}
