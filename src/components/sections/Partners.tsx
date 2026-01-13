'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'Shopify', logo: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa92eb81-94a6-4142-9eb5-7c2df0e63c10', type: 'image' },
  { name: 'Spotify', logo: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/89576889-e0fb-4a72-a223-16242a19dbbf', type: 'image' },
  { name: 'Microsoft', logo: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/37a23d9b-0f83-4caf-86cf-1e855b12e318', type: 'image' },
  { name: 'Nestle', logo: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69617069-69b5-499e-82d1-9d08a6e7da2b', type: 'image' },
  { name: 'MARS Petcare', text: 'MARS', sub: 'Petcare', type: 'text', color: '#33377c', subColor: '#a94f50' },
  { name: 'Hills', logo: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1483a20c-5f59-4e54-9b28-14bd0285d540', type: 'image' },
  { name: 'Royal Canin', logo: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78bc54ae-a34a-49b1-a24d-fab7e470998b', type: 'image' },
  { name: 'Chewy', text: 'chewy', type: 'text', color: '#3d76a0' },
  { name: 'Amazon', text: 'amazon', type: 'text', color: '#51514f' },
  { name: 'Petco', text: 'petco.', type: 'text', color: '#505c74' },
];

export function Partners() {
  return (
    <section className="py-20 bg-[#fdfdfc] relative overflow-hidden">
        {/* Background image from code if relevant */}
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
            <Image src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14a7be3f-c79c-41bc-8fd9-920546cba873" fill alt="bg" className="object-cover" />
        </div>

      <div className="max-w-6xl mx-auto px-10 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-[25px] font-bold text-[#424140] mb-2">Trusted Partners</h2>
          <p className="text-[10px] font-bold text-[#a6a6a4]">Our trusted partners, shopify, spotify, nestle, invested partners</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              {partner.type === 'image' && partner.logo && (
                <div className="flex items-center gap-2">
                    <Image src={partner.logo} alt={partner.name} width={40} height={40} className="object-contain" />
                    <span className="font-bold text-lg text-[#3d3d3c]">{partner.name}</span>
                </div>
              )}
              {partner.type === 'text' && (
                <div className="flex flex-col items-start">
                  <span style={{ color: partner.color }} className="text-2xl font-bold">{partner.text}</span>
                  {partner.sub && <span style={{ color: partner.subColor }} className="text-lg font-bold">{partner.sub}</span>}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
