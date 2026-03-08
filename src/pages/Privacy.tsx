import { Link } from "react-router-dom";

const Privacy = () => (
  <main className="min-h-screen bg-background px-6 md:px-16 lg:px-24 py-16 max-w-[800px] mx-auto">
    <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
      ← Back
    </Link>
    <h1 className="text-3xl font-bold text-foreground mt-8 mb-8">Privacy Policy</h1>

    <div className="space-y-8 text-sm text-muted-foreground leading-relaxed">
      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Controller</h2>
        <p>Matti Ollila / Ollila Consulting</p>
        <p>Helsinki, Finland</p>
        <p>Email: <a href="mailto:matti@ollilaconsulting.com" className="text-foreground hover:underline">matti@ollilaconsulting.com</a></p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Purpose of processing</h2>
        <p>This website provides information about my services and allows visitors to contact me via email.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Data processed</h2>
        <p>The website itself does not collect personal data, use cookies, or use analytics.</p>
        <p className="mt-2">However, when visiting the site, basic technical information such as IP address, browser type, and request time may be processed by the hosting provider for security and operational purposes.</p>
        <p className="mt-2">If you contact me by email, I will process the personal data you provide (such as your email address, name, and message) in order to respond to your inquiry.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Hosting</h2>
        <p>This website is hosted using GitHub Pages provided by GitHub, Inc. Processing of technical data may occur on their servers. More information is available in <a href="https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">GitHub's privacy policy</a>.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">External links</h2>
        <p>This website may contain links to external services such as LinkedIn. These services have their own privacy policies and data processing practices.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Data retention</h2>
        <p>Emails are retained only as long as necessary to respond to inquiries or maintain business communication.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Your rights</h2>
        <p>Under the General Data Protection Regulation (GDPR), you have the right to request access to, correction of, or deletion of your personal data.</p>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-foreground mb-2">Contact</h2>
        <p>For any privacy-related questions, please contact: <a href="mailto:matti@ollilaconsulting.com" className="text-foreground hover:underline">matti@ollilaconsulting.com</a></p>
      </section>
    </div>
  </main>
);

export default Privacy;
