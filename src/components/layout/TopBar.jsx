import { MapPin, Phone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="w-full !bg-slate-950 text-slate-400 text-xs py-2 !border-b !border-slate-800 hidden md:block">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-6">
           <span className="flex items-center hover:text-white transition cursor-pointer">
             <MapPin className="w-3 h-3 mr-1.5 text-orange-500" />
             23 rue de la Bièvre, 92340 Bourg-la-Reine
           </span>
           <span className="flex items-center hover:text-white transition cursor-pointer">
             <Phone className="w-3 h-3 mr-1.5 text-orange-500" />
             01 82 83 15 96
           </span>
        </div>
        <div className="flex items-center space-x-4">
           <a href="#" className="!text-white over:!text-orange-500 transition">Trouver notre agence</a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;