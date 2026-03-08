import { Link } from "react-router-dom";

const Privacy = () => (
  <main className="min-h-screen bg-background px-6 md:px-16 lg:px-24 py-16 max-w-[800px] mx-auto">
    <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
      ← Back
    </Link>
    <h1 className="text-3xl font-bold text-foreground mt-8 mb-6">Privacy Policy</h1>
    <p className="text-sm text-muted-foreground mb-4">Last updated: March 8, 2026</p>

    <div className="space-y-6 text-sm text-muted-foreground leading-relaxed">
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Overview</h2>
        <p>Ollila Consulting ("we", "us", or "our") operates the website ollilaconsulting.com. This page informs you of our policies regarding the collection, use, and disclosure of personal data.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Information We Collect</h2>
        <p>This website is a static informational site. We do not collect, store, or process any personal data from visitors unless you voluntarily contact us.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Cookies</h2>
        <p>This website does not use cookies or tracking technologies.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Third-Party Services</h2>
        <p>This website is hosted on GitHub Pages. GitHub may collect technical information such as IP addresses for security and operational purposes. Please refer to GitHub's privacy policy for more details.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Contact</h2>
        <p>If you have any questions about this privacy policy, please contact us through the channels listed on our website.</p>
      </section>
    </div>
  </main>
);

export default Privacy;
