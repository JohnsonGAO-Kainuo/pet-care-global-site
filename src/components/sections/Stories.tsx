'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stories = [
  {
    text: `"Your team has delivered high construction and check for delivery. It helped increase revenue and the collaboration helped to streamline product flow simply allowing the system to scale. Our Brand are partnering to hire amazing pros."`,
    author: 'Mateo Baah',
    role: 'Operations Lead',
    image: '/images/68a8ff05-c074-408e-a05d-1cdabccfaf5a'
  },
  {
    text: `"You are motivated but New vacation Delivery out are sourcing or doing with to execute supply curves. With government and protocols next and-adds count Ingenuities the freely call of time for contraction everywhere."`,
    author: 'Sown Bcreutth',
    role: 'Affiliate Manager',
    image: '/images/e53a7345-823b-4b2d-ace6-953784615b8f'
  }
];

export function SuccessStories() {
  return (
    <section className="w-full flex justify-center bg-white py-16 relative">
      <div className="w-[800px] bg-[#f9f1d8] border-4 border-[#f6f2dc] p-8 relative">
        <div className="flex flex-col items-end mb-8 mr-10">
          <h2 className="text-[25px] font-bold text-[#4d483d] mb-1">Success Stories</h2>
          <p className="text-[11px] text-[#9e9886]">Our clients stories and successes of our business strategy.</p>
        </div>

        <div className="flex justify-center items-end gap-4 ml-10">
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`bg-[#fcfdfa] border ${index === 1 ? 'border-2 border-[#eeeadb]' : 'border-[#ede9db]'} rounded-[4px] p-5 w-[260px] h-[140px] flex flex-col justify-between relative`}
            >
              <p className="text-[8px] text-[#acaca9] leading-[1.6] italic mb-2 line-clamp-4">{story.text}</p>
              
              <div className="flex items-center gap-2">
                <Image src={story.image} alt={story.author} width={30} height={30} className="rounded-full" />
                <div className="flex flex-col">
                  <span className="text-[10px] text-[#868583] font-light leading-none mb-0.5">{story.author}</span>
                  <span className="text-[9px] text-[#c5c5c3] font-light leading-none">{story.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
