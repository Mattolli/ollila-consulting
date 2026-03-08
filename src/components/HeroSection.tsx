export const HeroSection = () => (
  <section className="relative flex flex-col min-h-[80vh] px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto overflow-hidden">
    <div className="flex-1" />
    <div>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight glow-text">
        Matti Ollila
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mt-4 tracking-wide">
        ASO consultancy
      </p>
    </div>
    <div className="flex-1" />
    <div className="section-divider w-full" />
  </section>
);
