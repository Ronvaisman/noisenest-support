import { SiteShell } from "../site-shell";

const cc0 = [
  ["Soft Rain", "shelbyshark", "501243"], ["Rain on Window", "bastipictures", "243781"],
  ["Distant Storm", "bastipictures", "243777"], ["Tent Rain", "craigsmith", "817155"],
  ["Slow Ocean", "kapilkant", "549334"], ["Forest Stream", "cher1101", "671947"],
  ["Forest Night", "felix.blume", "328293"], ["Quiet Campfire", "Davor", "382616"],
  ["Steady Fan", "unfa", "170870"], ["Air Conditioner", "ReiyaManor", "351790"],
  ["Air Purifier", "giddster", "805667"], ["Clothes Dryer", "jashngooyen", "556768"],
  ["Airplane Cabin", "FillSoko", "456092"], ["Night Train", "Yoyodaman234", "341208"],
  ["Quiet City", "leonelmail", "427841"],
];

export default function LicensesPage() {
  return (
    <SiteShell>
      <main className="document-page wide-document">
        <p className="eyebrow">Updated August 6, 2026</p>
        <h1>Sound licenses and provenance</h1>
        <p className="document-lede">NoiseNest documents the origin and commercial-use basis of every sound family in its 600-sound catalog.</p>
        <section><h2>30 on-device noise profiles</h2><p>White, pink, brown, blue, violet, gray, green, velvet, and charcoal profiles are produced in real time by NoiseNest&apos;s own digital signal-processing code. The code and resulting profiles are project-owned. They are credited in the app as “Generated on device.”</p></section>
        <section><h2>555 original NoiseNest productions</h2><p>These physical ambiences, textures, and instrumental tracks were generated specifically for NoiseNest using paid-plan ElevenLabs Sound Effects and Music tools with private sharing disabled. NoiseNest treats the outputs as non-exclusive, does not claim association with named artists, and does not register them with Content ID. They are credited as “NoiseNest original · Generated with ElevenLabs” and remain subject to the applicable <a href="https://elevenlabs.io/terms-of-use">ElevenLabs Terms of Use</a> and <a href="https://elevenlabs.io/music-terms">Music Terms</a>.</p></section>
        <section><h2>15 CC0 field recordings</h2><p>These recordings were published under <a href="https://creativecommons.org/publicdomain/zero/1.0/">CC0 1.0</a> on Freesound when retrieved. CC0 does not require attribution, but NoiseNest credits each creator.</p><div className="credit-list">{cc0.map(([sound, creator, id]) => <p key={id}><strong>{sound}</strong> — <a href={`https://freesound.org/s/${id}/`}>{creator} · Freesound #{id}</a></p>)}</div></section>
        <section><h2>Processing and quality</h2><p>Shipping audio is trimmed, level-checked, loop-checked, and checksum-pinned. Automated duration, peak, DC offset, dynamics, duplicate, and seam checks are supplemented by low-volume listening tests. Credits remain available in NoiseNest Settings.</p></section>
        <section><h2>Restrictions</h2><p>NoiseNest grants access for use through the app. It does not grant permission to extract, resell, redistribute, sublicense, register, or claim exclusivity over the sound files. Contact <a href="mailto:noisenest@proton.me?subject=NoiseNest%20Sound%20Rights">noisenest@proton.me</a> with a rights concern.</p></section>
      </main>
    </SiteShell>
  );
}
