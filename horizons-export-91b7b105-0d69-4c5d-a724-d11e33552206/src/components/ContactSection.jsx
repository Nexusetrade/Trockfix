import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { useInView } from '@/hooks/useInView';
import WatermarkBackground from '@/components/WatermarkBackground';

const ContactSection = () => {
  const [ref, isInView] = useInView({
    threshold: 0.1
  });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    // Hidden field: "website" with value "Trockfix.de"
    website: 'trockfix.de'
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name ist erforderlich';
    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ungültige E-Mail-Adresse';
    }
    if (!formData.message.trim()) newErrors.message = 'Nachricht ist erforderlich';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      toast({
        title: 'Fehler',
        description: 'Bitte füllen Sie alle erforderlichen Felder aus.',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://n8n.srv1155101.hstgr.cloud/webhook/kontakt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      toast({
        title: 'Nachricht gesendet!',
        description: 'Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.'
      });
      
      // Clear form fields after successful submission, preserve hidden field
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        website: 'Trockfix.de' // Keep the hidden field value
      });
      setErrors({});
    } catch (error) {
      console.error('Submission error:', error);
      toast({
        title: 'Fehler beim Senden',
        description: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an.',
        variant: 'destructive'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactDetails = [
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Theodorerich Str. 8, 85051 Ingolstadt',
      href: 'https://www.google.com/maps/search/?api=1&query=Theodorerich+Str.+8,+85051+Ingolstadt',
      target: '_blank'
    },
    {
      icon: Phone,
      title: 'Telefon',
      content: '+49 171 3498807',
      href: 'tel:+491713498807',
      target: '_self'
    },
    {
      icon: Mail,
      title: 'E-Mail',
      content: 'info@trockfix.de',
      href: 'mailto:info@trockfix.de',
      target: '_self'
    }
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 relative overflow-hidden" ref={ref}>
      <WatermarkBackground />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00BCD4] font-semibold text-sm uppercase tracking-wider">
            Kontakt
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2">
            Kontaktieren Sie uns
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Wir sind rund um die Uhr für Sie erreichbar. Nutzen Sie unser Kontaktformular oder rufen Sie uns direkt an.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-2xl shadow-lg relative z-20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent transition-all outline-none disabled:opacity-60 disabled:cursor-not-allowed ${
                    errors.name ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Ihr Name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-Mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent transition-all outline-none disabled:opacity-60 disabled:cursor-not-allowed ${
                    errors.email ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="ihre.email@beispiel.de"
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Telefon (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent transition-all outline-none disabled:opacity-60 disabled:cursor-not-allowed"
                  placeholder="+49 123 456789"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Nachricht *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border bg-gray-50 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent transition-all resize-none outline-none disabled:opacity-60 disabled:cursor-not-allowed ${
                    errors.message ? 'border-red-500' : 'border-gray-200'
                  }`}
                  placeholder="Beschreiben Sie Ihr Anliegen..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00BCD4] hover:bg-[#00ACC1] text-white py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Wird gesendet...
                  </span>
                ) : (
                  'Nachricht senden'
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Information Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex flex-col h-full justify-center space-y-8"
          >
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                Rufen Sie uns an – <br className="hidden md:block" />
                wir helfen sofort!
              </h3>
              <p className="text-gray-600 text-lg">
                Unser Expertenteam steht bereit, um Ihren Schaden schnell und professionell zu beheben.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {contactDetails.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.href}
                    target={item.target}
                    rel={item.target === '_blank' ? 'noopener noreferrer' : ''}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                    className="flex items-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-transparent hover:border-[#00BCD4] group relative overflow-hidden z-20"
                  >
                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    
                    <div className="relative flex-shrink-0 bg-cyan-50 p-4 rounded-full group-hover:bg-[#00BCD4] transition-colors duration-300">
                      <Icon className="w-6 h-6 text-[#00BCD4] group-hover:text-white transition-colors duration-300" />
                    </div>
                    
                    <div className="relative ml-6">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-1">{item.title}</h4>
                      <p className="text-lg font-medium text-gray-900 group-hover:text-[#00BCD4] transition-colors duration-300 break-words">
                        {item.content}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;