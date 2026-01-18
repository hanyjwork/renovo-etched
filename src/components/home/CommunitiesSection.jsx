import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function CommunitiesSection() {
  const communities = [
    { name: 'Arabian Ranches', image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop' },
    { name: 'Mudon', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Tilal Al Ghaf', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop' },
    { name: 'Dubai Hills', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop' },
    { name: 'The Villa', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop' },
    { name: 'Damac Hills', image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <section className="py-24 bg-[#FAFAF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase"
          >
            Where We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-stone-800 mt-4 mb-6"
          >
            Serving Dubai's Premier Communities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-lg"
          >
            We specialize in residential villas and office properties across Dubai's most desirable neighborhoods.
          </motion.p>
        </div>

        {/* Communities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {communities.map((community, index) => (
            <motion.div
              key={community.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={community.image}
                alt={community.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#C4A77D]" />
                  <h3 className="text-white font-semibold text-lg">{community.name}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}