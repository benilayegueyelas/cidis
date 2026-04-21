import { useEffect } from 'react';

const useRevealOnScroll = (ref) => {
  useEffect(() => {
    const revealEls = ref.current.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealEls.forEach(el => obs.observe(el));

    return () => {
      revealEls.forEach(el => obs.unobserve(el));
    };
  }, [ref]);
};

export default useRevealOnScroll;
