import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, FileCheck, Building2, Shield, Clock, AlertCircle, Sparkles } from 'lucide-react';

export default function Approvals() {
  const approvalTypes = [
    {
      icon: Building2,
      title: 'Dubai Municipality',
      description: 'Building permits, structural modifications, and construction approvals required for any significant renovation work in Dubai.',
      items: ['Building permits', 'Structural modification approvals', 'Completion certificates']
    },
    {
      icon: Shield,
      title: 'DDA Approvals',
      description: 'Dubai Development Authority approvals for projects in designated development zones.',
      items: ['Zone-specific permits', 'Development compliance', 'Design approvals']
    },
    {
      icon: FileCheck,
      title: 'Developer NOCs',
      description: 'No Objection Certificates from master developers like Emaar, Nakheel, DAMAC, and others.',
      items: ['Community approvals', 'Design compliance', 'Construction guidelines']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Assessment',
      description: 'We assess your project scope and determine all required approvals.'
    },
    {
      step: '02',
      title: 'Documentation',
      description: 'Our team prepares all necessary drawings and documents.'
    },
    {
      step: '03',
      title: 'Submission',
      description: 'We submit applications to all relevant authorities.'
    },
    {
      step: '04',
      title: 'Follow-up',
      description: 'Active tracking and coordination until all approvals are secured.'
    },
    {
      step: '05',
      title: 'Clearance',
      description: 'Final permits obtained and construction can begin.'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save Time',
      description: 'Avoid weeks of back-and-forth with government offices. We handle all submissions and follow-ups.'
    },
    {
      icon: AlertCircle,
      title: 'Avoid Penalties',
      description: 'Unauthorized construction can result in heavy fines. We ensure full compliance.'
    },
    {
      icon: Shield,
      title: 'Peace of Mind',
      description: 'Know that your project is 100% legal and approved by all relevant authorities.'
    },
    {
      icon: Sparkles,
      title: 'Expert Handling',
      description: 'Our experienced team knows the process inside out, ensuring smooth approvals.'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
            alt="Approvals and Permits"
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
              Approvals & Permits
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              We Handle{' '}
              <span className="text-[#C4A77D]">Everything</span>
              {' '}For You
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Navigating Dubai's approval process can be complex. From Dubai Municipality to developer NOCs, we manage all permits so you can focus on your vision.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Approval Types */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase">
              What We Handle
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mt-4 mb-6">
              Complete Approval Management
            </h2>
            <p className="text-stone-600 text-lg">
              Every renovation project in Dubai requires specific permits and approvals. We manage them all.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {approvalTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center mb-6">
                  <type.icon className="w-7 h-7 text-[#C4A77D]" />
                </div>
                <h3 className="font-semibold text-stone-800 text-xl mb-3">
                  {type.title}
                </h3>
                <p className="text-stone-500 mb-6">
                  {type.description}
                </p>
                <ul className="space-y-2">
                  {type.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-stone-600 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#C4A77D]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
              How We Secure Your Approvals
            </h2>
            <p className="text-stone-400 text-lg">
              A streamlined process that takes the burden off your shoulders.
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#C4A77D]/30 transform -translate-y-1/2" />

            <div className="grid md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-[#C4A77D] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg relative z-10">
                    {step.step}
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-stone-400 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-[#F5F5F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#C4A77D] text-sm font-semibold tracking-wider uppercase">
                Why It Matters
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mt-4 mb-6">
                Leave the Paperwork to Us
              </h2>
              <p className="text-stone-600 leading-relaxed mb-8">
                Renovation approvals in Dubai can be overwhelming. Different authorities, varying requirements, multiple submissions — it's a full-time job. That's why we include complete approval management in every project.
              </p>

              <div className="grid sm:grid-cols-2 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="w-10 h-10 bg-[#C4A77D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-[#C4A77D]" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-stone-800 mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-stone-500 text-sm">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-stone-800 mb-6">
                  100% Approval Success Rate
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <span className="text-green-800 font-medium">Dubai Municipality Approvals</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <span className="text-green-800 font-medium">DDA Compliance</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <span className="text-green-800 font-medium">Developer NOCs</span>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    <span className="text-green-800 font-medium">Completion Certificates</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-6">
            Start Your Project Worry-Free
          </h2>
          <p className="text-stone-600 text-lg mb-10 max-w-2xl mx-auto">
            With all approvals handled by our expert team, you can focus on choosing finishes and watching your vision come to life.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button
              size="lg"
              className="bg-[#C4A77D] hover:bg-[#B39A72] text-white rounded-full px-8 h-14 text-base font-medium group"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}