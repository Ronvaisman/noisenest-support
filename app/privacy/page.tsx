import { SiteShell } from "../site-shell";

export default function PrivacyPage() {
  return (
    <SiteShell>
      <main className="document-page">
        <p className="eyebrow">Effective August 6, 2026</p>
        <h1>Privacy Policy</h1>
        <p className="document-lede">NoiseNest is designed to provide its core app experience without an account, advertising, tracking, or developer-operated analytics.</p>

        <section><h2>Who is responsible</h2><p>NoiseNest is operated by Ron Vaisman in Israel. Privacy questions and requests may be sent to <a href="mailto:noisenest@proton.me?subject=NoiseNest%20Privacy">noisenest@proton.me</a>.</p></section>
        <section><h2>Information the app does not collect</h2><p>The NoiseNest app does not automatically collect or transmit personal data to NoiseNest. It has no account system, analytics SDK, advertising SDK, cross-app tracking, microphone access, location access, contacts access, or NoiseNest-operated backend.</p></section>
        <section><h2>Information stored locally</h2><p>Favorites, saved mixes, playlists, schedules, playback state, settings, download state, and notification preferences are stored on your device. A small playback snapshot is shared only between the NoiseNest app and its widget through Apple&apos;s App Group container. NoiseNest does not receive this information.</p></section>
        <section><h2>Sound downloads</h2><p>Downloadable packs are delivered using Apple&apos;s App Store resource service. Apple may process network, device, and Apple Account information under its own policies. NoiseNest receives no download history or device identifier. iOS controls resource retention and may reclaim downloaded packs when storage is needed.</p></section>
        <section><h2>Purchases</h2><p>The optional NoiseNest Pro lifetime purchase is processed by Apple through StoreKit. NoiseNest reads only the verified product entitlement needed to unlock features. NoiseNest does not receive payment-card details, billing addresses, or Apple Account credentials.</p></section>
        <section><h2>Notifications and schedules</h2><p>Bedtime reminders and scheduled sounds or playlists use local notifications after permission is granted. The selected time, dates, weekdays, and target sound or playlist stay on the device. Notifications are actionable reminders; iOS does not allow NoiseNest to silently begin audio while the app is suspended.</p></section>
        <section><h2>Widgets and system playback</h2><p>The widget reads the local playback snapshot from the NoiseNest App Group. Lock Screen, Control Center, AirPlay, headset, and Dynamic Island playback information is provided to Apple&apos;s system media interfaces. NoiseNest does not receive information about how you use those system controls.</p></section>
        <section><h2>Diagnostics you choose to share</h2><p>“Export Local Diagnostics” creates text containing the app version, iOS version, playback state, and active-layer count. NoiseNest does not send it automatically. iOS shows a share sheet and you choose the recipient. Review the text before sending it and avoid adding sensitive information.</p></section>
        <section><h2>Website and hosting</h2><p>This website is published through GitHub Pages. It has no NoiseNest analytics, advertising, tracking pixel, account, cookie-based personalization, or contact form. GitHub may process ordinary request and security data, such as IP address, user agent, time, and requested page, to deliver and protect the site under the GitHub Privacy Statement.</p></section>
        <section><h2>Email support</h2><p>If you email NoiseNest, the message, email address, attachments, and replies are received voluntarily and used to answer the request, prevent abuse, and maintain reasonable support records. Do not send passwords, payment-card information, health records, or other sensitive information. You may request deletion of a support conversation, subject to legal and security obligations.</p></section>
        <section><h2>Your choices and rights</h2><p>You can remove downloads in NoiseNest, disable notifications in iOS Settings, delete saved content in the app, and remove all remaining local app data by deleting NoiseNest. Because app data is not sent to NoiseNest, NoiseNest cannot retrieve or delete it remotely. Depending on applicable law, you may request access, correction, deletion, restriction, or objection regarding personal information contained in a support email.</p></section>
        <section><h2>Retention and security</h2><p>Local app data remains until you remove it or delete the app. Support email is retained only as reasonably needed to answer requests, handle disputes, meet legal obligations, and protect the service. Reasonable safeguards are used, but no email or internet service can be guaranteed completely secure.</p></section>
        <section><h2>International processing</h2><p>Website hosting and email providers may process information in countries other than your own. When mandatory privacy law applies, available contractual and legal safeguards remain applicable.</p></section>
        <section><h2>Children</h2><p>NoiseNest is not directed to children and does not knowingly collect children&apos;s personal information through the app. A parent or guardian may contact NoiseNest about information voluntarily sent by email.</p></section>
        <section><h2>Changes</h2><p>The effective date will be updated when this policy changes. Material app-data changes will also be reflected in the App Store privacy disclosure and, where appropriate, in the app.</p></section>
        <section><h2>Contact</h2><p>Contact <a href="mailto:noisenest@proton.me?subject=NoiseNest%20Privacy">noisenest@proton.me</a> with privacy questions or requests.</p></section>
      </main>
    </SiteShell>
  );
}
