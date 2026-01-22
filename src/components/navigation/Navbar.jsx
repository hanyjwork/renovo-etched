import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Menu, X, Phone, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Villa Renovation', href: createPageUrl('Services') + '?service=villa' },
    { name: 'Villa Extensions', href: createPageUrl('Services') + '?service=extension' },
    { name: 'Kitchen Renovation', href: createPageUrl('Services') + '?service=kitchen' },
    { name: 'Bathroom Renovation', href: createPageUrl('Services') + '?service=bathroom' },
    { name: 'Internal Works', href: createPageUrl('Services') + '?service=internal' },
    { name: 'Landscaping & Pergolas', href: createPageUrl('Services') + '?service=landscaping' },
    { name: 'Pools', href: createPageUrl('Services') + '?service=pool' },
    { name: 'Design & Project Management', href: createPageUrl('Services') + '?service=design' },
  ];

  const navLinks = [
    { name: 'Home', href: createPageUrl('Home') },
    { name: 'About', href: createPageUrl('About') },
    { name: 'Services', href: createPageUrl('Services'), hasDropdown: true },
    { name: 'Approvals', href: createPageUrl('Approvals') },
    { name: 'Why Us', href: createPageUrl('WhyUs') },
    { name: 'Contact', href: createPageUrl('Contact') },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={createPageUrl('Home')} className="flex items-center gap-3">
            <img 
              src="https://images.unsplash.com/photo-1545259742-12f8e1100f0b?w=100&h=100&fit=crop&crop=center" 
              alt="Renovo Etched Logo" 
              className="w-10 h-10 object-cover rounded-lg"
            />
            <div className={`font-bold text-xl tracking-tight transition-colors ${isScrolled ? 'text-stone-800' : 'text-white'}`}>
              <span className="font-light">RENOVO</span>
              <span className="text-[#C4A77D]"> ETCHED</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                      isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/90 hover:text-white'
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    to={link.href}
                    className={`text-sm font-medium transition-colors ${
                      isScrolled ? 'text-stone-600 hover:text-stone-900' : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Dropdown for Services */}
                {link.hasDropdown && (
                  <div
                    className="absolute top-full left-0 pt-2"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="bg-white rounded-xl shadow-xl py-3 w-64 border border-stone-100"
                        >
                          {services.map((service) => (
                            <Link
                              key={service.name}
                              to={service.href}
                              className="block px-5 py-2.5 text-sm text-stone-600 hover:bg-stone-50 hover:text-[#C4A77D] transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="https://wa.me/971565440237"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? 'text-green-600 hover:text-green-700' : 'text-white/90 hover:text-white'
              }`}
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:+971565440237"
              className={`flex items-center gap-2 text-sm font-medium ${
                isScrolled ? 'text-stone-600' : 'text-white/90'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span>+971 56 544 0237</span>
            </a>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-[#C4A77D] hover:bg-[#B39A72] text-white rounded-full px-6">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 ${isScrolled ? 'text-stone-800' : 'text-white'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-stone-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-stone-600 hover:text-[#C4A77D] font-medium py-2"
                >
                  {link.name}
                </Link>
              ))}
              <Link to={createPageUrl('Contact')} onClick={() => setIsMobileMenuOpen(false)}>
                <Button className="w-full bg-[#C4A77D] hover:bg-[#B39A72] text-white rounded-full mt-4">
                  Get a Quote
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}