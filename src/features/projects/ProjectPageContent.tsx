import projects from "./Projects";
import { Box } from "@mui/system";
import ProjectListitem from "./ProjectListitem";

import Timeline from "@mui/lab/Timeline";
import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";

interface ProjectPageContentProps {}

const ProjectPageContent = ({}: ProjectPageContentProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  return (
    <Box
      sx={{
        height: "100%",
        pt: "80px",
        backgroundImage: "url(./projectPageBg.svg)",
        backgroundSize: "cover",
      }}
    >
      {!isMobile ? (
        <Timeline
          sx={{
            width: "70%",
            mt: "50px",
          }}
        >
          {projects.map((project, index) => (
            <ProjectListitem project={project} key={project.name} />
          ))}
        </Timeline>
      ) : (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          {projects.map((project, index) => (
            <ProjectListitem project={project} key={project.name} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ProjectPageContent;
