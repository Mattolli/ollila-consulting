import { useState } from "react";
import mattiPhoto from "@/assets/Matti2026.png";

export const AboutSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("matti@ollilaconsulting.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">About</h2>
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-end">
        <div className="max-w-2xl space-y-6 text-sm md:text-base text-muted-foreground leading-relaxed">
          <p>
            I figure out what makes people tap "Get" or "Add to Cart." I run tests, build hypotheses, and write briefs that help design teams create store pages that actually convert.
          </p>
          <p>
            I'm mostly focused on games — I've worked with genres like strategy, puzzle, simulation, action, and RPGs, but the approach works for any category. Mobile first, but also PC and console.
          </p>
          <p>Currently consulting for Supercell.</p>
          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/mattiollila/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm md:text-base text-primary-foreground bg-green-400 hover:bg-green-400/80 rounded-full px-8 py-3 font-medium transition-colors duration-200"
            >
              LinkedIn
            </a>
            <button
              onClick={handleCopy}
              className="text-sm md:text-base text-primary-foreground bg-primary hover:bg-primary/80 rounded-full px-8 py-3 font-medium transition-colors duration-200"
            >
              {copied ? "Email copied!" : "Say hello!"}
            </button>
          </div>
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
};
