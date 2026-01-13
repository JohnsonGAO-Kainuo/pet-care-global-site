'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function DistributionHero() {
  return (
    <section className="w-full bg-[#FDFDFC] pt-20 pb-20 flex flex-col items-center overflow-hidden">
      <div className="max-w-[1200px] w-full px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col items-start"
        >
          <h1 className="text-[56px] leading-[1.1] font-bold text-[#453D27] mb-6">
            Elevating Pet Care <br/>
            Distribution
          </h1>
          <p className="text-[#A08E55] text-[14px] max-w-[400px] mb-8 font-semibold leading-relaxed">
            Power your business to customers, connecting pet care and producers on one platform.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#0D223A] text-[#85846D] px-8 py-3 rounded-[4px] text-[12px] font-bold shadow-md"
          >
            View Catalog
          </motion.button>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1 }}
          className="relative h-[600px] w-full"
        >
          {/* Tilted product grid illustration */}
          <div className="absolute inset-0 bg-[url('/images/ac5f45e7-a162-41ab-96b6-9342d063d5aa.png')] bg-contain bg-no-repeat bg-center"></div>
        </motion.div>
      </div>
    </section>
  );
}

export function DistributionFeatured() {
  return (
    <section className="w-full bg-white py-16 flex flex-col items-center">
      <div className="max-w-[1200px] w-full px-10">
        <h2 className="text-[28px] font-bold text-center text-[#424240] mb-2">Featured Brands</h2>
        <p className="text-center text-[#A09F9E] text-[12px] mb-12 uppercase tracking-[0.2em]">Our most brand-focused production and featured brands</p>
        <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50">
          <Image src="/images/aa92eb81-94a6-4142-9eb5-7c2df0e63c10.png" alt="Shopify" width={40} height={40} className="object-contain" />
          <Image src="/images/89576889-e0fb-4a72-a223-16242a19dbbf.png" alt="Spotify" width={40} height={40} className="object-contain" />
          {/* Add more brand icons as needed */}
        </div>
      </div>
    </section>
  );
}

const reasons = [
  { title: "Global Reach", desc: "Global Reach into varied global markets international sourcing managed to expand our list.", icon: "/images/5b30263d-f81d-44aa-8ba3-d9853308b7cc.png" },
  { title: "Premium Quality", desc: "Secure soft premium quality wholesale domestic and international and premium quality.", icon: "/images/0cd5169c-c66c-4969-bf5a-1bb02e94f55d.png" },
  { title: "Reliable Logistics", desc: "Logistics, predictable reliable logistics.", icon: "/images/f21dc6ff-68f2-4ed8-9899-838680aaf6d2.png" },
];

export function DistributionWhy() {
  return (
    <section className="w-full bg-[#F3F6F8] py-24 flex flex-col items-center">
      <div className="max-w-[1200px] w-full px-10">
        <h2 className="text-[32px] font-bold text-center text-[#383937] mb-4">Why Choose Us</h2>
        <p className="text-center text-[#9C9D9D] text-[14px] mb-16">Our marketplaces across global equity and brand sales.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white border-2 border-[#F3F7F9] rounded-xl p-12 flex flex-col items-center text-center shadow-sm"
            >
              <div className="relative w-16 h-16 mb-6">
                <Image src={r.icon} alt={r.title} fill className="object-contain" />
              </div>
              <h3 className="text-[20px] font-bold text-[#646463] mb-4">{r.title}</h3>
              <p className="text-[12px] text-[#9E9E9D] leading-relaxed max-w-[200px]">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
