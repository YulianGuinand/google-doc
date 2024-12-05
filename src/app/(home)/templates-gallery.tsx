"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const templates = [
  { id: "blank", label: "Blank Document", imageUrl: "/blank-document.svg" },
  {
    id: "business letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
  },
  {
    id: "cover letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
  },
  { id: "letter", label: "Letter", imageUrl: "/letter.svg" },
  {
    id: "project proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
  },
  { id: "resume", label: "Resume", imageUrl: "/resume.svg" },
  {
    id: "software proposal",
    label: "Software Proposal",
    imageUrl: "/software-proposal.svg",
  },
];

export const TemplatesGallery = () => {
  const isCreated = false;

  return (
    <div className="bg-[#F1F3F4]">
      <div className="max-w-screen-xl mx-auto px-16 py-6 flex flex-col gap-y-4">
        <h3 className="font-medium">Start a new document</h3>
        <Carousel>
          <CarouselContent className="-ml-4">
            {templates.map((template) => {
              return (
                <CarouselItem
                  key={template.id}
                  className="basis-1/2 sm:basis-1/3 lmd:basis-1/4 lg:basis-1/5 xl:basis-1/6 2xl:basis-[14.285714%] pl-4"
                >
                  <div
                    className={cn(
                      "aspect-[3/4] flex flex-col gap-y-2.5",
                      isCreated && "pointer-events-none opacity-50"
                    )}
                  >
                    <button
                      disabled={isCreated}
                      onClick={() => {}}
                      style={{
                        backgroundImage: `url(${template.imageUrl})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                      }}
                      className="size-full hover:border-primary rounded-sm border hover:bg-purple-50 transition flex flex-col items-center justify-center gap-y-4 bg-white"
                    />
                    <p className="text-sm font-medium truncate">
                      {template.label}
                    </p>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};
