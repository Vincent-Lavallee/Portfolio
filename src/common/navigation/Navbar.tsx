import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import links from "./links";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import useMediaQuery from "@mui/material/useMediaQuery";
import HamburgerIcon from "./HamburgerIcon";
import MobileNavDrawer from "./MobileNavDrawer";
import { useState } from "react";

interface NavbarProps {}
const Navbar = ({}: NavbarProps) => {
  const router = useRouter();

  const switchToHamburgerMenu = useMediaQuery("(max-width:920px)");

  const mobileDrawerState = useState(false);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80px",
          backgroundColor: (theme) => theme.palette.background.paper,
          alignItems: "center",
          display: "flex",
          zIndex: (theme) => theme.zIndex.drawer + 1,
          position: "fixed",
        }}
      >
        <Box>
          {switchToHamburgerMenu ? (
            <HamburgerIcon mobileDrawerState={mobileDrawerState} />
          ) : (
            links.map((link) => (
              <Button
                key={link.label}
                sx={{
                  m: "10px",
                  fontSize: "20px",
                  color: router.pathname === link.link ? "?" : "white",
                  textTransform: "none",
                }}
                onClick={() => router.push(link.link)}
              >
                {link.label}
              </Button>
            ))
          )}
        </Box>
        <Box
          sx={{
            position: "absolute",
            ml: "50%",
            transform: "translate(-50%,0)",
            alignItems: "center",
            display: "flex",
            gap: "20px",
          }}
        >
          <GitHubIcon
            sx={{
              cursor: "pointer",
              "&:hover": { color: (theme) => theme.palette.primary.main },
            }}
            onClick={() =>
              window.open("https://github.com/Vincent-Lavallee", "_blank")
            }
          />
          <Box
            sx={{
              cursor: "pointer",
              "&:hover": { color: (theme) => theme.palette.primary.main },
              whiteSpace: "nowrap",
            }}
            onClick={() => router.push("/")}
          >
            Vincent Lavallée
          </Box>
          <LinkedInIcon
            sx={{
              cursor: "pointer",
              "&:hover": { color: (theme) => theme.palette.primary.main },
            }}
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/vincent-lavall%C3%A9e-0b097734/",
                "_blank"
              )
            }
          />
        </Box>
        <Box />
      </Box>
      <MobileNavDrawer mobileDrawerState={mobileDrawerState} />
    </>
  );
};

export default Navbar;
