import { IconButton } from "@mui/material";
import { SetStateAction, Dispatch } from "react";

interface HamburgerIconProps {
  mobileDrawerState: [boolean, Dispatch<SetStateAction<boolean>>];
}
const HamburgerIcon = ({
  mobileDrawerState: [isMobileDrawerOpen, setIsMobileDrawerOpen],
}: HamburgerIconProps) => {
  return (
    <IconButton
      sx={{
        color: "white",
        overflow: "hidden",
        background: "transparent",
        border: "none",
        borderRadius: "1rem",
        ml: "10px",
      }}
      onClick={() => setIsMobileDrawerOpen((prevState) => !prevState)}
    >
      <svg
        stroke="white"
        fill="none"
        style={{
          transition: "translate 1s, rotate 1s",
          ...(isMobileDrawerOpen && {
            rotate: "0.125turn",
          }),
        }}
        viewBox="-10 -10 120 120"
        width="40"
      >
        <path
          style={{
            transition: "1s",
            strokeDasharray: " 60 31 60 300",
            ...(isMobileDrawerOpen && {
              strokeDasharray: "60 105 60 300",
              strokeDashoffset: "-90",
            }),
          }}
          stroke-width="10"
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m 20 40 h 60 a 1 1 0 0 1 0 20 h -60 a 1 1 0 0 1 0 -40 h 30 v 70"
        />
      </svg>
    </IconButton>
  );
};

export default HamburgerIcon;
