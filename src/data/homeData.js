import { Car, Home, Briefcase, Heart, Landmark, ShieldCheck, Clock, Stethoscope, Building2, Scale, Bike} from 'lucide-react';

const serviceDetailsData = {
  // --- PRO ---
  sante_pro: {
    title: "Santé Pro",
    pourQui: ["TPE <10 salariés", "Professions libérales", "Commerçants artisans", "Dirigeants associés"],
    solutions: ["Essentielle", "Famille complète", "Premium dentaire optique"]
  },
  rc_pro: {
    title: "RC Pro",
    pourQui: ["Professions libérales", "Artisans indépendants", "Consultants IT", "Avocats, architectes"],
    solutions: ["Base obligatoire", "Défense recours", "Complète cyber"]
  },
  multirisque_pro: {
    title: "Multirisque Pro",
    pourQui: ["Commerces détail", "Bureaux cabinets", "Ateliers production", "Locaux mixtes"],
    solutions: ["Local simple", "Commerce complet", "Artisanat industriel"]
  },
  prevoyance_pro: {
    title: "Prévoyance Pro",
    pourQui: ["Dirigeants mandataires", "Salariés cadres", "Travailleurs non-salariés", "Professions réglementées"],
    solutions: ["Base arrêt travail", "Invalidité", "Perte autonomie"]
  },
  flotte: {
    title: "Flotte Auto",
    pourQui: ["Entreprises de transport", "Commerciaux itinérants", "Sociétés de services", "Artisans multi-véhicules"],
    solutions: ["Tiers flotte", "Tous risques business", "Assistance panne 0km"]
  },
  decennale: {
    title: "Décennale",
    pourQui: ["Artisans du bâtiment", "Constructeurs", "Architectes", "Maîtres d'œuvre"],
    solutions: ["Gros œuvre", "Second œuvre", "Dommages ouvrage"]
  },

  // --- PARTICULIERS ---
  auto: {
    title: "Assurance Auto",
    pourQui: ["Conducteurs quotidiens", "Jeunes conducteurs", "Propriétaires multi-voitures", "Seniors mobiles"],
    solutions: ["Tiers renforcé", "Tous risques confort", "Premium assistance incluse"]
  },
  moto: {
    title: "2 Roues",
    pourQui: ["Motards urbains", "Scooters quotidiens", "Grand tourisme", "Motos collection"],
    solutions: ["Tiers obligatoire", "Vol + incendie", "Tous risques", "Collection spéciale"]
  },
  habitation: {
    title: "Assurance Habitation",
    pourQui: ["Locataires appartements", "Propriétaires maisons", "Familles enfants", "Non-occupants"],
    solutions: ["Locataire essentiel", "Propriétaire confort", "Tous risques premium"]
  },
  sante: {
    title: "Santé Particulier",
    pourQui: ["Individus seuls", "Couples sans enfants", "Familles monoparentales", "Seniors actifs"],
    solutions: ["Responsable", "Couple", "Famille"]
  },
  emprunteur: {
    title: "Assurance Emprunteur",
    pourQui: ["Acheteurs immobilier", "Rachat crédit", "Prêts consommation", "Délégation bancaire"],
    solutions: ["Emprunteur décès", "Invalidité + incapacité", "Invalidité toutes affections"]
  },
  prevoyance: {
    title: "Prévoyance Particulier",
    pourQui: ["Parents famille", "Professions libérales", "Travailleurs indépendants", "Retraités actifs"],
    solutions: ["Prévoyance base", "Invalidité complète", "Perte autonomie"]
  },
  juridique: {
    title: "Protection Juridique",
    pourQui: ["Propriétaires immobiliers", "Conducteurs réguliers", "Consommateurs actifs", "Familles quotidiennes"],
    solutions: ["Vie privée", "Auto + habitation", "Famille complète"]
  },
  temporaire: {
    title: "Temporaire",
    pourQui: ["Déplacements courts", "Location véhicules", "Couverture ponctuelle", "Événements spéciaux"],
    solutions: ["1 jour", "7 jours", "30 jours", "90 jours"]
  }
};

const homeContent = {
  // Contenu par défaut (Générique)
  all: {
    pourquoiTitle: "Pourquoi passer par un courtier plutôt qu'un assureur ?",
    pourquoiList: [
      "Vous gagnez du temps : Nous analysons vos besoins.",
      "Vous gagnez en clarté : Explications simples des garanties.",
      "Vous optimisez votre budget : Audit gratuit au juste prix.",
      "Vous n'êtes pas seul : Accompagnement sinistre complet."
    ]
  },
  // Liste des cartes à afficher pour chaque onglet
  particulier: {
    services: [
      { id: 'auto', title: "Auto", icon: Car },
      { id: 'moto', title: "2 Roues", icon: Bike }, // Changement icône
      { id: 'habitation', title: "Habitation", icon: Home },
      { id: 'emprunteur', title: "Emprunteur", icon: Landmark },
      { id: 'sante', title: "Santé", icon: Heart },
      { id: 'prevoyance', title: "Prévoyance", icon: ShieldCheck },
      { id: 'juridique', title: "Protection Juridique", icon: Scale },
      { id: 'temporaire', title: "Temporaire", icon: Clock }
    ]
  },
  pro: {
    services: [
      { id: 'rc_pro', title: "RC Pro", icon: Briefcase, isPro: true },
      { id: 'sante_pro', title: "Santé Pro", icon: Stethoscope, isPro: true },
      { id: 'multirisque_pro', title: "Multirisque Pro", icon: Building2, isPro: true },
      { id: 'prevoyance_pro', title: "Prévoyance Pro", icon: ShieldCheck, isPro: true },
      { id: 'decennale', title: "Décennale", icon: Home, isPro: true },
      { id: 'flotte', title: "Flotte Auto", icon: Car, isPro: true },
    ]
  }
};

export { serviceDetailsData, homeContent };
