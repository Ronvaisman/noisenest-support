import Link from "next/link";
import { SiteShell } from "../site-shell";

export default function SupportPage() {
  return (
    <SiteShell>
      <main className="document-page support-page">
        <p className="eyebrow">NoiseNest support</p>
        <h1>How can we help?</h1>
        <p className="document-lede">Start with the FAQ or contact NoiseNest directly. Support never requires your password, payment-card information, or Apple Account credentials.</p>
        <div className="actions support-actions">
          <Link className="button primary" href="/faq">Browse the FAQ</Link>
          <Link className="button secondary" href="/contact">Contact support</Link>
        </div>
        <section><h2>Fast checks</h2><ul><li>Confirm the mini player says Playing and the intended output is selected through AirPlay.</li><li>If a Pro sound is not local, keep NoiseNest open while the category pack begins downloading.</li><li>After a Bluetooth route disconnects, NoiseNest pauses intentionally. Press Play after choosing the new output.</li><li>Scheduled audio requires you to tap the notification; iOS does not permit unattended playback from a suspended app.</li></ul></section>
        <section><h2>Report a playback or sound problem</h2><p>In NoiseNest Settings, choose “Export Local Diagnostics,” review the text, and attach it to your support email. Include the sound name, device model, iOS version, output route, and what happened. Diagnostics are never sent automatically.</p></section>
        <section><h2>Purchases and refunds</h2><p>Use Restore Purchases in NoiseNest while signed in to the Apple Account that bought Pro. Apple processes all billing and refund requests through <a href="https://reportaproblem.apple.com/">Report a Problem</a>.</p></section>
        <section><h2>Safety</h2><p>NoiseNest is not an emergency or medical service. Do not use audio at unsafe volume, while it interferes with alarms or warnings, or in any situation requiring full environmental awareness.</p></section>
      </main>
    </SiteShell>
  );
}
