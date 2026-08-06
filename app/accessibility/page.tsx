import { SiteShell } from "../site-shell";

export default function AccessibilityPage() {
  return (
    <SiteShell>
      <main className="document-page">
        <p className="eyebrow">NoiseNest accessibility</p>
        <h1>A quieter experience for more people.</h1>
        <p className="document-lede">NoiseNest is being evaluated against Apple&apos;s accessibility criteria on both iPhone and iPad.</p>
        <section><h2>Designed support</h2><ul><li>VoiceOver labels, values, hints, and actions for playback, mixing, downloads, favorites, schedules, and playlists.</li><li>Voice Control-friendly named controls and standard system navigation.</li><li>Dynamic Type and Larger Text throughout common tasks.</li><li>A consistently dark interface with high-contrast text and controls.</li><li>Icons, text, borders, and status labels so color is not the only indicator.</li><li>System Reduce Motion, Increase Contrast, Button Shapes, and reduced-transparency preferences where applicable.</li></ul></section>
        <section><h2>Audio accessibility</h2><p>Every sound row exposes its name, category, lock/download state, favorite state, schedule state, and playback state. Mute, remove, preview, play, pause, previous, and next controls use explicit accessibility labels.</p></section>
        <section><h2>Known considerations</h2><p>Sound content is inherently auditory. NoiseNest provides text names and playback state but does not convert ambient audio into captions. Stereo Motion is optional and off by default; people who prefer stable spatial audio can leave it disabled.</p></section>
        <section><h2>Accessibility feedback</h2><p>If a common task is difficult with assistive technology, email <a href="mailto:noisenest@proton.me?subject=NoiseNest%20Accessibility">noisenest@proton.me</a> with the device, iOS version, accessibility feature, screen, and expected behavior. Do not include sensitive personal information.</p></section>
      </main>
    </SiteShell>
  );
}
