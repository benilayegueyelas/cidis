import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const s = window.scrollY;
      const maxS = window.innerHeight;
      const p = Math.min(s / maxS, 1);
      
      if (videoRef.current) {
        videoRef.current.style.transform = `scale(${1 + p * 0.08}) translateY(${p * 30}px)`;
        videoRef.current.style.filter = `brightness(${1 - p * 0.4}) saturate(${1 - p * 0.3})`;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Trigger animations
    const revealEls = heroRef.current.querySelectorAll('.reveal');
    revealEls.forEach((el, i) => {
      setTimeout(() => el.classList.add('active'), 100 + i * 120);
    });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="accueil" ref={heroRef}>
      <div className="hero-video-wrap">
        <video 
          ref={videoRef}
          autoPlay 
          muted 
          loop 
          playsInline 
          id="hero-video"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-overlay-bottom"></div>
      <div className="hero-content">
        <div className="hero-badge reveal">
          <span className="pulse-dot"></span>
          Centre d'Excellence — Dakar, Sénégal
        </div>
        <h1 className="reveal" style={{ transitionDelay: '0.1s' }}>
          L'imagerie médicale<br /><em>de précision</em><br />à votre service
        </h1>
        <p className="hero-desc reveal" style={{ transitionDelay: '0.2s' }}>
          Équipé des technologies Siemens les plus avancées — IRM, Scanner, Échographie — avec une équipe de radiologues spécialisés pour un diagnostic fiable et rapide.
        </p>
        <div className="hero-actions reveal" style={{ transitionDelay: '0.3s' }}>
          <a href="tel:338212150" className="btn-primary">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 2h3l1.5 3.5-1.5 1C7 8.5 7.5 9 9.5 10.5l1-1.5L14 10.5V13.5A1 1 0 0 1 13 14.5C6.5 14 1.5 8.5 1.5 3A1 1 0 0 1 3 2Z" stroke="white" strokeWidth="1.3" />
            </svg>
            Prendre rendez-vous
          </a>
          <a href="#services" className="btn-outline-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="6.5" stroke="white" strokeWidth="1.3" />
              <path d="M8 5v3l2 2" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
            </svg>
            Découvrir nos services
          </a>
        </div>
        <div className="hero-stats reveal" style={{ transitionDelay: '0.4s' }}>
          <div className="hstat">
            <div className="hstat-num">5</div>
            <div className="hstat-label">Radiologues experts</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">4+</div>
            <div className="hstat-label">Modalités d'imagerie</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">24h</div>
            <div className="hstat-label">Urgences permanentes</div>
          </div>
          <div className="hstat">
            <div className="hstat-num">2016</div>
            <div className="hstat-label">Année de restructuration</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
