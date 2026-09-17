import Link from "next/link";
export default function Footer() {
  return <footer className="mt-16 border-t border-slate-200 bg-white">
    <div className="container grid gap-8 py-10 md:grid-cols-4">
      <div>
        <p className="font-extrabold text-lg">Money<span className="text-blue-600">Tools</span></p>
        <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">Fast, simple financial calculators designed for Indian users.</p>
      </div>
      <div>
        <p className="font-bold">Popular tools</p>
        <div className="mt-3 grid gap-2 text-sm text-slate-500">
          <Link href="/tools/sip-calculator">SIP Calculator</Link>
          <Link href="/tools/emi-calculator">EMI Calculator</Link>
          <Link href="/tools/fd-calculator">FD Calculator</Link>
          <Link href="/tools/ctc-to-in-hand">CTC to In-hand</Link>
        </div>
      </div>
      <div>
        <p className="font-bold">Company</p>
        <div className="mt-3 grid gap-2 text-sm text-slate-500">
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/editorial-policy">Editorial Policy</Link>
          <Link href="/advertising">Advertising Disclosure</Link>
        </div>
      </div>
      <div>
        <p className="font-bold">Legal & Privacy</p>
        <div className="mt-3 grid gap-2 text-sm text-slate-500">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/cookie-policy">Cookie Policy</Link>
          <Link href="/terms">Terms of Use</Link>
          <Link href="/disclaimer">Disclaimer</Link>
        </div>
      </div>
    </div>
    <div className="border-t border-slate-100 py-5 text-center text-xs text-slate-400">© {new Date().getFullYear()} Money Tools. For informational purposes only.</div>
  </footer>;
}
