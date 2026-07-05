import React from "react";
import { Truck, ShieldCheck, HelpCircle } from "lucide-react";

export default function ShippingReturns() {
  return (
    <div className="bg-[#16121a] text-[#eadfec] min-h-screen pt-32 pb-24">
      <div className="max-w-[1000px] mx-auto px-6">
        
        {/* Page Hero */}
        <div className="text-center mb-16 space-y-4">
          <span className="font-label text-[12px] text-[#deb7ff] uppercase tracking-[0.25em] font-semibold block">
            Customer Care
          </span>
          <h1 className="font-headline text-[38px] md:text-[52px] font-bold text-white leading-tight">
            Shipping & Returns
          </h1>
          <p className="font-body text-[#cfc2d5] max-w-[600px] mx-auto text-[15px] leading-relaxed">
            Every AsthiStone treasure is packaged like a sacred artifact and shipped via fully insured luxury courier services.
          </p>
        </div>

        {/* Content Details */}
        <div className="space-y-12">
          
          {/* Bento Highlight Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-8 rounded-[24px] space-y-4 amethyst-glow">
              <Truck size={36} className="text-[#deb7ff]" />
              <h3 className="font-headline text-[20px] font-semibold text-white">Insured Global Courier</h3>
              <p className="font-body text-[#cfc2d5] text-[14.5px] leading-relaxed">
                We partner with DHL Express and FedEx Priority to deliver your order quickly and securely. Orders over $10,000 are eligible for private armored transport.
              </p>
            </div>
            <div className="glass-card p-8 rounded-[24px] space-y-4 amethyst-glow">
              <ShieldCheck size={36} className="text-[#deb7ff]" />
              <h3 className="font-headline text-[20px] font-semibold text-white">Signature Required</h3>
              <p className="font-body text-[#cfc2d5] text-[14.5px] leading-relaxed">
                To guarantee the safety of these rare specimens, all packages require an adult signature upon delivery. We do not ship to PO Boxes.
              </p>
            </div>
          </div>

          {/* Detailed Editorial Policy */}
          <div className="glass-panel p-8 md:p-12 rounded-[32px] space-y-8">
            
            <div className="space-y-3">
              <h3 className="font-headline text-[22px] font-semibold text-white">Shipping Timelines</h3>
              <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
                Since each gemstone goes through an energetic cleansing and rigorous structural validation prior to dispatch, shipping preparation takes between 1 to 2 business days.
              </p>
              <ul className="list-disc pl-5 font-body text-[#cfc2d5] text-[14.5px] space-y-2 pt-2">
                <li><strong>European Union:</strong> 2 - 3 Business Days</li>
                <li><strong>North America:</strong> 3 - 5 Business Days</li>
                <li><strong>Asia & Rest of World:</strong> 4 - 7 Business Days</li>
              </ul>
            </div>

            <hr className="border-white/5" />

            <div className="space-y-3">
              <h3 className="font-headline text-[22px] font-semibold text-white">Complimentary Insured Delivery</h3>
              <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
                We offer complimentary insured delivery on all orders worldwide. Tracking details and estimated arrival times are transmitted immediately upon parcel pick-up.
              </p>
            </div>

            <hr className="border-white/5" />

            <div className="space-y-3">
              <h3 className="font-headline text-[22px] font-semibold text-white">Returns Overview</h3>
              <p className="font-body text-[#cfc2d5] text-[15px] leading-relaxed">
                We hope you align with the energy of your piece. If you feel otherwise, we accept returns and exchanges on standard items within 14 days of receipt. Custom cuts and private reserve specimens are final sale.
              </p>
            </div>

          </div>

          {/* Support Prompt */}
          <div className="text-center pt-6 space-y-4">
            <HelpCircle size={28} className="text-[#deb7ff] mx-auto" />
            <h4 className="font-headline text-[18px] text-white">Questions about transport?</h4>
            <p className="font-body text-[#cfc2d5] text-[14px]">
              Reach our private concierge team at <a href="mailto:concierge@asthistone.com" className="text-[#deb7ff] hover:underline">concierge@asthistone.com</a>.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
