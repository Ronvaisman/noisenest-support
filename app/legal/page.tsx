import Link from "next/link";
import { SiteShell } from "../site-shell";

const documents = [
  ["Privacy Policy", "What stays on your device, what happens when you contact support, and your privacy choices.", "/privacy"],
  ["Terms of Use", "App-specific terms that supplement Apple’s Standard EULA.", "/terms"],
  ["Sound Licenses", "Provenance and rights information for all NoiseNest sound sources.", "/licenses"],
  ["Accessibility", "Supported accessibility features, guidance, and feedback contact.", "/accessibility"],
];

export default function LegalPage() {
  return (
    <SiteShell>
      <main className="document-page wide-document">
        <p className="eyebrow">NoiseNest legal</p>
        <h1>Clear terms. Plain language.</h1>
        <p className="document-lede">NoiseNest is operated by Ron Vaisman in Israel. These documents explain the service, its sound rights, and how to reach us.</p>
        <div className="document-grid">
          {documents.map(([title, body, href]) => (
            <Link className="document-card" href={href} key={title}><h2>{title}</h2><p>{body}</p><span>Read document →</span></Link>
          ))}
        </div>
        <section><h2>Apple license</h2><p>NoiseNest remains distributed under <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple’s Standard Licensed Application End User License Agreement</a>. The NoiseNest Terms of Use supplement that agreement and do not reduce rights that cannot lawfully be waived.</p></section>
        <section><h2>Contact</h2><p>Questions may be sent to <a href="mailto:noisenest@proton.me">noisenest@proton.me</a>.</p></section>
      </main>
    </SiteShell>
  );
}
