import React, { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const WhyUs = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  const features = [
    {
      num: "01",
      label: "Imagerie de précision",
      text: "Des équipements Siemens de dernière génération pour des diagnostics exacts et des images haute résolution dans toutes les modalités."
    },
    {
      num: "02",
      label: "Résultats rapides",
      text: "Compte-rendu détaillé du radiologue, images sur CD et impression papier remis rapidement pour un suivi médical sans délai."
    },
    {
      num: "03",
      label: "Équipe qualifiée",
      text: "5 radiologues experts, chacun référent dans une surspécialité d'imagerie, pour un diagnostic clair, personnalisé et fiable."
    }
  ];

  return (
    <section className="section" style={{ background: 'var(--bg)' }} ref={sectionRef}>
      <div className="section-inner">
        <div className="section-header" style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto 0' }}>
          <div className="section-eyebrow reveal">Nos engagements</div>
          <h2 className="reveal" style={{ transitionDelay: '0.1s' }}>Pourquoi choisir le CIDIS ?</h2>
        </div>
        <div className="why-grid">
          {features.map((f, i) => (
            <div key={i} className="why-card reveal" style={{ transitionDelay: `${0.1 + i * 0.1}s` }}>
              <div className="why-num">{f.num}</div>
              <div className="why-label">{f.label}</div>
              <div className="why-text">{f.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
