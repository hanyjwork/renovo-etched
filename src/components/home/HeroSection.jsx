import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const features = [
  'Dubai Municipality Approved',
  'Design to Handover',
  'Zero Headaches'];


  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
          alt="Luxury villa interior"
          className="w-full h-full object-cover" />

        <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/80 to-stone-900/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8">
              <span className="w-2 h-2 bg-[#C4A77D] rounded-full animate-pulse" />
              <span className="text-white/90 text-sm font-medium">Dubai's Trusted Renovation Partner</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              End-to-End Villa{' '}
              <span className="text-[#C4A77D]">Renovation</span>
              {' '}in Dubai
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8">
              From permits to design to final handover — we manage everything so you don't have to. Experience hassle-free renovation with one partner you can trust.
            </p>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {features.map((feature, index) =>
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">

                  <CheckCircle2 className="w-4 h-4 text-[#C4A77D]" />
                  <span className="text-white/90 text-sm font-medium">{feature}</span>
                </motion.div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl('Contact')}>
                <Button
                  size="lg"
                  className="bg-[#C4A77D] hover:bg-[#B39A72] text-white rounded-full px-8 h-14 text-base font-medium group">

                  Request a Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to={createPageUrl('Services')}>
                <Button
                  size="lg"
                  variant="outline" className="bg-background text-[#C4A77D] px-8 text-base font-medium rounded-full inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border shadow-sm hover:text-accent-foreground border-white/30 hover:bg-white/10 h-14">


                  View Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent" />
    </section>);

}