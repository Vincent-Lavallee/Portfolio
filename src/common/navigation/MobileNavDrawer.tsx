import Drawer from "@mui/material/Drawer";
import { SetStateAction, Dispatch } from "react";
import links from "./links";
import { Box, Button } from "@mui/material";
import { useRouter } from "next/router";
interface MobileNavDrawerProps {
  mobileDrawerState: [boolean, Dispatch<SetStateAction<boolean>>];
}
const MobileNavDrawer = ({
  mobileDrawerState: [isMobileDrawerOpen, setIsMobileDrawerOpen],
}: MobileNavDrawerProps) => {
  const router = useRouter();

  return (
    <Drawer
      variant="temporary"
      sx={{
        width: "265px",
      }}
      PaperProps={{
        sx: {
          pt: "100px",
          width: "265px",
          backgroundColor: (theme) => theme.palette.background.paper,
        },
      }}
      anchor="left"
      open={isMobileDrawerOpen}
      hideBackdrop
    >
      {links.map((link) => (
        <Button
          key={link.label}
          sx={{
            m: "10px",
            fontSize: "20px",
            color: router.pathname === link.link ? "?" : "white",
            textTransform: "none",
          }}
          onClick={() => {
            router.push(link.link).then(() => setIsMobileDrawerOpen(false));
          }}
        >
          {link.label}
        </Button>
      ))}
    </Drawer>
  );
};

export default MobileNavDrawer;
