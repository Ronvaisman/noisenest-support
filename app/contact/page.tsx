import { SiteShell } from "../site-shell";

export default function ContactPage() {
  return (
    <SiteShell>
      <main className="document-page">
        <p className="eyebrow">Contact NoiseNest</p>
        <h1>We’re here to help.</h1>
        <p className="document-lede">Support is provided by email by NoiseNest, operated by Ron Vaisman in Israel.</p>
        <a className="button primary email-button" href="mailto:noisenest@proton.me?subject=NoiseNest%20Support">Email noisenest@proton.me</a>
        <section><h2>What to include</h2><ul><li>The sound, mix, or playlist involved.</li><li>Your iPhone or iPad model and iOS version.</li><li>Whether playback used the device speaker, headphones, Bluetooth, or AirPlay.</li><li>Steps that reproduce the problem and any visible error.</li><li>Optional local diagnostics exported from NoiseNest Settings.</li></ul></section>
        <section><h2>What not to include</h2><p>Do not send passwords, payment-card numbers, Apple Account credentials, private health information, or other sensitive data. NoiseNest will never ask for those details.</p></section>
        <section><h2>Billing and refunds</h2><p>Apple processes NoiseNest purchases. For receipts, billing, or refund requests, use <a href="https://reportaproblem.apple.com/">Apple’s Report a Problem</a>.</p></section>
        <section><h2>Privacy and deletion requests</h2><p>App data stays on your device and cannot be retrieved by NoiseNest. To request deletion of a support email conversation, write to <a href="mailto:noisenest@proton.me?subject=NoiseNest%20Privacy%20Request">noisenest@proton.me</a>.</p></section>
        <section><h2>Not an emergency service</h2><p>NoiseNest support cannot provide emergency, medical, or crisis assistance. Contact appropriate local services for urgent help.</p></section>
      </main>
    </SiteShell>
  );
}
