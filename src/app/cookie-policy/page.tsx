import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { SUPPORT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How Money Tools may use cookies and similar technologies.",
};

export default function CookiePolicyPage() {
  return (
    <InfoPage eyebrow="PRIVACY" title="Cookie Policy" updated="17 September 2026">
      <h2>What are cookies?</h2>
      <p>
        Cookies are small files or identifiers stored by a website or third-party service
        in a browser. Similar technologies can include local storage, pixels and tags.
      </p>

      <h2>How we may use them</h2>
      <ul>
        <li>Essential functionality and security.</li>
        <li>Remembering preferences where applicable.</li>
        <li>Understanding aggregate website usage.</li>
        <li>Displaying, measuring and limiting advertising.</li>
      </ul>

      <h2>Advertising cookies</h2>
      <p>
        If Google AdSense or another advertising service is enabled, that service and its
        partners may use cookies or similar technologies for advertising, measurement and
        related purposes, subject to applicable policies and user choices.
      </p>

      <h2>Managing cookies</h2>
      <p>
        Browser settings can allow you to block or delete cookies. Blocking some cookies
        may affect website functionality. Where applicable, the website may also provide
        consent controls for advertising and similar technologies.
      </p>

      <h2>Contact</h2>
      <p>Email: <strong>{SUPPORT_EMAIL}</strong></p>
    </InfoPage>
  );
}
