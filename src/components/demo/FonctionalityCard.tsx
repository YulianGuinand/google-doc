import { LucideIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";

const FonctionalityCard = ({
  label,
  description,
  Icon,
}: {
  label: string;
  description: string;
  Icon: LucideIcon;
}) => {
  const mouseFollow = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current || !mouseFollow.current) return;

      // Récupérer les dimensions et la position de la card
      const cardRect = cardRef.current.getBoundingClientRect();

      // Calculer la position relative de la souris dans la card
      const newTop = e.clientY - cardRect.top;
      const newLeft = e.clientX - cardRect.left;

      // Appliquer les nouvelles positions au follower
      mouseFollow.current.style.top = `${newTop}px`;
      mouseFollow.current.style.left = `${newLeft}px`;
    };

    const handleMouseEnter = () => {
      if (mouseFollow.current) {
        mouseFollow.current.style.display = "block"; // Affiche le follower
      }
    };

    const handleMouseLeave = () => {
      if (mouseFollow.current) {
        mouseFollow.current.style.display = "none"; // Cache le follower
      }
    };

    const card = cardRef.current;
    if (card) {
      card.addEventListener("mousemove", handleMouseMove);
      card.addEventListener("mouseenter", handleMouseEnter);
      card.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener("mousemove", handleMouseMove);
        card.removeEventListener("mouseenter", handleMouseEnter);
        card.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div
      className="bg-primary/20 rounded-xl p-[3px] relative overflow-hidden"
      ref={cardRef}
    >
      <div
        ref={mouseFollow}
        className="size-24 bg-white absolute z-[1] blur-3xl -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div className="card bg-purple-300/10 max-w-[400px] h-[300px] p-2 rounded-xl text-center z-10 relative">
        <div className="w-full flex justify-center mb-7">
          <div className="p-5 bg-primary/20 rounded-lg border border-white flex items-center justify-center">
            <Icon className="size-10 text-zinc-100" />
          </div>
        </div>

        <h3 className="text-2xl text-zinc-800">{label}</h3>

        <p className="text-lg text-zinc-900">{description}</p>
      </div>
    </div>
  );
};

export default FonctionalityCard;
