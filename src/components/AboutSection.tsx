import mattiPhoto from "@/assets/Matti2026.png";

export const AboutSection = () => (
  <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 max-w-[1400px] mx-auto">
    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">About</h2>
    <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-end">
      <div className="max-w-2xl space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
        <p>
          I'm focused on games. I figure out what makes people tap "Get" or "Add to Cart." I run tests, build hypotheses, and write briefs that help design teams create store pages that actually convert.
        </p>
        <p>
          I've worked with game genres like strategy, puzzle, simulation, action, and RPGs, but the approach works for any category. Mobile first, but also PC and console.
        </p>
        <p>Currently consulting for Supercell.</p>
      </div>
      <div className="w-full md:w-[420px] lg:w-[500px] shrink-0">
        <img
          src={mattiPhoto}
          alt="Matti Ollila"
          className="w-full object-contain"
        />
      </div>
    </div>
  </section>
);
