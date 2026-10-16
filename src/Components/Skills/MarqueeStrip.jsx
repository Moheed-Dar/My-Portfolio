import React from 'react';

/* ---------- Single Row ---------- */
const MarqueeRow = React.memo(({ items, reverse = false }) => {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <div className={`flex w-max marquee-track ${reverse ? 'marquee-reverse' : ''}`}>
        {doubled.map((name, i) => (
          <span
            key={`${name}-${i}`}
            className="flex items-center gap-6 md:gap-10 pr-6 md:pr-10 font-display text-3xl md:text-5xl font-extrabold whitespace-nowrap"
          >
            <span className="text-transparent" style={{ WebkitTextStroke: '1px rgba(245,243,239,0.3)' }}>
              {name}
            </span>
            <span className="text-[#D62839] text-xl md:text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
});

/* ---------- Full Strip ---------- */
const MarqueeStrip = React.memo(({ items }) => {
  if (!items?.length) return null;

  const half = Math.ceil(items.length / 2);

  return (
    <div className="relative bg-[#0D0B0B] py-10 border-y border-[#D62839]/20 overflow-hidden">
      <div className="flex flex-col gap-6 -rotate-1 scale-105">
        <MarqueeRow items={items.slice(0, half)} />
        <MarqueeRow items={items.slice(half)} reverse />
      </div>

      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0D0B0B] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0D0B0B] to-transparent" />
    </div>
  );
});

export default MarqueeStrip;