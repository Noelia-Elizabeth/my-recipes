import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full mt-auto glass border-t border-outline-variant">
      <div className="flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-12 gap-gutter max-w-container-max mx-auto w-full">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="font-display text-2xl font-bold text-primary">My Recipes</span>
          <span className="font-body-md text-sm text-secondary/70">© 2024 My Recipes Portfolio.</span>
        </div>
        <div className="flex flex-wrap gap-8 font-label-md text-on-surface/70">
          <a className="hover:text-primary transition-colors" href="#">About</a>
          <a className="hover:text-primary transition-colors" href="#">Privacy</a>
          <a className="hover:text-primary transition-colors" href="#">Contact</a>
          <a className="hover:text-primary transition-colors" href="#">Terms</a>
        </div>
        <span className="font-body-md text-sm text-secondary/70">© 2024 My Recipes Portfolio.</span>
      </div>
    </footer>
  );
}
