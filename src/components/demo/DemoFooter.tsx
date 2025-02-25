"use client";

import { gsap } from "gsap";
import Image from "next/image";
import Link from "next/link";
import { BsDiscord, BsGithub, BsTwitterX } from "react-icons/bs";
import SphereAnimation from "./eldora/sphereanimation";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export const DemoFooter = () => {
  const footerNav = useRef(null);
  const footerTrigger = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerNav.current,
      {
        y: "100%",
      },
      {
        scrollTrigger: {
          trigger: footerTrigger.current,
          scrub: true,
          start: "60% 75%",
          end: "center 50%",
        },
        y: 0,
      }
    );

    const items = gsap.utils.toArray(".footer__item");
    console.log(items);

    gsap.fromTo(
      items,
      {
        y: "100%",
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: footerTrigger.current,
          scrub: true,
          start: "60% 65%",
          end: "center 50%",
        },
        stagger: 0.1,
        opacity: 1,
        y: 0,
        delay: 2,
      }
    );
  }, []);

  return (
    <section id="footer" className="w-full h-screen flex flex-col">
      <div
        className="container mx-auto h-full flex items-center justify-end"
        ref={footerTrigger}
      >
        <h2 className="z-10 text-6xl leading-snug">
          <span className="text-primary/90">Créer vos propre Doc</span>
          <br />
          Professionnelles
        </h2>
        <div className="absolute top-0 left-32">
          <SphereAnimation />
        </div>
      </div>

      <div
        className="w-full min-h-[330px] bg-white border-t absolute bottom-0 left-0"
        ref={footerNav}
      >
        <div className="container mx-auto h-[200px] mt-10 flex relative">
          <div className="max-w-[400px] h-full flex flex-col items-start justify-between">
            <div className="w-full flex items-start justify-start">
              <Link href="/" className="flex items-center gap-2">
                <Image src="/logo.svg" alt="logo svg" width={72} height={72} />
                <h3 className="text-2xl">Docs</h3>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam delectus quos ipsum aut nulla quod perspiciatis. Minus
              error possimus, nihil similique optio autem unde numquam alias,
              eaque pariatur non rerum.
            </p>

            <div className="w-[180px] flex items-center justify-between">
              <Link href={"#"}>
                <BsGithub className="size-6" />
              </Link>
              <Link href={"#"}>
                <BsTwitterX className="size-6" />
              </Link>
              <Link href={"#"}>
                <BsDiscord className="size-6" />
              </Link>
            </div>
          </div>

          <div className="flex w-full items-start justify-evenly">
            <ul className="footer__item flex flex-col h-full items-center gap-4">
              <li className="font-bold">Home</li>
              <li className="text-muted-foreground">Code</li>
              <li className="text-muted-foreground">Features</li>
              <li className="text-muted-foreground">Benefits</li>
              <li className="text-muted-foreground">Pricing</li>
            </ul>
            <ul className="footer__item flex flex-col h-full items-center gap-4">
              <li className="font-bold">Company</li>
              <li className="text-muted-foreground">Help center</li>
              <li className="text-muted-foreground">FAQ</li>
              <li className="text-muted-foreground">About us</li>
              <li className="text-muted-foreground">Careers</li>
              <li className="text-muted-foreground">Blog</li>
            </ul>
            <ul className="footer__item flex flex-col h-full items-center gap-4">
              <li className="font-bold">Products</li>
              <li className="text-muted-foreground">API</li>
              <li className="text-muted-foreground">Training</li>
              <li className="text-muted-foreground">Security</li>
              <li className="text-muted-foreground">Term & conditions</li>
              <li className="text-muted-foreground">Privacy</li>
            </ul>
            <ul className="footer__item flex flex-col h-full items-center gap-4">
              <li className="font-bold">Ressources</li>
              <li className="text-muted-foreground">Codespace</li>
              <li className="text-muted-foreground">Issues</li>
              <li className="text-muted-foreground">Discussions</li>
            </ul>
          </div>

          <div className="absolute left-0 -bottom-20 w-full h-[60px] flex flex-col">
            <div
              className="w-full h-[3px] bg-black after:bg-gradient-to-r after:from-transparent after:to-white after:absolute after:right-0 after:w-[1000px] after:h-[10px]
            before:bg-gradient-to-l before:from-transparent before:to-white before:absolute before:left-0 before:w-[1000px] before:h-[5px] mt-6
            "
            />

            <p className="text-muted-foreground text-xs mt-4">
              Copyright 2025 All rights reserved - Yulian
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
