'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Wholesale & Distribution',
    desc: 'Integrated wholesale & distribution services at prime locations and major supermarkets.',
    icon: '/images/321445df-cc4c-4575-a9fc-4c3df9178057.png'
  },
  {
    title: 'Brand Development',
    desc: 'Strategic development planning to administer and grow your brand identity globally.',
    icon: '/images/5a892cd2-ba3a-4528-9fc7-7946071a957d.png'
  },
  {
    title: 'Market Expansion',
    desc: 'Helping your business expand into new territories with localized market expertise.',
    icon: '/images/d9edb31c-b532-45bb-8c10-56977a6d03a8.png'
  },
  {
    title: 'Logistics Solutions',
    desc: 'Advanced network optimization and automation solutions for seamless supply chain delivery.',
    icon: '/images/d9b1a46f-b90c-4bfe-a0cf-03e1d28bd966.png'
  }
];

export function Services() {
  return (
    <section className="w-full flex justify-center bg-[#fdfdfc] py-32 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <Image src="/images/a9b3f997-ba9f-42ac-ac0b-666049524a58.png" fill alt="bg" className="object-cover" />
      </div>

      <div className="max-w-[1200px] w-full relative z-10 px-10">
        <div className="text-center mb-24">
          <div className="text-[#f6c942] font-bold text-[14px] uppercase tracking-widest mb-4">What We Offer</div>
          <h2 className="text-[48px] font-bold text-[#393837] tracking-tight">Our Core Services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.04)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#fdfdfd] border border-[#edecec] rounded-2xl p-12 flex flex-col items-center text-center hover:border-[#f6c942]/30 transition-all duration-500 cursor-pointer group"
            >
              <div className="w-40 h-32 mb-10 relative transform transition-transform duration-500 group-hover:scale-110">
                 <Image src={service.icon} fill alt={service.title} className="object-contain" />
              </div>
              <h3 className="text-[24px] font-bold text-[#5f5f5e] mb-4 tracking-tight group-hover:text-[#343435] transition-colors">{service.title}</h3>
              <p className="text-[16px] text-[#9d9d9c] max-w-[320px] leading-relaxed font-light group-hover:text-[#777] transition-colors">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
