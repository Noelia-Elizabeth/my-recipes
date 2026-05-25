import React from 'react';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass">
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        <a className="font-display text-4xl font-extrabold text-primary tracking-tighter hover:scale-105 transition-transform" href="#">My Recipes</a>
        <nav className="hidden md:flex gap-gutter font-label-lg text-label-lg">
          <a className="relative text-primary font-bold group" href="#">
            Explore
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-100 transition-transform origin-left"></span>
          </a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-all group relative" href="#">
            Categories
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-all group relative" href="#">
            Saved
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-all group relative" href="#">
            Meal Planner
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
          </a>
        </nav>
        <div className="flex items-center gap-unit">
          <button className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all active:scale-95 shadow-sm">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
}
