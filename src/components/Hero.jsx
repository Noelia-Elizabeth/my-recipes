import React, { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroImg = document.querySelector('.hero-float');
      if (heroImg) {
        heroImg.style.transform = `translateY(${scrolled * 0.4}px) scale(1.05)`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Vibrant kitchen ingredients" className="w-full h-full object-cover hero-float" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA07bQiEf7izJSO9ASQTkeDtb0HJ8Zc3Rz6lyyL68YX3WjzyqnMCSX9fqKVNdeiOQvBejqrIARmX68TzVZYYHzccGQ91RcUq7n_xrp2o-fI2TznB3QSRMJvaX6PZCGS9VuHWFgNsG6iiWl0wZdvRjD90yZoQtSVSMM5IfLUfEjYhqkSKLUEhFBM5IwJjnYXL7yyW7TVdIvSg0aiWGO146d-JegsvKRtZoQuHGhKhJocae-pnfGuQAQ3GDa6h1reXmR2fZcNWxbRcd8" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background/100"></div>
      </div>
      <div className="relative z-10 text-center px-4 max-w-4xl w-full">
        <h1 className="text-shimmer font-display text-5xl md:text-7xl font-extrabold mb-8 drop-shadow-2xl leading-[1.1]">Find Your Next<br />Craving</h1>
        <div className="relative w-full max-w-2xl mx-auto group">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex items-center">
            <input className="w-full py-6 pl-8 pr-16 rounded-full glass text-on-surface font-body-lg text-lg border-0 focus:ring-2 focus:ring-primary shadow-2xl placeholder-on-surface/50" placeholder="Search curated recipes, ingredients..." type="text" />
            <button className="absolute right-4 w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:scale-110 transition-all active:scale-90 shadow-lg">
              <span className="material-symbols-outlined text-[28px]">search</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
