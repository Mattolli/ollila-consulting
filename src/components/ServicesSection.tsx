const services = [
  {
    title: "Store Page Audits",
    description: "Systematic analysis of icons, screenshots, descriptions, and metadata against category benchmarks.",
  },
  {
    title: "A/B Test Strategy",
    description: "Hypothesis-driven testing frameworks for store page creative and copy variations.",
  },
  {
    title: "Creative Briefs",
    description: "Actionable briefs for design teams based on competitive analysis and conversion data.",
  },
  {
    title: "Keyword Research",
    description: "Data-driven keyword strategies for improved organic visibility across App Store and Google Play.",
  },
];

export const ServicesSection = () => (
  <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 max-w-[1400px] mx-auto">
    <p className="text-sm text-muted-foreground mb-6">Services</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((s) => (
        <div
          key={s.title}
          className="rounded-lg p-6 bg-gradient-to-br from-service-card-from to-service-card-to border border-border hover:border-primary/30 transition-colors duration-300"
        >
          <h3 className="text-base font-bold text-foreground mb-3">{s.title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
        </div>
      ))}
    </div>
  </section>
);
