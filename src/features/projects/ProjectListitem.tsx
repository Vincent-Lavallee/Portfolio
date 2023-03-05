import ProjectModel from "../../Models/Project";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineDot from "@mui/lab/TimelineDot";
import { TimelineContent } from "@mui/lab";
import { useState } from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
interface ProjectListitemProps {
  project: ProjectModel;
  isLeft: boolean;
}

const ProjectListitem = ({ project, isLeft }: ProjectListitemProps) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot color="primary" />
        <TimelineConnector
          sx={{ backgroundColor: (theme) => theme.palette.primary.main }}
          color="primary"
        />
      </TimelineSeparator>
      <TimelineContent>
        <Box sx={{ ml: "200px" }}>
          <Card
            sx={{
              width: 500,
            }}
          >
            <CardHeader
              action={
                <IconButton aria-label="view code on github">
                  <GitHubIcon
                    sx={{ color: "white" }}
                    onClick={() => window.open(project.repoUrl, "_blank")}
                  />
                </IconButton>
              }
              title={project.name}
              subheader={new Date(project.date).toLocaleDateString()}
            />
            <CardMedia
              component="img"
              height="300"
              image={project.image}
              alt="Project image"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {project.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton
                aria-label="view description"
                onClick={() => setExpanded((prevState) => !prevState)}
              >
                <ExpandMoreIcon sx={{ color: "white" }} />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography paragraph></Typography>
                <Typography paragraph></Typography>
                <Typography paragraph></Typography>
                <Typography paragraph></Typography>
                <Typography></Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

export default ProjectListitem;
