"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { ChevronsRightIcon } from "lucide-react";

export default function DemoMain() {
  const mouseFollow = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!mouseFollow.current) return;

      // Dimensions de la fenêtre
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Dimensions de la div
      const divWidth = mouseFollow.current.offsetWidth;
      const divHeight = mouseFollow.current.offsetHeight;

      // Calcul des positions en respectant les limites
      let newTop = e.clientY;
      let newLeft = e.clientX;

      if (newTop + divHeight > screenHeight) {
        newTop = screenHeight - divHeight;
      }
      if (newLeft + divWidth > screenWidth) {
        newLeft = screenWidth - divWidth;
      }

      // Appliquer les nouvelles positions
      mouseFollow.current.style.top = `${newTop}px`;
      mouseFollow.current.style.left = `${newLeft}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="inset-0 h-screen bg-transparent bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_150%)] z-0 overflow-hidden">
      <div className="h-full justify-center items-center flex ">
        <div className="flex flex-col items-center gap-4">
          <p className="border border-primary/20 rounded-full bg-primary/20 px-2 text-white font-light">
            Version 1.0
          </p>
          <h1 className="text-3xl md:text-7xl max-w-[400px] md:max-w-[600px] text-center font-bold text-zinc-600 sm:text-5xl">
            Save time & money on AWS
          </h1>
          <p className="text-center md:text-xl max-w-[400px] text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima,
            eius.
          </p>
          <Button
            className="px-9 flex items-center justify-center"
            variant="default"
            onMouseEnter={() => {}}
          >
            <ChevronsRightIcon className="mr-2" />
            Sign Up
          </Button>
        </div>
      </div>
      <div
        className="size-60 bg-white opacity-60 blur-xl rounded-full absolute -z-40 -translate-x-1/2 -translate-y-1/2 duration-100"
        ref={mouseFollow}
      ></div>
    </div>
  );
}
