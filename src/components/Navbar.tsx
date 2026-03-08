export const Navbar = () => (
  <nav className="fixed top-0 right-0 z-50 px-6 md:px-16 lg:px-24 py-6">
    <div className="flex gap-6 text-sm text-muted-foreground font-medium">
      <a href="#about" className="hover:text-foreground transition-colors duration-200">About</a>
      <a href="#services" className="hover:text-foreground transition-colors duration-200">Services</a>
    </div>
  </nav>
);
