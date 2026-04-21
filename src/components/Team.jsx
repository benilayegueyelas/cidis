import React, { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const Team = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  const doctors = [
    { name: "Dr. Ibrahima DIAKHATE", day: "Lundi", initials: "ID" },
    { name: "Dr. Abdourahmane NDIAYE", day: "Jeudi", initials: "AN" },
    { name: "Pr. Ababacar MBENGUE", day: "Mardi", initials: "AM" },
    { name: "Pr. Abdoulaye Dione DIOP", day: "Vendredi", initials: "AD" },
    { name: "Pr. Abdoulaye Ndoye DIOP", day: "Mercredi", initials: "ND" },
  ];

  return (
    <section className="section" id="equipe" ref={sectionRef}>
      <div className="section-inner">
        <div style={{ textAlign: 'center', maxWidth: '560px', margin: '0 auto' }}>
          <div className="section-eyebrow reveal">Équipe médicale</div>
          <h2 className="reveal" style={{ transitionDelay: '0.1s' }}>Radiologues spécialisés<br />à votre écoute</h2>
          <p className="section-desc reveal" style={{ transitionDelay: '0.2s' }}>Notre équipe est constituée de médecins radiologues, tous référents dans une surspécialité d'imagerie médicale.</p>
        </div>
        <div className="doctors-grid">
          {doctors.map((doc, i) => (
            <div key={i} className="doctor-card reveal" style={{ transitionDelay: `${0.05 + i * 0.05}s` }}>
              <div className="doc-avatar">{doc.initials}</div>
              <div className="doc-name">{doc.name}</div>
              <div className="doc-day">{doc.day}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
