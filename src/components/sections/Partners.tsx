'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Shopify', logo: '/images/aa92eb81-94a6-4142-9eb5-7c2df0e63c10.png', type: 'image' },
  { name: 'Spotify', logo: '/images/89576889-e0fb-4a72-a223-16242a19dbbf.png', type: 'image' },
  { name: 'Microsoft', logo: '/images/37a23d9b-0f83-4caf-86cf-1e855b12e318.png', type: 'image' },
  { name: 'Nestle', logo: '/images/69617069-69b5-499e-82d1-9d08a6e7da2b.png', type: 'image' },
  { name: 'MARS Petcare', text: 'MARS', sub: 'Petcare', type: 'text', color: '#33377c', subColor: '#a94f50' },
  { name: 'Hills', logo: '/images/1483a20c-5f59-4e54-9b28-14bd0285d540.png', type: 'image' },
  { name: 'Royal Canin', logo: '/images/78bc54ae-a34a-49b1-a24d-fab7e470998b.png', type: 'image' },
  { name: 'Chewy', text: 'chewy', type: 'text', color: '#3d76a0' },
  { name: 'Amazon', text: 'amazon', type: 'text', color: '#51514f' },
  { name: 'Petco', text: 'petco.', type: 'text', color: '#505c74' },
];

export function Partners() {
  return (
    <section className="w-full flex justify-center bg-[#fdfdfc] py-24 relative overflow-hidden">
        {/* Background Decorative Image */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
            <Image src="/images/14a7be3f-c79c-41bc-8fd9-920546cba873.png" fill alt="bg" className="object-cover" />
        </div>

      <div className="max-w-[1200px] w-full relative z-10 px-10">
        <div className="text-center mb-20">
          <h2 className="text-[32px] font-bold text-[#424140] mb-4">Trusted Partners</h2>
          <p className="text-[14px] text-[#a6a6a4] font-medium tracking-wide">Our trusted partners include Shopify, Spotify, Nestle, and other industry leaders.</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center transform transition-transform hover:scale-110"
            >
              {partner.type === 'image' && partner.logo && (
                <div className="flex items-center gap-3">
                    <Image src={partner.logo} alt={partner.name} width={48} height={48} className="object-contain h-12 w-auto" />
                    {['Shopify', 'Spotify', 'Nestle', 'Microsoft'].includes(partner.name) && (
                      <span className="font-bold text-[22px] text-[#3d3d3c]">{partner.name}</span>
                    )}
                </div>
              )}
              {partner.type === 'text' && (
                <div className="flex flex-col items-start leading-none gap-0.5">
                  <span style={{ color: partner.color }} className="text-[28px] font-extrabold uppercase tracking-tight">{partner.text}</span>
                  {partner.sub && <span style={{ color: partner.subColor }} className="text-[18px] font-bold tracking-tighter">{partner.sub}</span>}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
