"use client";

import DemoHero from "@/components/demo/DemoHero";
import DemoMain from "@/components/demo/DemoMain";
import DemoTable from "@/components/demo/DemoTable";
import FonctionalityCard from "@/components/demo/FonctionalityCard";
import NavBarDemo from "@/components/demo/nav-bar";
import { ReactLenis } from "@studio-freight/react-lenis";
import {
  Bot,
  Circle,
  CreditCardIcon,
  LucideIcon,
  Monitor,
  ShieldCloseIcon,
  Timer,
  Users2Icon,
} from "lucide-react";

interface FonctionnalitesType {
  label: string;
  description: string;
  icon: LucideIcon;
}

const BillingPage = () => {
  const fonctionnalities: FonctionnalitesType[] = [
    {
      label: "Collaboration en temps réel",
      description:
        "Travaillez simultanément avec votre équipe sur un même document ou code, sans latence.",
      icon: Users2Icon,
    },
    {
      label: "IA intégrée pour le code et le texte",
      description:
        "L’intelligence artificielle vous aide à corriger, compléter et optimiser votre code, tout en proposant des reformulations pour vos textes.",
      icon: Bot,
    },
    {
      label: "Sécurité et confidentialité des données",
      description:
        "Vos données sont chiffrées et restent confidentielles, avec une politique stricte de non-revente.",
      icon: ShieldCloseIcon,
    },
    {
      label: "Multiplateforme et accessibilité",
      description:
        "Accessible depuis n’importe quel appareil connecté à Internet, sans installation nécessaire.",
      icon: Monitor,
    },
    {
      label: "Gestion avancée des versions",
      description:
        "Suivez l’historique de vos modifications et restaurez facilement une version précédente.",
      icon: Timer,
    },
    {
      label: "Tarification flexible",
      description:
        "Choisissez un plan adapté à vos besoins : gratuit, pay-per-use, ou premium illimité.",
      icon: CreditCardIcon,
    },
  ];

  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="relative">
        <NavBarDemo />
        <div className="bg-gradient-to-b from-primary/15 to-transparent z-0 sticky top-0">
          <DemoMain />
        </div>
        <div className="z-10 relative">
          <DemoHero />
        </div>

        <div className="min-h-screen bg-purple-200 w-full relative flex items-center justify-center">
          <div className="grid py-10 lg:py-0 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
            {fonctionnalities.map((fonctionnality, index) => (
              <FonctionalityCard
                key={index}
                label={fonctionnality.label}
                description={fonctionnality.description}
                Icon={fonctionnality.icon}
              />
            ))}
          </div>
        </div>

        <div className="relative h-screen w-full bg-purple-300 flex items-center justify-center">
          <DemoTable />
        </div>
      </main>
    </ReactLenis>
  );
};

export default BillingPage;
