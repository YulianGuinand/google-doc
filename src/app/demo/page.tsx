"use client";

import DemoHero from "@/components/demo/DemoHero";
import DemoMain from "@/components/demo/DemoMain";
import { CobeDraggableAuto } from "@/components/demo/eldora/cobeglobeautodraggable";
import { Features } from "@/components/demo/eldora/features";
import { PricingSection } from "@/components/demo/eldora/pricing";
import Threads from "@/components/demo/eldora/thread";
import NavBarDemo from "@/components/demo/nav-bar";
import { TextLoop } from "@/components/ui/text-loop";
import { ReactLenis } from "@studio-freight/react-lenis";
import { Edit2Icon, Share } from "lucide-react";
import { SiGoogledocs } from "react-icons/si";

const BillingPage = () => {
  const data = [
    {
      id: 1,
      title: "1. Créez un Nouveau Document",
      content:
        "Démarrez un nouveau document en un clic et commencez à écrire immédiatement. Invitez des collaborateurs pour travailler ensemble en temps réel.",
      image: "./how1.png",
      icon: <SiGoogledocs className="size-6 text-primary" />,
    },
    {
      id: 2,
      title: "2. Insérez et Éditez du Code",
      content:
        "Ajoutez du code directement dans votre document avec une mise en forme automatique et une coloration syntaxique intégrée pour une meilleure lisibilité.",
      image: "how2.png",
      icon: <Edit2Icon className="size-6 text-primary" />,
    },
    {
      id: 3,
      title: "3. Sauvegardez et Partagez",
      content:
        "Vos modifications sont enregistrées automatiquement. Partagez votre document avec un simple lien ou exportez-le selon vos besoins.",
      image: "how3.png",
      icon: <Share className="size-6 text-primary" />,
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

        <div className="min-h-screen bg-white w-full relative ">
          <div className="h-screen bg-transparent bg-[radial-gradient(#ddd_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_150%)] z-0 overflow-hidden flex items-center justify-center flex-col gap-16">
            <div className="flex flex-col">
              <h2 className="text-3xl">Comment ça marche ?</h2>
            </div>
            <Features data={data} />
          </div>
        </div>

        <div className="relative min-h-screen w-full bg-black flex items-center justify-center overflow-hidden">
          <div className="h-screen w-full bg-transparent bg-[radial-gradient(#555_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_150%)] z-0 overflow-hidden flex items-center justify-center flex-col gap-16">
            <div className="size-full flex items-center justify-center flex-col">
              <h2 className="text-white text-6xl mr-80 z-10">
                Écrivez depuis{" "}
                <TextLoop
                  className=""
                  transition={{
                    type: "spring",
                    stiffness: 900,
                    damping: 80,
                    mass: 10,
                  }}
                  variants={{
                    initial: {
                      y: 20,
                      rotateX: 90,
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                    animate: {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      filter: "blur(0px)",
                    },
                    exit: {
                      y: -20,
                      rotateX: -90,
                      opacity: 0,
                      filter: "blur(4px)",
                    },
                  }}
                >
                  <span>Paris</span>
                  <span>Madrid</span>
                  <span>New York</span>
                  <span>Londres</span>
                  <span>Tokyo</span>
                  <span>Berlin</span>
                  <span>Rome</span>
                  <span>Toronto</span>
                  <span>Sydney</span>
                  <span>Dubai</span>
                  <span>Los Angeles</span>
                  <span>Shanghai</span>
                  <span>Singapour</span>
                  <span>Moscou</span>
                  <span>Mexico</span>
                  <span>São Paulo</span>
                  <span>Bogotá</span>
                  <span>Buenos Aires</span>
                  <span>Jakarta</span>
                  <span>Bangkok</span>
                  <span>Hong Kong</span>
                  <span>Istanbul</span>
                  <span>Vienne</span>
                  <span>Stockholm</span>
                  <span>Bruxelles</span>
                  <span>Amsterdam</span>
                  <span>Lisbonne</span>
                  <span>Athènes</span>
                  <span>Seoul</span>
                  <span>Le Caire</span>
                </TextLoop>
                &nbsp;en temps réel
              </h2>
              <div className="absolute size-full top-0 -right-80 flex">
                <CobeDraggableAuto />
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-screen w-full bg-black dark flex items-center justify-center">
          <div className="absolute bottom-0 left-0 w-full h-full z-0">
            <Threads
              amplitude={5}
              distance={0}
              enableMouseInteraction={false}
            />
          </div>
          <div className="z-10">
            <PricingSection />
          </div>
        </div>
      </main>
    </ReactLenis>
  );
};

export default BillingPage;
