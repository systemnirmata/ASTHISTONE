import React from "react";
import { Scale, FileText, CheckCircle } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="bg-[#16121a] text-[#eadfec] min-h-screen pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Page Hero */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-label text-[12px] text-[#deb7ff] uppercase tracking-[0.25em] font-semibold block">
            Legal notice
          </span>
          <h1 className="font-headline text-[38px] md:text-[52px] font-bold text-white leading-tight">
            Terms & Conditions
          </h1>
          <p className="font-body text-[#cfc2d5] max-w-[600px] mx-auto text-[15px] leading-relaxed">
            Please read these terms carefully before exploring our services and buying fine specimens.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-[24px] space-y-4 amethyst-glow">
              <Scale size={36} className="text-[#deb7ff]" />
              <h3 className="font-headline text-[20px] font-semibold text-white">Legal Agreement</h3>
              <p className="font-body text-[#cfc2d5] text-[14.5px] leading-relaxed">
                By entering or browsing the AsthiStone website, you agree to comply with our Terms, conditions, and applicable international trade laws.
              </p>
            </div>
            <div className="glass-card p-8 rounded-[24px] space-y-4 amethyst-glow">
              <FileText size={36} className="text-[#deb7ff]" />
              <h3 className="font-headline text-[20px] font-semibold text-white">Intellectual Assets</h3>
              <p className="font-body text-[#cfc2d5] text-[14.5px] leading-relaxed">
                All photographic catalogs, text, gemology specifications, layout, code, and logo designs are protected under intellectual property rights.
              </p>
            </div>
          </div>

          {/* Detailed Legal Sections */}
          <div className="glass-panel p-8 md:p-12 rounded-[32px] space-y-8">
            
            <div className="space-y-3">
              <h3 className="font-headline text-[22px] font-semibold text-white">1. Product Integrity & Description</h3>
              <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
                Due to the geological origin and natural formation processes of crystals and minerals, each specimen is completely unique. Variations in color saturation, inner inclusions, fracture geometries, and dimensions are natural characteristics of the stones, not defects. We represent all items as accurately as possible through high-resolution photography.
              </p>
            </div>

            <hr className="border-white/5" />

            <div className="space-y-3">
              <h3 className="font-headline text-[22px] font-semibold text-white">2. Sales & Payment Tenders</h3>
              <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
                All transactions are settled in Euro (€) or US Dollar ($). AsthiStone reserves the right to refuse service or cancel transactions on high-end private reserve items in the event of authentication or billing address discrepancies.
              </p>
            </div>

            <hr className="border-white/5" />

            <div className="space-y-3">
              <h3 className="font-headline text-[22px] font-semibold text-white">3. Shipping Liability</h3>
              <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
                While AsthiStone guarantees transit insurance up to the point of delivery and signature receipt, we are not liable for subsequent storage issues, alterations by third-party jewelers, or damage caused by improper exposure to intense heat, sunlight, or chemical cleansers.
              </p>
            </div>

            <hr className="border-white/5" />

            <div className="space-y-3">
              <h3 className="font-headline text-[22px] font-semibold text-white">4. Jurisdiction</h3>
              <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
                These conditions are governed by French law. Any disputes arising from transactions or site navigation will be settled exclusively within the courts of Paris, France.
              </p>
            </div>

          </div>

          {/* Acceptance Footer */}
          <div className="flex items-center justify-center gap-2.5 text-[#cfc2d5]/60 text-[13px] font-label font-bold uppercase tracking-wider">
            <CheckCircle size={16} className="text-[#deb7ff]" />
            <span>Last Updated: July 2026</span>
          </div>

        </div>

      </div>
    </div>
  );
}
