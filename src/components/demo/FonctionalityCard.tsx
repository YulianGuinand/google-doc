import { LucideIcon } from "lucide-react";
import { useRef } from "react";

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

  const handleMouseMove = (e: React.MouseEvent<Element, MouseEvent>) => {
    if (!cardRef.current || !mouseFollow.current) return;

    const cardRect = cardRef.current.getBoundingClientRect();

    const newTop = e.clientY - cardRect.top;
    const newLeft = e.clientX - cardRect.left;

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

  return (
    <div
      className="bg-white/30 rounded-xl  relative overflow-hidden border border-white"
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={(e) => handleMouseMove(e)}
    >
      <div
        ref={mouseFollow}
        className="size-24 bg-white absolute z-[1] blur-3xl -translate-x-1/2 -translate-y-1/2"
      ></div>
      <div className="card bg-purple-200/15 max-w-[400px]  p-2 rounded-xl text-center z-10 relative">
        <div className="w-full flex justify-center mb-7">
          <div className="p-5 bg-primary/20 rounded-lg border border-white flex items-center justify-center">
            <Icon className="size-10 text-zinc-100" />
          </div>
        </div>

        <h3 className="text-2xl text-zinc-800">{label}</h3>

        <p className="text-lg text-zinc-900 p-4">{description}</p>
      </div>
    </div>
  );
};

export default FonctionalityCard;
