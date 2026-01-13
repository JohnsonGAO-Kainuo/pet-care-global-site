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
    <section className="w-full flex justify-center bg-[#fdfdfc] py-16 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
            <Image src="/images/14a7be3f-c79c-41bc-8fd9-920546cba873.png" fill alt="bg" className="object-cover" />
        </div>

      <div className="w-[800px] relative z-10 px-8">
        <div className="text-center mb-10">
          <h2 className="text-[25px] font-bold text-[#424140] mb-1">Trusted Partners</h2>
          <p className="text-[10px] font-bold text-[#a6a6a4]">Our trusted partners, shopify, spotify, nestle, invested partners</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center justify-center transform hover:scale-105 transition-transform"
            >
              {partner.type === 'image' && partner.logo && (
                <div className="flex items-center gap-2">
                    <Image src={partner.logo} alt={partner.name} width={40} height={40} className="object-contain max-h-[40px]" />
                    {['Shopify', 'Spotify', 'Nestle', 'Microsoft'].includes(partner.name) && (
                      <span className="font-bold text-[18px] text-[#3d3d3c] ml-1">{partner.name}</span>
                    )}
                </div>
              )}
              {partner.type === 'text' && (
                <div className="flex flex-col items-start leading-none">
                  <span style={{ color: partner.color }} className="text-[20px] font-bold">{partner.text}</span>
                  {partner.sub && <span style={{ color: partner.subColor }} className="text-[16px] font-bold">{partner.sub}</span>}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
