'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Global Reach',
    desc: 'Global Reach into varied global markets international sourcing managed to expand our list.',
    icon: '/images/5b30263d-f81d-44aa-8ba3-d9853308b7cc.png'
  },
  {
    title: 'Premium Quality',
    desc: 'Secure soft premium quality wholesale domestic and international and froremium premium quality.',
    icon: '/images/0cd5169c-c66c-4969-bf5a-1bb02e94f55d.png'
  },
  {
    title: 'Reliable Logistics',
    desc: 'Logistics, predictable reliable logistics.',
    icon: '/images/f21dc6ff-68f2-4ed8-9899-838680aaf6d2.png'
  }
];

export function WhyChooseUs() {
  return (
    <section className="w-full flex justify-center bg-[#f3f6f8] py-20">
      <div className="w-[800px] text-center px-4">
        <div className="mb-10">
           <h2 className="text-[25px] font-bold text-[#383937] mb-1">Why Choose Us</h2>
           <p className="text-[10px] text-[#9c9d9d]">Our marketplaces across global equity and brand sales.</p>
        </div>

        <div className="flex justify-center gap-4">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#fefefc] border-2 border-[#f3f7f9] p-6 flex flex-col items-center justify-start w-[220px] h-[190px]"
            >
              <div className="w-10 h-10 mb-4 relative mt-2">
                <Image src={feature.icon} fill alt={feature.title} className="object-contain" />
              </div>
              <h3 className="text-[15px] font-bold text-[#646463] mb-1">{feature.title}</h3>
              <p className="text-[9px] text-[#9e9e9d] max-w-[160px] leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
