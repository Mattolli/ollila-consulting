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
  <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 max-w-[1400px] mx-auto">
    <p className="text-sm text-muted-foreground mb-8 uppercase tracking-widest">What I Do</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s) => (
        <div
          key={s.title}
          className={`rounded-2xl p-8 min-h-[280px] bg-gradient-to-br from-service-card-from to-service-card-to border ${s.borderColor} hover:border-primary/30 transition-colors duration-300 flex flex-col gap-4`}
        >
          <span className={`text-xs font-bold uppercase tracking-wider ${s.tagColor}`}>
            {s.tag}
          </span>
          <div className="flex-1" />
          <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
        </div>
      ))}
    </div>
  </section>
);
