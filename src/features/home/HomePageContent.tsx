import { Box } from "@mui/system";
import Typewriter from "../../common/typewriter";
import { useRef, useEffect } from "react";
import { keyframes } from "@emotion/react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import theme from "../../common/theme";
import { useMediaQuery } from "@mui/material";

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
  const isMobile = useMediaQuery("(max-width:1000px)");

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

  return (
    <Box
      sx={{
        height: isMobile ? "?" : "calc(100vh - 100px)",
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
          alignItems: "center",
          mt: isMobile ? "100px" : "0px",
          height: isMobile ? "100vh" : "80%",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box
          sx={{
            width: "40%",
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
              whiteSpace: "pre-wrap",
              "&:after": {
                content: '""',
                backgroundColor: theme.palette.primary.main,
                width: "5px",
                height: "55px",
                display: "inline-block",
                animation: `${blinkingCursor} 0.5s steps(2) infinite`,
              },
              fontSize: "50px",
              fontWeight: "bold",
            }}
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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

      <Box
        sx={{
          position: "absolute",
          bottom: isMobile ? "-200px" : "-100px",
          zIndex: "-1",
          aspectRatio: "16/9",
          width: "100vw",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundImage: "url('/homeWave.svg')",
        }}
      />
    </Box>
  );
};

export default HomePageContent;
