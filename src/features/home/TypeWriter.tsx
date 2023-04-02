import { Box } from "@mui/system";
import Typewriter from "../../common/typewriter";
import { useRef, useEffect, useState, useContext } from "react";
import { keyframes } from "@emotion/react";
import theme from "../../common/theme";
import { Theme, useMediaQuery } from "@mui/material";
import { LocalizationContext } from "../../../pages/_app";
import { useIntl } from "react-intl";

interface TypeWriterProps {}

const TypeWriter = ({}: TypeWriterProps) => {
  const typeWriterRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  const { selectedLanguage } = useContext(LocalizationContext);
  const { formatMessage } = useIntl();

  const [typeWriter, setTypeWriter] = useState<Typewriter | null>(null);

  useEffect(() => {
    if (typeWriterRef.current)
      setTypeWriter(
        new Typewriter(typeWriterRef.current as HTMLDivElement, {
          loop: false,
          typingSpeed: 100,
          deletingSpeed: 50,
        })
      );
  }, [typeWriterRef]);

  // TODO - Fix translations
  useEffect(() => {
    if (formatMessage) {
      const firstPrompt = formatMessage({ id: "home.typewriter.firstprompt" });
      const secondPrompt = formatMessage({
        id: "home.typewriter.secondprompt",
      });
      const thirdPrompt = formatMessage({ id: "home.typewriter.thirdprompt" });

      if (typeWriter) {
        typeWriter?.reset();

        typeWriter!
          .typeString(
            formatMessage({ id: "home.typewriter.initialprompt" }) + firstPrompt
          )
          .deleteChars(firstPrompt.length)
          .typeString(secondPrompt)
          .deleteChars(secondPrompt.length)
          .typeString(thirdPrompt)
          .start();
      }
    }
    return () => {
      if (typeWriter) typeWriter?.reset();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeWriter]);

  return (
    <Box
      sx={{
        zIndex: 3,
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
  );
};

const blinkingCursor = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
  `;

export default TypeWriter;
