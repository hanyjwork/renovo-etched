import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Award, Target, Heart, Shield } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We pursue the highest standards in every project, from materials to workmanship.'
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Meticulous attention to detail ensures flawless execution and superior results.'
    },
    {
      icon: Heart,
      title: 'Client Focus',
      description: 'Your vision drives our work. We listen, adapt, and deliver beyond expectations.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Transparent pricing, honest communication, and reliable partnerships.'
    }
  ];

  const milestones = [
    { year: 'Founded', stat: 'Dubai', text: 'Established in UAE' },
    { year: 'Projects', stat: '100+', text: 'Completed renovations' },
    { year: 'Communities', stat: '15+', text: 'Dubai neighborhoods served' },
    { year: 'Team', stat: '50+', text: 'Skilled professionals' }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop"
            alt="About Renovo Etched"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/80 to-stone-900/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase">
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Building Dreams,{' '}
              <span className="text-[#C4A77D]">Transforming Spaces</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Renovo Etched Technical Services LLC is Dubai's trusted partner for comprehensive property renovation, delivering excellence from concept to completion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mt-4 mb-6">
                Your End-to-End Renovation Partner
              </h2>
              <div className="space-y-4 text-stone-600 leading-relaxed">
                <p>
                  At Renovo Etched, we understand that renovating your property in Dubai can be overwhelming. The permits, the approvals, finding reliable contractors, coordinating materials — it's a complex journey that shouldn't fall on your shoulders alone.
                </p>
                <p>
                  That's why we created a true end-to-end solution. From the moment you share your vision with us to the final handover of your transformed space, we handle every detail. Dubai Municipality approvals, DDA permits, developer NOCs — we navigate the bureaucracy so you don't have to.
                </p>
                <p>
                  Our team of skilled professionals brings together expertise in design, construction, and project management. Whether you're renovating a villa in Arabian Ranches or transforming an office in Business Bay, we deliver the same commitment to quality, timelines, and transparency.
                </p>
              </div>

              <div className="mt-8 space-y-3">
                {['Licensed by Dubai Municipality', 'Experienced in UAE residential communities', 'Professional, hygienic, supervised teams'].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C4A77D]" />
                    <span className="text-stone-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074&auto=format&fit=crop"
                  alt="Our Work"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-[#C4A77D] rounded-2xl p-6 text-white shadow-xl">
                <p className="text-3xl font-bold">100%</p>
                <p className="text-sm text-white/80">Permit Success Rate</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-[#C4A77D] text-sm font-medium uppercase tracking-wider mb-2">
                  {milestone.year}
                </p>
                <p className="text-4xl font-bold text-white mb-2">
                  {milestone.stat}
                </p>
                <p className="text-stone-400 text-sm">
                  {milestone.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mt-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-[#C4A77D]" />
                </div>
                <h3 className="font-semibold text-stone-800 text-lg mb-3">
                  {value.title}
                </h3>
                <p className="text-stone-500 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
            Let's Build Something Beautiful Together
          </h2>
          <p className="text-stone-600 text-lg mb-10 max-w-2xl mx-auto">
            Ready to transform your property? Get in touch for a free consultation and discover how we can bring your vision to life.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button
              size="lg"
              className="bg-[#C4A77D] hover:bg-[#B39A72] text-white rounded-full px-8 h-14 text-base font-medium group"
            >
              Book a Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}