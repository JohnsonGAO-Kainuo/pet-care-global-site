'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Wholesale & Distribution',
    desc: 'Wholesale & distribution, at prime locations, and supermarkets & distribution.',
    icon: '/images/321445df-cc4c-4575-a9fc-4c3df9178057'
  },
  {
    title: 'Brand Development',
    desc: 'Development strategies administer and brand brand development.',
    icon: '/images/5a892cd2-ba3a-4528-9fc7-7946071a957d'
  },
  {
    title: 'Market Expansion',
    desc: 'Company-wide business, market expansion and market expansion.',
    icon: '/images/d9edb31c-b532-45bb-8c10-56977a6d03a8'
  },
  {
    title: 'Logistics Solutions',
    desc: 'Network optimization and automation and logistics solutions.',
    icon: '/images/d9b1a46f-b90c-4bfe-a0cf-03e1d28bd966'
  }
];

export function Services() {
  return (
    <section className="w-full flex justify-center bg-[#fdfdfc] py-16 relative">
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <Image src="/images/a9b3f997-ba9f-42ac-ac0b-666049524a58" fill alt="bg" className="object-cover" />
      </div>

      <div className="w-[800px] relative z-10 px-8">
        <div className="text-center mb-10">
          <h2 className="text-[25px] font-bold text-[#393837]">Our Services</h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -3, boxShadow: "0 5px 15px rgba(0,0,0,0.03)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#fdfdfd] border-2 border-[#edecec] rounded-[6px] p-6 flex flex-col items-center text-center hover:border-[#eaeaeb] transition-colors cursor-pointer"
            >
              <div className="w-24 h-20 mb-4 relative">
                 <Image src={service.icon} fill alt={service.title} className="object-contain" />
              </div>
              <h3 className="text-[15px] font-bold text-[#5f5f5e] mb-1">{service.title}</h3>
              <p className="text-[10px] text-[#9d9d9c] max-w-[200px] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
