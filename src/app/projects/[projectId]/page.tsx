const ProjectIdPage = async ({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) => {
  const { projectId } = await params;

  return (
    <div>
      <h1>Project ID: {projectId}</h1>
    </div>
  );
};

export default ProjectIdPage;
