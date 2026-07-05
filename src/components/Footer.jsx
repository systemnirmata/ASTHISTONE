import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Globe, Star, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full relative bg-[#110c15] border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-20 py-20 max-w-[1440px] mx-auto">
        {/* Brand Column */}
        <div className="space-y-6">
          <Link
            to="/"
            className="font-display text-[24px] text-[#eadfec] uppercase font-extrabold tracking-tighter hover:opacity-85"
          >
            AsthiStone
          </Link>
          <p className="font-body text-[#cfc2d5] text-[14px] leading-relaxed max-w-xs">
            Curators of the world's most exceptional mineral treasures and spiritual vessels.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-body font-bold text-[#eadfec] text-[16px] tracking-wide">Company</h4>
          <Link to="/our-story" className="font-body text-[#cfc2d5] hover:text-[#deb7ff] text-[14px] transition-colors">
            Brand Story
          </Link>
          <Link to="/our-story" className="font-body text-[#cfc2d5] hover:text-[#deb7ff] text-[14px] transition-colors">
            Our Process
          </Link>
          <Link to="/our-story" className="font-body text-[#cfc2d5] hover:text-[#deb7ff] text-[14px] transition-colors">
            Sustainability
          </Link>
        </div>

        {/* Support Links */}
        <div className="flex flex-col space-y-4">
          <h4 className="font-body font-bold text-[#eadfec] text-[16px] tracking-wide">Support</h4>
          <Link to="/shipping-returns" className="font-body text-[#cfc2d5] hover:text-[#deb7ff] text-[14px] transition-colors">
            Shipping & Returns
          </Link>
          <Link to="/return-policy" className="font-body text-[#cfc2d5] hover:text-[#deb7ff] text-[14px] transition-colors">
            Return Policy
          </Link>
          <Link to="/terms-conditions" className="font-body text-[#cfc2d5] hover:text-[#deb7ff] text-[14px] transition-colors">
            Terms & Conditions
          </Link>
          <Link to="/cookie-settings" className="font-body text-[#cfc2d5] hover:text-[#deb7ff] text-[14px] transition-colors">
            Cookie Settings
          </Link>
        </div>

        {/* Newsletter & Socials */}
        <div className="space-y-6">
          <h4 className="font-body font-bold text-[#eadfec] text-[16px] tracking-wide">Join the Inner Circle</h4>
          <form 
            onSubmit={(e) => e.preventDefault()} 
            className="flex border-b border-white/20 pb-2 group focus-within:border-[#deb7ff] transition-colors"
          >
            <input
              type="email"
              placeholder="Email Address"
              className="bg-transparent border-none outline-none focus:outline-none text-[#eadfec] w-full text-[14px] placeholder-white/30"
              required
            />
            <button type="submit" aria-label="Subscribe" className="text-[#deb7ff] hover:scale-110 transition-transform">
              <ArrowRight size={18} />
            </button>
          </form>
          <div className="flex space-x-5 text-[#cfc2d5]">
            <a href="#" aria-label="Instagram" className="hover:text-[#deb7ff] transition-colors">
              <Globe size={18} />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-[#deb7ff] transition-colors">
              <Star size={18} />
            </a>
            <a href="#" aria-label="Pinterest" className="hover:text-[#deb7ff] transition-colors">
              <Heart size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-6 md:px-20 pb-10 max-w-[1440px] mx-auto text-center md:text-left border-t border-white/5 pt-8">
        <p className="font-body text-[#cfc2d5] opacity-50 text-[12px]">
          © {new Date().getFullYear()} AsthiStone. All rights reserved. Crafted for the divine.
        </p>
      </div>
    </footer>
  );
}
