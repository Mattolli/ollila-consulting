export const Footer = () => (
  <footer className="px-6 md:px-16 lg:px-24 py-16 max-w-[1400px] mx-auto border-t border-border">
    <div className="flex flex-col md:flex-row justify-between gap-8 text-sm text-muted-foreground">
      <p className="font-bold text-foreground">Ollila Consulting</p>
      <p>Helsinki, FI</p>
    </div>
    <div className="flex justify-between items-center mt-8">
      <p className="text-xs text-muted-foreground">© 2026 Ollila Consulting. All rights reserved.</p>
      <a href="/privacy" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a>
    </div>
  </footer>
);
