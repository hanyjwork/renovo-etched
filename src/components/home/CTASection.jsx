import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
          alt="Modern villa"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-900/85" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Property?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/80 mb-10"
          >
            Let's discuss your vision and create the home you've always wanted.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link to={createPageUrl('Contact')}>
              <Button
                size="lg"
                className="bg-[#C4A77D] hover:bg-[#B39A72] text-white rounded-full px-8 h-14 text-base font-medium group w-full sm:w-auto"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <a href="tel:+971000000000">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 rounded-full px-8 h-14 text-base font-medium w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Talk to Our Experts
              </Button>
            </a>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/60 text-sm"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C4A77D] rounded-full" />
              Dubai Municipality Licensed
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C4A77D] rounded-full" />
              Free Consultation
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C4A77D] rounded-full" />
              Transparent Pricing
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}