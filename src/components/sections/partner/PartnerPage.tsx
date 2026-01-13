'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function PartnerHero() {
  return (
    <section className="w-full bg-white pt-20 pb-10 flex flex-col items-center">
      <div className="max-w-[1200px] w-full px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-start"
        >
          <h1 className="text-[56px] leading-[1.1] font-bold text-[#343435] mb-6">
            Your Trusted <br/>
            Partner in Pet <br/>
            Supply
          </h1>
          <p className="text-[#9F9F9F] text-[14px] max-w-[400px] mb-8 leading-relaxed">
            Your global gateway to premium pet care distribution and connecting pet care brands with markets.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#F7C93C] text-[#876B22] px-8 py-3 rounded-[4px] text-[12px] font-bold shadow-sm"
          >
            Contact Sales
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative h-[500px] w-full"
        >
          <Image 
            src="/images/ba7d96bd-5847-4211-92ef-072a74150799.png" 
            alt="Trusted Partner" 
            fill 
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}

const services = [
  { title: "Wholesale & Distribution", desc: "Wholesale & distribution at prime locations, and supermarkets & distribution.", icon: "/images/321445df-cc4c-4575-a9fc-4c3df9178057.png" },
  { title: "Brand Development", desc: "Development strategies administer and brand brand development.", icon: "/images/5a892cd2-ba3a-4528-9fc7-7946071a957d.png" },
  { title: "Market Expansion", desc: "Company-wide business, market expansion and market expansion.", icon: "/images/d9edb31c-b532-45bb-8c10-56977a6d03a8.png" },
  { title: "Logistics Solutions", desc: "Network optimization and automation and logistics solutions.", icon: "/images/d9b1a46f-b90c-4bfe-a0cf-03e1d28bd966.png" },
];

export function PartnerServices() {
  return (
    <section className="w-full bg-[#FDFDFC] py-20 flex flex-col items-center">
      <div className="max-w-[1200px] w-full px-10">
        <h2 className="text-[32px] font-bold text-center text-[#343435] mb-16">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white border border-[#EDECEC] rounded-xl p-10 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-all"
            >
              <div className="relative w-24 h-24 mb-6">
                <Image src={s.icon} alt={s.title} fill className="object-contain" />
              </div>
              <h3 className="text-[18px] font-bold text-[#5F5F5E] mb-3">{s.title}</h3>
              <p className="text-[12px] text-[#9D9D9C] max-w-[250px] leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const partners = [
  { name: "Shopify", logo: "/images/aa92eb81-94a6-4142-9eb5-7c2df0e63c10.png" },
  { name: "Apple", logo: "/images/37a23d9b-0f83-4caf-86cf-1e855b12e318.png" },
  { name: "Spotify", logo: "/images/89576889-e0fb-4a72-a223-16242a19dbbf.png" },
  { name: "Google", logo: "/images/37a23d9b-0f83-4caf-86cf-1e855b12e318.png" }, // Reused google logo or similar
  { name: "Microsoft", logo: "/images/37a23d9b-0f83-4caf-86cf-1e855b12e318.png" },
  { name: "Nestle", logo: "/images/69617069-69b5-499e-82d1-9d08a6e7da2b.png" },
];

export function PartnerTrusted() {
  return (
    <section className="w-full bg-white py-20 flex flex-col items-center border-t border-black/5">
      <div className="max-w-[1200px] w-full px-10">
        <h2 className="text-[28px] font-bold text-center text-[#424140] mb-4">Trusted Partners</h2>
        <p className="text-center text-[#A6A6A4] text-[12px] mb-12">Our trusted partners include Shopify, Spotify, Nestle and other global leaders.</p>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
          {partners.map((p, i) => (
            <div key={i} className="flex items-center gap-2">
              <Image src={p.logo} alt={p.name} width={40} height={40} className="object-contain" />
              <span className="text-[20px] font-bold text-[#3D3D3C]">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
