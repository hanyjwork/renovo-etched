import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, Compass, FileCheck, Hammer, KeyRound } from 'lucide-react';

export default function ProcessSection() {
  const steps = [
    {
      number: '01',
      icon: PhoneCall,
      title: 'Consultation',
      description: 'We discuss your vision, assess your property, and understand your requirements.'
    },
    {
      number: '02',
      icon: Compass,
      title: 'Design & Planning',
      description: '2D/3D designs tailored to your preferences with detailed project scope.'
    },
    {
      number: '03',
      icon: FileCheck,
      title: 'Approvals & Permits',
      description: 'We handle all Dubai Municipality, DDA, and developer approvals.'
    },
    {
      number: '04',
      icon: Hammer,
      title: 'Construction',
      description: 'Expert execution with quality materials and professional supervision.'
    },
    {
      number: '05',
      icon: KeyRound,
      title: 'Handover',
      description: 'Final inspection, cleaning, and keys to your transformed property.'
    }
  ];

  return (
    <section className="py-24 bg-[#F5F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase"
          >
            How We Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-stone-800 mt-4 mb-6"
          >
            Our Renovation Process
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-600 text-lg"
          >
            A streamlined approach that takes you from concept to completion with complete peace of mind.
          </motion.p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#C4A77D]/20 via-[#C4A77D] to-[#C4A77D]/20 transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-6 text-center relative z-10 shadow-sm hover:shadow-lg transition-shadow">
                  {/* Step Number */}
                  <div className="w-12 h-12 bg-[#C4A77D] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                    {step.number}
                  </div>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-stone-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-stone-700" />
                  </div>
                  {/* Content */}
                  <h3 className="font-semibold text-stone-800 text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-500 text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}