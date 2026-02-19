import { CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

const HeroSection = ({ onNavigate }) => {
  return (
    <section className="relative w-full !bg-slate-550 text-white py-20 md:py-32 overflow-hidden">
      <div
        className="absolute inset-0 z-0 opacity-40 !bg-cover !bg-center !bg-no-repeat"
        style={{ backgroundImage: "url('${import.meta.env.BASE_URL}BannerBG.png')" }}
      ></div>
      <div className="absolute inset-0 z-0 !bg-gradient-to-r from-slate-600 via-slate-550/90 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Flash Assurance, votre courtier pour <span className="text-orange-500">particuliers</span> et <span className="text-orange-500">entreprises</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-lg leading-relaxed">
            Nous comparons les offres du marché pour trouver les garanties très utiles, au bon niveau de protection, avec un suivi humain dans le temps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              text="Demander un devis gratuit"
              variant="primary"
              onClick={() => onNavigate('contact')}
              className="px-8 py-4 text-lg shadow-orange-500/20"
            />
            <Button
              text="Être rappelé par un conseiller"
              variant="outline"
              className="text-white !border-white/20 hover:!bg-white/10 hover:!border-white px-8 py-4"
              onClick={() => onNavigate('contact')}
            />
          </div>

          <p className="text-sm text-slate-400 flex items-center pt-4">
            <CheckCircle2 className="w-4 h-4 text-orange-500 mr-2" />
            Audit gratuit · Basés à Bourg-la-Reine
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;