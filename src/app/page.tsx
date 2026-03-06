import { ProjectsView } from "@/features/projects/components/projects-view";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-sidebar p-6 md:p-16">
      <ProjectsView />
    </div>
  );
};

export default Home;
