const services = [
  {
    tag: "STRATEGY",
    tagColor: "text-blue-400",
    title: "Creative Strategy",
    description: "Hypotheses grounded in competitor benchmarks, not gut feel.",
    borderColor: "border-blue-500/40",
  },
  {
    tag: "EXPERIMENTATION",
    tagColor: "text-green-400",
    title: "A/B Testing",
    description: "Experiments for icons, screenshots, and descriptions across every store.",
    borderColor: "border-green-500/40",
  },
  {
    tag: "PRODUCTION",
    tagColor: "text-red-400",
    title: "Design Briefs",
    description: "Clear direction so design teams know exactly what to build.",
    borderColor: "border-red-500/40",
  },
  {
    tag: "GROWTH",
    tagColor: "text-emerald-400",
    title: "CVR Optimization",
    description: "Analyzing funnels, finding drop-offs, iterating toward higher conversion.",
    borderColor: "border-emerald-500/40",
  },
];

export const ServicesSection = () => (
  <section className="py-24 md:py-32 max-w-[1400px] mx-auto">
    <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest px-6 md:px-16 lg:px-24">What I Do</p>

    {/* Mobile: horizontal scroll */}
    <div className="flex items-center gap-2 px-6 mb-3 lg:hidden">
      <span className="text-xs text-muted-foreground">Swipe to explore</span>
      <span className="text-muted-foreground animate-pulse">→</span>
    </div>
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pl-6 md:pl-16 pb-4 lg:hidden scrollbar-hide">
      {services.map((s, i) => (
        <div
          key={s.title}
          className={`rounded-2xl p-5 min-w-[200px] max-w-[220px] shrink-0 snap-start bg-gradient-to-br from-service-card-from to-service-card-to border ${s.borderColor} ${i === services.length - 1 ? 'mr-6 md:mr-16' : ''}`}
        >
          <div className="h-[80px]">
            <span className={`text-xs font-bold uppercase tracking-wider ${s.tagColor}`}>
              {s.tag}
            </span>
          </div>
          <h3 className="text-base font-bold text-foreground mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
        </div>
      ))}
    </div>

    {/* Desktop: grid */}
    <div className="hidden lg:grid lg:grid-cols-4 gap-6 px-16 lg:px-24">
      {services.map((s) => (
        <div
          key={s.title}
          className={`rounded-2xl p-8 bg-gradient-to-br from-service-card-from to-service-card-to border ${s.borderColor} hover:border-primary/30 transition-colors duration-300`}
        >
          <div className="h-[120px]">
            <span className={`text-xs font-bold uppercase tracking-wider ${s.tagColor}`}>
              {s.tag}
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
        </div>
      ))}
    </div>
  </section>
);
