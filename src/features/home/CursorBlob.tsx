import { Theme, useMediaQuery } from "@mui/material";
import { Box, keyframes } from "@mui/system";
import { useEffect } from "react";

interface CursorBlobProps {}

const CursorBlob = ({}: CursorBlobProps) => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  useEffect(() => {
    const blob = document.getElementById("blob");

    let mobileBlobInterval: NodeJS.Timer;

    if (!isMobile)
      window.onpointermove = (event) => {
        const { clientX, clientY } = event;

        if (blob) animateBlob(blob, { x: clientX, y: clientY });
      };
    else
      mobileBlobInterval = setInterval(() => {
        if (!blob) return;
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * (700 - 250) + 250;

        animateBlob(blob, {
          x,
          y,
        });
        blob.style.setProperty("left", x.toString());
        blob.style.setProperty("top", y.toString());
      }, 3000);

    return () => {
      if (mobileBlobInterval) clearInterval(mobileBlobInterval);
      window.onpointermove = null;
    };
  }, [isMobile]);

  return (
    <>
      <Box
        id="blob"
        sx={{
          zIndex: 2,
          backgroundColor: "white",
          height: "14vmax",
          width: "14vmax",
          position: "absolute",
          left: "50%",
          top: "50%",
          translate: "-50% -50%",
          borderRadius: "50%",
          background: "linear-gradient(to right, aquamarine, mediumpurple)",
          animation: `${rotateAnimation} 20s infinite`,
          opacity: 0.8,
        }}
      />
      <Box
        sx={{
          height: isMobile ? "900px" : "100%",
          width: "100%",
          position: "absolute",
          zIndex: 3,
          backdropFilter: "blur(10vmax)",
        }}
      />
    </>
  );
};

const animateBlob = (blob: HTMLElement, { x, y }: { x: number; y: number }) => {
  if (blob && y > 250 && y < 700)
    blob.animate(
      {
        left: `${x}px`,
        top: `${y}px`,
      },
      { duration: 3000, fill: "both" }
    );
};

const rotateAnimation = keyframes`
  from {
    rotate: 0deg;
  }
  
  50% {
    scale: 1 1.5;
  }
  
  to {
    rotate: 360deg;
  }
`;

export default CursorBlob;
