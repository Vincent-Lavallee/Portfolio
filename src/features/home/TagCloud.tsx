import { Box } from "@mui/system";
import { TagCloud as TagCloudComponent } from "@frank-mayer/react-tag-cloud";
import theme from "../../common/theme";
import { Theme, useMediaQuery } from "@mui/material";

interface TagCloudProps {}

const TagCloud = ({}: TagCloudProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transform: isMobile ? "translateX(-25px)" : "translateX(-50px)",
        zIndex: 3,
      }}
    >
      <TagCloudComponent
        style={{ color: theme.palette.primary.main, fontWeight: "bold" }}
        options={(w: Window & typeof globalThis) => {
          return {
            radius:
              Math.min(isMobile ? 400 : 600, w.innerWidth, w.innerHeight) / 2,
            maxSpeed: "fast",
            initSpeed: "fast",
            direction: 135,
            keep: false,
          };
        }}
      >
        {cloudTags}
      </TagCloudComponent>
    </Box>
  );
};

const cloudTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "TypeScript",
  "SASS",
  "React",
  "Python",
  "TypeOrm",
  "Git",
  "Lodash",
  "Node.js",
  "OpenCV",
  "Socket.io",
  "AWS",
  "Docker",
  "Redux",
  "MQTT",
  "MySQL",
];

export default TagCloud;
