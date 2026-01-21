import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { ArrowRight, Home, Grid3X3, UtensilsCrossed, Bath, Fence, Trees, Waves, Compass } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ServicesPreview() {
  const services = [
    {
      icon: Home,
      title: 'Holistic Villa Renovation',
      description: 'Complete transformation of your villa from foundation to finish.',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      link: 'villa'
    },
    {
      icon: Grid3X3,
      title: 'Villa Extensions',
      description: 'Expand your living space with approved structural additions.',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
      link: 'extension'
    },
    {
      icon: UtensilsCrossed,
      title: 'Kitchen Renovation',
      description: 'Modern, functional kitchens tailored to your lifestyle.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696cac8722f70dcbd742d784/47152c616_kitchen.jpg',
      link: 'kitchen'
    },
    {
      icon: Bath,
      title: 'Bathroom Renovation',
      description: 'Luxurious bathrooms with premium finishes and fixtures.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696cac8722f70dcbd742d784/e7a417ab8_Bathroom.jpg',
      link: 'bathroom'
    },
    {
      icon: Fence,
      title: 'Internal Works',
      description: 'Tiling, MEP, feature walls, and interior upgrades.',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop',
      link: 'internal'
    },
    {
      icon: Trees,
      title: 'Landscaping & Pergolas',
      description: 'Beautiful outdoor spaces with hard and soft landscaping.',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696cac8722f70dcbd742d784/2c63af8ea_landscaping.jpg',
      link: 'landscaping'
    },
    {
      icon: Waves,
      title: 'Pool Design & Construction',
      description: 'Custom pools designed and built to your specifications.',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      link: 'pool'
    },
    {
      icon: Compass,
      title: 'Design & Project Management',
      description: '2D/3D designs and complete project oversight.',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
      link: 'design'
    },
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
            What We Offer
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-stone-800 mt-4 mb-6"
          >
            Comprehensive Renovation Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-lg"
          >
            From concept to completion, we offer end-to-end renovation solutions for every aspect of your property.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <Link
                to={createPageUrl('Services') + `?service=${service.link}`}
                className="group block h-full"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="font-semibold text-stone-800 text-lg mb-2 group-hover:text-[#C4A77D] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-stone-500 text-sm flex-1">
                      {service.description}
                    </p>
                    <div className="flex items-center text-[#C4A77D] text-sm font-medium mt-4 group-hover:gap-2 transition-all">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}