import React, { useState } from "react";
import { Star } from "lucide-react";

export default function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  // High-end fallback luxury placeholder (pure dark aesthetic)
  const fallbackImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuB0o3oduJW-3DshgtLGz2xmKXU1AulvCIhDuhwJbTMgCn7uETn0UhbXispwt8e0hB0teaXzKKex9sTNV9mSYZ41ds0nJnn7JwlJc_yThXDvhVbGFxvwNUwaFhjJ9ixA68lDEJ_RUNKjSDARpQA_VUGSQqc4vyi0v0P3uYQVNNRWr7jWRYbVx6bwJAfNgkJnpCiVlTAF-SJ8hmah4UlaBHgpqQaTO8LOMffF9GP8xZkRMTOlPKM93z3yUA";

  return (
    <div className="group relative bg-[#111111] border border-white/5 rounded-[20px] overflow-hidden transition-all duration-500 hover:border-[#deb7ff]/30 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(123,44,191,0.15)] flex flex-col justify-between h-full">
      
      {/* Product Image Container */}
      <div className="aspect-square relative overflow-hidden bg-[#1a1a1a] rounded-t-[20px]">
        {/* Loader Skeleton */}
        {!imageLoaded && !isError && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#231e26] via-[#2d2831] to-[#231e26] animate-pulse" />
        )}

        <img
          src={isError ? fallbackImage : product.image}
          alt={product.name}
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => {
            setIsError(true);
            setImageLoaded(true);
          }}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
          width="400"
          height="400"
        />

        {/* Hover overlay quick action */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <button className="pointer-events-auto bg-[#deb7ff] text-[#4a007f] font-semibold px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:scale-105 active:scale-95 shadow-lg">
            Add to Cart
          </button>
        </div>

        {/* Rarity Tag */}
        {product.rarity && (
          <div className="absolute top-4 left-4">
            <span className="font-label text-[9px] bg-black/60 backdrop-blur-md text-[#deb7ff] px-3 py-1 rounded-full uppercase tracking-widest font-bold">
              {product.rarity}
            </span>
          </div>
        )}
      </div>

      {/* Info Content Section */}
      <div className="p-6 text-center flex-grow flex flex-col justify-between">
        <div>
          <h4 className="font-body text-[16px] text-[#eadfec] mb-1 font-medium group-hover:text-[#deb7ff] transition-colors line-clamp-1">
            {product.name}
          </h4>
          <p className="font-headline text-[20px] text-[#deb7ff] mb-3 font-semibold">
            {product.price}
          </p>
        </div>

        {/* Product Rating */}
        <div className="flex justify-center text-[#fdb969] mt-2">
          {Array.from({ length: 5 }).map((_, idx) => (
            <Star
              key={idx}
              size={14}
              className={`mx-0.5 ${
                idx < (product.rating || 5)
                  ? "fill-[#fdb969] stroke-[#fdb969]"
                  : "stroke-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
