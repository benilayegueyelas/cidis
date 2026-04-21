import React, { useRef } from 'react';
import useRevealOnScroll from '../hooks/useRevealOnScroll';

const OpeningHours = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  const hours = [
    { day: "Lundi", time: "08h30 – 17h00" },
    { day: "Mardi", time: "08h30 – 17h00" },
    { day: "Mercredi", time: "08h30 – 17h00" },
    { day: "Jeudi", time: "08h30 – 17h00" },
    { day: "Vendredi", time: "08h30 – 17h00" },
    { day: "Samedi", time: "08h30 – 13h00", today: true },
    { day: "Dimanche (urgences)", time: "33 821 21 50" },
  ];

  return (
    <section className="horaires-section" ref={sectionRef}>
      <div className="horaires-inner">
        <div className="reveal-left">
          <div className="horaires-title">Heures d'ouverture</div>
          <div className="horaires-sub" style={{ marginBottom: '28px' }}>Urgences disponibles 24h/24, 7j/7</div>
          <a href="tel:338212150" className="btn-white">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 2h3l1.5 3.5-1.5 1C7 8.5 7.5 9 9.5 10.5l1-1.5L14 10.5V13.5A1 1 0 0 1 13 14.5C6.5 14 1.5 8.5 1.5 3A1 1 0 0 1 3 2Z" stroke="#1B6FBF" strokeWidth="1.3" />
            </svg>
            Appeler le 33 821 21 50
          </a>
        </div>
        <div className="reveal-right">
          <div className="horaires-table">
            {hours.map((h, i) => (
              <div key={i} className={`horaires-row ${h.today ? 'horaires-today' : ''}`}>
                <span className="horaires-day">{h.day}</span>
                <span className="horaires-time">{h.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpeningHours;
