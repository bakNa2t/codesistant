"use client";

import { Poppins } from "next/font/google";
import { SparkleIcon } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator";

import { Kbd } from "@/components/ui/kbd";
import { Button } from "@/components/ui/button";
import { ProjectsList } from "./projects-list";

import { cn } from "@/lib/utils";
import { useCreateProject } from "../hooks/use-projects";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const ProjectsView = () => {
  const createProject = useCreateProject();

  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-sidebar p-6 md:p-16">
      <div className="flex flex-col w-full items-center max-w-sm mx-auto gap-4">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex items-center gap-2 w-full group/logo">
            <img
              src="/vercel.svg"
              alt="Codesistant"
              className="size-8 md:size-11.5"
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
              onClick={() => {
                const projectName = uniqueNamesGenerator({
                  dictionaries: [adjectives, colors, animals],
                  separator: "-",
                  length: 3,
                });

                createProject({
                  name: projectName,
                });
              }}
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

            <Button
              variant="outline"
              onClick={() => {}}
              className="flex flex-col items-start justify-start gap-6 h-full p-4 bg-background border rounded-none"
            >
              <div className="flex items-center justify-between w-full">
                <FaGithub className="size-4" />
                <Kbd className="border bg-accent">ctrl+I</Kbd>
              </div>

              <div>
                <span className="text-sm">Import</span>
              </div>
            </Button>
          </div>

          <ProjectsList onViewAll={() => {}} />
        </div>
      </div>
    </div>
  );
};
