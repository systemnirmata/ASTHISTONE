import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Compass, Shield, Heart, Sparkles, Award } from "lucide-react";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const featuredProducts = [
    {
      id: "p1",
      name: "Purple Emerald",
      price: "$1,250",
      rarity: "RARE • HEALING",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmgA39swPMAIQonw14vb0HtDpsGNPxjuLITZmNVpbbtuo4LaDMjML14OaYtIoPWM6JwkS3qCewLgxLBXn4XJ5SVEX9zPe5rafxXhINRkUrMUJTq42GjMyCgdW2hwz97NdxSa3yBLAE8f_ow50qIb2PzFvKHpJ8k5DglQCTZ-xIy83yS2XKfNFYWjmNzGMuX2qnIhiXIk-SboFQoLn226USZWCht49n2THogEr0AF8WUH11cL5CuGJovA"
    },
    {
      id: "p2",
      name: "Purple Topaz",
      price: "$980",
      rarity: "LIMITED • CLARITY",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBi28ppVoVoDuo07WZBcxzdliV7l7zMVT2rwlqzvJPQCgZfyOME5s0AODsodaLT131SfhExpxY7HriBsKKP4rS7n0pGjxeDBZ0oKQsyqO-moj2zRsG5qaocNKa9yVX5zukD6K3SfKHcnLptcsnA1S-DdtOJAY0wmQbNbcKKY733wJQWhfPrqPoiUEP4-27Kp7OtvhmYneG8coytSRn2n0fhmICzXBQ8BdoEMaLDzrTUf6J1bx5pRTQnYg"
    },
    {
      id: "p3",
      name: "Purple Iolite",
      price: "$1,450",
      rarity: "PURE • INTUITION",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAAbKgVQM7rBvkyE9i7QrMmY0pMKylQQI1GPiVFTmAVIdDm8JNOamhgyE6EDoWoaI-kWRoJg5ocvuLA7JCM4z2j4nJNM67SyMLIOPYTPnbF7xXcCYo4C8c-s80sgmtP8G9F5rPAz2hvj_pdB8_dgeXpk8lVg8oAw8YaKRhGBg9SZ2AYwEa2xbp25TGNjGEZ3FLEqoJuLNFKDaHc0Zdz3N77dOhjoVFZdiAYGADEfCccVA4JRghbgk2zGQ"
    }
  ];

  return (
    <div className="pt-24 min-h-screen bg-[#16121a] text-[#eadfec] selection:bg-[#deb7ff]/30">
      
      {/* Hero Section */}
      <section className="min-h-[85vh] flex items-center relative overflow-hidden py-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#7b2cbf]/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="reveal space-y-8">
            <span className="font-label text-[12px] text-[#deb7ff] uppercase tracking-[0.25em] font-semibold block">
              The Zenith of Crystallography
            </span>
            <h1 className="font-headline text-[44px] md:text-[60px] font-bold leading-[1.1] text-white">
              Nature's Finest Energy, Crafted Into Timeless Beauty.
            </h1>
            <p className="font-body text-[16px] md:text-[18px] text-[#cfc2d5] max-w-[500px] leading-relaxed">
              Discover a curated sanctuary of rare minerals and healing stones, ethically sourced and polished to evoke spiritual clarity and unparalleled luxury.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/shop"
                className="bg-[#7b2cbf] text-white px-8 py-3.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-lg shadow-[#7b2cbf]/25 text-center w-full sm:w-auto"
              >
                Explore Collection
              </Link>
              <Link
                to="/our-story"
                className="border border-white/10 hover:border-[#deb7ff]/50 text-white px-8 py-3.5 rounded-full font-semibold hover:scale-105 transition-all duration-300 backdrop-blur-sm text-center w-full sm:w-auto"
              >
                Our Heritage
              </Link>
            </div>
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-6 opacity-60 text-[11px] font-label tracking-widest font-semibold">
              <div className="flex items-center gap-2">
                <Shield size={16} className="text-[#deb7ff]" />
                <span>CERTIFIED ETHICAL</span>
              </div>
              <div className="flex items-center gap-2">
                <Compass size={16} className="text-[#deb7ff]" />
                <span>SUSTAINABLY SOURCED</span>
              </div>
              <div className="flex items-center gap-2">
                <Award size={16} className="text-[#deb7ff]" />
                <span>PREMIUM CRAFT</span>
              </div>
            </div>
          </div>

          {/* Right Media Column */}
          <div className="reveal reveal-delay-2 flex justify-center items-center relative h-full min-h-[400px]">
            {isMobile ? (
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJiXWDHpf2PGW13xd7DynGHSylLVOgL8F50aMS9-hAM5NiGuhwnX0TvnF1br4UEEa-U9Z1egpKFjgTV4NJAmwgZy5DOUCdkQlAcBZcYjUT51H2KwzKHDqlr2t-tCDXjkdy0xFNuYwmV3iE0bj6YcDEhrqD6j8ENGjM6ykjlfwQEp0xNtTQjC6GH1oiySdz9eeZz-7gXhNNn30dnJ-NhrXrBvsVxRASKDqHQHg4-soPhyBBnrbQiKS7G-_7I4r3mxBEe7U"
                alt="Amethyst crystal"
                className="relative z-10 max-h-[60vh] object-contain drop-shadow-[0_0_50px_rgba(123,44,191,0.3)]"
                width="600"
                height="600"
              />
            ) : (
              <div className="relative z-10 w-full h-[550px] rounded-[32px] overflow-hidden drop-shadow-[0_0_50px_rgba(123,44,191,0.25)] bg-[#110c15]">
                <video
                  src="/hero_page.mp4"
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Featured Collection */}
      <section className="py-24 border-t border-white/5 bg-[#110c15]/20">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-16 reveal">
            <div>
              <span className="font-label text-[12px] text-[#deb7ff] uppercase tracking-[0.2em] mb-3 block">
                Selected Pieces
              </span>
              <h2 className="font-headline text-[32px] md:text-[40px] font-semibold text-white">
                The Amethyst Edit
              </h2>
            </div>
            <Link
              to="/shop"
              className="text-[#deb7ff] font-semibold flex items-center gap-2 hover:gap-4 transition-all mt-4 sm:mt-0"
            >
              View All <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why AsthiStone (Bento Grid) */}
      <section className="py-24 bg-[#110c15]/50 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="text-center mb-16 reveal">
            <h2 className="font-headline text-[32px] md:text-[40px] font-semibold text-white mb-4">
              The AsthiStone Standard
            </h2>
            <p className="text-[#cfc2d5] max-w-[600px] mx-auto text-[15px]">
              Beyond aesthetics, we deal in the currency of cosmic energy and artisanal heritage.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2 glass-card rounded-[24px] p-8 md:p-12 space-y-6">
              <Sparkles size={36} className="text-[#deb7ff]" />
              <h3 className="font-headline text-[22px] font-semibold text-white">Uncompromising Quality</h3>
              <p className="text-[#cfc2d5] text-[15px] leading-relaxed">
                Every crystal is hand-inspected by our master gemologists, ensuring only the highest vibrational frequency and structural integrity enter our collection.
              </p>
            </div>
            <div className="glass-card rounded-[24px] p-8 md:p-12 space-y-6">
              <Heart size={36} className="text-[#deb7ff]" />
              <h3 className="font-headline text-[22px] font-semibold text-white">Healing Intent</h3>
              <p className="text-[#cfc2d5] text-[14px] leading-relaxed">
                Pre-cleansed under the full moon to reset natural energetic pathways and support your spiritual alignment.
              </p>
            </div>
            <div className="glass-card rounded-[24px] p-8 md:p-12 space-y-6">
              <Award size={36} className="text-[#deb7ff]" />
              <h3 className="font-headline text-[22px] font-semibold text-white">Bespoke Heritage</h3>
              <p className="text-[#cfc2d5] text-[14px] leading-relaxed">
                Artisan cut and polished using heritage techniques passed down through generations of lapidary masters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section (Editorial Cards) */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Category 1 */}
            <div className="relative group overflow-hidden rounded-[32px] h-[500px] reveal">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnd9uZLYmV95RPoD_0uvDTZ6cU0EZFva1D7opHn0nVE8Q1Av7BqFEJ3kOxL-dwHLm1OTJdhKaeaqx4NwcX3aOJt9RrIr3zqqqPhJWDXhXqAz-dS6CPeXLnPwtBF_x4vxC_n6lkWzAbkeOTYTbuggtLpy5SelhdcIBVVEsaIukt40Vk6Tq98mrSvFnVSFfZgC-vkR_-4KIINkfoPMUJdXX82H43AMyRxJzf9QIFc1QSaBaRJtSj30O_tA"
                alt="Healing Crystals"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16121a] via-[#16121a]/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 space-y-3">
                <h3 className="font-headline text-[28px] font-semibold text-white">Healing Crystals</h3>
                <Link to="/healing-crystals" className="text-[#deb7ff] font-bold tracking-widest text-[11px] uppercase flex items-center gap-2 hover:translate-x-1 transition-transform">
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Category 2 */}
            <div className="relative group overflow-hidden rounded-[32px] h-[500px] reveal reveal-delay-1">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUOuTApGfGI7CSnznBKDPSaxlhr9dN7wUDdH4fE5H2TvqId_4029rU_0q-Rotu7YGxeqxum0TUMXhBITUrUABr94VdEWNYWTZO_jeYXm06dgYi_72hSJ8jQpuqYFXMGianfDaB6KA0200YSZROwvT5MdF-EpfmKEcrd4S9f7ELs5mjaRWe4xXbU05O6rDe_dDS-blF0rD20DdPk6vy6zORorSq9IDJjKQypYBOk47eAUmTPmkPyto3yQ"
                alt="Gemstones"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16121a] via-[#16121a]/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 space-y-3">
                <h3 className="font-headline text-[28px] font-semibold text-white">Gemstones</h3>
                <Link to="/rare-finds" className="text-[#deb7ff] font-bold tracking-widest text-[11px] uppercase flex items-center gap-2 hover:translate-x-1 transition-transform">
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* Category 3 */}
            <div className="relative group overflow-hidden rounded-[32px] h-[500px] reveal reveal-delay-2">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDalR1Sae8q8i0jmQu7PLxQ8Yr_6N1u8XZbn-NeduGdQRh3U4lj-_wdIG827n8GddlyJISV8dMe6aWllzL-b8nVl4DqKPxFRk6KO-M7l2k6JEvV0IR9lX8Vyw5AqLtoWPvFaoY0_CnHb-2fcoiZXUXPhjIHD6um1ZMaR4A3j_booLWaRU7mtGnwkUJmC6IrqODYl1gu9XSSVIPdfio7urJjhjGyhnNiiWWM6XdFo5EUntHTl5wpDh65SA"
                alt="Jewelry"
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#16121a] via-[#16121a]/20 to-transparent"></div>
              <div className="absolute bottom-10 left-10 space-y-3">
                <h3 className="font-headline text-[28px] font-semibold text-white">Jewelry</h3>
                <Link to="/shop" className="text-[#deb7ff] font-bold tracking-widest text-[11px] uppercase flex items-center gap-2 hover:translate-x-1 transition-transform">
                  Explore <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 border-t border-white/5 bg-[#110c15]/30">
        <div className="max-w-[1440px] mx-auto px-6 md:px-20 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#7b2cbf]/10 blur-3xl rounded-full"></div>
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuyPY46x10QID1i2CdzxTPiQXtupWxC14U3PMPqB1YMImxIuJePScAlXqYmOEYsqRUUk4m7v7y5cASQSB8gTyO4dUoVpPP1YvkG7egsdgNtXsPi1hFOXqN4sKmhLP5ItszwCzQ5yrQBOs3_AK6bzNbycMc0vCImUBAi0eJKfmwlXipJ6jKgW6suzmC3Odo3FPym8FCsZhRJxBqIsDfqV3CtgGjoLZBKJOB2n9R7oZBWq-cJlhQvn2t9Q"
                alt="Master Artisan"
                loading="lazy"
                className="rounded-[40px] w-full aspect-[4/5] object-cover relative z-10"
                width="500"
                height="625"
              />
            </div>
          </div>
          
          <div className="reveal reveal-delay-2 space-y-6">
            <span className="font-label text-[12px] text-[#deb7ff] uppercase tracking-[0.2em] font-semibold block">
              Our Story
            </span>
            <h2 className="font-headline text-[36px] md:text-[48px] font-bold leading-tight text-white">
              Crafted for the Divine in You.
            </h2>
            <p className="font-body text-[16px] text-[#cfc2d5] leading-relaxed">
              AsthiStone began as a journey to the remote mountains of Uruguay and Brazil, seeking not just beauty, but stones that pulsed with life. Our founder, a second-generation lapidarist, believed that every crystal holds a unique frequency—a signature from the earth herself.
            </p>
            <p className="font-body text-[16px] text-[#cfc2d5] leading-relaxed pb-4">
              Today, we bridge the gap between ancient geology and modern luxury. Every piece in our collection is treated with the reverence of a fine art artifact, from the first discovery to the final polish.
            </p>
            <Link to="/our-story" className="inline-flex items-center gap-4 group">
              <div className="w-16 h-[1px] bg-[#deb7ff] group-hover:w-24 transition-all"></div>
              <span className="font-label text-[12px] uppercase tracking-widest text-[#eadfec] font-bold">
                Discover Our Heritage
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="glass-card rounded-[48px] p-8 md:p-20 text-center relative overflow-hidden reveal">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#7b2cbf]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
            <h2 className="font-headline text-[32px] md:text-[40px] font-semibold text-white mb-4 relative z-10">
              Join the Inner Circle
            </h2>
            <p className="text-[#cfc2d5] max-w-[500px] mx-auto mb-8 relative z-10 text-[15px]">
              Sign up for early access to our limited-run drops and receive our guide on crystal meditation.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-[600px] mx-auto relative z-10">
              <input
                type="email"
                required
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-[#deb7ff]/50 text-white placeholder:text-[#cfc2d5]/40 text-[14px]"
                placeholder="Your email address"
              />
              <button type="submit" className="bg-[#7b2cbf] text-white px-8 py-4 rounded-full font-bold hover:scale-105 active:scale-95 transition-all text-[14px]">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
