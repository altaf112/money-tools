import SiteHeader from "@/components/SiteHeader";
import Footer from "@/components/Footer";

export default function InfoPage({
  eyebrow,
  title,
  updated,
  children,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <main>
      <SiteHeader />
      <section className="container py-12 md:py-16">
        <article className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-7 shadow-soft md:p-10">
          <p className="text-xs font-extrabold tracking-[.2em] text-blue-600">{eyebrow}</p>
          <h1 className="mt-2 text-4xl font-black tracking-tight md:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-slate-400">Last updated: {updated}</p>
          <div className="prose prose-slate mt-10 max-w-none leading-7">{children}</div>
        </article>
      </section>
      <Footer />
    </main>
  );
}
