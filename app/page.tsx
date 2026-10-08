import Link from "next/link";
import { SiteShell } from "./site-shell";

const features = [
  ["Offline when you need it", "Core sounds work immediately. Downloadable sound packs can be saved for listening without a connection."],
  ["A mix that feels right", "Layer colored noise, rain, nature, household, and travel sounds with independent volume controls."],
  ["A gentle app-only timer", "NoiseNest fades its own audio. It never changes your alarm or system volume."],
  ["One lifetime purchase", "Free features never expire. Pro is a single, optional purchase—not a subscription."],
];

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">NoiseNest for iPhone and iPad</p>
            <h1 id="hero-title">Sleep sounds without the noise.</h1>
            <p className="hero-lede">
              Start a calming sound in seconds, build a personal mix, and let it play through the night—offline, without ads or an account.
            </p>
            <div className="trust-row" aria-label="NoiseNest commitments">
              <span>Offline</span><span>No ads</span><span>No account</span><span>No tracking</span>
            </div>
            <div className="actions">
              <Link className="button primary" href="/support">Get support</Link>
              <Link className="button secondary" href="/faq">Browse the FAQ</Link>
            </div>
          </div>
          <div className="wave-card" aria-hidden="true">
            <div className="moon" />
            <div className="wave wave-one" />
            <div className="wave wave-two" />
            <div className="wave wave-three" />
          </div>
        </section>

        <section className="section" aria-labelledby="built-for-night">
          <div className="section-heading">
            <p className="eyebrow">Built for a quieter night</p>
            <h2 id="built-for-night">Simple where it matters.</h2>
          </div>
          <div className="feature-grid">
            {features.map(([title, body]) => (
              <article className="card" key={title}>
                <h3>{title}</h3><p>{body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section split" aria-labelledby="privacy-first">
          <div>
            <p className="eyebrow">Privacy first</p>
            <h2 id="privacy-first">Your night stays yours.</h2>
          </div>
          <div className="prose-card">
            <p>NoiseNest has no analytics SDK, advertising SDK, account system, microphone access, or location access.</p>
            <p>Mixes, playlists, schedules, favorites, and preferences are stored locally. Audio downloads use NoiseNest&apos;s Cloudflare-hosted service. Purchases are processed by Apple. Optional reminders use local notifications only after you choose to allow them.</p>
            <Link className="text-link" href="/privacy">Full privacy policy <span aria-hidden="true">→</span></Link>
          </div>
        </section>

        <section className="section split" aria-labelledby="sound-origin">
          <div>
            <p className="eyebrow">Sound provenance</p>
            <h2 id="sound-origin">Every sound has a documented origin.</h2>
          </div>
          <div className="prose-card">
            <p>NoiseNest includes 236 reviewed recordings across 114 featured sound titles and 122 optional other versions, plus 23 on-device colored-noise profiles and 30 binaural-beat profiles. Ten recordings are included as the starter library. Credits and provenance remain available in the app and on this site.</p>
            <p className="fine-print">NoiseNest is a wellness utility, not a medical device, and does not diagnose or treat any condition.</p>
            <Link className="text-link" href="/licenses">Sound licenses and provenance <span aria-hidden="true">→</span></Link>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
