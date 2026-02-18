import React from 'react';

const StepSection = () => {
  return (
    <section className="w-full !bg-slate-900 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold mb-4">Votre devis en 3 étapes simples</h2>
          <div className="h-1 w-20 !bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 !bg-slate-700 w-2/3 mx-auto z-0"></div>

          {[
            { id: 1, title: "Expliquez-nous", desc: "Votre situation en ligne ou par téléphone." },
            { id: 2, title: "Nous comparons", desc: "Nous analysons les offres du marché pour vous." },
            { id: 3, title: "Vous choisissez", desc: "La couverture idéale avec votre conseiller." }
          ].map((step) => (
            <div key={step.id} className="relative z-10 flex flex-col items-center text-center group">
              <div className="w-24 h-24 rounded-full !bg-slate-800 !border-4 !border-slate-700 flex items-center justify-center mb-6 group-hover:!border-orange-500 transition-colors duration-300 shadow-xl">
                <span className="text-4xl font-bold text-white group-hover:text-orange-500 transition-colors">{step.id}</span>
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-slate-400 max-w-xs">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepSection;