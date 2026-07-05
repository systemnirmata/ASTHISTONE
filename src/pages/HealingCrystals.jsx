import React, { useState, useMemo } from "react";
import { Search, Compass, Heart, Eye, ShieldAlert } from "lucide-react";
import ProductCard from "../components/ProductCard";

export default function HealingCrystals() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPurpose, setSelectedPurpose] = useState("All");

  const spotlightProduct = {
    name: "Imperial Amethyst Tower",
    price: "$4,250",
    description: "Sourced from the deep volcanic veins of Uruguay, this 14-inch tower features exceptionally deep violet hues and pristine crystalline structure. Designed to anchor the energy of any sanctuary.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0o3oduJW-3DshgtLGz2xmKXU1AulvCIhDuhwJbTMgCn7uETn0UhbXispwt8e0hB0teaXzKKex9sTNV9mSYZ41ds0nJnn7JwlJc_yThXDvhVbGFxvwNUwaFhjJ9ixA68lDEJ_RUNKjSDARpQA_VUGSQqc4vyi0v0P3uYQVNNRWr7jWRYbVx6bwJAfNgkJnpCiVlTAF-SJ8hmah4UlaBHgpqQaTO8LOMffF9GP8xZkRMTOlPKM93z3yUA"
  };

  const crystalProducts = [
    {
      id: "hc1",
      name: "Ethereal Rose Sphere",
      price: "$580",
      rawPrice: 580,
      rarity: "LOVE",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxSUVCg-Yjz3oJufvEIkbkz_SRQcSomAZqhhtJP3kJKbgWLajRTPoFjQUQ78C24IoTe0hC0CctVEjHe4PT2LaEens5hOUiTG0Ax-zqXXjKDZY9adBW-tVE-YWXjIwwNIMoHog-TStv1lDgGANqXY5OR1AXdth0xK4us2HFK_2YWHinkHgoNi3bYzU7EoiLJoHfnzn8XSygQDUSzBhf7SqRc1Sq0uEfVwzxcsMvZxSWNUBd0rQbFUGVFg"
    },
    {
      id: "hc2",
      name: "Shadow Pillar Tourmaline",
      price: "$820",
      rawPrice: 820,
      rarity: "PROTECTION",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP4EO5nRFURJXyKAGS-dxIE3MRajdnEYXMw23BZ_xf0e-4WPDjyaQEzFvNdjCpcxpI1B4dNOvIlEWWMuULd0X1gBiWpUKgrXC0FzoD_Qb5qFaqQ5qEsjkBEfPPEZTTtjfn3O-DULs8KIWZ95_MCjnkOzEyGMoWC_oitbxgrVYykZo0-YQsYAUb4H0G2z915RsSBYA23KAdfyFOQW_GSmxTsccpP7IMukCtdvIjGHjjrWCh9_kO_ddkzQ"
    },
    {
      id: "hc3",
      name: "Celestial Druzy Cluster",
      price: "$1,250",
      rawPrice: 1250,
      rarity: "CLARITY",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaVIZ5dQCOhyBHK2UhQnEhmt1a1Nsb8jsuiER97P1E8XKTa6J7zcd2W2VBHmPU8mNS1NrBFPybMXMp-gSQVn2vBb1qF_nMrPYuoQPEmt3UEck6tyxsUSZ6TELpaeDjCiLkamTJafzvf8ju2hPRVuPcJjoYudz65DrUVjK4r59tJZikCmCl0hkSdFurlUt0Pi1YYmr6FkPtCMRCkwsTvSSSLYwmv30G2y8br3hn3eTrzGuVBOAKaoIBLQ"
    },
    {
      id: "hc4",
      name: "Spectral Flash Labradorite",
      price: "$440",
      rawPrice: 440,
      rarity: "INTUITION",
      rating: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiAj9yUKKv_aOmWzfFyUOML2_sXP6bAO_W6109PLLCCz56celQIs0RxPwZ7oBVGukCK1UZCt_o-4z-_GdnIrKGpj-ypGoe0wWyuf416kvxKvDtdJT4jr8FA-MOrtnF4SL7a235TSc6r-9POwKcJy8GpWcs_pB3mArXfB3zk-u8c_kz89SyzBZzWR8gpRLFXBRKux0oiDWWI6CQurWFHshrzq386xFRpvwbvOmaw340GE5ULn0PeeowuA"
    }
  ];

  const filteredCrystals = useMemo(() => {
    return crystalProducts.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        product.rarity.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesPurpose = selectedPurpose === "All" || 
        product.rarity.toLowerCase() === selectedPurpose.toLowerCase();

      return matchesSearch && matchesPurpose;
    });
  }, [searchQuery, selectedPurpose]);

  return (
    <div className="bg-[#16121a] text-[#eadfec] min-h-screen pb-24">
      {/* Hero Banner */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        <div className="absolute inset-0 z-0">
          <div
            className="w-full h-full bg-cover bg-center scale-110 blur-[2px] opacity-40"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBL-azj1zdtD1amUInl_-IpkwDQdwPSRRDfKNGuSnJS0pD3eQfMt0fBpOSn3uLum-m5HlgiswQLKjHF0z9LMbT-QALXp3zIT1VKEjfBz-wKJS4AKU3idOrXZi6uDassD43e3yUnw2dRyjjQTKLVTKu5d73aIM640ULCy_GOCwTCTnn22Wm9XYSXasaqH49jysWUx7y0_8pmN60bl451CXjDeBq06m0iclvIgODzD22HoKiY6a4apkfBTQ')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#16121a] via-transparent to-[#16121a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#16121a] via-transparent to-[#16121a]" />
        </div>
        <div className="relative z-10 text-center max-w-[800px] px-6 reveal">
          <nav className="flex justify-center space-x-2 font-label text-[11px] text-[#deb7ff]/60 mb-6 tracking-widest">
            <span>HOME</span>
            <span>/</span>
            <span className="text-[#deb7ff]">HEALING CRYSTALS</span>
          </nav>
          <h1 className="font-display text-[42px] md:text-[64px] font-bold mb-6 leading-tight text-white">
            Healing Crystals
          </h1>
          <p className="font-body text-[16px] md:text-[18px] text-[#cfc2d5] leading-relaxed max-w-[650px] mx-auto">
            Unlock the silent frequency of the earth. Our hand-selected collection combines geological rarity with spiritual resonance for the modern seeker.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="relative z-20 -mt-10 px-6 max-w-[1200px] mx-auto">
        <div className="glass-panel rounded-[24px] md:rounded-full px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center flex-grow w-full md:w-auto md:border-r border-white/10 pr-6">
            <Search className="text-[#cfc2d5]/60 mr-3" size={20} />
            <input
              type="text"
              placeholder="Search by energy, color, or stone..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent border-none outline-none focus:outline-none text-[#eadfec] placeholder:text-[#cfc2d5]/45 w-full text-[14px] font-body"
            />
          </div>
          
          {/* Energy Purpose Filter Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-3">
            {["All", "Love", "Protection", "Clarity", "Intuition"].map((purpose) => (
              <button
                key={purpose}
                onClick={() => setSelectedPurpose(purpose)}
                className={`px-4 py-1.5 rounded-full text-[12px] font-semibold tracking-wider transition-all duration-300 ${
                  selectedPurpose === purpose
                    ? "bg-[#7b2cbf] text-white"
                    : "border border-white/10 hover:border-[#deb7ff]/50 text-[#eadfec]/80 hover:text-white"
                }`}
              >
                {purpose.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Spotlight */}
      <section className="px-6 py-24 max-w-[1200px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="reveal order-2 lg:order-1 space-y-6">
            <div className="flex items-center space-x-3">
              <span className="bg-[#7b2cbf]/20 text-[#deb7ff] px-3.5 py-1 rounded-full font-label text-[10px] font-bold tracking-widest">
                SPOTLIGHT
              </span>
              <span className="font-label text-[10px] text-[#cfc2d5] tracking-widest font-bold">
                LIMITED EDITION
              </span>
            </div>
            <h2 className="font-headline text-[32px] md:text-[44px] font-semibold text-white leading-tight">
              {spotlightProduct.name}
            </h2>
            <p className="font-body text-[16px] text-[#cfc2d5] leading-relaxed">
              {spotlightProduct.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-2">
                <div className="font-label text-[11px] text-[#deb7ff] tracking-widest font-bold">
                  BENEFITS
                </div>
                <ul className="font-body text-[#cfc2d5] text-[14px] space-y-1.5">
                  <li className="flex items-center gap-2">✔ Mental Clarity</li>
                  <li className="flex items-center gap-2">✔ Dream Recall</li>
                </ul>
              </div>
              <div className="space-y-2">
                <div className="font-label text-[11px] text-[#deb7ff] tracking-widest font-bold">
                  ELEMENT
                </div>
                <ul className="font-body text-[#cfc2d5] text-[14px] space-y-1.5">
                  <li className="flex items-center gap-2">💨 Wind & Ether</li>
                </ul>
              </div>
            </div>
            
            <div className="flex items-baseline gap-6 pt-6">
              <span className="font-headline text-[36px] font-bold text-[#deb7ff]">
                {spotlightProduct.price}
              </span>
              <span className="font-label text-[10px] text-[#cfc2d5] tracking-widest font-bold">
                FREE INSURED SHIPPING
              </span>
            </div>
            
            <button className="bg-[#7b2cbf] text-white px-10 py-4 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-xl shadow-[#7b2cbf]/25 w-full sm:w-auto">
              Add to Private Collection
            </button>
          </div>

          <div className="reveal reveal-delay-1 order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#7b2cbf]/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative rounded-[40px] overflow-hidden border border-white/15 aspect-square bg-[#1a1a1a]">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={spotlightProduct.image}
                  alt={spotlightProduct.name}
                  loading="lazy"
                  width="600"
                  height="600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid List Section */}
      <section className="py-24 bg-[#110c15]/30 border-t border-white/5">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex flex-col sm:flex-row justify-between sm:items-end mb-16 reveal">
            <div className="space-y-2">
              <h2 className="font-headline text-[32px] md:text-[40px] font-semibold text-white">
                The Earth's Treasury
              </h2>
              <p className="font-body text-[#cfc2d5] text-[15px]">
                Discover stones selected for their vibration and aesthetic purity.
              </p>
            </div>
            <span className="font-label text-[11px] text-[#cfc2d5] opacity-65 tracking-widest font-bold mt-4 sm:mt-0">
              {filteredCrystals.length} RESULTS
            </span>
          </div>

          {filteredCrystals.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredCrystals.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#cfc2d5] opacity-60">No crystals found matching search keywords.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
