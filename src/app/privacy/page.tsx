import type { Metadata } from "next";
import InfoPage from "@/components/InfoPage";
import { SUPPORT_EMAIL } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Money Tools privacy policy covering cookies, analytics, advertising and information submitted by users.",
};

export default function PrivacyPage() {
  return (
    <InfoPage eyebrow="LEGAL" title="Privacy Policy" updated="17 September 2026">
      <p>
        This Privacy Policy explains how Money Tools (“we”, “us” or “our”) may collect,
        use and disclose information when you visit or use our website.
      </p>

      <h2>1. Information you provide</h2>
      <p>
        Most calculators can be used without creating an account. If you contact us by
        email or another communication method, we may receive information that you choose
        to provide, such as your name, email address and the contents of your message.
      </p>

      <h2>2. Calculator inputs</h2>
      <p>
        Calculator inputs are generally processed in your browser. We do not need your
        personal financial information to provide ordinary calculator results. Do not enter
        sensitive personal information into free-text fields unless a page specifically asks
        for it.
      </p>

      <h2>3. Automatically collected information</h2>
      <p>
        Like many websites, our hosting, analytics and security services may process
        technical information such as IP address, browser type, device information,
        approximate location derived from IP, referring page, pages viewed and timestamps.
        The exact information collected depends on the services enabled on the website.
      </p>

      <h2>4. Cookies and similar technologies</h2>
      <p>
        Money Tools may use cookies, local storage and similar technologies for essential
        website functionality, analytics, preferences and advertising. Third-party
        advertising partners may also use cookies or similar technologies to deliver and
        measure advertisements.
      </p>

      <h2>5. Google AdSense and advertising</h2>
      <p>
        We may use Google AdSense or other advertising services to display advertisements.
        Third-party vendors, including Google, may use cookies to serve and measure ads
        based on a user&apos;s prior visits to this or other websites, subject to applicable
        policies and user choices.
      </p>
      <p>
        Google explains how information is used on sites that use Google services and how
        users can control advertising choices. See Google&apos;s
        <a
          href="https://policies.google.com/technologies/partner-sites"
          target="_blank"
          rel="noreferrer"
          className="font-semibold text-blue-700 hover:text-blue-800"
        >
          information about partner sites and apps
        </a>
        and
        <a
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noreferrer"
          className="ml-1 font-semibold text-blue-700 hover:text-blue-800"
        >
          Google Ads Settings
        </a>.
      </p>

      <h2>6. Analytics</h2>
      <p>
        We may use analytics services to understand aggregate website usage, such as which
        pages receive visits and how users navigate the site. Analytics configuration may
        change as the website develops.
      </p>

      <h2>7. How information is used</h2>
      <ul>
        <li>To operate and maintain the website.</li>
        <li>To improve calculators, content and user experience.</li>
        <li>To understand aggregate website traffic and performance.</li>
        <li>To respond to support or correction requests.</li>
        <li>To protect the website from abuse, fraud and security threats.</li>
        <li>To display and measure advertising where advertising is enabled.</li>
      </ul>

      <h2>8. Third-party services</h2>
      <p>
        The website may use third-party providers for hosting, analytics, advertising,
        consent management, security, email and other services. Those providers may process
        information according to their own policies and applicable agreements.
      </p>

      <h2>9. Your choices</h2>
      <p>
        Depending on your location and applicable law, you may have rights concerning
        personal information and choices concerning cookies or personalized advertising.
        Where required, we will provide appropriate consent or privacy controls.
      </p>

      <h2>10. Children&apos;s privacy</h2>
      <p>
        The website is intended for a general audience and is not designed to knowingly
        collect personal information from children.
      </p>

      <h2>11. Data security</h2>
      <p>
        We take reasonable technical and organizational measures appropriate to the service
        to protect information. No internet service can guarantee absolute security.
      </p>

      <h2>12. Changes to this policy</h2>
      <p>
        We may update this Privacy Policy when our services, technology or legal
        requirements change. The latest version will be published on this page.
      </p>

      <h2>13. Contact</h2>
      <p>
        Privacy questions can be sent to <strong>{SUPPORT_EMAIL}</strong>.
      </p>
    </InfoPage>
  );
}
