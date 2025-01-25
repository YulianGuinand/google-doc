"use client";
import React from "react";
import { Button } from "../ui/button";
import { ChevronsRightIcon } from "lucide-react";
import Image from "next/image";
import { Card } from "../ui/card";

export default function DemoMain() {
  return (
    <div className="pt-[300px] inset-0 h-full bg-transparent bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_150%)] z-0">
      <div className="h-full justify-center items-center flex ">
        <div className="flex flex-col items-center gap-4">
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
          <div className="border border-primary/10 p-3 mt-10 rounded-2xl">
            <div className="border border-primary/20 border-b-0 px-1.5 pt-1.5 rounded-xl bg-primary/20">
              <Card className="overflow-hidden">
                <Image
                  src="/hero.png"
                  height={600}
                  width={1500}
                  alt="Hero Image"
                />
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
