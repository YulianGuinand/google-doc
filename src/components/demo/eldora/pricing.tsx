"use client";

import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { motion } from "framer-motion";
import { Loader } from "lucide-react";
import { useState } from "react";

type Interval = "month" | "year";

export function toHumanPrice(price: number, decimals: number = 2) {
  return Number(price / 100).toFixed(decimals);
}
const demoPrices = [
  {
    id: "price_1",
    name: "Starter",
    description: "Idéal pour : Les étudiants, indépendants, usage individuel",
    features: [
      "Création de documents illimitée",
      "Édition de texte enrichi (mise en page, images)",
      "Écriture de code avec coloration syntaxique dans 5 langages",
      "Accès aux outils basiques de l'IA",
    ],
    monthlyPrice: 999,
    yearlyPrice: 11799,
    isMostPopular: false,
  },
  {
    id: "price_5",
    name: "Custom (Token-based)",
    description: "Idéal pour : Utilisateurs avec des besoins spécifiques",
    features: [
      "Paiement en fonction de l’usage (stockage, collaboration, API...)",
      "Accès à des fonctionnalités avancées à la demande",
      "Support premium dédié",
      "Accès à 10 langues custom",
      "Accès prioritaire aux nouvelles fonctionnalités et mises à jour exclusives",
    ],
    monthlyPrice: null,
    yearlyPrice: null,
    isMostPopular: true,
  },
  {
    id: "price_2",
    name: "Premium",
    description: "Idéal pour : Les équipes, startups, entreprises",
    features: [
      "Collaboration en temps réel (modifications synchronisées)",
      "Commentaires et suivi des modifications",
      "Stockage cloud étendu",
      "Accès à tous les outils de l'IA",
    ],
    monthlyPrice: 1999,
    yearlyPrice: 22799,
    isMostPopular: false,
  },
];

export function PricingSection() {
  const [interval, setInterval] = useState<Interval>("month");
  const [isLoading, setIsLoading] = useState(false);
  const [id, setId] = useState<string | null>(null);

  const onSubscribeClick = async (priceId: string) => {
    setIsLoading(true);
    setId(priceId);
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
    setIsLoading(false);
  };

  return (
    <section id="pricing">
      <div className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">
            Pricing
          </h2>
        </div>

        <div className="flex w-full items-center justify-center space-x-2">
          <Switch
            id="interval"
            onCheckedChange={(checked) => {
              setInterval(checked ? "year" : "month");
            }}
          />
          <span className="text-black dark:text-white">Annual</span>
          <span className="inline-block whitespace-nowrap rounded-full bg-black px-2.5 py-1 text-[11px] font-semibold uppercase leading-5 tracking-wide text-white dark:bg-white dark:text-black">
            7 DAYS FREE ✨
          </span>
        </div>

        <div className="mx-auto grid w-full flex-col justify-center gap-4 sm:grid-cols-1 lg:grid-cols-3">
          {demoPrices.map((price, idx) => (
            <div
              key={price.id}
              className={cn(
                "relative flex max-w-[400px] flex-col gap-8 overflow-hidden rounded-2xl border p-4 text-black dark:text-white",
                {
                  "border-2 border-[var(--color-one)] dark:border-[var(--color-one)]":
                    price.isMostPopular,
                }
              )}
            >
              <div className="flex items-center">
                <div className="ml-4">
                  <h2 className="text-base font-semibold leading-7">
                    {price.name}
                  </h2>
                  <p className="h-12 text-sm leading-5 text-black/70 dark:text-white">
                    {price.description}
                  </p>
                </div>
              </div>

              <motion.div
                key={`${price.id}-${interval}`}
                initial="initial"
                animate="animate"
                variants={{
                  initial: {
                    opacity: 0,
                    y: 12,
                  },
                  animate: {
                    opacity: 1,
                    y: 0,
                  },
                }}
                transition={{
                  duration: 0.4,
                  delay: 0.1 + idx * 0.05,
                  ease: [0.21, 0.47, 0.32, 0.98],
                }}
                className="flex flex-row gap-1"
              >
                <span className="text-4xl font-bold text-black dark:text-white">
                  $
                  {interval === "year"
                    ? price.yearlyPrice
                      ? toHumanPrice(price.yearlyPrice, 2)
                      : "Adapté"
                    : price.monthlyPrice
                      ? toHumanPrice(price.monthlyPrice, 2)
                      : "Adapté"}
                  <span className="text-xs"> /{interval}</span>
                </span>
              </motion.div>

              <Button
                className={cn(
                  "group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
                )}
                disabled={isLoading}
                onClick={() => void onSubscribeClick(price.id)}
              >
                <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
                {(!isLoading || (isLoading && id !== price.id)) && (
                  <p>Subscribe</p>
                )}

                {isLoading && id === price.id && <p>Subscribing</p>}
                {isLoading && id === price.id && (
                  <Loader className="mr-2 size-4 animate-spin" />
                )}
              </Button>

              <hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
              {price.features && price.features.length > 0 && (
                <ul className="flex flex-col gap-2 font-normal">
                  {price.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
                    >
                      <CheckIcon className="size-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
                      <span className="flex">{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
