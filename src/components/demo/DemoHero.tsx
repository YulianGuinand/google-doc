"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Card } from "../ui/card";
import DemoLive from "./Live/DemoLive";

export default function DemoHero() {
  const values =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore ex quod doloremque iusto fuga soluta est nulla consequuntur itaque fugiat.";
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.18"],
  });

  const words = values.split(" ");

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-screen w-full flex items-center justify-center bg-gradient-to-b from-transparent to-white">
        <div className="border border-primary/10 p-3 mt-10 rounded-2xl">
          <div className="border border-primary/20 border-b-0 px-1.5 pt-1.5 rounded-xl bg-primary/20">
            <Card className="overflow-hidden">
              <Image
                src="/hero.png"
                height={600}
                width={1200}
                alt="Hero Image"
              />
            </Card>
          </div>
        </div>
      </div>
      <div className="w-full bg-white flex justify-center">
        <p
          ref={element}
          className="text-4xl text-center px-4 max-w-[1000px] flex flex-wrap leading-none text-zinc-800"
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word
                key={i}
                range={[start, end]}
                progress={scrollYProgress}
                word={word}
              />
            );
          })}
        </p>
      </div>
      <div className="h-[100vh] w-full bg-white pt-[68px]">
        <DemoLive />
      </div>
    </div>
  );
}

const Word = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: number[];
  progress: MotionValue<number>;
}) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="ml-3 mt-1 relative">
      <span className="opacity-15 absolute">{word}</span>
      <motion.span style={{ opacity }} className="transition-all duration-500">
        {word}
      </motion.span>
    </span>
  );
};
