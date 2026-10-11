import { SiteShell } from "../site-shell";

export default function LicensesPage() {
  return (
    <SiteShell>
      <main className="document-page wide-document">
        <p className="eyebrow">Updated October 11, 2026</p>
        <h1>Sound licenses and provenance</h1>
        <p className="document-lede">The current NoiseNest catalog contains 236 reviewed recordings, 120 retained original music tracks, and 30 on-device binaural-beat presets. This page records their generation sources and applicable license references.</p>
        <section><h2>236 reviewed recordings</h2><p>The reviewed collection contains 114 featured sound titles and 122 optional other versions. Alongside the 120 retained original music tracks, this makes 356 recordings: ten in the starter library and 346 downloadable. The source inventory contains 10 procedurally rendered noise recordings, 42 MOSS-SoundEffect v2.0 recordings, 80 ACE-Step 1.5 XL-SFT recordings, and 104 Stable Audio 3 sound-effect recordings.</p></section>
        <section><h2>On-device sound profiles</h2><p>Thirty binaural-beat presets are produced in real time by NoiseNest&apos;s digital signal-processing code. They are credited in the app as generated on device and require no audio download.</p></section>
        <section><h2>MOSS-SoundEffect v2.0</h2><p>The <a href="https://huggingface.co/OpenMOSS-Team/MOSS-SoundEffect-v2.0/blob/main/README.md">OpenMOSS model card</a> identifies the model license as Apache 2.0. The recordings are generated output; this page does not claim exclusivity in them or grant rights in the model itself.</p></section>
        <section><h2>ACE-Step 1.5 XL-SFT</h2><p>The <a href="https://huggingface.co/ACE-Step/acestep-v15-xl-sft/blob/main/README.md">ACE-Step model card</a> identifies the model license as MIT and describes permitted use of generated music. Use remains subject to applicable model and provider terms.</p></section>
        <section><h2>Stable Audio 3</h2><p>The sound-effect recordings were generated with Stable Audio 3 workflows. Model use and generated output remain subject to the applicable <a href="https://stability.ai/license">Stability AI license</a> and <a href="https://stability.ai/use-policy">Acceptable Use Policy</a>. Identifying a recording&apos;s source does not assert exclusive ownership or independently establish license eligibility.</p></section>
        <section><h2>120 retained original music tracks</h2><p>Classical Music, Relaxing Music, Focus Music, and Meditative each retain thirty original instrumental tracks generated with ElevenLabs Music v2 on a paid Creator plan. Their original credits and audio bytes are preserved. Use remains subject to the applicable <a href="https://elevenlabs.io/terms-of-use">ElevenLabs Terms</a> and <a href="https://elevenlabs.io/music-terms">Music Terms</a>. These tracks retain their separate production provenance rather than receiving the new collection&apos;s review labels.</p></section>
        <section><h2>Current and previous libraries</h2><p>The reviewed recordings replace the earlier ambience and texture recordings. The 120 original music tracks in the four sections above remain included; all other original recordings and the Freesound CC0 collection are excluded.</p></section>
        <section><h2>Delivery and quality</h2><p>The reviewed recordings are delivered as AAC M4A files without further re-encoding. Downloaded files are checked against their pinned byte count and SHA-256 checksum before installation for offline playback. Credits remain available in NoiseNest Settings.</p></section>
        <section><h2>Restrictions</h2><p>NoiseNest grants access for use through the app. It does not grant permission to extract, resell, redistribute, sublicense, register, or claim exclusivity over the sound files. Contact <a href="mailto:noisenest@proton.me?subject=NoiseNest%20Sound%20Rights">noisenest@proton.me</a> with a rights concern.</p></section>
      </main>
    </SiteShell>
  );
}
