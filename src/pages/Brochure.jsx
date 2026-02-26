import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, Globe, CheckCircle, Wrench, Users, Clock, Award } from 'lucide-react';

export default function Brochure() {
  const sections = {
    offering: [
      'End-to-end technical and contracting services tailored to renovations',
      'Our scope starts with design, project management, supply of materials and implementation',
      'We also coordinate with developer and municipality to get all necessary NOCs and permits'
    ],
    commitments: [
      'Quality in all provided services',
      'Skillful and hygienic teams',
      'Punctuality and professionalism',
      'Timely delivery and meeting project timelines'
    ],
    deliverables: [
      'End-to-end technical services (design, PM, supply and implementation...)',
      'Contracting services (demolition, construction, tiling...)',
      'Hard and soft landscaping (gardens, pergolas, pools...)',
      'Internal works (expansion, decoration, kitchens and toilets...)'
    ],
    differentiation: [
      'End-to-end services: We perform end-to-end services from design to permits to supply of materials and implementation',
      'Focus on quality, health and safety',
      'Skilled workforce with capability to ramp-up for big projects',
      'Customized solutions that align with the specific requirements of each facility starting with design'
    ]
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      {/* Header Section */}
      <section className="relative bg-[#2D3436] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold mb-4">
              <span className="text-[#C4A77D]">Renovo</span>{' '}
              <span className="text-white">Etched</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl text-white font-light tracking-wide">
              Technical Services
            </h2>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Our Offering Scope */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border-l-4 border-[#C4A77D]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center">
                <Wrench className="w-6 h-6 text-[#C4A77D]" />
              </div>
              <h2 className="text-3xl font-bold text-[#2D3436]">Our Offering Scope</h2>
            </div>
            <ul className="space-y-4">
              {sections.offering.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C4A77D] mt-1 flex-shrink-0" />
                  <span className="text-stone-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Our Commitments */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-t-4 border-[#C4A77D]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center">
                  <Award className="w-6 h-6 text-[#C4A77D]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3436]">Our Commitments</h2>
              </div>
              <ul className="space-y-4">
                {sections.commitments.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C4A77D] mt-0.5 flex-shrink-0" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Our Deliverables */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg h-full border-t-4 border-[#C4A77D]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-[#C4A77D]" />
                </div>
                <h2 className="text-2xl font-bold text-[#2D3436]">Our Deliverables</h2>
              </div>
              <ul className="space-y-4">
                {sections.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#C4A77D] mt-0.5 flex-shrink-0" />
                    <span className="text-stone-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>
        </div>

        {/* Our Differentiation */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border-l-4 border-[#C4A77D]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#C4A77D]" />
              </div>
              <h2 className="text-3xl font-bold text-[#2D3436]">Our Differentiation</h2>
            </div>
            <ul className="space-y-4">
              {sections.differentiation.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#C4A77D] mt-1 flex-shrink-0" />
                  <span className="text-stone-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Project Images */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8"
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070"
                alt="Villa Project"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070"
                alt="Kitchen Design"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2074"
                alt="Bathroom Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.section>

        {/* Contact Details */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <div className="bg-[#2D3436] rounded-2xl p-8 sm:p-12 shadow-xl text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Contact Details</h2>
            <p className="text-white/90 text-lg mb-8">Contact for a meeting or a quotation.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C4A77D] rounded-full flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div className="text-left">
                  <p className="text-white/70 text-sm">Rony Kozal</p>
                  <a 
                    href="tel:+971565440237"
                    className="text-[#C4A77D] font-semibold text-xl hover:text-[#B39A72] transition-colors"
                  >
                    0565440237
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#C4A77D] rounded-full flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <a 
                  href="mailto:info@renovo-etched.ae"
                  className="text-[#C4A77D] font-semibold text-xl hover:text-[#B39A72] transition-colors"
                >
                  info@renovo-etched.ae
                </a>
              </div>
            </div>

            <a 
              href="/"
              className="inline-flex items-center gap-2 text-white/80 hover:text-[#C4A77D] transition-colors"
            >
              <Globe className="w-5 h-5" />
              https://renovo-etched.ae/
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}