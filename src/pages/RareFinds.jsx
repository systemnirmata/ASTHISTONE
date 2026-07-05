import React from "react";
import { Sparkles, MapPin, ArrowRight } from "lucide-react";

export default function RareFinds() {
  const specimens = [
    {
      name: "Imperial Alexandrite",
      origin: "Ural Mountains",
      price: "$42,500",
      tag: "ULTRA RARE",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuArNF-BTJpcTCoIxb_Mcefdw7KaxSzx9L32qQnNAd9zNQALWVm2XpM6JEgmCaUT8vLy0B_g8z5b0pWjYaNRbtx0Na5o_srWxPF_esnq_uevGdAVLkNIEwRd51uz2ZGi7eqdAhoIVP26RKLoL2GDH4-WaRNNv832lBH9OV80vD8jd2DHjaiwDEXS5mQ7z0vVHDAxfJVDSrbdUMJr_tzBikUpPxIffxVbpkSEf52EAzaiHsHRwGBTvFrIPw"
    },
    {
      name: "Aurora Black Opal",
      origin: "Lightning Ridge",
      price: "$18,200",
      tag: "MUSEUM GRADE",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR6WS2mUDu0TnsF71LXIgp8peFd6o0AOQYJ5hre7x6y7oKtkEujT7EE9XMdqU7WETdAhJgqJAS14hcjVTPpT-osSyocmxKPrSxqw6GX1AvyRaoS5ErY7GUvxk7U4OUrmyrC_QLwKCm9uPWfDzs89QKaOilbkP805TZB5fXYq0EBqNtpixqYbi1QXCCuXL5bD6ZZbNOHkEdSZwVvE-DLX_sGRL2Zd86TCcNnM_WqofzEtTajNJtu-LQIQ"
    },
    {
      name: "Midnight Tanzanite",
      origin: "Merelani Hills",
      price: "$9,400",
      tag: "RARE",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkcz_pMFPZGpNWPIFWXkn1BbPaPRdWCT6x4hSRR4fkr36jZ-utupT6qklHb9dAPhdACBj9zfte_zM3NL41FvEpwKY7VXakzSb-yS5bJUS6BnDadfo4mWs_cLs1k-Y_MirVCC_PpZNTkq98bHvFhlKNVjyOqYAZVd7M9RxxeeY8YLiDnnMb6TDJq6ANNfWFrANFbQyPIzRRtFEmQLuLrdB31wN7s9m8gICnYuckJdWHUbmGJKF-uH_oeQ"
    },
    {
      name: "Rose Argyle Heart",
      origin: "Argyle Mine",
      price: "$125,000",
      tag: "ULTRA RARE",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIZDW7SzdJq5BAzWJRtw16e8BJwkeKCrS6NjgzOjGGCgclnUDIULVmJrMgRd1AJVJU0uCH577520yQ3_KUgo4V-V248bxscxdgjyodvdKgG-FEaePq_SaJoRuA4ks4iW9luk3RRfoIvUT58jQy9iNm-YqS3bi9Lj0ySU4h6YKs7LJSjgvLUVKPeRiiMco7EEkOGsEWBslM1CWjrs2PTImsCnUnBTaN0_vcqKcjO4wugDJ8KRl_8k8Cxg"
    }
  ];

  return (
    <div className="bg-[#16121a] text-[#eadfec] min-h-screen pb-24">
      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#16121a] via-transparent to-[#16121a]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7b2cbf]/10 rounded-full blur-[120px] pointer-events-none" />
        </div>
        <div className="relative z-10 w-full px-6 md:px-20 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="reveal space-y-6">
            <span className="text-[#deb7ff] font-label text-[12px] tracking-[0.4em] uppercase block mb-2">
              The Vault
            </span>
            <h1 className="font-headline text-[48px] md:text-[68px] font-bold text-white leading-[1.1]">
              Rare Finds
            </h1>
            <p className="font-body text-[16px] md:text-[18px] text-[#cfc2d5] max-w-[540px] leading-relaxed">
              Discover our most exclusive collection of rare crystals, exceptional gemstones, and one-of-a-kind treasures unspanned from the world's most remote terrestrial depths.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="bg-[#7b2cbf] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-[#7b2cbf]/25">
                Explore Collection
              </button>
              <button className="border border-white/10 px-10 py-4 rounded-full font-semibold transition-all hover:border-[#deb7ff]/50 hover:bg-white/5">
                Our Heritage
              </button>
            </div>
          </div>

          <div className="relative flex justify-center items-center reveal reveal-delay-1">
            <div className="absolute w-[120%] h-[120%] bg-[#7b2cbf]/5 blur-3xl rounded-full" />
            <div className="relative group max-w-[400px] md:max-w-[480px]">
              <img
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpRIC4CKGrvBUfH-vxcy9t2AO60X0FbgGG0GdMeTMeGrGxvR_kp5fvJVJvZvxrxK22MVS53v-mDal5CjEULix6cM9A5_voXRuo1KFl99242Cu9v8a2FluRSUnc0VB7C4TfxYwNtOR-udC79Lo9LSFW1cajF0To8l1XE7gS5EJ-0iwchmwYBcswq7WBPyo86ucxtqKowRb0MbXETf_H2TgCk5AmWvyZkUNBwIKLua7T529_Z0nJ1AxUIg"
                alt="Purple emerald"
                width="480"
                height="640"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Exclusive Collection Grid */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between md:items-end mb-16 reveal">
          <div className="max-w-xl space-y-3">
            <h2 className="font-headline text-[32px] md:text-[40px] font-semibold text-white">
              Exceptional Specimens
            </h2>
            <p className="text-[#cfc2d5] text-[15px] leading-relaxed">
              A curated selection of the earth's rarest formations, certified for their purity and unique geological history.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specimens.map((specimen, idx) => (
            <div
              key={idx}
              className="reveal group bg-[#111111]/80 rounded-[20px] overflow-hidden border border-white/5 hover:border-[#deb7ff]/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(123,44,191,0.15)] flex flex-col justify-between"
            >
              <div className="h-80 relative overflow-hidden bg-[#1a1a1a]">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  src={specimen.image}
                  alt={specimen.name}
                  loading="lazy"
                  width="400"
                  height="320"
                />
                <div className="absolute top-4 right-4 bg-[#7b2cbf]/35 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#deb7ff]/30 text-[#deb7ff] font-label text-[9px] font-bold tracking-widest uppercase">
                  {specimen.tag}
                </div>
              </div>
              
              <div className="p-8 text-center flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-headline text-[20px] font-semibold text-white mb-2">
                    {specimen.name}
                  </h3>
                  <p className="text-[#cfc2d5]/60 text-[12px] font-label tracking-wider flex items-center justify-center gap-1.5 mb-6">
                    <MapPin size={12} className="text-[#deb7ff]" /> Origin: {specimen.origin}
                  </p>
                </div>
                
                <div className="flex justify-between items-center pt-5 border-t border-white/5">
                  <span className="text-[#deb7ff] font-semibold text-[18px]">
                    {specimen.price}
                  </span>
                  <button className="text-[12px] font-label font-bold tracking-wider hover:text-[#deb7ff] text-[#eadfec] transition-colors flex items-center gap-1">
                    Inquire <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Masterpiece */}
      <section className="relative bg-[#110c15]/60 border-y border-white/5 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#7b2cbf]/5 blur-3xl pointer-events-none" />
        <div className="px-6 md:px-20 max-w-[1440px] mx-auto py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="reveal">
            <img
              className="w-full h-[400px] md:h-[550px] object-cover rounded-[40px] shadow-2xl border border-white/10"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRs0UDywDbnB4i2WoFSIr8B9ct2BrN4sEjKeYdUf6_gG70M9PDmsq2RIMLD_AlupiNvKlIAHejIFgf1coVkOtSPJ2QHH-il4qmGdwyfMcbcdonPmjL_UNhQ13N9Of1gHJloRtikpK-DotNJYTuOsIH0y4ozOPiBuasZ4lip8F1yQBhmp1Zv7gsDbCeaBT9pyqwj3m0RsxZ0MZXpSabnJcIK4PXVKIuvHz2VRt0i-jvQT-YTmP-IQHJtA"
              alt="Midnight Amethyst masterpiece"
              loading="lazy"
              width="600"
              height="550"
            />
          </div>

          <div className="reveal space-y-6 lg:pl-10">
            <span className="text-[#deb7ff] font-label text-[12px] tracking-[0.4em] uppercase block">
              Seasonal Masterpiece
            </span>
            <h2 className="font-headline text-[32px] md:text-[44px] font-bold text-white leading-tight">
              The Midnight Amethyst
            </h2>
            <p className="font-body text-[16px] text-[#cfc2d5] leading-relaxed">
              Unearthed in the deepest chambers of Artigas, this singular 45-carat masterpiece exhibits a saturation of violet rarely seen in nature. Its crystalline structure defies conventional formation patterns, making it a true geological anomaly.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/5">
              <div>
                <span className="text-[11px] font-label text-[#cfc2d5]/65 block mb-0.5">Clarity</span>
                <span className="text-white font-medium text-[15px]">Internally Flawless</span>
              </div>
              <div>
                <span className="text-[11px] font-label text-[#cfc2d5]/65 block mb-0.5">Cut</span>
                <span className="text-white font-medium text-[15px]">Radiant Cushion</span>
              </div>
              <div>
                <span className="text-[11px] font-label text-[#cfc2d5]/65 block mb-0.5">Weight</span>
                <span className="text-white font-medium text-[15px]">45.22 Carats</span>
              </div>
              <div>
                <span className="text-[11px] font-label text-[#cfc2d5]/65 block mb-0.5">Heat Treatment</span>
                <span className="text-white font-medium text-[15px]">None (Natural)</span>
              </div>
            </div>
            
            <div className="pt-6">
              <button className="bg-[#7b2cbf] text-white px-10 py-3.5 rounded-full font-semibold hover:scale-105 transition-transform text-[14px]">
                Inquire For Pricing
              </button>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
