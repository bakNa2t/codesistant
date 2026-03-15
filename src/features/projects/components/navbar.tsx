import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { cn } from "@/lib/utils";
import { Id } from "../../../../convex/_generated/dataModel";

const font = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const Navbar = ({ projectId }: { projectId: Id<"projects"> }) => {
  return (
    <nav className="flex justify-between items-center gap-x-2 p-2 bg-sidebar border-b">
      <div className="flex items-center gap-x-2">
        <Breadcrumb>
          <BreadcrumbList className="gap-0!">
            <BreadcrumbItem>
              <BreadcrumbLink asChild className="flex items-center gap-1.5">
                <Button asChild variant="ghost" className="w-full! p-1.5! h-7!">
                  <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={20} height={20} />
                    <span className={cn("text-xs font-medium", font.className)}>
                      Codesistant
                    </span>
                  </Link>
                </Button>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator className="ml0-1! mr-1" />

            <BreadcrumbItem>
              <BreadcrumbPage className="max-w-40 text-sm cursor-pointer hover:text-primary font-medium truncate">
                Demo project
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <div className="flex items-center gap-2">
        <UserButton />
      </div>
    </nav>
  );
};
