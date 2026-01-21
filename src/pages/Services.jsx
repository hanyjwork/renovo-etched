import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Home, Grid3X3, UtensilsCrossed, Bath, Fence, Trees, Waves, Compass } from 'lucide-react';

export default function Services() {
  const [activeService, setActiveService] = useState('villa');

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    if (service) {
      setActiveService(service);
      setTimeout(() => {
        const element = document.getElementById(service);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  }, []);

  const services = [
    {
      id: 'villa',
      icon: Home,
      title: 'Holistic Villa Renovation',
      subtitle: 'Complete transformation from foundation to finish',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      description: 'Our comprehensive villa renovation service transforms every aspect of your property. We handle complete interior and exterior upgrades, structural modifications, and system overhauls to create your dream home.',
      features: [
        'Full interior & exterior renovation',
        'Structural assessments & modifications',
        'Complete MEP upgrades',
        'Flooring, walls, and ceiling work',
        'Windows, doors, and fixtures',
        'All approvals and permits handled'
      ]
    },
    {
      id: 'extension',
      icon: Grid3X3,
      title: 'Villa Extensions',
      subtitle: 'Expand your living space with approved additions',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop',
      description: 'Need more space? We design and build villa extensions that seamlessly integrate with your existing structure. From additional bedrooms to expanded living areas, we handle all approvals and construction.',
      features: [
        'Room additions & expansions',
        'Maid\'s quarters & driver rooms',
        'Garage extensions',
        'Rooftop additions',
        'Municipality & developer approvals',
        'Structural engineering & permits'
      ]
    },
    {
      id: 'kitchen',
      icon: UtensilsCrossed,
      title: 'Kitchen Renovation',
      subtitle: 'Modern, functional kitchens tailored to your lifestyle',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696cac8722f70dcbd742d784/47152c616_kitchen.jpg',
      description: 'Transform your kitchen into the heart of your home. We design and build stunning kitchens with premium materials, smart storage solutions, and top-quality appliances that make cooking a pleasure.',
      features: [
        'Custom cabinetry & storage',
        'Premium countertops & backsplashes',
        'Appliance installation & integration',
        'Lighting design',
        'Plumbing & electrical upgrades',
        'Island & breakfast bar designs'
      ]
    },
    {
      id: 'bathroom',
      icon: Bath,
      title: 'Bathroom Renovation',
      subtitle: 'Luxurious bathrooms with premium finishes',
      image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696cac8722f70dcbd742d784/e7a417ab8_Bathroom.jpg',
      description: 'Create spa-like retreats in your own home. Our bathroom renovations feature luxurious materials, elegant fixtures, and thoughtful design to transform your daily routine into a relaxing experience.',
      features: [
        'Complete waterproofing',
        'Premium tiles & stone finishes',
        'Modern fixtures & fittings',
        'Walk-in showers & bathtubs',
        'Vanities & storage solutions',
        'Lighting & ventilation'
      ]
    },
    {
      id: 'internal',
      icon: Fence,
      title: 'Internal Works',
      subtitle: 'Tiling, MEP, feature walls, and interior upgrades',
      image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?q=80&w=2074&auto=format&fit=crop',
      description: 'Upgrade specific elements of your interior without a full renovation. From feature walls to flooring, lighting to air conditioning, we handle individual improvements that enhance your space.',
      features: [
        'Tiling & flooring',
        'Feature walls & paneling',
        'Electrical & lighting upgrades',
        'AC & ventilation work',
        'Plumbing modifications',
        'Paint & finishing'
      ]
    },
    {
      id: 'landscaping',
      icon: Trees,
      title: 'Landscaping & Pergolas',
      subtitle: 'Beautiful outdoor spaces with hard and soft landscaping',
      image: 'https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=2074&auto=format&fit=crop',
      description: 'Extend your living space outdoors with professional landscaping. We design and create stunning gardens, patios, pergolas, and outdoor entertainment areas that complement Dubai\'s climate.',
      features: [
        'Garden design & planting',
        'Pergolas & shade structures',
        'Outdoor kitchens & BBQ areas',
        'Pathways & paving',
        'Irrigation systems',
        'Outdoor lighting'
      ]
    },
    {
      id: 'pool',
      icon: Waves,
      title: 'Pool Design & Construction',
      subtitle: 'Custom pools designed and built to your specifications',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
      description: 'Add luxury and value to your property with a custom-designed pool. From infinity edges to lap pools, we handle design, approvals, construction, and installation of all pool systems.',
      features: [
        'Custom pool design',
        'All required approvals',
        'Construction & tiling',
        'Filtration & heating systems',
        'Pool deck & surrounding areas',
        'Maintenance systems'
      ]
    },
    {
      id: 'design',
      icon: Compass,
      title: 'Design & Project Management',
      subtitle: '2D/3D designs and complete project oversight',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop',
      description: 'Start with a clear vision. Our design team creates detailed 2D and 3D visualizations so you can see your project before construction begins. Our project managers ensure seamless execution.',
      features: [
        '2D floor plans & layouts',
        '3D visualizations & renders',
        'Material & finish selection',
        'Project scheduling & coordination',
        'Quality supervision',
        'Regular progress updates'
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop"
            alt="Our Services"
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Comprehensive Renovation{' '}
              <span className="text-[#C4A77D]">Solutions</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              From complete villa transformations to specific upgrades, we deliver end-to-end renovation services with all approvals handled.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="sticky top-20 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-1 py-4 scrollbar-hide">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => {
                  setActiveService(service.id);
                  const element = document.getElementById(service.id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeService === service.id
                    ? 'bg-[#C4A77D] text-white'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                <service.icon className="w-4 h-4" />
                {service.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-16 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="inline-flex items-center gap-2 bg-[#C4A77D]/10 rounded-full px-4 py-2 mb-4">
                    <service.icon className="w-5 h-5 text-[#C4A77D]" />
                    <span className="text-[#C4A77D] text-sm font-medium">{service.subtitle}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-stone-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-stone-600 leading-relaxed mb-8">
                    {service.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#C4A77D] mt-0.5 flex-shrink-0" />
                        <span className="text-stone-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link to={createPageUrl('Contact') + `?service=${service.id}`}>
                    <Button className="bg-[#C4A77D] hover:bg-[#B39A72] text-white rounded-full px-6 group">
                      Get a Quote
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 to-transparent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Not Sure Where to Start?
          </h2>
          <p className="text-stone-400 text-lg mb-10 max-w-2xl mx-auto">
            Book a free consultation and let our experts help you plan your renovation project from start to finish.
          </p>
          <Link to={createPageUrl('Contact')}>
            <Button
              size="lg"
              className="bg-[#C4A77D] hover:bg-[#B39A72] text-white rounded-full px-8 h-14 text-base font-medium group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}