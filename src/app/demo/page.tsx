"use client";

import DemoHero from "@/components/demo/DemoHero";
import DemoMain from "@/components/demo/DemoMain";
import NavBarDemo from "@/components/demo/nav-bar";
import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

const BillingPage = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main>
        <NavBarDemo />
        <div className="h-full bg-gradient-to-b from-primary/15 to-transparent">
          <DemoMain />
        </div>
        <DemoHero />
      </main>
    </ReactLenis>
  );
};

export default BillingPage;
