"use client";

import DemoHero from "@/components/demo/DemoHero";
import DemoMain from "@/components/demo/DemoMain";
import NavBarDemo from "@/components/demo/nav-bar";
import { ReactLenis } from "@studio-freight/react-lenis";

const BillingPage = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <main className="relative h-[300vh]">
        <NavBarDemo />
        <div className="bg-gradient-to-b from-primary/15 to-transparent z-0 sticky top-0">
          <DemoMain />
        </div>
        <div className="z-10 relative">
          <DemoHero />
        </div>
      </main>
    </ReactLenis>
  );
};

export default BillingPage;
