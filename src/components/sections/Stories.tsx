'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const stories = [
  {
    text: `"Your team has delivered high construction and check for delivery. It helped increase revenue and the collaboration helped to streamline product flow simply allowing the system to scale. Our Brand are partnering to hire amazing pros."`,
    author: 'Mateo Baah',
    role: 'Operations Lead',
    image: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68a8ff05-c074-408e-a05d-1cdabccfaf5a'
  },
  {
    text: `"You are motivated but New vacation Delivery out are sourcing or doing with to execute supply curves. With government and protocols next and-adds count Ingenuities the freely call of time for contraction everywhere."`,
    author: 'Sown Bcreutth',
    role: 'Affiliate Manager',
    image: 'https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e53a7345-823b-4b2d-ace6-953784615b8f'
  }
];

export function SuccessStories() {
  return (
    <section className="py-20 flex justify-center bg-white">
      <div className="w-full max-w-4xl bg-[#f9f1d8] border-4 border-[#f6f2dc] p-10 relative">
        <div className="text-right mb-10">
          <h2 className="text-[25px] font-bold text-[#4d483d] mb-1">Success Stories</h2>
          <p className="text-[11px] text-[#9e9886]">Our clients stories and successes of our business strategy.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-end">
          {stories.map((story, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`bg-[#fcfdfa] border ${index === 1 ? 'border-2 border-[#eeeadb]' : 'border-[#ede9db]'} rounded-[4px] p-6 max-w-sm w-full`}
            >
              <p className="text-[9px] text-[#acaca9] mb-4 leading-relaxed italic">{story.text}</p>
              
              <div className="flex items-center gap-3">
                <Image src={story.image} alt={story.author} width={30} height={30} className="rounded-full" />
                <div>
                  <div className="text-[10px] text-[#868583] font-light">{story.author}</div>
                  <div className="text-[9px] text-[#c5c5c3] font-light">{story.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
