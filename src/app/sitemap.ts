import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

const tools = [
  "sip-calculator",
  "step-up-sip-calculator",
  "lumpsum-calculator",
  "cagr-calculator",
  "emi-calculator",
  "home-loan-calculator",
  "loan-prepayment-calculator",
  "fd-calculator",
  "rd-calculator",
  "ppf-calculator",
  "ctc-to-in-hand",
  "income-tax-calculator",
];

const pages = [
  "about",
  "contact",
  "privacy",
  "cookie-policy",
  "terms",
  "disclaimer",
  "advertising",
  "editorial-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1 },
    ...tools.map((slug) => ({
      url: absoluteUrl(`/tools/${slug}`),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...pages.map((slug) => ({
      url: absoluteUrl(`/${slug}`),
      changeFrequency: "yearly" as const,
      priority: 0.4,
    })),
  ];
}
