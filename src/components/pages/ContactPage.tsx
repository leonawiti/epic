import React, { useState } from 'react';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', businessType: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#013A63] to-[#002244] pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Let's Automate Your <span className="text-[#3AF2FF]">Business.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tell us a little about your business and we'll design a custom automation plan — free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card hover={false} className="p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-[#3AF2FF]/20 flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="w-10 h-10 text-[#3AF2FF]" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Thank You!</h3>
                  <p className="text-gray-300">We'll be in touch within 24 hours to discuss your automation needs.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2 font-semibold">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#3AF2FF] transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 font-semibold">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#3AF2FF] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-white mb-2 font-semibold">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#3AF2FF] transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-white mb-2 font-semibold">Business Type</label>
                      <select
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-[#3AF2FF] transition-colors"
                      >
                        <option value="">Select type</option>
                        <option value="home-services">Home Services</option>
                        <option value="professional">Professional Services</option>
                        <option value="small-business">Small Business</option>
                        <option value="real-estate">Real Estate</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-white mb-2 font-semibold">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-[#3AF2FF] transition-colors resize-none"
                      placeholder="Tell us about your automation needs..."
                    />
                  </div>

                  <Button type="submit" variant="primary" className="w-full">
                    Request Consultation
                  </Button>
                </form>
              )}
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <Card hover={false} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#3AF2FF]/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#3AF2FF]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Email</h3>
                  <a href="mailto:requests@epicbizintel.com" className="text-gray-300 text-sm hover:text-[#3AF2FF] transition-colors">
                    requests@epicbizintel.com
                  </a>
                </div>
              </div>

            </Card>

            <Card hover={false} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#3AF2FF]/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#3AF2FF]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Phone</h3>
                  <a href="tel:+13149136311" className="text-gray-300 text-sm hover:text-[#3AF2FF] transition-colors">
                    (314) 913-6311
                  </a>
                </div>
              </div>
            </Card>


            <Card hover={false} className="p-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-[#3AF2FF]/20 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#3AF2FF]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Location</h3>
                  <p className="text-gray-300 text-sm">Fenton, MO</p>

                </div>
              </div>
            </Card>

            <Card hover={false} className="p-6 bg-[#3AF2FF]/10">
              <h3 className="text-white font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-3">
                <a 
                  href="https://calendly.com/your-link" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full text-sm py-3">
                    Schedule A Call
                  </Button>
                </a>
                <a 
                  href="https://wa.me/13149136311" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button variant="outline" className="w-full text-sm py-3">
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
};
