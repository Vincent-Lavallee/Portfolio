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

export const StyledContactTextField = styled(TextField)(({ theme }) => ({
  animation: `${fadeInAnimaion} 1.5s`,
  backgroundColor: theme.palette.background.default,
}));

export const StyledContactPageContainer = styled(Box)(() => ({
  "&:before": {
    content: '"<body>"',
    marginLeft: "30px",
    ...styledHtmlTagProperties,
  },
  "&:after": {
    content: '"/<body>"',
    bottom: "10px",
    marginLeft: "30px",
    position: "absolute",
    ...styledHtmlTagProperties,
  },
}));

export const StyledContactFormContainer = styled(Box)(({ theme }) => ({
  paddingLeft: "5vw",
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
    marginTop: "50px",
    marginLeft: "-337px",
    ...styledHtmlTagProperties,
  },
}));

export const StyledContactFormSubTitle = styled(Typography)(({ theme }) => ({
  animation: `${fadeInAnimaion} 1s`,
  color: theme.palette.text.primary,
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
    marginTop: "25px",
    marginLeft: "-450px",
    ...styledHtmlTagProperties,
  },
}));

export const StyledContactForm = styled(Box)(({ theme }) => ({
  animation: `${fadeInAnimaion} 1.5s`,
  marginTop: "20px",
  "&:before": {
    fontSize: "14px",
    content: '"<form>"',
    position: "absolute",
    marginLeft: "-30px",
    marginTop: "-25px",
    ...styledHtmlTagProperties,
  },
  "&:after": {
    fontSize: "14px",
    content: '"</form>"',
    position: "absolute",
    marginLeft: "-30px",
    marginTop: "15px",
    ...styledHtmlTagProperties,
  },
}));

export const StyledContactWave = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "-80px",
  zIndex: -1,
  aspectRatio: "16/9",
  width: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundImage: "url('/contactWaves.svg')",
}));
