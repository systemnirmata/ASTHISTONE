import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Heart, ShoppingBag, User, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "COLLECTION", path: "/shop" },
    { name: "HEALING CRYSTALS", path: "/healing-crystals" },
    { name: "RARE FINDS", path: "/rare-finds" },
    { name: "OUR STORY", path: "/our-story" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#16121a]/70 backdrop-blur-xl border-b border-white/5 shadow-[0_0_40px_rgba(123,44,191,0.05)]">
      <div className="flex justify-between items-center px-6 md:px-20 py-5 max-w-[1440px] mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center gap-12">
          <Link
            to="/"
            className="font-display text-[22px] tracking-[0.15em] text-[#eadfec] font-bold hover:opacity-80 transition-opacity"
          >
            ASTHISTONE
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 font-body text-[14px] tracking-wider">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `transition-all duration-300 hover:text-[#deb7ff] hover:scale-105 ${
                    isActive
                      ? "text-[#deb7ff] border-b border-[#deb7ff]"
                      : "text-[#eadfec]/70"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden lg:flex items-center gap-6 text-[#eadfec]/70">
            <button aria-label="Favorites" className="hover:text-[#deb7ff] transition-colors">
              <Heart size={20} className="stroke-[1.5]" />
            </button>
            <button aria-label="Cart" className="hover:text-[#deb7ff] transition-colors relative">
              <ShoppingBag size={20} className="stroke-[1.5]" />
              <span className="absolute -top-1.5 -right-1.5 bg-[#deb7ff] text-[#4a007f] text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
            <button aria-label="Account" className="hover:text-[#deb7ff] transition-colors">
              <User size={20} className="stroke-[1.5]" />
            </button>
          </div>

          <Link
            to="/shop"
            className="bg-[#7b2cbf] text-[#e4c2ff] px-6 py-2.5 rounded-full font-semibold text-[14px] tracking-wide hover:scale-105 hover:bg-[#8234c6] active:scale-95 transition-all duration-300"
          >
            Shop Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#eadfec] hover:text-[#deb7ff] transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-[73px] left-0 w-full bg-[#16121a]/95 border-b border-white/5 backdrop-blur-2xl flex flex-col px-6 py-8 gap-6 z-40 transition-all duration-300 animate-fadeIn">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `text-[16px] tracking-widest font-semibold ${
                  isActive ? "text-[#deb7ff]" : "text-[#eadfec]/70"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
          <hr className="border-white/5 my-2" />
          <div className="flex justify-around items-center py-2 text-[#eadfec]/70">
            <button aria-label="Favorites" className="hover:text-[#deb7ff] flex gap-2 items-center">
              <Heart size={20} /> <span className="text-[13px]">Favorites</span>
            </button>
            <button aria-label="Cart" className="hover:text-[#deb7ff] flex gap-2 items-center">
              <ShoppingBag size={20} /> <span className="text-[13px]">Bag</span>
            </button>
            <button aria-label="Account" className="hover:text-[#deb7ff] flex gap-2 items-center">
              <User size={20} /> <span className="text-[13px]">Account</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
