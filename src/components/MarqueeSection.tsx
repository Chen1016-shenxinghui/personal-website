import React, { useState, useEffect, useRef } from 'react';
import { marqueeRow1Images, marqueeRow2Images } from '../data/marquee';

const MarqueeSection: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const sectionTop = sectionRef.current.offsetTop;
      const scrollOffset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(scrollOffset);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Triple arrays for seamless scrolling
  const row1 = [...marqueeRow1Images, ...marqueeRow1Images, ...marqueeRow1Images];
  const row2 = [...marqueeRow2Images, ...marqueeRow2Images, ...marqueeRow2Images];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
    >
      {/* Row 1 - moves RIGHT - design analysis diagrams */}
      <div
        className="flex gap-3 will-change-transform"
        style={{
          transform: `translateX(${offset - 200}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {row1.map((src, index) => (
          <div
            key={`row1-${index}`}
            className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-[#1a1a1a]"
          >
            <img
              src={src}
              alt="设计分析图"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Row 2 - moves LEFT - motion design GIFs */}
      <div
        className="flex gap-3 mt-3 will-change-transform"
        style={{
          transform: `translateX(-${offset - 200}px)`,
          transition: 'transform 0.1s linear',
        }}
      >
        {row2.map((src, index) => (
          <div
            key={`row2-${index}`}
            className="flex-shrink-0 w-[420px] h-[270px] rounded-2xl overflow-hidden bg-[#1a1a1a]"
          >
            <img
              src={src}
              alt=""
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarqueeSection;