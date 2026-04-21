import React, { useEffect, useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import scannerBgImg from '../assets/irm-hover.png';

const ScannerSection = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  useRevealOnScroll(sectionRef);

  useEffect(() => {
    const handleScroll = () => {
      if (!bgRef.current) return;
      const section = bgRef.current.parentElement;
      const rect = section.getBoundingClientRect();
      const vh = window.innerHeight;
      
      if (rect.top < vh && rect.bottom > 0) {
        const progress = (vh - rect.top) / (vh + rect.height);
        const y = (progress - 0.5) * 80;
        bgRef.current.style.transform = `translate3d(0, ${y}px, 0) scale(1.12)`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="scanner-section" ref={sectionRef}>
      <div 
        className="scanner-bg" 
        ref={bgRef}
        style={{ backgroundImage: `url(${scannerBgImg})` }}
      ></div>
      <div className="scanner-content">
        <div style={{ maxWidth: '640px' }} className="reveal">
          <div className="scanner-badge">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <circle cx="7" cy="7" r="6" stroke="#7CBBEF" strokeWidth="1.2" />
              <circle cx="7" cy="7" r="3" fill="none" stroke="#7CBBEF" strokeWidth="1.2" />
            </svg>
            Technologie avancée
          </div>
          <h2 style={{ color: 'white', fontSize: 'clamp(36px, 4vw, 58px)', marginBottom: '20px' }}>
            À l'intérieur de<br />l'excellence technique
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7, marginBottom: '36px' }}>
            Les bobines supraconductrices en cuivre de notre IRM génèrent un champ magnétique extrêmement stable pour des images d'une fidélité anatomique incomparable.
          </p>
          <a href="tel:338212150" className="btn-primary" style={{ fontSize: '15px', padding: '16px 32px' }}>
            Contacter le centre
          </a>
        </div>
      </div>
    </section>
  );
};

export default ScannerSection;
