import { Box } from "@mui/system";
import Typewriter from "../../common/typewriter";
import { useRef, useEffect } from "react";
import { keyframes } from "@emotion/react";
import { TagCloud } from "@frank-mayer/react-tag-cloud";
import theme from "../../common/theme";

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
        overflowY: "hidden",
        height: "calc(100vh - 80px)",
        position: "relative",
      }}
    >
      <Box sx={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <Box
          sx={{
            ml: "15vw",
            mt: "200px",
            "&:before": {
              content: '"<h1>"',
              fontFamily: "'La Belle Aurore', cursive",
            },
            "&:after": {
              position: "absolute",
              content: '"</h1>"',
              fontFamily: "'La Belle Aurore', cursive",
              marginLeft: "30rem",
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

        <Box sx={{ m: "100px 0px 0px 100px" }}>
          <TagCloud
            style={{ color: theme.palette.primary.main, fontWeight: "bold" }}
            options={(w: Window & typeof globalThis) => ({
              radius: Math.min(600, w.innerWidth, w.innerHeight) / 2,
              maxSpeed: "fast",
              initSpeed: "fast",
              direction: 135,
              keep: false,
            })}
            onClick={(tag: string, ev: MouseEvent) => alert(tag)}
            onClickOptions={{ passive: true }}
          >
            {cloudTags}
          </TagCloud>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "0px",
          zIndex: "-1",
          aspectRatio: "16/9",
          width: "100%",
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
