import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";

export const metadata: Metadata = {
  title: "Advertising & Monetization Disclosure",
  description: "Advertising and monetization disclosure for Money Tools.",
};

export default function AdvertisingPage() {
  return (
    <InfoPage eyebrow="TRANSPARENCY" title="Advertising & Monetization Disclosure" updated="17 September 2026">
      <p>
        Money Tools may earn revenue from advertising, affiliate relationships,
        sponsorships, software products or other commercial arrangements.
      </p>

      <h2>Advertising</h2>
      <p>
        We may display advertisements from Google AdSense and other advertising partners.
        Advertisements are selected and served by the relevant advertising technology and
        may be based on contextual information or, where permitted and consented to,
        information used for personalized advertising.
      </p>

      <h2>Affiliate links</h2>
      <p>
        In the future, some pages may contain affiliate links. If you purchase a product
        or service through an affiliate link, Money Tools may receive a commission at no
        additional cost to you.
      </p>

      <h2>Editorial independence</h2>
      <p>
        Advertising or affiliate relationships do not change the mathematical result of
        our calculators. Sponsored or commercial relationships will be disclosed where
        applicable.
      </p>

      <h2>No financial endorsement</h2>
      <p>
        The presence of an advertisement or affiliate link does not mean Money Tools
        recommends or guarantees the advertised product or service.
      </p>
    </InfoPage>
  );
}
