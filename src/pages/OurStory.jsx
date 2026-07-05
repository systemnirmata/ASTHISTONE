import React from "react";
import { CheckCircle2, Shield, Award, Leaf, ChevronDown } from "lucide-react";

export default function OurStory() {
  const milestones = [
    {
      year: "2018",
      title: "The Vision",
      text: "The first expedition to the Minas Gerais mines sparked the idea for a new standard in luxury crystal commerce."
    },
    {
      year: "2020",
      title: "Trusted Sources",
      text: "Securing exclusive partnerships with ethical family-owned mines across three continents."
    },
    {
      year: "2022",
      title: "The Collection",
      text: "Launching our first capsule collection of master-crafted healing obelisks and rare spheres."
    },
    {
      year: "Present",
      title: "Divine Space",
      text: "Expanding into high-luxury home design integration, bridging geology, fine art, and architecture."
    }
  ];

  return (
    <div className="bg-[#16121a] text-[#eadfec] min-h-screen pb-24">
      
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzIN66clFRvsM7pPx29vuCG0Gh9_fHbK10UxLRDE8EMZgUZaLvqlwMEZfTkZfyqKvsWc_1XGE70Jz2NIq0gFsmRywcp6tp8aU9dKXWOtihdkPpBwtlwd-bwp-6UIUuRC2PTtSvNpZwP9N3WPV80DmrxgNGDnfSY15KytxIwDPf7gA0I7yZlKOIHT3M2w5EIQKN0QaIAFyRhnU5z3Vye7uobBdBq4Q0XcitQZzsRqOrQsYeRGiI1gWB9Q"
            alt="Amethyst crystals"
            className="w-full h-full object-cover brightness-50"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#16121a]/25 to-[#16121a]"></div>
        </div>
        <div className="relative z-10 text-center px-6 md:px-0 max-w-[800px] space-y-6">
          <span className="font-label text-[12px] text-[#deb7ff] tracking-[0.4em] uppercase mb-4 block reveal">
            The Legacy of Earth
          </span>
          <h1 className="font-headline text-[48px] md:text-[72px] font-bold text-white leading-tight reveal">
            Our Story
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#cfc2d5] leading-relaxed reveal">
            Blending the raw, untamed beauty of nature with the precision of master craftsmanship to create spiritual anchors for the modern soul.
          </p>
          <div className="pt-8 reveal animate-bounce flex justify-center">
            <ChevronDown size={32} className="text-[#deb7ff]" />
          </div>
        </div>
      </section>

      {/* Our Beginning */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU5BqCgQCInaIeSqvG6QivQDGO-hH24aiAoLQVBjK_VpP2SoAEnioS_3kh1aZd4XptrvZXAKm6EXYnCrVd46vJwQuArSc81pVyzG2PSD7h9pwF_Rrh-2peo8HNlZUo08kAwXFAOESLQPPNSTryRLWIy1lAy_3t9PByrwUUGjaD7vOf5QFI6UkvREiMAgIzV_toIl0eYZkYVnoL9PICCyxUFCftHkwOcluhTZ8lCKGe66yqrdjXVLHb_g"
              alt="Raw Gemstones"
              loading="lazy"
              className="rounded-[40px] w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              width="500"
              height="500"
            />
          </div>
          <div className="flex flex-col justify-center space-y-6 reveal lg:pl-10">
            <span className="font-label text-[12px] text-[#deb7ff] tracking-widest uppercase font-semibold">
              The Genesis
            </span>
            <h2 className="font-headline text-[32px] md:text-[40px] font-semibold text-white leading-tight">
              Where It All Began
            </h2>
            <div className="h-[2px] w-24 bg-[#7b2cbf]/30"></div>
            <p className="font-body text-[16px] text-[#cfc2d5] leading-relaxed">
              ASTHISTONE was born from a singular encounter in the rugged terrain of the Himalayan foothills. Our founders, guided by a passion for geology and spiritual mindfulness, discovered that the most profound energy exists within the Earth's silent treasures.
            </p>
            <p className="font-body text-[16px] text-[#cfc2d5] leading-relaxed">
              What started as a personal quest for grounding crystals evolved into a global search for the world's most exceptional mineral specimens—each hand-picked for its vibrance, purity, and aesthetic power.
            </p>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 bg-[#110c15] relative overflow-hidden border-y border-white/5">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#deb7ff]/5 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#7b2cbf]/5 rounded-full blur-[100px]"></div>
        <div className="max-w-[800px] mx-auto text-center px-6 reveal space-y-8">
          <h2 className="font-headline text-[32px] md:text-[40px] font-semibold text-white">Our Mission</h2>
          <p className="font-display text-[24px] md:text-[36px] italic font-light text-[#deb7ff] tracking-tight leading-snug">
            "To democratize the experience of luxury healing while preserving the absolute rarity and sacred integrity of every stone we curate."
          </p>
          <div className="flex justify-center gap-3 pt-4">
            <div className="w-2.5 h-2.5 rounded-full bg-[#deb7ff]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#deb7ff]/40"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#deb7ff]/20"></div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16 reveal space-y-3">
          <span className="font-label text-[12px] text-[#deb7ff] tracking-[0.4em] uppercase mb-4 block">Foundations</span>
          <h2 className="font-headline text-[32px] md:text-[40px] font-semibold text-white">Our Core Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Value 1 */}
          <div className="glass-card p-10 rounded-[32px] text-center space-y-6 hover:scale-[1.03] transition-transform amethyst-glow">
            <Shield size={48} className="text-[#deb7ff] mx-auto" />
            <h3 className="font-headline text-[20px] font-semibold text-white uppercase tracking-widest">Authenticity</h3>
            <p className="font-body text-[#cfc2d5] text-[14px] leading-relaxed">
              Every ASTHISTONE specimen is GIA certified, ensuring its chemical purity and natural origin without artificial enhancements.
            </p>
          </div>
          {/* Value 2 */}
          <div className="glass-card p-10 rounded-[32px] text-center space-y-6 hover:scale-[1.03] transition-transform amethyst-glow">
            <Award size={48} className="text-[#deb7ff] mx-auto" />
            <h3 className="font-headline text-[20px] font-semibold text-white uppercase tracking-widest">Premium Quality</h3>
            <p className="font-body text-[#cfc2d5] text-[14px] leading-relaxed">
              We reject 98% of the stones we inspect, selecting only the 'A+' grade minerals with the most vibrant energy and visual clarity.
            </p>
          </div>
          {/* Value 3 */}
          <div className="glass-card p-10 rounded-[32px] text-center space-y-6 hover:scale-[1.03] transition-transform amethyst-glow">
            <Leaf size={48} className="text-[#deb7ff] mx-auto" />
            <h3 className="font-headline text-[20px] font-semibold text-white uppercase tracking-widest">Ethical Sourcing</h3>
            <p className="font-body text-[#cfc2d5] text-[14px] leading-relaxed">
              Direct partnerships with artisanal mines ensure fair wages, safe conditions, and minimal environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* Our Craftsmanship */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            <div className="order-2 lg:order-1 space-y-6 reveal">
              <span className="font-label text-[12px] text-[#deb7ff] tracking-widest uppercase font-semibold">
                The Process
              </span>
              <h2 className="font-headline text-[32px] md:text-[40px] font-semibold text-white">
                Unrivaled Precision
              </h2>
              <p className="font-body text-[16px] text-[#cfc2d5] leading-relaxed">
                Beyond the raw stone lies the art of presentation. Our master lapidaries spend hundreds of hours studying a single specimen before any work begins, identifying the unique "inner fire" that defines its character.
              </p>
              <div className="space-y-6 pt-4">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#deb7ff] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-headline text-[18px] text-white font-semibold">Hand-Selection</h4>
                    <p className="text-[#cfc2d5] text-[14px]">Curated from elite geological veins in Brazil, Madagascar, and Tibet.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-[#deb7ff] mt-1 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-headline text-[18px] text-white font-semibold">Precision Finishing</h4>
                    <p className="text-[#cfc2d5] text-[14px]">Finishing that enhances natural facets without compromising the stone's crystalline structure.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 reveal">
              <div className="relative group">
                <div className="absolute -inset-4 bg-[#deb7ff]/10 rounded-[40px] blur-2xl group-hover:bg-[#deb7ff]/20 transition-all"></div>
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3IvpHdgRJksArcMWmyGUsZcwRKOed2f8XxIZXsWt13bT-yzypmhnZGMo1LHgD0dKPzHy1zMUajR0T9CmsGAiZcY3fhC4czW3FHKpH1t_BbHxkOdaZ5Jm4SJeohPBQrRd-qo7wXdZY53tK5lC-hIj-fuAPfsVKhfuz5RcO7b1snkvpycuIe3QbYecSPdvfxpS83EdoM0m88pT9oeCcNf3bU1F3ZoylAKZMjeFUVFNViKSsXTJqE78fpQ"
                  alt="Crafting obsidian"
                  loading="lazy"
                  className="relative rounded-[40px] w-full object-cover z-10 shadow-2xl"
                  width="600"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="py-24 bg-[#110c15]/30 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="font-headline text-[32px] md:text-[40px] text-center mb-24 font-semibold text-white">
            The Evolution
          </h2>
          
          <div className="relative">
            {/* Center Line for desktop */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[1px] bg-white/10 hidden md:block" />
            
            <div className="space-y-16">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-center reveal ${
                    idx % 2 === 0 ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Left content block (or right on alternating) */}
                  <div
                    className={`md:w-1/2 w-full ${
                      idx % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                    } text-center space-y-2`}
                  >
                    <span className="font-label text-[13px] text-[#deb7ff] font-bold">
                      {m.year}
                    </span>
                    <h3 className="font-headline text-[20px] font-semibold text-white">
                      {m.title}
                    </h3>
                    <p className="text-[#cfc2d5] text-[14px] leading-relaxed max-w-[450px] mx-auto md:mx-0 md:ml-auto">
                      {m.text}
                    </p>
                  </div>

                  {/* Dot separator */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-[#deb7ff] border-4 border-[#16121a] z-10 hidden md:block" />

                  {/* Empty side for layout spacing */}
                  <div className="md:w-1/2 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
