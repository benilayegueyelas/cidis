import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 60) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav id="navbar" className={`${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="nav-emergency">
        Urgences 7j/7 — 24h/24 :<strong>33 821 21 50</strong>
      </div>
      <div className="nav-main">
        <a href="#" className="nav-logo">
          <svg className="logo-svg" width="46" height="46" viewBox="0 0 46 46">
            <circle cx="23" cy="23" r="20" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="3.5" strokeDasharray="95 35" transform="rotate(-30 23 23)"/>
            <circle cx="23" cy="23" r="20" fill="none" stroke="#1B6FBF" strokeWidth="3.5" strokeDasharray="50 80" transform="rotate(-30 23 23)" id="logo-arc"/>
            <ellipse cx="23" cy="23" rx="10" ry="4.5" fill="none" stroke="#4BAE8A" strokeWidth="1.8"/>
            <ellipse cx="23" cy="23" rx="10" ry="4.5" fill="none" stroke="#4BAE8A" strokeWidth="1.8" transform="rotate(60 23 23)"/>
            <ellipse cx="23" cy="23" rx="10" ry="4.5" fill="none" stroke="#4BAE8A" strokeWidth="1.8" transform="rotate(120 23 23)"/>
            <circle cx="23" cy="23" r="3.5" fill="#1B6FBF"/>
          </svg>
          <div className="nav-text">
            <div className="nav-wordmark">cidis</div>
            <div className="nav-sub">Imagerie Diagnostique · Dakar</div>
          </div>
        </a>
        <div className="nav-links">
          <a href="#accueil">Accueil</a>
          <a href="#services">Services</a>
          <a href="#irm">Notre IRM</a>
          <a href="#equipe">Équipe</a>
          <a href="#contact">Contact</a>
          <a href="tel:338212150" className="nav-cta">Prendre RDV</a>
        </div>
        <div className="mobile-nav">
          <div className="mobile-nav-links">
            <button className="mobile-menu-close" onClick={closeMenu} aria-label="Fermer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
            <a href="#accueil" onClick={closeMenu}>Accueil</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#irm" onClick={closeMenu}>Notre IRM</a>
            <a href="#equipe" onClick={closeMenu}>Équipe</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a href="tel:338212150" className="nav-cta" onClick={closeMenu}>Prendre RDV</a>
          </div>
        </div>
        <button className="hamburger-menu" onClick={toggleMenu} aria-label="Menu">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M4 8h20M4 14h20M4 20h20" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
      {menuOpen && <div className="mobile-overlay" onClick={closeMenu}></div>}
    </nav>
  );
};

export default Navbar;
