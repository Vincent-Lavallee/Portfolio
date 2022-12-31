import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
import links from "./links";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface NavbarProps {}
const Navbar = ({}: NavbarProps) => {
  const router = useRouter();

  return (
    <Box
      sx={{
        width: "100%",
        height: "80px",
        backgroundColor: (theme) => theme.palette.background.paper,
        alignItems: "center",
        display: "flex",
      }}
    >
      <Box>
        {links.map((link) => (
          <Button
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
        ))}
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
          sx={{ cursor: "pointer" }}
          onClick={() =>
            window.open("https://github.com/Vincent-Lavallee", "_blank")
          }
        />
        <Box sx={{ cursor: "pointer" }} onClick={() => router.push("/")}>
          Vincent Lavallée
        </Box>
        <LinkedInIcon
          sx={{ cursor: "pointer" }}
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
  );
};

export default Navbar;
