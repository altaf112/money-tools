"use client";

/** Adsterra 728 × 90 banner. Kept in an isolated iframe to avoid global atOptions collisions. */
export default function AdsterraLeaderboardBanner() {
  const srcDoc = `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0;width:728px;height:90px;overflow:hidden"><script>var atOptions={key:'1e28a00d546c33fe0d6f2c26889bfb85',format:'iframe',height:90,width:728,params:{}};<\/script><script async src="https://bicea.org/22/1e28a00d546c33fe0d6f2c26889bfb85"><\/script></body></html>`;

  return (
    <aside className="my-8 hidden w-full justify-center md:flex" aria-label="Advertisement">
      <iframe
        title="Advertisement"
        srcDoc={srcDoc}
        width={728}
        height={90}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0, maxWidth: "100%", overflow: "hidden" }}
      />
    </aside>
  );
}
