"use client";

import { Poppins } from "next/font/google";
import { SparkleIcon } from "lucide-react";

import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Kbd } from "@/components/ui/kbd";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ProjectsView = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-sidebar p-6 md:p-16">
      <div className="flex flex-col w-full items-center max-w-sm mx-auto gap-4">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-2 w-full group/logo">
            <img
              src="/vercel.svg"
              alt="Codesistant"
              className="size-[32px] md:size-[46px]"
            />
            <h1
              className={cn(
                "text-4xl md:text-5xl font-semibold",
                font.className,
              )}
            >
              Codesistant
            </h1>
          </div>
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="grid grid-cols-2 gap-2">
            <Button
              variant="outline"
              onClick={() => {}}
              className="flex flex-col items-start justify-start gap-6 h-full p-4 bg-background border rounded-none"
            >
              <div className="flex items-center justify-between w-full">
                <SparkleIcon className="size-4" />
                <Kbd className="border bg-accent">ctrl+J</Kbd>
              </div>

              <div>
                <span className="text-sm">New</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
