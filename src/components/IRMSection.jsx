import React, { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';
import irmMain from '../assets/irm-main.png';
import irmHover from '../assets/irm-hover.png';

const IRMSection = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section className="irm-section" id="irm" ref={sectionRef}>
      <div className="irm-inner">
        <div className="irm-visual reveal-scale">
          <img src={irmMain} alt="Siemens IRM" className="irm-img-main" />
          <img src={irmHover} alt="Siemens IRM Inside" className="irm-img-hover" />
          <div className="irm-badge"><span>Siemens</span>IRM Haute Précision</div>
        </div>
        <div className="irm-content reveal-right">
          <div className="section-eyebrow">Notre équipement phare</div>
          <h2>L'IRM Siemens —<br />au cœur du diagnostic</h2>
          <p className="section-desc" style={{ marginBottom: '28px' }}>
            Notre machine IRM Siemens de dernière génération permet d'obtenir des images d'une précision exceptionnelle, en 2D et 3D, de l'ensemble des structures anatomiques. <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.4)' }}>Passez la souris sur l'image pour voir l'intérieur de la machine.</em>
          </p>
          <div className="irm-feature">
            <div className="irm-dot"></div>
            <div className="irm-feature-text">Imagerie haute résolution du cerveau, de la moelle épinière, des articulations et des organes abdominaux</div>
          </div>
          <div className="irm-feature">
            <div className="irm-dot"></div>
            <div className="irm-feature-text">Méthode non invasive, sans rayonnement ionisant — idéale pour les examens répétitifs</div>
          </div>
          <div className="irm-feature">
            <div className="irm-dot"></div>
            <div className="irm-feature-text">Examen de 10 à 20 min, compte-rendu du radiologue remis avec images sur CD</div>
          </div>
          <div className="irm-feature">
            <div className="irm-dot"></div>
            <div className="irm-feature-text">Salle spécialement aménagée pour le confort et la sécurité du patient</div>
          </div>
          <div style={{ marginTop: '32px' }}>
            <a href="tel:338212150" className="btn-primary">Prendre rendez-vous IRM</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IRMSection;
