import Image from "next/image";
import Link from "next/link";

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="site-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="NoiseNest home">
          <Image src="/noisenest-support/app-icon.png" width={44} height={44} alt="" priority />
          <span>NoiseNest</span>
        </Link>
        <nav aria-label="Primary navigation">
          <Link href="/faq">FAQ</Link>
          <Link href="/support">Support</Link>
          <Link href="/legal">Legal</Link>
        </nav>
      </header>
      {children}
      <footer>
        <p>© 2026 NoiseNest · Operated by Ron Vaisman, Israel</p>
        <div>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/licenses">Licenses</Link>
          <Link href="/accessibility">Accessibility</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
