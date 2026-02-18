import React, { useState } from 'react';
import TopBar from './components/layout/TopBar';
import NavBar from './components/layout/NavBar';
import HeroSection from './components/home/HeroSection';
import InteractivePourQui from './components/home/InteractivePOurQui';
import StepSection from './components/home/StepsSection';
import Footer from './components/layout/Footer';
import Button from './components/common/Button';
import { PhoneCall } from 'lucide-react';
import './App.css'

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="w-full min-h-screen !bg-white font-sans text-slate-800 flex flex-col overflow-x-hidden">
      <TopBar />
      <NavBar onNavigate={setCurrentPage} currentSection={currentPage} />
      
      <main className="flex-grow w-full">
        {currentPage === 'home' ? (
          <>
            <HeroSection onNavigate={setCurrentPage} />
            <InteractivePourQui onNavigate={setCurrentPage} />
            <StepSection />
            
            <div className="w-full !bg-white py-20 text-center">
               <div className="container mx-auto px-4">
                 <h2 className="text-3xl font-bold text-slate-900 mb-8">Besoin d'un conseil personnalisé ?</h2>
                 <div className="flex justify-center gap-4">
                   <Button text="Nous contacter" variant="primary" onClick={() => setCurrentPage('contact')} />
                   <Button text="01 82 83 15 96" variant="outline" icon={PhoneCall} />
                 </div>
               </div>
            </div>
          </>
        ) : (
          <div className="py-32 text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">Page {currentPage}</h1>
            <p className="text-slate-500">Contenu à venir...</p>
            <Button text="Retour à l'accueil" variant="secondary" className="mt-8 mx-auto" onClick={() => setCurrentPage('home')} />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;