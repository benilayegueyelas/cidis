import React, { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const CTA = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section className="cta-section" id="contact" ref={sectionRef}>
      <div className="cta-inner">
        <div className="reveal-left">
          <h2>Prenez rendez-vous<br />dès aujourd'hui</h2>
          <p className="cta-desc">Notre équipe vous accueille du lundi au samedi pour tout examen d'imagerie médicale. Prise en charge rapide, personnalisée et sans attente.</p>
        </div>
        <div className="cta-right reveal-right">
          <a href="tel:338212150" className="btn-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 2h3l1.5 3.5-1.5 1C7 8.5 7.5 9 9.5 10.5l1-1.5L14 10.5V13.5A1 1 0 0 1 13 14.5C6.5 14 1.5 8.5 1.5 3A1 1 0 0 1 3 2Z" stroke="#1B6FBF" strokeWidth="1.3" />
            </svg>
            Appeler maintenant
          </a>
          <div className="phone-block">
            <div className="phone-label">Urgences — 7j/7 · 24h/24</div>
            <div className="phone-num">33 821 21 50</div>
          </div>
          <a href="mailto:info@cidis.sn" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', marginTop: '4px' }}>info@cidis.sn</a>
        </div>
      </div>
    </section>
  );
};

export default CTA;
