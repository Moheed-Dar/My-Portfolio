import React, { useState } from 'react';
import image from '../Assets/contactimg/img3.png';
import Swal from 'sweetalert2';
import { Element } from 'react-scroll';
import {
  Send, User, Mail, MessageSquare, MapPin, Phone,
  Github, Linkedin, Twitter, Instagram, ArrowUpRight,
} from 'lucide-react';

const Contact = () => {
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
        title: "Oops!",
        text: "Please fill in all fields before submitting.",
        icon: "warning",
        confirmButtonColor: '#D62839',
        background: '#151111',
        color: '#F5F3EF',
      });
      setIsSubmitting(false);
      return;
    }

    const formPayload = new FormData();
    formPayload.append("access_key", "acadce1d-c04f-4c18-8817-858cd3515b66");
    formPayload.append("name", name);
    formPayload.append("email", email);
    formPayload.append("message", message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formPayload,
      });

      const data = await res.json();

      if (data.success) {
        Swal.fire({
          title: "Success! 🎉",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonColor: '#D62839',
          background: '#151111',
          color: '#F5F3EF',
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message || "Failed to send message.",
          icon: "error",
          confirmButtonColor: '#D62839',
          background: '#151111',
          color: '#F5F3EF',
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Network error, please try again later.",
        icon: "error",
        confirmButtonColor: '#D62839',
        background: '#151111',
        color: '#F5F3EF',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Moheed-Dar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/moheeddar', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/moheeddar', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  /* Input field ka reusable label logic */
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
    <Element name="Contact">
      <section
        id="Contact"
        className="relative py-24 md:py-32 bg-[#0D0B0B] text-[#F5F3EF] font-body overflow-hidden"
      >
        {/* ================= BACKGROUND (hero jaisa) ================= */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 opacity-[0.06]" style={{
            backgroundImage: "linear-gradient(#D62839 1px, transparent 1px), linear-gradient(90deg, #D62839 1px, transparent 1px)",
            backgroundSize: "80px 80px",
            maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          }} />
          <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-[#D62839]/15 blur-[160px] rounded-full" />
          <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] bg-[#D62839]/10 blur-[160px] rounded-full" />
        </div>

        {/* Giant outline text */}
        <h2
          className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-[16vw] md:text-[10rem] font-extrabold leading-none text-transparent select-none pointer-events-none"
          style={{ WebkitTextStroke: "1px rgba(214,40,57,0.25)" }}
        >
          CONTACT
        </h2>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">

          {/* ================= HEADER ================= */}
          <div className="text-center mb-16 md:mb-20 flex flex-col items-center" data-aos="fade-up">
            {/* Badge */}
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-[#D62839]" />
              <span className="text-[#FF6B7A] text-xs md:text-sm font-bold tracking-[0.4em] uppercase">
                Get In Touch
              </span>
              <span className="h-px w-12 bg-[#D62839]" />
            </div>

            {/* Heading */}
            <h2 className="mt-5 font-display text-4xl md:text-6xl font-extrabold tracking-tight">
              Let's <span className="text-blood-gradient">Connect</span>
            </h2>

            {/* Sub-text */}
            <p className="mt-5 max-w-xl text-sm md:text-base text-[#F5F3EF]/55 leading-[1.9]">
              Have a project in mind? Let's create something
              <span className="text-[#FF6B7A] font-semibold"> amazing </span>
              together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ================= LEFT: FORM ================= */}
            <div data-aos="fade-right" className="relative group">
              <div
                className="relative bg-[#151111]/90 backdrop-blur-2xl p-8 md:p-10 rounded-3xl border border-[#D62839]/30 shadow-[0_25px_60px_rgba(214,40,57,0.15)] overflow-hidden transition-all duration-500 hover:border-[#D62839]/60 hover:shadow-[0_25px_70px_rgba(214,40,57,0.25)]"
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
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B7A] to-[#D62839] flex items-center justify-center shadow-[0_0_20px_rgba(214,40,57,0.5)]">
                      <MessageSquare className="w-6 h-6 text-[#F5F3EF]" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-[#F5F3EF]">Send Message</h3>
                      <p className="text-[#F5F3EF]/45 text-sm">I'll respond within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-6">
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
                          className="w-full bg-[#0D0B0B] border border-[#D62839]/25 rounded-xl py-4 pl-12 pr-4 text-[#F5F3EF] placeholder-transparent focus:outline-none focus:border-[#D62839]/70 transition-all duration-300"
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
                          className="w-full bg-[#0D0B0B] border border-[#D62839]/25 rounded-xl py-4 pl-12 pr-4 text-[#F5F3EF] placeholder-transparent focus:outline-none focus:border-[#D62839]/70 transition-all duration-300"
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
                          className="w-full bg-[#0D0B0B] border border-[#D62839]/25 rounded-xl py-4 pl-12 pr-4 text-[#F5F3EF] placeholder-transparent focus:outline-none focus:border-[#D62839]/70 transition-all duration-300 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group/btn cursor-pointer relative overflow-hidden bg-[#D62839] text-[#F5F3EF] font-semibold py-4 rounded-full transition-all duration-300 hover:bg-[#FF6B7A] hover:text-[#0D0B0B] hover:shadow-[0_15px_40px_rgba(214,40,57,0.45)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
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

                  {/* Social Links */}
                  <div className="mt-8 pt-6 border-t border-[#D62839]/20">
                    <p className="text-[#F5F3EF]/40 text-sm text-center mb-4">Or connect via social media</p>
                    <div className="flex justify-center gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={social.label}
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

            {/* ================= RIGHT: IMAGE + INFO ================= */}
            <div data-aos="fade-left" className="relative hidden lg:block pb-24">
              {/* Image */}
              <div className="relative group">
                <div className="absolute inset-0 bg-[#D62839]/25 blur-[110px] rounded-full pointer-events-none" />

                <div className="relative transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                  <img
                    className="relative w-full max-w-lg mx-auto animate-float drop-shadow-[0_30px_60px_rgba(214,40,57,0.35)]"
                    src={image}
                    alt="Contact"
                  />

                  {/* Available badge */}
                  <div className="absolute -top-4 -right-4 bg-[#151111]/95 backdrop-blur border border-[#D62839]/50 rounded-2xl px-4 py-3 shadow-[0_15px_40px_rgba(214,40,57,0.3)] animate-bounce-slow">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B7A] opacity-60" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF6B7A]" />
                      </span>
                      <span className="text-[#F5F3EF] text-sm font-semibold">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info cards */}
              <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-4">
                <div className="group bg-[#151111]/90 backdrop-blur-xl p-5 rounded-2xl border border-[#D62839]/30 hover:border-[#D62839]/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(214,40,57,0.25)]">
                  <div className="w-11 h-11 rounded-xl bg-[#D62839]/15 border border-[#D62839]/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5 text-[#FF6B7A]" />
                  </div>
                  <h4 className="text-[#F5F3EF] font-bold mb-1 text-sm">Email</h4>
                  <p className="text-[#F5F3EF]/45 text-xs break-all">moheeddar324@gmail.com</p>
                  <a href="mailto:moheeddar324@gmail.com" className="inline-flex items-center gap-1 text-[#FF6B7A] text-xs mt-2 hover:gap-2 transition-all">
                    Send email <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>

                <div className="group bg-[#151111]/90 backdrop-blur-xl p-5 rounded-2xl border border-[#D62839]/30 hover:border-[#D62839]/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(214,40,57,0.25)]">
                  <div className="w-11 h-11 rounded-xl bg-[#D62839]/15 border border-[#D62839]/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5 text-[#FF6B7A]" />
                  </div>
                  <h4 className="text-[#F5F3EF] font-bold mb-1 text-sm">Location</h4>
                  <p className="text-[#F5F3EF]/45 text-xs">Islamabad, Pakistan</p>
                  <span className="inline-flex cursor-pointer items-center gap-1 text-[#FF6B7A] text-xs mt-2">
                    Remote available <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* ================= MOBILE INFO ================= */}
            <div className="lg:hidden grid grid-cols-2 gap-4 mt-2">
              <div className="bg-[#151111] p-6 rounded-2xl border border-[#D62839]/30 text-center hover:border-[#D62839]/60 transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#D62839]/15 border border-[#D62839]/40 flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-5 h-5 text-[#FF6B7A]" />
                </div>
                <h4 className="text-[#F5F3EF] font-semibold text-sm">Email</h4>
                <p className="text-[#F5F3EF]/45 text-xs mt-1 break-all">moheeddar324@gmail.com</p>
              </div>
              <div className="bg-[#151111] p-6 rounded-2xl border border-[#D62839]/30 text-center hover:border-[#D62839]/60 transition-all">
                <div className="w-11 h-11 rounded-xl bg-[#D62839]/15 border border-[#D62839]/40 flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-5 h-5 text-[#FF6B7A]" />
                </div>
                <h4 className="text-[#F5F3EF] font-semibold text-sm">Phone</h4>
                <p className="text-[#F5F3EF]/45 text-xs mt-1">+92 313 9837663</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D62839]/60 to-transparent" />

        {/* ================= STYLES ================= */}
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@600;700;800&display=swap');

          .font-display { font-family: 'Syne', sans-serif; }
          .font-body { font-family: 'Inter', sans-serif; }
          .font-logo { font-family: 'Playfair Display', serif; }

          .text-blood-gradient {
            background: linear-gradient(115deg, #F5F3EF 0%, #FF6B7A 45%, #D62839 100%);
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            filter: drop-shadow(0 0 18px rgba(214, 40, 57, 0.35));
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-18px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }

          @keyframes bounce-slow {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
          .animate-bounce-slow { animation: bounce-slow 3s ease-in-out infinite; }

          ::selection { background: #D62839; color: #F5F3EF; }
        `}</style>
      </section>
    </Element>
  );
};

export default Contact;