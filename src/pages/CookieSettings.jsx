import React, { useState, useEffect } from "react";
import { Cookie, Check, ShieldAlert } from "lucide-react";

export default function CookieSettings() {
  const [preferences, setPreferences] = useState({
    necessary: true, // Always true
    analytics: true,
    marketing: false
  });
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("cookie_consent");
    if (saved) {
      try {
        setPreferences(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleToggle = (key) => {
    if (key === "necessary") return;
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleSave = () => {
    localStorage.setItem("cookie_consent", JSON.stringify(preferences));
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="bg-[#16121a] text-[#eadfec] min-h-screen pt-32 pb-24 relative">
      <div className="max-w-[800px] mx-auto px-6">
        
        {/* Page Hero */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-label text-[12px] text-[#deb7ff] uppercase tracking-[0.25em] font-semibold block">
            Privacy Vault
          </span>
          <h1 className="font-headline text-[38px] md:text-[52px] font-bold text-white leading-tight">
            Cookie Settings
          </h1>
          <p className="font-body text-[#cfc2d5] max-w-[600px] mx-auto text-[15px] leading-relaxed">
            Manage your consent preferences. We respect your digital privacy and use tracking parameters with care.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass-panel p-8 md:p-12 rounded-[32px] space-y-8 relative">
          
          <div className="space-y-4">
            <h3 className="font-headline text-[22px] font-semibold text-white flex items-center gap-2">
              <Cookie size={22} className="text-[#deb7ff]" /> Consent Preferences
            </h3>
            <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
              Cookies are small data blocks that help store preferences, evaluate user counts, and tailor campaign messages. You can choose which tracking tiers you accept.
            </p>
          </div>

          <hr className="border-white/5" />

          {/* Setting Items */}
          <div className="space-y-6">
            
            {/* Essential */}
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-1">
                <h4 className="font-headline text-[16px] text-white font-semibold flex items-center gap-2">
                  Essential Cookies <span className="text-[10px] bg-[#deb7ff]/10 text-[#deb7ff] px-2 py-0.5 rounded font-label uppercase">REQUIRED</span>
                </h4>
                <p className="text-[14px] text-[#cfc2d5]/70 leading-relaxed">
                  Crucial for standard website functionality, shopping carts, and security validations. They cannot be disabled.
                </p>
              </div>
              <div className="pt-2">
                <div className="w-12 h-6 rounded-full bg-[#7b2cbf]/40 p-1 cursor-not-allowed flex items-center justify-end">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Analytics */}
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-1">
                <h4 className="font-headline text-[16px] text-white font-semibold">
                  Performance & Analytics
                </h4>
                <p className="text-[14px] text-[#cfc2d5]/70 leading-relaxed">
                  Help us understand how visitors interact with the site, letting us analyze search errors and enhance loading speeds.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handleToggle("analytics")}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 flex items-center ${
                    preferences.analytics ? "bg-[#7b2cbf] justify-end" : "bg-white/10 justify-start"
                  }`}
                  aria-label="Toggle analytics cookies"
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-md" />
                </button>
              </div>
            </div>

            <hr className="border-white/5" />

            {/* Marketing */}
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-1">
                <h4 className="font-headline text-[16px] text-white font-semibold">
                  Marketing & Campaigns
                </h4>
                <p className="text-[14px] text-[#cfc2d5]/70 leading-relaxed">
                  Used to coordinate and target advertising campaigns relevant to your aesthetic interests across third-party websites.
                </p>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => handleToggle("marketing")}
                  className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 flex items-center ${
                    preferences.marketing ? "bg-[#7b2cbf] justify-end" : "bg-white/10 justify-start"
                  }`}
                  aria-label="Toggle marketing cookies"
                >
                  <div className="w-4 h-4 rounded-full bg-white shadow-md" />
                </button>
              </div>
            </div>

          </div>

          <hr className="border-white/5" />

          {/* Action Button */}
          <div className="flex justify-end pt-4">
            <button
              onClick={handleSave}
              className="bg-[#7b2cbf] hover:bg-[#8234c6] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 active:scale-95 transition-all duration-300 text-[14px]"
            >
              Save Preferences
            </button>
          </div>

        </div>

      </div>

      {/* Floating Toast Notification */}
      {showToast && (
        <div className="fixed bottom-10 right-10 bg-[#deb7ff] text-[#4a007f] font-semibold px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 animate-fadeIn z-50">
          <Check size={18} className="stroke-[3]" />
          <span>Preferences updated successfully!</span>
        </div>
      )}

    </div>
  );
}
