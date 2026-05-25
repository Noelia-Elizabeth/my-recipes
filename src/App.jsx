import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import RecipeGrid from './components/RecipeGrid';
import Footer from './components/Footer';

function App() {
  return (
    <div className="animated-bg text-on-background font-body-md text-body-md min-h-screen flex flex-col selection:bg-primary/20">
      <Header />
      <main className="flex-grow pt-0">
        <Hero />
        <RecipeGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
