import { Box } from "@mui/system";
import Typewriter from "../../common/typewriter";
import { useRef, useEffect } from "react";
import { keyframes } from "@emotion/react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import theme from "../../common/theme";
import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";

const blinkingCursor = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
  `;

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

const HomePageContent = () => {
  const typeWriterRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  let typeWriter: Typewriter;

  useEffect(() => {
    if (typeWriterRef.current && !typeWriterRef.current.innerText) {
      typeWriter = new Typewriter(typeWriterRef.current as HTMLDivElement, {
        loop: false,
        typingSpeed: 100,
        deletingSpeed: 50,
      });

      typeWriter
        .typeString("Hi,\nI'm Vincent, \nReact Enthusiast!")
        .deleteChars(17)
        .typeString("Cloud practionner!")
        .deleteChars(18)
        .typeString("FullStack Developer!")
        .start();
    }
  }, []);
  // TODO mobile layout

  return (
    <Box
      sx={{
        backgroundSize: "auto",
        backgroundImage: "url('/homeWave.svg')",
        backgroundPosition: "bottom",
        backgroundPositionY: isMobile ? "1100px" : "",
        height: isMobile ? "900px" : "calc(100vh - 100px)",
        position: isMobile ? "?" : "relative",
        overflowY: isMobile ? "?" : "hidden",
        overflowX: "hidden",
        pt: isMobile ? "0px" : "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "100%",
          pl: isMobile ? "7vw" : "0px",
          alignItems: isMobile ? "right" : "center",
          mt: isMobile ? "75px" : "0px",
          height: isMobile ? "100vh" : "80%",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box
          sx={{
            width: "40%",
            transform: isMobile ? "" : "translateY(-50px)",
            "&:before": {
              content: '"<h1>"',
              fontFamily: "'La Belle Aurore', cursive",
            },
            "&:after": {
              display: "inline",
              right: "0px",
              content: '"</h1>"',
              fontFamily: "'La Belle Aurore', cursive",
            },
          }}
        >
          <Box
            ref={typeWriterRef}
            sx={{
              height: isMobile ? "105px" : "",
              whiteSpace: "pre",
              position: "relative",
              width: "fit-content",
              "&:after": {
                content: '""',
                backgroundColor: theme.palette.primary.main,
                width: "5px",
                height: isMobile ? "30px" : "55px",
                display: "inline-block",
                animation: `${blinkingCursor} 0.5s steps(2) infinite`,
              },
              fontSize: isMobile ? "28px" : "50px",
              fontWeight: "bold",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transform: isMobile ? "translateX(-22px)" : "translateX(-50px)",
          }}
        >
          <TagCloud
            style={{ color: theme.palette.primary.main, fontWeight: "bold" }}
            options={(w: Window & typeof globalThis) => {
              return {
                radius:
                  Math.min(isMobile ? 400 : 600, w.innerWidth, w.innerHeight) /
                  2,
                maxSpeed: "fast",
                initSpeed: "fast",
                direction: 135,
                keep: false,
              };
            }}
          >
            {cloudTags}
          </TagCloud>
        </Box>
      </Box>
    </Box>
  );
};

export default HomePageContent;
