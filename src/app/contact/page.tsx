import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { SUPPORT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Money Tools for corrections, questions, suggestions or business enquiries.",
};

export default function ContactPage() {
  return (
    <InfoPage eyebrow="GET IN TOUCH" title="Contact Us" updated="17 September 2026">
      <p>
        We welcome corrections, calculator suggestions, feedback and business enquiries.
      </p>

      <h2>General support</h2>
      <p>
        Email: <strong>{SUPPORT_EMAIL}</strong>
      </p>

      <h2>Report a calculation issue</h2>
      <p>
        Please include the calculator name, the values you entered, the result you expected,
        and why you believe the result may be incorrect. This helps us investigate the issue.
      </p>

      <h2>Business enquiries</h2>
      <p>
        For advertising, partnership, sponsorship or other business enquiries, use the same
        email address with the subject line “Business Enquiry”.
      </p>

      <p className="text-sm text-slate-500">The support address shown above is configured through the site environment.</p>
    </InfoPage>
  );
}
