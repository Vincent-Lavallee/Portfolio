import projects from "./Projects";
import { Box } from "@mui/system";
import ProjectListitem from "./ProjectListitem";

import Timeline from "@mui/lab/Timeline";

interface ProjectPageContentProps {}

const ProjectPageContent = ({}: ProjectPageContentProps) => {
  return (
    <Box
      sx={{
        height: "100%",
        pt: "80px",
        backgroundImage: "url(./projectPageBg.svg)",
        backgroundSize: "cover",
      }}
    >
      <Timeline
        sx={{
          width: "70%",
          mt: "50px",
        }}
      >
        {projects.map((project, index) => (
          <ProjectListitem
            project={project}
            isLeft={index % 2 === 0}
            key={project.name}
          />
        ))}
      </Timeline>
    </Box>
  );
};

export default ProjectPageContent;
