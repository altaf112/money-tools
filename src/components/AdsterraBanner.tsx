"use client";

/** Adsterra 300 × 250 banner, isolated so its atOptions cannot conflict with other zones. */
export default function AdsterraBanner() {
  const srcDoc = `<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1"></head><body style="margin:0;width:300px;height:250px;overflow:hidden"><script>var atOptions={key:'49a66674c8cd41ededc44257142760ab',format:'iframe',height:250,width:300,params:{}};<\/script><script async src="https://bicea.org/22/49a66674c8cd41ededc44257142760ab"><\/script></body></html>`;

  return (
    <aside className="my-8 flex w-full justify-center" aria-label="Advertisement">
      <iframe
        title="Advertisement"
        srcDoc={srcDoc}
        width={300}
        height={250}
        loading="lazy"
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: 0, maxWidth: "100%", overflow: "hidden" }}
      />
    </aside>
  );
}
