import React, { Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Scroll to Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return null;
}

// Lazy loaded page components
const Home = React.lazy(() => import("./pages/Home"));
const ShopAll = React.lazy(() => import("./pages/ShopAll"));
const HealingCrystals = React.lazy(() => import("./pages/HealingCrystals"));
const OurStory = React.lazy(() => import("./pages/OurStory"));
const RareFinds = React.lazy(() => import("./pages/RareFinds"));
const ShippingReturns = React.lazy(() => import("./pages/ShippingReturns"));
const ReturnPolicy = React.lazy(() => import("./pages/ReturnPolicy"));
const CookieSettings = React.lazy(() => import("./pages/CookieSettings"));
const TermsConditions = React.lazy(() => import("./pages/TermsConditions"));

// Custom luxury loader fallback
function LuxuryLoader() {
  return (
    <div className="min-h-screen bg-[#16121a] flex flex-col justify-center items-center space-y-6">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 border-4 border-[#7b2cbf]/10 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-[#deb7ff] rounded-full animate-spin"></div>
      </div>
      <span className="font-label text-[11px] text-[#deb7ff] uppercase tracking-[0.25em] font-semibold animate-pulse">
        Loading Vault...
      </span>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#16121a] font-body text-[#eadfec] selection:bg-[#deb7ff]/20">
        <Navbar />
        
        <main className="flex-grow">
          <Suspense fallback={<LuxuryLoader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<ShopAll />} />
              <Route path="/healing-crystals" element={<HealingCrystals />} />
              <Route path="/rare-finds" element={<RareFinds />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/shipping-returns" element={<ShippingReturns />} />
              <Route path="/return-policy" element={<ReturnPolicy />} />
              <Route path="/cookie-settings" element={<CookieSettings />} />
              <Route path="/terms-conditions" element={<TermsConditions />} />
              {/* Fallback redirect */}
              <Route path="*" element={<Home />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
