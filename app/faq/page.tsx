import { SiteShell } from "../site-shell";

const groups = [
  {
    title: "Playback and mixing",
    items: [
      ["How do I play one sound?", "Tap a sound in Sounds. It plays alone in an infinite loop. Tap the active sound again to pause, and tap it again to resume."],
      ["Why didn’t tapping a sound add it to my mix?", "Solo playback and mixing are deliberately separate. Swipe a sound row and choose Add to Mix when you want to layer it."],
      ["How do I control a mix?", "Open Mixes to adjust each layer’s volume, mute it, remove it, add another sound, or enable the sleep-safe Stereo Motion control."],
      ["What happens when I load a saved mix?", "Tapping a saved mix starts it. Swipe or hold the mix and choose Edit when you want its layers in the editor."],
    ],
  },
  {
    title: "Playlists and schedules",
    items: [
      ["How do playlists advance?", "Each entry loops until its configured duration ends. NoiseNest then advances to the next entry. The playlist either stops or repeats according to its end setting."],
      ["Can I skip sounds?", "Yes. Use Previous and Next in the app player, widget, Lock Screen, Control Center, or compatible headset controls while a playlist is active."],
      ["Will a scheduled sound start by itself?", "No. iOS prevents a suspended app from silently starting audio. NoiseNest shows an actionable reminder; tap it to open the app and start the sound or playlist."],
      ["Can schedules repeat?", "A schedule can use selected dates or recurring weekdays. These modes are intentionally separate, and enabling weekly recurrence clears one-time dates after confirmation."],
    ],
  },
  {
    title: "Downloads and offline listening",
    items: [
      ["What works offline?", "Thirty binaural-beat presets are generated on your device, and ten starter recordings are included. Completed downloads stay on your device for offline listening until you remove them or delete the app."],
      ["Why does a sound show Download?", "The recording library has 234 featured recordings and 122 optional other versions. Recordings outside the starter library download over HTTPS from NoiseNest’s Cloudflare-hosted audio service. Starting an available-to-you sound downloads its featured category pack; choosing another version also downloads that recording."],
      ["How do I download the full library?", "Open Settings and choose Download All. Download All requires Pro. Featured versions are selected by default; Include Other Versions adds the optional recordings. NoiseNest shows the remaining download size before you confirm. Download All on Wi-Fi Only is enabled by default."],
      ["Will Download All finish after I force-quit?", "Keep NoiseNest open while downloading. iOS permits only limited background time, and force-quitting interrupts the download. Completed recordings remain saved; reopen NoiseNest and tap Download All again to download the missing files."],
      ["How do I free space?", "Open Settings, then Manage Sound Packs. Remove one category or all downloads. Sounds using a pack must first be removed from the player. Included recordings and on-device generators remain available."],
    ],
  },
  {
    title: "System playback and timers",
    items: [
      ["Does playback continue with the screen off?", "Yes, while NoiseNest is actively playing. The app does not keep background audio active when no sound is playing."],
      ["How do AirPlay and Bluetooth work?", "Use the output button in the persistent player. NoiseNest pauses when the active route disappears and never auto-starts merely because a new Bluetooth route connects."],
      ["Why is there only one Lock Screen player?", "NoiseNest uses Apple’s native Now Playing interface for the Lock Screen, Control Center, headset controls, and Dynamic Island instead of adding a second Live Activity."],
      ["Does the sleep timer change my alarm volume?", "No. It fades only NoiseNest audio and never changes alarms, ringtones, notification volume, or device volume."],
    ],
  },
  {
    title: "NoiseNest Pro, privacy, and support",
    items: [
      ["Which sounds are free?", "Every category has at least three free featured sounds, with 67 free sounds across the library. Free recordings can be downloaded and kept for offline playback. Pro unlocks the remaining sounds and additional mixing and playlist features."],
      ["Is Pro a subscription?", "No. NoiseNest Pro is one optional lifetime non-consumable purchase. The App Store displays the local price before purchase."],
      ["How do I restore Pro?", "Open Settings and choose Restore Purchases while signed in to the Apple Account used for the purchase. Family Sharing depends on Apple’s account and family settings."],
      ["How do I request a refund?", "Apple processes billing and refunds. Visit reportaproblem.apple.com and sign in with the Apple Account used for the purchase."],
      ["Does NoiseNest collect listening history?", "NoiseNest does not send playback events, playlists, favorites, mixes, schedules, or widget state to a server. It has no analytics SDK or account system. Sound downloads create ordinary network requests to the audio host, including the requested file and connection metadata; see the privacy policy."],
      ["What should I send for support?", "Describe the problem and optionally export local diagnostics from Settings. Never send passwords, payment information, or sensitive health information."],
    ],
  },
];

export default function FAQPage() {
  return (
    <SiteShell>
      <main className="document-page wide-document">
        <p className="eyebrow">NoiseNest help</p>
        <h1>Frequently asked questions</h1>
        <p className="document-lede">Clear answers about playback, mixing, schedules, offline sounds, purchases, and privacy.</p>
        {groups.map((group) => (
          <section className="faq-list" key={group.title}>
            <h2>{group.title}</h2>
            {group.items.map(([question, answer]) => <article className="faq" key={question}><h3>{question}</h3><p>{answer}</p></article>)}
          </section>
        ))}
      </main>
    </SiteShell>
  );
}
