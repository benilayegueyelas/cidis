import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-brand-name">cidis</div>
            <p className="footer-tagline">Centre d'Imagerie Diagnostique et Interventionnelle de Soumbédioune — Dakar, Sénégal.</p>
            <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
              <a href="mailto:info@cidis.sn" style={{ color: 'rgba(75,174,138,0.7)', fontSize: '12px', textDecoration: 'none', background: 'rgba(75,174,138,0.08)', padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(75,174,138,0.15)' }}>info@cidis.sn</a>
              <a href="tel:338212150" style={{ color: 'rgba(75,174,138,0.7)', fontSize: '12px', textDecoration: 'none', background: 'rgba(75,174,138,0.08)', padding: '6px 14px', borderRadius: '6px', border: '1px solid rgba(75,174,138,0.15)' }}>33 821 21 50</a>
            </div>
          </div>
          <div>
            <div className="footer-col-h">Navigation</div>
            <a href="#accueil" className="footer-link">Accueil</a>
            <a href="#services" className="footer-link">Nos services</a>
            <a href="#irm" className="footer-link">Notre IRM</a>
            <a href="#equipe" className="footer-link">Équipe médicale</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>
          <div>
            <div className="footer-col-h">Nos examens</div>
            <a href="#" className="footer-link">IRM</a>
            <a href="#" className="footer-link">Scanner</a>
            <a href="#" className="footer-link">Échographie</a>
            <a href="#" className="footer-link">Radiographie</a>
            <a href="#" className="footer-link">Mammographie</a>
            <a href="#" className="footer-link">Ostéodensitométrie</a>
          </div>
          <div>
            <div className="footer-col-h">Adresse</div>
            <div className="footer-info">
              14 Bd Martin Luther King<br />
              Fann Hock, Dakar, Sénégal<br /><br />
              <strong style={{ color: 'rgba(255,255,255,0.6)' }}>33 821 21 50</strong><br />
              <a href="mailto:info@cidis.sn">info@cidis.sn</a><br /><br />
              Lun–Ven : 08h30–17h00<br />
              Samedi : 08h30–13h00<br />
              <span style={{ color: '#7dd3b8' }}>Urgences : 24h/24</span>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <span>© 2026 CIDIS — Tous droits réservés</span>
          <span>Dakar, Sénégal · cidis.sn</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
