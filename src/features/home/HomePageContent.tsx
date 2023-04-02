import { Box } from "@mui/system";

import { useMediaQuery } from "@mui/material";
import { Theme } from "@mui/material/styles";
import TagCloud from "./TagCloud";
import CursorBlob from "./CursorBlob";
import TypeWriter from "./TypeWriter";

const HomePageContent = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );
  // TODO - Styled file

  return (
    <Box
      sx={{
        height: isMobile ? "900px" : "calc(100vh - 100px)",
        position: isMobile ? "?" : "relative",
        overflowY: isMobile ? "?" : "hidden",
        overflowX: "hidden",
        pt: isMobile ? "0px" : "100px",
      }}
    >
      <CursorBlob />
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
        <TypeWriter />
        <TagCloud />
      </Box>
    </Box>
  );
};

export default HomePageContent;
