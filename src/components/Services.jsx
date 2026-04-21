import React, { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const Services = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  const services = [
    {
      title: "IRM — Résonance Magnétique",
      desc: "Images précises 2D/3D sans radiation. Cerveau, rachis, articulations, sein, prostate, abdomen.",
      link: "#irm",
      icon: (
        <svg className="svc-icon" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <rect x="3" y="8" width="20" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 4h10M13 4v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <circle cx="13" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Scanner — Tomodensitométrie",
      desc: "Reconstruction 3D du corps par rayons X rotatifs. Explorations thoraciques, abdominales, vasculaires.",
      link: "#",
      icon: (
        <svg className="svc-icon" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <circle cx="13" cy="13" r="9" stroke="currentColor" strokeWidth="1.5" />
          <path d="M13 7v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M4 13h2M20 13h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Échographie",
      desc: "Examen par ultrasons, sans rayonnement. Organes abdominaux, obstétrique, thyroïde, vaisseaux.",
      link: "#",
      iconStyle: { background: 'var(--cgreen-light)' },
      icon: (
        <svg className="svc-icon" width="26" height="26" viewBox="0 0 26 26" fill="none" color="#4BAE8A">
          <path d="M4 13 C6 8, 10 5, 13 9 C16 13, 19 7, 22 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
          <path d="M3 17h20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
      )
    },
    {
      title: "Radiographie standard",
      desc: "Examen rapide pour os, thorax, poumons. Résultats sur CD numérique et impression papier immédiate.",
      link: "#",
      icon: (
        <svg className="svc-icon" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <rect x="4" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M10 13h6M13 10v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Mammographie",
      desc: "Dépistage et diagnostic du cancer du sein par radiographie spécialisée. Détection précoce de référence.",
      link: "#",
      iconStyle: { background: 'var(--cgreen-light)' },
      icon: (
        <svg className="svc-icon" width="26" height="26" viewBox="0 0 26 26" fill="none" color="#4BAE8A">
          <path d="M13 3 C13 3, 20 8, 20 14 C20 18.4, 16.9 22, 13 22 C9.1 22, 6 18.4, 6 14 C6 8, 13 3, 13 3Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
          <circle cx="13" cy="14" r="3" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      )
    },
    {
      title: "Ostéodensitométrie",
      desc: "Mesure de la densité osseuse pour dépistage et suivi de l'ostéoporose. Examen indolore et rapide.",
      link: "#",
      icon: (
        <svg className="svc-icon" width="26" height="26" viewBox="0 0 26 26" fill="none">
          <path d="M8 22V10M13 22V6M18 22V14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5 22h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="section services-section" id="services" ref={sectionRef}>
      <div className="section-inner">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'end', marginBottom: 0 }}>
          <div className="reveal-left">
            <div className="section-eyebrow">Nos examens</div>
            <h2>Technologies de pointe<br />pour votre santé</h2>
          </div>
          <div className="reveal-right">
            <p className="section-desc">Une gamme complète d'examens d'imagerie médicale pour garantir une évaluation précise de votre état de santé. Chaque examen est réalisé par nos radiologues spécialisés.</p>
          </div>
        </div>
        <div className="services-grid">
          {services.map((svc, i) => (
            <div key={i} className="service-card reveal" style={{ transitionDelay: `${0.05 + i * 0.05}s` }}>
              <div className="svc-icon-wrap" style={svc.iconStyle || {}}>
                {svc.icon}
              </div>
              <div className="svc-name">{svc.title}</div>
              <div className="svc-desc">{svc.desc}</div>
              <a href={svc.link} className="svc-link">Explorer →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
