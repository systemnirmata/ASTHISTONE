import React, { useState, useMemo } from "react";
import ProductCard from "../components/ProductCard";

export default function ShopAll() {
  const [selectedRarity, setSelectedRarity] = useState("All");
  const [sortOrder, setSortOrder] = useState("default");

  const baseProducts = [
    {
      id: "p1",
      name: "Siberian Amethyst Core",
      price: "$1,200",
      rawPrice: 1200,
      rarity: "Legendary",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0o3oduJW-3DshgtLGz2xmKXU1AulvCIhDuhwJbTMgCn7uETn0UhbXispwt8e0hB0teaXzKKex9sTNV9mSYZ41ds0nJnn7JwlJc_yThXDvhVbGFxvwNUwaFhjJ9ixA68lDEJ_RUNKjSDARpQA_VUGSQqc4vyi0v0P3uYQVNNRWr7jWRYbVx6bwJAfNgkJnpCiVlTAF-SJ8hmah4UlaBHgpqQaTO8LOMffF9GP8xZkRMTOlPKM93z3yUA"
    },
    {
      id: "p2",
      name: "Royal Blue Sapphire",
      price: "$4,500",
      rawPrice: 4500,
      rarity: "Epic",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3FRX7rlXFRbJ-KqOpqaNcOWL00SV0z0abTQbb-DwoXc9_cFIjxEM8CkGGTB_X_m1CH_nOfU3TjHQad8zzNCv0PT5RjyCK0dmuDp1DeZH1OXZq0gHR-27EPjKyNPr2D3LMBpeuulxHl5ZsL2L5sMMhRH4-BWz6-WIlDZeH_qYZY59gCqipq3I8Av4C-bcuOTNs0XUyl-DieUT9jhpkroegZtjsLStRr54ooFEZ6BgMZfYfaKASE3Y_fQ"
    },
    {
      id: "p3",
      name: "Moonstone Elixir Ring",
      price: "$850",
      rawPrice: 850,
      rarity: "Rare",
      rating: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxSUVCg-Yjz3oJufvEIkbkz_SRQcSomAZqhhtJP3kJKbgWLajRTPoFjQUQ78C24IoTe0hC0CctVEjHe4PT2LaEens5hOUiTG0Ax-zqXXjKDZY9adBW-tVE-YWXjIwwNIMoHog-TStv1lDgGANqXY5OR1AXdth0xK4us2HFK_2YWHinkHgoNi3bYzU7EoiLJoHfnzn8XSygQDUSzBhf7SqRc1Sq0uEfVwzxcsMvZxSWNUBd0rQbFUGVFg"
    },
    {
      id: "p4",
      name: "Citrine Abundance Slab",
      price: "$320",
      rawPrice: 320,
      rarity: "Uncommon",
      rating: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDydPMHLVfjHXemXdsqZL-DNkM_-AbwvAYWL61H9EuFyds3Q9SXOKpL19cf-Wo7ocYnRoy8nSEmJr7bV6Pcq5Vp2-HYYkEAdvHNQ-cWPkXS4nzhO9t8RtR1ildtEzLk91oMrcYvBt42XhwCPAEK6Vqj5qedn2UbXzcXbhT66baiGEt719xPDZkPkt9b3rpSsyUyyMOc7vU6sz9bzoJgTYv2JogHy3rrASm_X5O5gCVlj7CO3eYLK-LTLQ"
    },
    {
      id: "p5",
      name: "Black Tourmaline Shield",
      price: "$150",
      rawPrice: 150,
      rarity: "Common",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAP4EO5nRFURJXyKAGS-dxIE3MRajdnEYXMw23BZ_xf0e-4WPDjyaQEzFvNdjCpcxpI1B4dNOvIlEWWMuULd0X1gBiWpUKgrXC0FzoD_Qb5qFaqQ5qEsjkBEfPPEZTTtjfn3O-DULs8KIWZ95_MCjnkOzEyGMoWC_oitbxgrVYykZo0-YQsYAUb4H0G2z915RsSBYA23KAdfyFOQW_GSmxTsccpP7IMukCtdvIjGHjjrWCh9_kO_ddkzQ"
    },
    {
      id: "p6",
      name: "Emerald Eye Pendant",
      price: "$2,100",
      rawPrice: 2100,
      rarity: "Epic",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAV5qkIr_toilYAD_c38reUS6mlSxWPNMw02JJff3-Qqsb7SqDL2-TOGF5GAy5MhuY7xgcJyMTxZhLlb3XgcVFFFi6ePWXaeXAffeUk_C6HCYbKsBs3fqv2k--wsqdgrPBQKfy_GYBoM_OjEwZfHGaprihOaWXoM4SsDSFNPtgNpqXV1Fkcl26a1i3eGsbWu1J8Q492WXccYeD_yCTSH9IXP0Z78QYFI32HhcPh0otbDxFWmz_38zbS3w"
    },
    {
      id: "p7",
      name: "Rose Quartz Heart",
      price: "$45",
      rawPrice: 45,
      rarity: "Common",
      rating: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBi28ppVoVoDuo07WZBcxzdliV7l7zMVT2rwlqzvJPQCgZfyOME5s0AODsodaLT131SfhExpxY7HriBsKKP4rS7n0pGjxeDBZ0oKQsyqO-moj2zRsG5qaocNKa9yVX5zukD6K3SfKHcnLptcsnA1S-DdtOJAY0wmQbNbcKKY733wJQWhfPrqPoiUEP4-27Kp7OtvhmYneG8coytSRn2n0fhmICzXBQ8BdoEMaLDzrTUf6J1bx5pRTQnYg"
    },
    {
      id: "p8",
      name: "Golden Pyrite Cluster",
      price: "$550",
      rawPrice: 550,
      rarity: "Rare",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDaVIZ5dQCOhyBHK2UhQnEhmt1a1Nsb8jsuiER97P1E8XKTa6J7zcd2W2VBHmPU8mNS1NrBFPybMXMp-gSQVn2vBb1qF_nMrPYuoQPEmt3UEck6tyxsUSZ6TELpaeDjCiLkamTJafzvf8ju2hPRVuPcJjoYudz65DrUVjK4r59tJZikCmCl0hkSdFurlUt0Pi1YYmr6FkPtCMRCkwsTvSSSLYwmv30G2y8br3hn3eTrzGuVBOAKaoIBLQ"
    },
    {
      id: "p9",
      name: "Celestial Opal Cuff",
      price: "$3,200",
      rawPrice: 3200,
      rarity: "Legendary",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDR6WS2mUDu0TnsF71LXIgp8peFd6o0AOQYJ5hre7x6y7oKtkEujT7EE9XMdqU7WETdAhJgqJAS14hcjVTPpT-osSyocmxKPrSxqw6GX1AvyRaoS5ErY7GUvxk7U4OUrmyrC_QLwKCm9uPWfDzs89QKaOilbkP805TZB5fXYq0EBqNtpixqYbi1QXCCuXL5bD6ZZbNOHkEdSZwVvE-DLX_sGRL2Zd86TCcNnM_WqofzEtTajNJtu-LQIQ"
    },
    {
      id: "p10",
      name: "Smoky Quartz Obelisk",
      price: "$280",
      rawPrice: 280,
      rarity: "Rare",
      rating: 4,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCkcz_pMFPZGpNWPIFWXkn1BbPaPRdWCT6x4hSRR4fkr36jZ-utupT6qklHb9dAPhdACBj9zfte_zM3NL41FvEpwKY7VXakzSb-yS5bJUS6BnDadfo4mWs_cLs1k-Y_MirVCC_PpZNTkq98bHvFhlKNVjyOqYAZVd7M9RxxeeY8YLiDnnMb6TDJq6ANNfWFrANFbQyPIzRRtFEmQLuLrdB31wN7s9m8gICnYuckJdWHUbmGJKF-uH_oeQ"
    },
    {
      id: "p11",
      name: "Imperial Topaz Specimen",
      price: "$8,900",
      rawPrice: 8900,
      rarity: "Legendary",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBIZDW7SzdJq5BAzWJRtw16e8BJwkeKCrS6NjgzOjGGCgclnUDIULVmJrMgRd1AJVJU0uCH577520yQ3_KUgo4V-V248bxscxdgjyodvdKgG-FEaePq_SaJoRuA4ks4iW9luk3RRfoIvUT58jQy9iNm-YqS3bi9Lj0ySU4h6YKs7LJSjgvLUVKPeRiiMco7EEkOGsEWBslM1CWjrs2PTImsCnUnBTaN0_vcqKcjO4wugDJ8KRl_8k8Cxg"
    },
    {
      id: "p12",
      name: "Aquamarine Raw Crystal",
      price: "$720",
      rawPrice: 720,
      rarity: "Epic",
      rating: 5,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDiAj9yUKKv_aOmWzfFyUOML2_sXP6bAO_W6109PLLCCz56celQIs0RxPwZ7oBVGukCK1UZCt_o-4z-_GdnIrKGpj-ypGoe0wWyuf416kvxKvDtdJT4jr8FA-MOrtnF4SL7a235TSc6r-9POwKcJy8GpWcs_pB3mArXfB3zk-u8c_kz89SyzBZzWR8gpRLFXBRKux0oiDWWI6CQurWFHshrzq386xFRpvwbvOmaw340GE5ULn0PeeowuA"
    }
  ];

  // Concatenate base products to match design layout representation (24 products total)
  const allProducts = useMemo(() => {
    return baseProducts.concat(
      baseProducts.map((p) => ({
        ...p,
        id: p.id + "-duplicate"
      }))
    );
  }, []);

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...allProducts];

    // Filtering by rarity
    if (selectedRarity !== "All") {
      result = result.filter(
        (p) => p.rarity.toLowerCase() === selectedRarity.toLowerCase()
      );
    }

    // Sorting by price
    if (sortOrder === "asc") {
      result.sort((a, b) => a.rawPrice - b.rawPrice);
    } else if (sortOrder === "desc") {
      result.sort((a, b) => b.rawPrice - a.rawPrice);
    }

    return result;
  }, [allProducts, selectedRarity, sortOrder]);

  return (
    <div className="pt-32 min-h-screen bg-[#16121a] text-[#eadfec] pb-24">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        
        {/* Page Title Header */}
        <div className="text-center md:text-left mb-12 space-y-4">
          <span className="font-label text-[12px] text-[#deb7ff] uppercase tracking-[0.25em] font-semibold block">
            The Amethyst Edit
          </span>
          <h1 className="font-headline text-[40px] md:text-[52px] font-bold text-white leading-tight">
            Explore All Collections
          </h1>
          <p className="font-body text-[#cfc2d5] max-w-[600px] text-[15px] leading-relaxed">
            Discover a gallery of hand-crafted minerals, sacred geometry, and high-frequency gemstone designs.
          </p>
        </div>

        {/* Filter Controls Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/5 pb-8">
          {/* Rarity Filter Tabs */}
          <div className="flex flex-wrap gap-3">
            {["All", "Legendary", "Epic", "Rare", "Uncommon", "Common"].map((rarity) => (
              <button
                key={rarity}
                onClick={() => setSelectedRarity(rarity)}
                className={`px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wider transition-all duration-300 ${
                  selectedRarity === rarity
                    ? "bg-[#7b2cbf] text-white shadow-md shadow-[#7b2cbf]/20"
                    : "border border-white/10 hover:border-[#deb7ff]/50 text-[#eadfec]/80 hover:text-white"
                }`}
              >
                {rarity.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Sort Menu */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <span className="font-label text-[11px] uppercase tracking-widest text-[#cfc2d5] opacity-65 font-bold">
              Sort By:
            </span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="bg-[#110c15] border border-white/10 rounded-full px-5 py-2.5 text-[13px] text-[#eadfec] outline-none focus:border-[#deb7ff] cursor-pointer"
            >
              <option value="default">Featured</option>
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        {filteredAndSortedProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredAndSortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 glass-card rounded-[32px] max-w-[600px] mx-auto space-y-4">
            <h3 className="font-headline text-[22px] font-semibold text-white">
              No products found
            </h3>
            <p className="text-[#cfc2d5] text-[14px]">
              We couldn't find any products matching your rarity filter. Try clearing selection.
            </p>
            <button
              onClick={() => setSelectedRarity("All")}
              className="bg-[#7b2cbf] text-white px-6 py-2.5 rounded-full text-[13px] font-semibold tracking-wider hover:scale-105 transition-transform"
            >
              SHOW ALL
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
