import { useState } from "react";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("matti@ollilaconsulting.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 md:py-32 max-w-[1400px] mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-10">Contact</h2>
      <div className="flex flex-wrap gap-4">
        <a
          href="https://www.linkedin.com/in/mattiollila/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm md:text-base text-primary-foreground bg-primary hover:bg-primary/80 rounded-full px-8 py-3 font-medium transition-colors duration-200"
        >
          LinkedIn
        </a>
        <button
          onClick={handleCopy}
          className="relative text-sm md:text-base text-primary-foreground bg-primary hover:bg-primary/80 rounded-full px-8 py-3 font-medium transition-colors duration-200"
        >
          {copied ? "Email copied!" : "Say hello!"}
        </button>
      </div>
    </section>
  );
};
