import Box from "@mui/material/Box/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { keyframes, styled } from "@mui/system";
import theme from "../../common/theme";

const fadeInAnimaion = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
  `;

const styledHtmlTagProperties = {
  fontFamily: "'La Belle Aurore', cursive",
  color: theme.palette.text.disabled,
  fontWeight: "bold",
};

export const StyledEmailLink = styled("a")(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: "pointer",
  textDecoration: "none",
}));

export const StyledContactTextField = styled(TextField)(({ theme }) => ({
  animation: `${fadeInAnimaion} 1.2s`,
  backgroundColor: theme.palette.background.default,
}));

export const StyledAccentShard = styled(Box)(({ theme }) => ({
  "::after": {
    content: '""',
    zIndex: 4,
    height: "150px",
    width: "2px",
    position: "absolute",
    left: "-1px",
    background: `linear-gradient(transparent, ${theme.palette.primary.main}, transparent)`,
    top: "25%",
    opacity: 1,
  },
}));

export const StyledContactPageContainer = styled(Box)(() => ({
  backgroundImage: "url('/contactWaves.svg')",
  backgroundSize: "cover",
  paddingTop: "80px",
  height: "calc(100vh - 80px)",
  overflowX: "hidden",
  position: "relative",
  "&:before": {
    position: "absolute",
    top: "80px",
    content: '"<body>"',
    left: "20px",
    ...styledHtmlTagProperties,
  },
  "&:after": {
    content: '"/<body>"',
    bottom: "10px",
    left: "20px",
    position: "absolute",
    ...styledHtmlTagProperties,
  },
}));

export const StyledContactFormContainer = styled(Box)(({ theme }) => ({
  marginTop: "125px",
  display: "flex",
  flexDirection: "column",
  gap: "30px",
}));

export const StyledContactFormHeader = styled(Box)(({ theme }) => ({
  animation: `${fadeInAnimaion} 0.5s`,
  color: theme.palette.primary.main,
  fontSize: "50px",
  fontWeight: "bold",
  position: "relative",
  "&:before": {
    fontSize: "14px",
    content: '"<h1>"',
    marginLeft: "-30px",
    position: "absolute",
    ...styledHtmlTagProperties,
  },
  "&:after": {
    fontSize: "14px",
    content: '"</h1>"',
    position: "absolute",
    bottom: "-20px",
    left: "-32px",
    ...styledHtmlTagProperties,
  },
}));

export const StyledContactFormSubTitle = styled(Typography)(({ theme }) => ({
  animation: `${fadeInAnimaion} 1s`,
  color: theme.palette.text.primary,
  position: "relative",
  textAlign: "justify",
  width: "33%",
  "&:before": {
    fontSize: "14px",
    content: '"<p>"',
    marginLeft: "-30px",
    marginTop: "-20px",
    position: "absolute",
    ...styledHtmlTagProperties,
  },
  "&:after": {
    fontSize: "14px",
    content: '"</p>"',
    position: "absolute",
    bottom: "-20px",
    left: "-35px",
    ...styledHtmlTagProperties,
  },
}));

export const StyledContactForm = styled(Box)(({ theme }) => ({
  animation: `${fadeInAnimaion} 1.2s`,
  marginTop: "20px",
  position: "relative",
  "&:before": {
    fontSize: "14px",
    content: '"<form>"',
    position: "absolute",
    top: "-30px",
    left: "-30px",
    ...styledHtmlTagProperties,
  },
  "&:after": {
    fontSize: "14px",
    content: '"</form>"',
    position: "absolute",
    bottom: "0px",
    left: "-35px",
    ...styledHtmlTagProperties,
  },
}));
