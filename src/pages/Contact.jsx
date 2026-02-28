import React, { useState, useEffect } from 'react';
import { base44 } from '@/api/base44Client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    project_type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const service = urlParams.get('service');
    if (service) {
      const serviceMap = {
        villa: 'full_villa_renovation',
        extension: 'villa_extension',
        kitchen: 'kitchen_renovation',
        bathroom: 'bathroom_renovation',
        internal: 'internal_works',
        landscaping: 'landscaping_pergolas',
        pool: 'pool',
        design: 'design_consultation'
      };
      setFormData(prev => ({ ...prev, project_type: serviceMap[service] || '' }));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await base44.entities.Inquiry.create(formData);
    await Promise.all([
      base44.functions.invoke('sendCustomerInquiryConfirmation', { data: formData }),
      base44.functions.invoke('sendInquiryNotification', { data: formData })
    ]);
    
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  const projectTypes = [
    { value: 'full_villa_renovation', label: 'Full Villa Renovation' },
    { value: 'villa_extension', label: 'Villa Extension' },
    { value: 'kitchen_renovation', label: 'Kitchen Renovation' },
    { value: 'bathroom_renovation', label: 'Bathroom Renovation' },
    { value: 'internal_works', label: 'Internal Works' },
    { value: 'landscaping_pergolas', label: 'Landscaping & Pergolas' },
    { value: 'pool', label: 'Pool Design & Construction' },
    { value: 'design_consultation', label: 'Design Consultation' },
    { value: 'other', label: 'Other' }
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      value: '+971 56 544 0237',
      link: 'tel:+971565440237'
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'info@renovo-etched.ae',
      link: 'mailto:info@renovo-etched.ae'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dubai, UAE',
      link: null
    },
    {
      icon: Clock,
      title: 'Working Hours',
      value: 'Sun - Thu: 9AM - 6PM',
      link: null
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
            alt="Contact Us"
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
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Let's Start Your{' '}
              <span className="text-[#C4A77D]">Renovation Journey</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              Get in touch for a free consultation. We'll discuss your vision and show you how we can bring it to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-[#FAFAF8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-stone-800 mb-4">
                  Get In Touch
                </h2>
                <p className="text-stone-600">
                  Ready to transform your property? Reach out and let's discuss how we can help.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C4A77D]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-[#C4A77D]" />
                    </div>
                    <div>
                      <p className="text-stone-500 text-sm">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-stone-800 font-medium hover:text-[#C4A77D] transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-stone-800 font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 rounded-2xl p-6">
                <h3 className="font-semibold text-stone-800 mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-stone-600 text-sm mb-4">
                  Send us a message on WhatsApp for a quick response.
                </p>
                <a
                  href="https://wa.me/971565440237"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-full px-6 py-3 font-medium transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-800 mb-4">
                      Thank You!
                    </h3>
                    <p className="text-stone-600 mb-8">
                      We've received your inquiry and will get back to you within 24 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          phone: '',
                          project_type: '',
                          message: ''
                        });
                      }}
                      variant="outline"
                      className="rounded-full"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold text-stone-800 mb-2">
                      Request a Free Consultation
                    </h3>
                    <p className="text-stone-600 mb-8">
                      Fill out the form below and our team will contact you shortly.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Your name"
                            required
                            className="h-12 rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="your@email.com"
                            required
                            className="h-12 rounded-xl"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+971 56 544 0237"
                            required
                            className="h-12 rounded-xl"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="project_type">Project Type *</Label>
                          <Select
                            value={formData.project_type}
                            onValueChange={(value) => setFormData({ ...formData, project_type: value })}
                            required
                          >
                            <SelectTrigger className="h-12 rounded-xl">
                              <SelectValue placeholder="Select project type" />
                            </SelectTrigger>
                            <SelectContent>
                              {projectTypes.map((type) => (
                                <SelectItem key={type.value} value={type.value}>
                                  {type.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Project Details</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Tell us about your project, property location, and any specific requirements..."
                          className="min-h-[150px] rounded-xl resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#C4A77D] hover:bg-[#B39A72] text-white rounded-full h-14 text-base font-medium"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Inquiry
                          </>
                        )}
                      </Button>

                      <p className="text-center text-stone-500 text-sm">
                        By submitting this form, you agree to be contacted about your project.
                      </p>
                    </form>
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="h-[400px] bg-stone-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-12 h-12 text-[#C4A77D] mx-auto mb-4" />
            <p className="text-stone-600 font-medium">Dubai, United Arab Emirates</p>
          </div>
        </div>
      </section>
    </div>
  );
}