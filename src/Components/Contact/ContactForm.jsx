import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {
  Send, User, Mail, MessageSquare,
  Github, Linkedin, Twitter, Instagram,
} from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      Swal.fire({
        title: 'Oops!',
        text: 'Please fill in all fields before submitting.',
        icon: 'warning',
        confirmButtonColor: '#D62839',
        background: '#151111',
        color: '#F5F3EF',
      });
      setIsSubmitting(false);
      return;
    }

    const formPayload = new FormData();
    formPayload.append('access_key', 'acadce1d-c04f-4c18-8817-858cd3515b66');
    formPayload.append('name', name);
    formPayload.append('email', email);
    formPayload.append('message', message);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formPayload,
      });
      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: 'Success! 🎉',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonColor: '#D62839',
          background: '#151111',
          color: '#F5F3EF',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        Swal.fire({
          title: 'Error!',
          text: data.message || 'Failed to send message.',
          icon: 'error',
          confirmButtonColor: '#D62839',
          background: '#151111',
          color: '#F5F3EF',
        });
      }
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Network error, please try again later.',
        icon: 'error',
        confirmButtonColor: '#D62839',
        background: '#151111',
        color: '#F5F3EF',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Social links — WhatsApp bhi added */
  const socialLinks = [
    { icon: Github, href: 'https://github.com/Moheed-Dar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/moheeddar', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/moheeddar', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/m0heeddar/', label: 'Instagram' },
    {
      icon: WhatsAppIcon,
      href: 'https://wa.me/923139837663?text=Hi%20Moheed!%20I%20want%20to%20discuss%20a%20project.',
      label: 'WhatsApp',
    },
  ];

  const labelClass = (field) =>
    `absolute left-12 rounded-md transition-all duration-300 pointer-events-none ${
      focusedField === field || formData[field]
        ? '-top-2.5 text-xs text-[#FF6B7A] bg-[#151111] px-2'
        : 'top-3.5 text-[#F5F3EF]/40'
    }`;

  const iconClass = (field) =>
    `absolute left-4 top-3.5 pointer-events-none transition-colors duration-300 ${
      focusedField === field ? 'text-[#FF6B7A]' : 'text-[#F5F3EF]/40'
    }`;

  return (
    <div data-aos="fade-right" className="relative group">
      <div
        className="relative bg-[#151111]/90 backdrop-blur-2xl p-6 sm:p-8 md:p-10 rounded-3xl border border-[#D62839]/30 shadow-[0_25px_60px_rgba(214,40,57,0.15)] overflow-hidden transition-all duration-500 hover:border-[#D62839]/60 hover:shadow-[0_25px_70px_rgba(214,40,57,0.25)]"
        onMouseMove={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = (e.clientX - rect.left) / rect.width - 0.5;
          const y = (e.clientY - rect.top) / rect.height - 0.5;
          e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
        }}
      >
        {/* Corner glow */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#D62839]/25 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative z-10">
          {/* Card header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B7A] to-[#D62839] flex items-center justify-center shadow-[0_0_20px_rgba(214,40,57,0.5)] shrink-0">
              <MessageSquare className="w-6 h-6 text-[#F5F3EF]" />
            </div>
            <div>
              <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold text-[#F5F3EF]">
                Send Message
              </h3>
              <p className="text-[#F5F3EF]/45 text-xs sm:text-sm">
                I'll respond within 24 hours
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-5 sm:space-y-6">
            {/* Name */}
            <div className="relative group/input">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D62839] to-[#FF6B7A] rounded-xl opacity-0 group-focus-within/input:opacity-40 blur transition duration-500" />
              <div className="relative">
                <label className={labelClass('name')}>Your Name</label>
                <div className={iconClass('name')}><User className="w-5 h-5" /></div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-[#0D0B0B] border border-[#D62839]/25 rounded-xl py-3.5 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-[#F5F3EF] placeholder-transparent focus:outline-none focus:border-[#D62839]/70 transition-all duration-300"
                />
              </div>
            </div>

            {/* Email */}
            <div className="relative group/input">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D62839] to-[#FF6B7A] rounded-xl opacity-0 group-focus-within/input:opacity-40 blur transition duration-500" />
              <div className="relative">
                <label className={labelClass('email')}>Email Address</label>
                <div className={iconClass('email')}><Mail className="w-5 h-5" /></div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-[#0D0B0B] border border-[#D62839]/25 rounded-xl py-3.5 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-[#F5F3EF] placeholder-transparent focus:outline-none focus:border-[#D62839]/70 transition-all duration-300"
                />
              </div>
            </div>

            {/* Message */}
            <div className="relative group/input">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#D62839] to-[#FF6B7A] rounded-xl opacity-0 group-focus-within/input:opacity-40 blur transition duration-500" />
              <div className="relative">
                <label className={labelClass('message')}>Your Message</label>
                <div className={iconClass('message')}><MessageSquare className="w-5 h-5" /></div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows="4"
                  className="w-full bg-[#0D0B0B] border border-[#D62839]/25 rounded-xl py-3.5 sm:py-4 pl-12 pr-4 text-sm sm:text-base text-[#F5F3EF] placeholder-transparent focus:outline-none focus:border-[#D62839]/70 transition-all duration-300 resize-none"
                />
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group/btn cursor-pointer relative overflow-hidden bg-[#D62839] text-[#F5F3EF] font-semibold py-3.5 sm:py-4 rounded-full transition-all duration-300 hover:bg-[#FF6B7A] hover:text-[#0D0B0B] hover:shadow-[0_15px_40px_rgba(214,40,57,0.45)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </>
                )}
              </span>
            </button>
          </form>

          {/* Social Links — WhatsApp included */}
          <div className="mt-8 pt-6 border-t border-[#D62839]/20">
            <p className="text-[#F5F3EF]/40 text-xs sm:text-sm text-center mb-4">
              Or connect via social media
            </p>
            <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className="w-10 h-10 rounded-full border border-[#D62839]/40 bg-[#D62839]/10 flex items-center justify-center text-[#F5F3EF]/60 hover:text-[#F5F3EF] hover:bg-[#D62839] hover:border-[#D62839] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(214,40,57,0.4)] transition-all duration-300"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;