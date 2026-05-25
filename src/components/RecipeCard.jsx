import React from 'react';

export default function RecipeCard({ recipe }) {
  return (
    <article className="recipe-card group relative bg-white rounded-2xl overflow-hidden shadow-xl border border-surface-container hover:shadow-2xl transition-all">
      <div className="relative h-72 overflow-hidden">
        <img alt={recipe.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={recipe.image} />
        <div className="absolute inset-0 bg-black/40 translate-y-full group-hover:translate-y-0 transition-transform duration-500 flex items-center justify-center">
          <button className="px-6 py-2 bg-white text-primary rounded-full font-label-lg hover:scale-110 transition-transform">View Recipe</button>
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-display text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">{recipe.title}</h3>
        <div className="flex gap-3">
          {recipe.tags.map((tag, index) => {
            const colorClass = tag.color === 'primary' 
              ? 'bg-primary/10 text-primary' 
              : 'bg-secondary/10 text-secondary';
              
            return (
              <span key={index} className={`px-3 py-1 rounded-full ${colorClass} font-label-md flex items-center gap-1`}>
                <span className="material-symbols-outlined text-sm">{tag.icon}</span> {tag.label}
              </span>
            );
          })}
        </div>
      </div>
    </article>
  );
}
