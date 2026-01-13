'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Global Reach',
    desc: 'Global Reach into varied global markets international sourcing managed to expand our list.',
    icon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b30263d-f81d-44aa-8ba3-d9853308b7cc'
  },
  {
    title: 'Premium Quality',
    desc: 'Secure soft premium quality wholesale domestic and international and froremium premium quality.',
    icon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0cd5169c-c66c-4969-bf5a-1bb02e94f55d'
  },
  {
    title: 'Reliable Logistics',
    desc: 'Logistics, predictable reliable logistics.',
    icon: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f21dc6ff-68f2-4ed8-9899-838680aaf6d2'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#f3f6f8] flex justify-center">
      <div className="max-w-6xl mx-auto px-10 w-full text-center">
        <div className="mb-12">
           <h2 className="text-[25px] font-bold text-[#383937] mb-2">Why Choose Us</h2>
           <p className="text-[10px] text-[#9c9d9d]">Our marketplaces across global equity and brand sales.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#fefefc] border-2 border-[#f3f7f9] p-8 flex flex-col items-center justify-center min-h-[180px]"
            >
              <div className="w-12 h-12 mb-4 relative">
                <Image src={feature.icon} fill alt={feature.title} className="object-contain" />
              </div>
              <h3 className="text-[15px] font-bold text-[#646463] mb-2">{feature.title}</h3>
              <p className="text-[9px] text-[#9e9e9d] max-w-[150px]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
