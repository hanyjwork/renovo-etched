import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Users, 
  Clock, 
  Award, 
  FileCheck, 
  Wrench,
  HeartHandshake,
  Eye,
  Sparkles,
  Scale
} from 'lucide-react';

export default function WhyUs() {
  const reasons = [
    {
      icon: FileCheck,
      title: 'Complete Permit Management',
      description: 'We handle all Dubai Municipality, DDA, and developer approvals. No running around government offices — we do it all.',
      highlight: 'Zero permit stress'
    },
    {
      icon: Wrench,
      title: 'True End-to-End Service',
      description: 'From initial concept and design through material supply to final handover. One partner, one contract, complete accountability.',
      highlight: 'Single point of contact'
    },
    {
      icon: Users,
      title: 'Professional Teams',
      description: 'Skilled, vetted workforce with proper training, uniforms, and hygiene standards. Supervised by experienced project managers.',
      highlight: 'Quality workmanship'
    },
    {
      icon: Clock,
      title: 'Timeline Commitment',
      description: 'Clear project schedules with regular milestones and updates. We respect your time and deliver on our promises.',
      highlight: 'On-time delivery'
    },
    {
      icon: Shield,
      title: 'Quality & Safety Focus',
      description: 'Premium materials, proper safety protocols, and rigorous quality checks at every stage of construction.',
      highlight: 'Peace of mind'
    },
    {
      icon: HeartHandshake,
      title: 'Tailored Solutions',
      description: 'Every project is unique. We customize our approach to your specific needs, preferences, and budget.',
      highlight: 'Personalized service'
    }
  ];

  const differentiators = [
    {
      title: 'Others',
      type: 'others',
      items: [
        { text: 'Multiple contractors to coordinate', negative: true },
        { text: 'You chase permits yourself', negative: true },
        { text: 'Unclear pricing with surprises', negative: true },
        { text: 'Communication gaps', negative: true },
        { text: 'Unpredictable timelines', negative: true },
        { text: 'Quality inconsistencies', negative: true }
      ]
    },
    {
      title: 'Renovo Etched',
      type: 'us',
      items: [
        { text: 'Single partner handles everything', negative: false },
        { text: 'We manage all approvals', negative: false },
        { text: 'Transparent, detailed quotes', negative: false },
        { text: 'Dedicated project manager', negative: false },
        { text: 'Clear schedules & updates', negative: false },
        { text: 'Consistent quality standards', negative: false }
      ]
    }
  ];

  const commitments = [
    {
      icon: Eye,
      title: 'Transparency',
      description: 'No hidden costs, no surprises. We provide detailed quotes and keep you informed at every step.'
    },
    {
      icon: Scale,
      title: 'Accountability',
      description: 'One contract, one responsible party. If something needs fixing, we fix it — no finger-pointing.'
    },
    {
      icon: Sparkles,
      title: 'Excellence',
      description: 'We don\'t cut corners. Every detail matters, from the materials we use to the finishing touches.'
    },
    {
      icon: Award,
      title: 'Experience',
      description: 'Years of experience in UAE residential communities means we know the local requirements inside out.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop"
            alt="Why Choose Us"
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
              Why Renovo Etched
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              One Partner.{' '}
              <span className="text-[#C4A77D]">Zero Headaches.</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Discover why Dubai homeowners trust us for their most important renovation projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase">
              Our Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mt-4 mb-6">
              What Sets Us Apart
            </h2>
            <p className="text-stone-600 text-lg">
              We're not just contractors — we're your complete renovation partner, handling every aspect of your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#C4A77D]/20 transition-colors">
                  <reason.icon className="w-7 h-7 text-[#C4A77D]" />
                </div>
                <div className="inline-block bg-[#C4A77D]/10 rounded-full px-3 py-1 text-[#C4A77D] text-xs font-semibold mb-4">
                  {reason.highlight}
                </div>
                <h3 className="font-semibold text-stone-800 text-xl mb-3">
                  {reason.title}
                </h3>
                <p className="text-stone-500 leading-relaxed">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase">
              The Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
              The Renovo Etched Advantage
            </h2>
            <p className="text-stone-400 text-lg">
              See how we compare to the traditional approach of managing multiple contractors.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {differentiators.map((col) => (
              <motion.div
                key={col.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`rounded-2xl p-8 ${
                  col.type === 'us' 
                    ? 'bg-[#C4A77D] text-white' 
                    : 'bg-stone-800 text-stone-300'
                }`}
              >
                <h3 className={`text-2xl font-bold mb-6 ${
                  col.type === 'us' ? 'text-white' : 'text-white'
                }`}>
                  {col.title}
                </h3>
                <ul className="space-y-4">
                  {col.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      {item.negative ? (
                        <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                          <span className="text-red-400 text-sm">✕</span>
                        </div>
                      ) : (
                        <CheckCircle2 className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      )}
                      <span className={col.type === 'us' ? 'text-white' : ''}>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitments */}
      <section className="py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase">
              Our Promise
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mt-4 mb-6">
              What You Can Expect
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {commitments.map((commitment, index) => (
              <motion.div
                key={commitment.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                  <commitment.icon className="w-8 h-8 text-[#C4A77D]" />
                </div>
                <h3 className="font-semibold text-stone-800 text-lg mb-3">
                  {commitment.title}
                </h3>
                <p className="text-stone-500 text-sm">
                  {commitment.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial/Quote */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="text-6xl text-[#C4A77D]/30 mb-6">"</div>
            <p className="text-2xl sm:text-3xl font-medium text-stone-800 leading-relaxed mb-8">
              The peace of mind that comes from knowing every permit, every material, and every worker is professionally managed — that's what we deliver.
            </p>
            <p className="text-stone-500">
              — Renovo Etched Team
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready for a Hassle-Free Renovation?
          </h2>
          <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
            Let's discuss your project and show you the Renovo Etched difference firsthand.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button
              size="lg"
              className="bg-[#C4A77D] hover:bg-[#B39A72] text-white rounded-full px-8 h-14 text-base font-medium group"
            >
              Book Your Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}