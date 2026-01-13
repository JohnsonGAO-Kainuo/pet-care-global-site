'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Global Reach',
    desc: 'Varied global markets and international sourcing managed to expand our curated list.',
    icon: '/images/5b30263d-f81d-44aa-8ba3-d9853308b7cc.png'
  },
  {
    title: 'Premium Quality',
    desc: 'Secure soft premium quality wholesale domestic and international premium quality products.',
    icon: '/images/0cd5169c-c66c-4969-bf5a-1bb02e94f55d.png'
  },
  {
    title: 'Reliable Logistics',
    desc: 'Logistics, predictable reliable logistics and streamlined supply chain management.',
    icon: '/images/f21dc6ff-68f2-4ed8-9899-838680aaf6d2.png'
  }
];

export function WhyChooseUs() {
  return (
    <section className="w-full flex justify-center bg-[#f3f6f8] py-32">
      <div className="max-w-[1200px] w-full text-center px-10">
        <div className="mb-20">
           <div className="text-[#f6c942] font-bold text-[14px] uppercase tracking-widest mb-4">Our Advantages</div>
           <h2 className="text-[48px] font-bold text-[#383937] mb-6 tracking-tight">Why Choose Us</h2>
           <p className="text-[18px] text-[#9c9d9d] max-w-[600px] mx-auto font-light">Our marketplaces across global equity and brand sales provide unique value to our partners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
              className="bg-[#fefefc] border border-[#f3f7f9] p-12 flex flex-col items-center justify-start rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 min-h-[350px]"
            >
              <div className="w-20 h-20 mb-8 relative bg-[#f3f6f8] rounded-full flex items-center justify-center p-4 overflow-hidden">
                <Image src={feature.icon} fill alt={feature.title} className="object-contain p-5" />
              </div>
              <h3 className="text-[24px] font-bold text-[#646463] mb-4 tracking-tight">{feature.title}</h3>
              <p className="text-[16px] text-[#9e9e9d] leading-relaxed font-light">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
