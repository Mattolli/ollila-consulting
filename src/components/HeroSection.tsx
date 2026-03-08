export const HeroSection = () => (
  <section className="relative flex flex-col justify-center min-h-[80vh] px-6 md:px-16 lg:px-24 max-w-[1400px] mx-auto overflow-hidden">
    <div className="absolute top-1/3 -left-32 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />
    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground tracking-tight glow-text">
      Matti Ollila
    </h1>
    <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mt-4 tracking-wide">
      ASO consultancy
    </p>
    <div className="section-divider w-full mt-auto" />
  </section>
);
