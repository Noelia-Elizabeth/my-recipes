import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import recipesData from '../data/recipes.json';

export default function RecipeGrid() {
  const [recipes, setRecipes] = useState(recipesData);

  useEffect(() => {
    const handleMagneticPulse = (btn) => {
      const mousemove = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px)`;
      };
      const mouseleave = () => {
        btn.style.transform = `translate(0px, 0px)`;
      };
      btn.addEventListener('mousemove', mousemove);
      btn.addEventListener('mouseleave', mouseleave);
      return () => {
        btn.removeEventListener('mousemove', mousemove);
        btn.removeEventListener('mouseleave', mouseleave);
      };
    };

    const cleanupFns = Array.from(document.querySelectorAll('.magnetic-pulse')).map(handleMagneticPulse);
    
    const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    return () => {
      cleanupFns.forEach(fn => fn());
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24">
      {/* Category Filter */}
      <div className="reveal flex flex-wrap gap-4 mb-20 justify-center active">
        <button className="px-8 py-3 rounded-full bg-primary text-white font-label-lg text-label-lg shadow-xl shadow-primary/20 hover:scale-105 transition-transform active:scale-95 magnetic-pulse">All</button>
        <button className="px-8 py-3 rounded-full glass border border-outline-variant text-on-surface font-label-lg text-label-lg hover:bg-secondary hover:text-white hover:scale-105 transition-all active:scale-95">Sweet</button>
        <button className="px-8 py-3 rounded-full glass border border-outline-variant text-on-surface font-label-lg text-label-lg hover:bg-secondary hover:text-white hover:scale-105 transition-all active:scale-95">Savory</button>
        <button className="px-8 py-3 rounded-full glass border border-outline-variant text-on-surface font-label-lg text-label-lg hover:bg-secondary hover:text-white hover:scale-105 transition-all active:scale-95">Quick Meals</button>
        <button className="px-8 py-3 rounded-full glass border border-outline-variant text-on-surface font-label-lg text-label-lg hover:bg-secondary hover:text-white hover:scale-105 transition-all active:scale-95">Desserts</button>
      </div>

      {/* Recipe Grid */}
      <div className="reveal active">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-4xl font-extrabold text-on-surface tracking-tight">Featured Recipes</h2>
          <a className="text-primary font-label-lg hover:underline underline-offset-4" href="#">Browse all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {recipes.map(recipe => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
}
