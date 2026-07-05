import React from "react";
import { ShieldCheck, RotateCcw, AlertTriangle } from "lucide-react";

export default function ReturnPolicy() {
  return (
    <div className="bg-[#16121a] text-[#eadfec] min-h-screen pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Page Hero */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-label text-[12px] text-[#deb7ff] uppercase tracking-[0.25em] font-semibold block">
            Client Agreement
          </span>
          <h1 className="font-headline text-[38px] md:text-[52px] font-bold text-white leading-tight">
            Return Policy
          </h1>
          <p className="font-body text-[#cfc2d5] max-w-[600px] mx-auto text-[15px] leading-relaxed">
            Please review our conditions regarding returns, refunds, and exchanges for master-crafted mineral works.
          </p>
        </div>

        {/* Policy Body */}
        <div className="space-y-12">
          
          {/* Eligibility Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-[24px] space-y-4 amethyst-glow">
              <ShieldCheck size={36} className="text-[#deb7ff]" />
              <h3 className="font-headline text-[20px] font-semibold text-white">Certificate Protection</h3>
              <p className="font-body text-[#cfc2d5] text-[14.5px] leading-relaxed">
                All high-end specimens are shipped with official GIA certification. Returns will only be accepted if the original certificate is returned intact, unaltered, and undamaged.
              </p>
            </div>
            <div className="glass-card p-8 rounded-[24px] space-y-4 amethyst-glow">
              <RotateCcw size={36} className="text-[#deb7ff]" />
              <h3 className="font-headline text-[20px] font-semibold text-white">14-Day Window</h3>
              <p className="font-body text-[#cfc2d5] text-[14.5px] leading-relaxed">
                Standard orders can be returned within 14 days of the carrier delivery date. Items must remain in their original display case and show no signs of handling or alteration.
              </p>
            </div>
          </div>

          {/* Editorial Guidelines */}
          <div className="glass-panel p-8 md:p-12 rounded-[32px] space-y-8">
            
            <div className="space-y-3">
              <h3 className="font-headline text-[22px] font-semibold text-white">How to Start a Return</h3>
              <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
                To return a standard item, please email us with your invoice details. Once approved, our team will provide a secure Return Merchandise Authorization (RMA) label.
              </p>
              <ol className="list-decimal pl-5 font-body text-[#cfc2d5] text-[14.5px] space-y-2 pt-2">
                <li>Send an RMA request email to <span className="text-[#deb7ff]">concierge@asthistone.com</span>.</li>
                <li>Securely repackage the specimen in its original protective wooden crate.</li>
                <li>Affix the provided pre-paid insured courier label to the exterior package.</li>
                <li>Schedule a courier pick-up or drop off at an authorized carrier station.</li>
              </ol>
            </div>

            <hr className="border-white/5" />

            <div className="space-y-3">
              <h3 className="font-headline text-[22px] font-semibold text-white">Refund Processing</h3>
              <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
                Upon arrival at our Paris vault, our gemologists inspect the item to verify its state and check GIA certification codes. Once approved, your refund will be processed back to the original payment method within 7 to 10 business days.
              </p>
            </div>

            <hr className="border-white/5" />

            <div className="space-y-4">
              <h3 className="font-headline text-[22px] font-semibold text-white flex items-center gap-2">
                <AlertTriangle size={20} className="text-[#fdb969]" /> Exclusions & Alterations
              </h3>
              <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
                We cannot offer returns on custom cut requests, bespoke jewelry settings, or private reserve catalog numbers. Items altered by third-party jewelers are strictly excluded from our returns framework.
              </p>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
