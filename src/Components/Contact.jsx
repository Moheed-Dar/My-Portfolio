import React, { useState, useEffect } from 'react';
import image from '../Assets/contactimg/img3.png'
import Swal from 'sweetalert2'
import { Element } from 'react-scroll';
import { Send, User, Mail, MessageSquare, MapPin, Phone, Sparkles, Github, Linkedin, Twitter, Instagram, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
        confirmButtonColor: '#59ffa0',
        background: '#171717',
        color: '#fff'
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
        body: formPayload
      });
  
      const data = await res.json();
  
      if (data.success) {
        Swal.fire({
          title: "Success! 🎉",
          text: "Your message has been sent successfully!",
          icon: "success",
          confirmButtonColor: '#59ffa0',
          background: '#171717',
          color: '#fff'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        Swal.fire({
          title: "Error!",
          text: data.message || "Failed to send message.",
          icon: "error",
          confirmButtonColor: '#59ffa0',
          background: '#171717',
          color: '#fff'
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Network error, please try again later.",
        icon: "error",
        confirmButtonColor: '#59ffa0',
        background: '#171717',
        color: '#fff'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <Element name="Contact">
      <section id="Contact" className="relative py-20 md:py-32 bg-[#050505] overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:60px_60px]"></div>
          
          {/* Animated Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#59ffa0]/10 rounded-full blur-[100px] animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px] animate-pulse delay-500"></div>
          
          {/* Floating Particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#59ffa0]/30 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 max-w-7xl">
          {/* Animated Header */}
          <div className="text-center mb-16 md:mb-20" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0f0f0f] border border-[#59ffa0]/30 mb-6 shadow-[0_0_30px_rgba(89,255,160,0.1)] hover:shadow-[0_0_40px_rgba(89,255,160,0.2)] transition-all duration-500 group">
              <Sparkles className="w-4 h-4 text-[#59ffa0] group-hover:rotate-180 transition-transform duration-700" />
              <span className="text-[#59ffa0] text-sm font-bold tracking-widest uppercase">Get In Touch</span>
              <Sparkles className="w-4 h-4 text-[#59ffa0] group-hover:rotate-180 transition-transform duration-700" />
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
              Let's <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59ffa0] via-[#00d4ff] to-[#59ffa0] animate-gradient bg-300%">
                  Connect
                </span>
                <svg className="absolute -bottom-3 left-0 w-full h-4 text-[#59ffa0]/60" viewBox="0 0 200 9" fill="none">
                  <path d="M2.00025 6.99997C25.7509 9.37499 85.6264 5.87449 198.501 2.12525" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="animate-draw"/>
                </svg>
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? Let's create something <span className="text-[#59ffa0] font-semibold">amazing</span> together.
            </p>
          </div>

          <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
            {/* Contact Form - 3D Card */}
            <div data-aos="fade-right" className='relative group perspective-1000'>
              <div 
                className='relative bg-gradient-to-br from-[#1a1a1a]/90 to-[#0a0a0a]/90 backdrop-blur-2xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden transform transition-all duration-500 hover:shadow-[0_0_80px_rgba(89,255,160,0.15)]'
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = (e.clientX - rect.left) / rect.width - 0.5;
                  const y = (e.clientY - rect.top) / rect.height - 0.5;
                  e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 5}deg) rotateX(${-y * 5}deg)`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
                }}
              >
                {/* Animated Border */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#59ffa0]/20 via-[#00d4ff]/20 to-[#59ffa0]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                
                {/* Corner Glows */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#59ffa0]/30 rounded-full blur-[80px] animate-pulse"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-500/30 rounded-full blur-[80px] animate-pulse delay-500"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#59ffa0]/20 to-[#00d4ff]/20 flex items-center justify-center border border-[#59ffa0]/30">
                      <MessageSquare className="w-6 h-6 text-[#59ffa0]" />
                    </div>
                    <div>
                      <h3 className='text-2xl md:text-3xl font-bold text-white'>Send Message</h3>
                      <p className="text-gray-500 text-sm">I'll respond within 24 hours</p>
                    </div>
                  </div>

                  <form onSubmit={onSubmit} className="space-y-6">
                    {/* Name Input */}
                    <div className={`relative group/input ${focusedField === 'name' ? 'transform scale-[1.02]' : ''} transition-all duration-300`}>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#59ffa0] to-[#00d4ff] rounded-xl opacity-0 group-focus-within/input:opacity-50 blur transition duration-500"></div>
                      <div className="relative">
                        <label className={`absolute left-12 transition-all duration-300 pointer-events-none ${focusedField === 'name' || formData.name ? '-top-2.5 text-xs text-[#59ffa0] bg-[#1a1a1a] rounded-md px-2' : 'top-3.5 text-gray-500'}`}>
                          Your Name
                        </label>
                        <div className="absolute left-4 top-3.5 text-gray-500 pointer-events-none transition-colors duration-300 group-focus-within/input:text-[#59ffa0]">
                          <User className="w-5 h-5" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#59ffa0]/50 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Email Input */}
                    <div className={`relative group/input ${focusedField === 'email' ? 'transform scale-[1.02]' : ''} transition-all duration-300`}>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#59ffa0] to-[#00d4ff] rounded-xl opacity-0 group-focus-within/input:opacity-50 blur transition duration-500"></div>
                      <div className="relative">
                        <label className={`absolute left-12  rounded-md transition-all duration-300 pointer-events-none ${focusedField === 'email' || formData.email ? '-top-2.5 text-xs text-[#59ffa0] bg-[#1a1a1a] px-2' : 'top-3.5 text-gray-500'}`}>
                          Email Address
                        </label>
                        <div className="absolute left-4 top-3.5 text-gray-500 pointer-events-none transition-colors duration-300 group-focus-within/input:text-[#59ffa0]">
                          <Mail className="w-5 h-5" />
                        </div>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#59ffa0]/50 transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Message Input */}
                    <div className={`relative group/input ${focusedField === 'message' ? 'transform scale-[1.02]' : ''} transition-all duration-300`}>
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#59ffa0] to-[#00d4ff] rounded-xl opacity-0 group-focus-within/input:opacity-50 blur transition duration-500"></div>
                      <div className="relative">
                        <label className={`absolute left-12 rounded-md transition-all duration-300 pointer-events-none ${focusedField === 'message' || formData.message ? '-top-2.5 text-xs text-[#59ffa0] bg-[#1a1a1a] px-2' : 'top-3.5 text-gray-500'}`}>
                          Your Message
                        </label>
                        <div className="absolute left-4 top-3.5 text-gray-500 pointer-events-none transition-colors duration-300 group-focus-within/input:text-[#59ffa0]">
                          <MessageSquare className="w-5 h-5" />
                        </div>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          rows="4"
                          className="w-full bg-[#0f0f0f] border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white focus:outline-none focus:border-[#59ffa0]/50 transition-all duration-300 resize-none"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full group/btn cursor-pointer relative overflow-hidden bg-gradient-to-r from-[#59ffa0] to-[#00d4ff] text-black font-bold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_40px_rgba(89,255,160,0.5)] hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-white/30 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 skew-x-12"></div>
                    </button>
                  </form>

                  {/* Social Links */}
                  {/* <div className="mt-8 pt-6 border-t border-white/10">
                    <p className="text-gray-500 text-sm text-center mb-4">Or connect via social media</p>
                    <div className="flex justify-center gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.href}
                          className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-[#59ffa0] hover:border-[#59ffa0]/50 hover:bg-[#59ffa0]/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(89,255,160,0.3)]"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5" />
                        </a>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Right Side - Image & Info */}
            <div data-aos="fade-left" className="relative hidden lg:block">
              {/* Main Image with 3D Effect */}
              <div 
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#59ffa0]/30 to-[#00d4ff]/30 rounded-full blur-[100px] animate-pulse group-hover:blur-[120px] transition-all duration-500"></div>
                
                <div className="relative transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-2">
                  <img 
                    className='relative w-full max-w-lg mx-auto animate-float drop-shadow-[0_30px_60px_rgba(89,255,160,0.4)]' 
                    src={image} 
                    alt="Contact" 
                  />
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-4 -right-4  bg-[#171717] border border-[#59ffa0]/30 rounded-2xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.5)] animate-bounce-slow">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#59ffa0] animate-pulse"></div>
                      <span className="text-white text-sm font-semibold">Available for work</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Cards Grid */}
              <div className="absolute -bottom-10 left-0 right-0 grid grid-cols-2 gap-4">
                <div className="group bg-[#171717]/80 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-[#59ffa0]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(89,255,160,0.2)]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#59ffa0]/20 to-[#00d4ff]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-[#59ffa0]" />
                  </div>
                  <h4 className="text-white font-bold mb-1">Email</h4>
                  <p className="text-gray-400 text-sm">moheedar324@email.com</p>
                  <a href="mailto:moheedar324@email.com" className="inline-flex items-center gap-1 text-[#59ffa0] text-xs mt-2 hover:gap-2 transition-all">
                    Send email <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
                
                <div className="group bg-[#171717]/80 backdrop-blur-xl p-5 rounded-2xl border border-white/10 hover:border-[#59ffa0]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(89,255,160,0.2)]">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#59ffa0]/20 to-[#00d4ff]/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-[#59ffa0]" />
                  </div>
                  <h4 className="text-white font-bold mb-1">Location</h4>
                  <p className="text-gray-400 text-sm">Islamabad, Pakistan</p>
                  <span className="inline-flex cursor-pointer items-center gap-1 text-[#59ffa0] text-xs mt-2">
                    Remote available <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>

            {/* Mobile Contact Info */}
            <div className="lg:hidden grid grid-cols-2 gap-4 mt-8">
              <div className="bg-[#171717]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center hover:border-[#59ffa0]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#59ffa0]/10 flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-[#59ffa0]" />
                </div>
                <h4 className="text-white font-semibold">Email</h4>
                <p className="text-gray-400 text-xs mt-1">moheeddar324@email.com</p>
              </div>
              <div className="bg-[#171717]/80 backdrop-blur-xl p-6 rounded-2xl border border-white/10 text-center hover:border-[#59ffa0]/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#59ffa0]/10 flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-[#59ffa0]" />
                </div>
                <h4 className="text-white font-semibold">Phone</h4>
                <p className="text-gray-400 text-xs mt-1">+92306333557</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Gradient Line */}
        <div className="absolute bottom-0 cursor-pointer left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#59ffa0] to-transparent opacity-50"></div>
      </section>

      {/* Advanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(2deg); }
        }
        @keyframes float-particle {
          0%, 100% { 
            transform: translateY(0) translateX(0); 
            opacity: 0;
          }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { 
            transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); 
            opacity: 0;
          }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-particle {
          animation: float-particle linear infinite;
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
        .bg-300\\% {
          background-size: 300% 100%;
        }
        .animate-draw {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw 2s ease forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </Element>
  );
};

export default Contact;