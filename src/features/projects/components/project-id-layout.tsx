import { Id } from "../../../../convex/_generated/dataModel";
import { Navbar } from "./navbar";

export const ProjectIdLayout = ({
  children,
  projectId,
}: {
  children: React.ReactNode;
  projectId: Id<"projects">;
}) => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar projectId={projectId} />
      {children}
    </div>
  );
};
