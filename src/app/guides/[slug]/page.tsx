import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";
import { absoluteUrl, SITE_NAME } from "@/lib/seo";
import { guideMap, guides, guideSources } from "@/content/guides";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = guideMap[slug];
  if (!guide) return {};
  return {
    title: guide.seoTitle,
    description: guide.description,
    alternates: { canonical: absoluteUrl(`/guides/${guide.slug}`) },
    openGraph: {
      type: "article",
      locale: "en_IN",
      url: absoluteUrl(`/guides/${guide.slug}`),
      siteName: SITE_NAME,
      title: guide.seoTitle,
      description: guide.description,
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = guideMap[slug];
  if (!guide) notFound();

  const wordCount = [
    guide.intro,
    guide.takeaway,
    ...guide.sections.flatMap((section) => [section.heading, ...section.paragraphs]),
  ].join(" ").trim().split(/\s+/).length;
  const readingMinutes = Math.max(4, Math.ceil(wordCount / 220));

  const sources = guideSources[guide.slug] ?? [];

  const related = guides
    .filter((item) => item.slug !== guide.slug)
    .filter((item) => item.category === guide.category || item.calculator === guide.calculator)
    .slice(0, 3);

  const articleUrl = absoluteUrl(`/guides/${guide.slug}`);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${articleUrl}#article`,
        headline: guide.title,
        description: guide.description,
        mainEntityOfPage: articleUrl,
        url: articleUrl,
        datePublished: "2026-09-18",
        dateModified: "2026-09-18",
        author: { "@type": "Organization", name: `${SITE_NAME} Editorial Team`, url: absoluteUrl("/editorial-policy") },
        publisher: { "@type": "Organization", name: SITE_NAME, url: absoluteUrl("/") },
        inLanguage: "en-IN",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
          { "@type": "ListItem", position: 3, name: guide.title, item: articleUrl },
        ],
      },
    ],
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <SiteHeader />

      <article className="container py-10 md:py-14">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 text-xs font-bold tracking-[.14em] text-blue-700">
            <span>{guide.category}</span>
            <span className="text-slate-300">•</span>
            <span>{readingMinutes} min read</span>
          </div>

          <h1 className="mt-4 text-4xl font-black tracking-[-.035em] text-slate-950 md:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-600">{guide.intro}</p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href={guide.calculator}
              className="inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-extrabold text-white shadow-sm hover:bg-blue-700"
            >
              Open {guide.calculatorLabel}
            </Link>
            <Link
              href="/guides"
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-extrabold text-slate-800 hover:border-blue-200"
            >
              Browse all guides
            </Link>
          </div>

          <div className="mt-10 rounded-3xl border border-blue-100 bg-blue-50/70 p-6">
            <h2 className="text-lg font-extrabold text-slate-950">Quick takeaway</h2>
            <p className="mt-2 leading-7 text-slate-700">{guide.takeaway}</p>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
            <div className="text-xs font-bold uppercase tracking-[.14em] text-slate-500">Editorial information</div>
            <div className="mt-2 text-sm leading-6 text-slate-600">
              Written for ToolMoney readers by the ToolMoney Editorial Team. Reviewed: 18 September 2026. This guide explains calculation concepts and planning assumptions; it does not provide personalized financial, tax or investment advice.
            </div>
          </div>

          <div className="mt-10 space-y-10">
            {guide.sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-extrabold tracking-tight text-slate-950 md:text-3xl">
                  {section.heading}
                </h2>
                <div className="mt-4 space-y-4 text-[16px] leading-8 text-slate-700">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-7 shadow-soft">
            <h2 className="text-xl font-extrabold text-slate-950">Use the calculator with the guide</h2>
            <p className="mt-2 leading-7 text-slate-600">
              First read the assumptions above, then change one input at a time in the calculator. Compare multiple scenarios instead of relying on a single number.
            </p>
            <Link
              href={guide.calculator}
              className="mt-5 inline-flex font-bold text-blue-700 hover:text-blue-800"
            >
              Try {guide.calculatorLabel} →
            </Link>
          </section>

          {sources.length > 0 && (
            <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-7">
              <h2 className="text-2xl font-extrabold text-slate-950">Official sources and further reading</h2>
              <p className="mt-2 leading-7 text-slate-600">
                These references are provided so readers can verify current rules, product information or investor-education material. Official rules and product terms can change, so use the relevant source for the latest information.
              </p>
              <ul className="mt-5 space-y-3">
                {sources.map((source) => (
                  <li key={source.url}>
                    <a href={source.url} target="_blank" rel="noopener noreferrer" className="font-bold text-blue-700 underline decoration-blue-200 underline-offset-4 hover:text-blue-800">
                      {source.label} ↗
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="text-2xl font-extrabold text-slate-950">Related guides</h2>
              <div className="mt-5 grid gap-4 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/guides/${item.slug}`}
                    className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200"
                  >
                    <div className="text-xs font-bold tracking-[.12em] text-blue-700">{item.category}</div>
                    <div className="mt-2 font-extrabold text-slate-950">{item.title}</div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-12 border-t border-slate-200 pt-7 text-sm leading-6 text-slate-500">
            <strong className="text-slate-700">Editorial note:</strong> This guide is educational information, not individualized financial, tax, legal or investment advice. Product terms, rates and tax rules can change. Verify current details with the relevant institution or official authority before making a financial decision.
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
