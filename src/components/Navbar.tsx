export const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex justify-end px-6 md:px-16 lg:px-24 py-6">
    <div className="flex gap-6 text-sm text-green-400 font-medium bg-background/90 lg:bg-transparent rounded-full px-4 py-2 lg:p-0">
      <a href="#about" className="hover:text-green-300 transition-colors duration-200">About</a>
      <a href="#services" className="hover:text-green-300 transition-colors duration-200">Services</a>
      <a href="/privacy" className="hover:text-green-300 transition-colors duration-200">Privacy</a>
    </div>
  </nav>
);
