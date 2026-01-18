import React from 'react';
import { Shield, Users, Clock, Award, FileCheck, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ValueProposition() {
  const values = [
    {
      icon: FileCheck,
      title: 'All Approvals Handled',
      description: 'Dubai Municipality, DDA, developer NOCs — we manage every permit so you don\'t have to.'
    },
    {
      icon: Wrench,
      title: 'End-to-End Delivery',
      description: 'From initial design to materials supply to final handover — one partner, one contract.'
    },
    {
      icon: Users,
      title: 'Professional Teams',
      description: 'Skilled, hygienic workforce with proper supervision and quality standards.'
    },
    {
      icon: Clock,
      title: 'On-Time Completion',
      description: 'Clear timelines, regular updates, and commitment to scheduled delivery.'
    },
    {
      icon: Shield,
      title: 'Quality & Safety',
      description: 'Premium materials and strict safety protocols throughout every project.'
    },
    {
      icon: Award,
      title: 'Tailored Solutions',
      description: 'Custom designs and specifications crafted to your unique requirements.'
    }
  ];

  return (
    <section className="py-24 bg-stone-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase"
          >
            One Partner. Zero Headaches.
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6"
          >
            Why Dubai Homeowners Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-stone-400 text-lg"
          >
            We take the complexity out of renovation. From paperwork to execution, experience a seamless journey to your dream home.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-stone-800/50 backdrop-blur-sm rounded-2xl p-8 h-full border border-stone-700/50 hover:border-[#C4A77D]/50 transition-all duration-300">
                <div className="w-14 h-14 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C4A77D]/20 transition-colors">
                  <value.icon className="w-7 h-7 text-[#C4A77D]" />
                </div>
                <h3 className="text-white font-semibold text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}