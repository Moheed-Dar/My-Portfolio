import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import image from '../../Assets/contactimg/img3.png';

const ContactInfo = () => {
  /* Info cards data — WhatsApp + Email + Phone + Location */
  const infoCards = [
    {
      icon: Mail,
      title: 'Email',
      value: 'moheeddar324@gmail.com',
      href: 'mailto:moheeddar324@gmail.com',
      linkText: 'Send email',
    },
    {
      icon: WhatsAppIcon,
      title: 'WhatsApp',
      value: '+92 313 9837663',
      href: 'https://wa.me/923139837663?text=Hi%20Moheed!%20I%20want%20to%20discuss%20a%20project.',
      linkText: 'Chat now',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+92 313 9837663',
      href: 'tel:+923139837663',
      linkText: 'Call now',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Islamabad, Pakistan',
      href: null,
      linkText: 'Remote available',
    },
  ];

  /* Ek info card ka markup (desktop + mobile dono use karte hain) */
  const renderCard = (card, center = false) => (
    <div
      key={card.title}
      className={`group bg-[#151111]/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-[#D62839]/30 hover:border-[#D62839]/70 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(214,40,57,0.25)] ${
        center ? 'text-center' : ''
      }`}
    >
      <div
        className={`w-11 h-11 rounded-xl bg-[#D62839]/15 border border-[#D62839]/40 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform ${
          center ? 'mx-auto' : ''
        }`}
      >
        <card.icon className="w-5 h-5 text-[#FF6B7A]" />
      </div>
      <h4 className="text-[#F5F3EF] font-bold mb-1 text-sm">{card.title}</h4>
      <p className="text-[#F5F3EF]/45 text-xs break-all">{card.value}</p>

      {card.href ? (
        <a
          href={card.href}
          target={card.href.startsWith('http') ? '_blank' : undefined}
          rel="noreferrer"
          className="inline-flex items-center gap-1 text-[#FF6B7A] text-xs mt-2 hover:gap-2 transition-all"
        >
          {card.linkText} <ArrowUpRight className="w-3 h-3" />
        </a>
      ) : (
        <span className="inline-flex cursor-pointer items-center gap-1 text-[#FF6B7A] text-xs mt-2">
          {card.linkText} <ArrowUpRight className="w-3 h-3" />
        </span>
      )}
    </div>
  );

  return (
    <>
      {/* ===== DESKTOP (lg+) — image + floating cards ===== */}
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
                <span className="text-[#F5F3EF] text-sm font-semibold">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Info cards — 4 cards (2x2 grid) */}
        <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 gap-4">
          {infoCards.map((card) => renderCard(card))}
        </div>
      </div>

      {/* ===== MOBILE (< lg) — same 4 cards, image nahi ===== */}
      <div className="lg:hidden grid grid-cols-2 gap-3 sm:gap-4 mt-4">
        {infoCards.map((card) => renderCard(card, true))}
      </div>
    </>
  );
};

export default React.memo(ContactInfo);