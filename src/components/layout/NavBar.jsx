import { Shield, Menu, X } from 'lucide-react';
import NavItem from './NavItem';
import { useState } from 'react';


const Navbar = ({ onNavigate, currentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleNavClick = (pageId) => {
    onNavigate(pageId);
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <nav className="w-full !bg-white !border-b !border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">

          <div className="flex items-center space-x-2 cursor-pointer z-50" onClick={() => handleNavClick('home')}>
            <Shield className="w-8 h-8 text-orange-500 fill-current" />
            <span className="text-2xl font-bold text-slate-900 tracking-tight">
              Flash<span className="text-orange-500">Assurance</span>
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <NavItem title="Accueil" onClick={() => handleNavClick('home')} active={currentSection === 'home'} />

            <div className="relative group">
              <NavItem title="Particuliers" hasDropdown isOpen={activeDropdown === 'particuliers'} onClick={() => toggleDropdown('particuliers')} />
              {activeDropdown === 'particuliers' && (
                <div className="absolute top-full left-0 mt-2 w-56 !bg-white rounded-xl shadow-xl py-2 !border !border-gray-100 flex flex-col animate-fade-in">
                  {['Auto', 'Habitation', 'Santé', 'Prévoyance'].map(key => (
                    <button key={key} className="text-left px-6 py-2 hover:!bg-orange-50 hover:text-orange-600 text-sm text-slate-700 transition-colors">
                      Assurance {key}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="relative group">
              <NavItem title="Entreprises" hasDropdown isOpen={activeDropdown === 'pro'} onClick={() => toggleDropdown('pro')} />
              {activeDropdown === 'pro' && (
                <div className="absolute top-full left-0 mt-2 w-56 !bg-white rounded-xl shadow-xl py-2 !border !border-gray-100 flex flex-col animate-fade-in">
                  {['RC Pro', 'Décennale', 'Flotte', 'Multirisque'].map(key => (
                    <button key={key} className="text-left px-6 py-2 hover:!bg-orange-50 hover:text-orange-600 text-sm text-slate-700 transition-colors">
                      {key}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <NavItem title="À propos" onClick={() => handleNavClick('about')} active={currentSection === 'about'} />
            <NavItem title="Contact" onClick={() => handleNavClick('contact')} active={currentSection === 'contact'} />

            <div className="ml-4 pl-4 !border-l !border-gray-200">
              <button className="!bg-slate-900 text-white px-5 py-2.5 rounded-lg hover:!bg-orange-500 transition font-medium text-sm shadow-md">
                Espace Client
              </button>
            </div>
          </div>

          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-slate-600 hover:!bg-slate-100 rounded-md">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-20 !bg-white z-40 overflow-y-auto !border-t !border-gray-100 p-4 space-y-2">
          <NavItem title="Accueil" onClick={() => handleNavClick('home')} />
          <div className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">Particuliers</div>
          <button className="block w-full text-left px-4 py-2 text-slate-600">Auto</button>
          <button className="block w-full text-left px-4 py-2 text-slate-600">Habitation</button>
          <div className="px-4 text-xs font-bold text-slate-400 uppercase tracking-wider mt-4 mb-2">Entreprises</div>
          <button className="block w-full text-left px-4 py-2 text-slate-600">RC Pro</button>
          <button className="block w-full text-left px-4 py-2 text-slate-600">Décennale</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;