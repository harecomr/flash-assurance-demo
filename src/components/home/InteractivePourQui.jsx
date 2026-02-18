import { Users, User, Building2, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';
import {homeContent, serviceDetailsData} from '../../data/homeData';
import { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

const InteractivePourQui = ({ onNavigate }) => {
  // Onglet Principal: 'particulier' ou 'pro'
  const [activeTab, setActiveTab] = useState('particulier');
  // Service Sélectionné (ex: 'sante_pro') - Null par défaut
  const [selectedServiceId, setSelectedServiceId] = useState(null);

  // Quand on change d'onglet, on reset la sélection
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedServiceId(null);
  };

  // Liste des cartes à afficher en bas (dépend de l'onglet)
  const currentCards = homeContent[activeTab].services;

  return (
    <section className="w-full py-16 !bg-slate-50 !border-y !border-slate-200" id="pour-qui">
      <div className="container mx-auto px-4">

        {/* --- ZONE D'INFORMATION (2 Colonnes) --- */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start animate-fade-in">

          {/* COLONNE GAUCHE : SÉLECTEUR OU LISTE "POUR QUI" */}
          <div className="!bg-white p-8 rounded-2xl shadow-sm !border !border-slate-100 h-full flex flex-col">

            {!selectedServiceId ? (
              // ETAT PAR DEFAUT : AFFICHAGE DES BOUTONS DE SELECTION
              <>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="!bg-orange-100 p-2 rounded-lg text-orange-600">
                    <Users className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Pour qui ?</h2>
                </div>
                <p className="text-slate-600 mb-8">Sélectionnez votre profil pour découvrir nos solutions adaptées :</p>
                <div className="grid grid-cols-2 gap-4 mt-auto">
                  <button
                    onClick={() => handleTabChange('particulier')}
                    className={`
                      p-6 rounded-2xl !border-2 transition-all duration-300 text-center flex flex-col items-center group
                      ${activeTab === 'particulier'
                        ? '!border-orange-500 !bg-white shadow-xl ring-4 ring-orange-500/10'
                        : '!border-slate-200 !bg-white hover:!border-orange-300 hover:shadow-md'
                      }
                    `}
                  >
                    <div className={`
                      w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors
                      ${activeTab === 'particulier' ? '!bg-orange-500 text-white' : '!bg-slate-100 text-slate-500 group-hover:!bg-orange-100 group-hover:text-orange-600'}
                    `}>
                      <User className="w-7 h-7" />
                    </div>
                    <span className={`font-bold ${activeTab === 'particulier' ? 'text-orange-600' : 'text-slate-700'}`}>Particuliers</span>
                  </button>

                  <button
                    onClick={() => handleTabChange('pro')}
                    className={`
                      p-6 rounded-2xl !border-2 transition-all duration-300 text-center flex flex-col items-center group
                      ${activeTab === 'pro'
                        ? '!border-orange-500 !bg-white shadow-xl ring-4 ring-orange-500/10'
                        : '!border-slate-200 !bg-white hover:!border-orange-300 hover:shadow-md'
                      }
                    `}
                  >
                    <div className={`
                      w-14 h-14 rounded-full flex items-center justify-center mb-4 transition-colors
                      ${activeTab === 'pro' ? '!bg-orange-500 text-white' : '!bg-slate-100 text-slate-500 group-hover:!bg-orange-100 group-hover:text-orange-600'}
                    `}>
                      <Building2 className="w-7 h-7" />
                    </div>
                    <span className={`font-bold ${activeTab === 'pro' ? 'text-orange-600' : 'text-slate-700'}`}>Professionnels</span>
                  </button>
                </div>
              </>
            ) : (
              // ETAT DETAILLE : AFFICHAGE DE LA LISTE "POUR QUI" DU SERVICE
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 text-orange-500 mr-3" />
                  Pour qui ?
                </h3>
                <ul className="space-y-4">
                  {serviceDetailsData[selectedServiceId].pourQui.map((item, i) => (
                    <li key={i} className="flex items-start animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                      <div className="w-1.5 h-1.5 rounded-full !bg-orange-500 mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* COLONNE DROITE : INFO GENE OU SOLUTIONS + CTA */}
          <div className="!bg-white p-8 rounded-2xl shadow-sm !border !border-slate-100 h-full flex flex-col">

            {!selectedServiceId ? (
              // ETAT PAR DEFAUT : LISTE GENERIQUE
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <ShieldCheck className="w-6 h-6 text-orange-500 mr-3" />
                  {homeContent.all.pourquoiTitle}
                </h3>
                <ul className="space-y-4">
                  {homeContent.all.pourquoiList.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              // ETAT DETAILLE : SOLUTIONS SPECIFIQUES + CTA
              <>
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                  <ShieldCheck className="w-6 h-6 text-orange-500 mr-3" />
                  Nos solutions
                </h3>
                <ul className="space-y-4 mb-8">
                  {serviceDetailsData[selectedServiceId].solutions.map((item, i) => (
                    <li key={i} className="flex items-start animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA BOX - EXACT STYLE AS REQUESTED */}
                <div className="mt-auto pt-6 !border-t !border-slate-100 animate-fade-in">
                  <div className="!bg-slate-50/80 p-6 rounded-xl text-center shadow-inner">
                    <h4 className="font-bold text-slate-900 text-lg mb-2">Besoin d'un devis ?</h4>
                    <p className="text-sm text-slate-500 mb-6 max-w-xs mx-auto">
                      Contactez-nous pour obtenir une étude personnalisée et un devis adapté à vos besoins.
                    </p>
                    <Button
                      text="Demandez un devis"
                      variant="primary"
                      className="w-full justify-center py-3 text-base shadow-orange-500/20"
                      icon={ArrowRight}
                      onClick={() => onNavigate('contact')}
                    />
                    <button
                      onClick={() => setSelectedServiceId(null)}
                      className="mt-4 text-sm text-slate-400 hover:text-orange-600 hover:underline transition-colors block w-full"
                    >
                      Retour à la vue d'ensemble
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* --- 3. GRILLE DE CARTES SÉLECTIONNABLES --- */}
        <div>
          <h4 className="text-center text-lg font-bold text-slate-900 mb-8 opacity-60 uppercase tracking-widest text-xs">
            Sélectionnez un besoin pour voir les détails
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {currentCards.map((service, index) => (
              <button
                key={index}
                onClick={() => setSelectedServiceId(service.id)}
                className={`
                  p-6 rounded-xl !border-2 transition-all duration-200 flex flex-col items-center text-center
                  ${selectedServiceId === service.id
                    ? '!border-orange-500 !bg-orange-50 shadow-md transform scale-105 ring-2 ring-orange-500/20'
                    : '!bg-white !border-slate-100 hover:!border-orange-300 hover:shadow-lg hover:-translate-y-1'
                  }
                `}
              >
                <service.icon className={`w-10 h-10 mb-4 ${selectedServiceId === service.id ? 'text-orange-600' : 'text-slate-400'}`} />
                <span className={`font-bold ${selectedServiceId === service.id ? 'text-orange-700' : 'text-slate-700'}`}>
                  {service.title}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InteractivePourQui;

