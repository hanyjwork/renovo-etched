import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  const services = [
    { name: 'Villa Renovation', href: createPageUrl('Services') + '?service=villa' },
    { name: 'Villa Extensions', href: createPageUrl('Services') + '?service=extension' },
    { name: 'Kitchen Renovation', href: createPageUrl('Services') + '?service=kitchen' },
    { name: 'Bathroom Renovation', href: createPageUrl('Services') + '?service=bathroom' },
    { name: 'Landscaping & Pools', href: createPageUrl('Services') + '?service=landscaping' },
  ];

  const quickLinks = [
    { name: 'About Us', href: createPageUrl('About') },
    { name: 'Our Services', href: createPageUrl('Services') },
    { name: 'Approvals & Permits', href: createPageUrl('Approvals') },
    { name: 'Why Choose Us', href: createPageUrl('WhyUs') },
    { name: 'Contact', href: createPageUrl('Contact') },
  ];

  return (
    <footer className="bg-stone-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div>
              <span className="font-light text-xl">RENOVO</span>
              <span className="text-[#C4A77D] text-xl"> ETCHED</span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed">
              End-to-end villa renovation specialists in Dubai. From design to approvals to handover — we handle everything.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#C4A77D] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#C4A77D] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center hover:bg-[#C4A77D] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.href}
                    className="text-stone-400 hover:text-[#C4A77D] text-sm transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-stone-400 hover:text-[#C4A77D] text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C4A77D] mt-0.5 flex-shrink-0" />
                <span className="text-stone-400 text-sm">
                  Dubai, United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#C4A77D] flex-shrink-0" />
                <a href="tel:+971565440237" className="text-stone-400 hover:text-[#C4A77D] text-sm transition-colors">
                  +971 56 544 0237
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#C4A77D] flex-shrink-0" />
                <a href="mailto:info@renovo-etched.ae" className="text-stone-400 hover:text-[#C4A77D] text-sm transition-colors">
                  info@renovo-etched.ae
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-stone-500 text-sm">
              © {new Date().getFullYear()} Renovo Etched Technical Services LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}