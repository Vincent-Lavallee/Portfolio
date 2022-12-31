import { Box } from "@mui/material";
import {
  StyledContactPageContainer,
  StyledContactTextField,
  StyledContactFormContainer,
  StyledContactFormHeader,
  StyledContactFormSubTitle,
  StyledContactForm,
  StyledContactWave,
} from "./ContactPageContent.styled";

const ContactPageContent = () => {
  return (
    <StyledContactPageContainer>
      <StyledContactFormContainer>
        <StyledContactFormHeader>Contact me</StyledContactFormHeader>
        <StyledContactFormSubTitle>
          Feel free to reach out to me if you have any questions. I&apos;m
          always happy to help! You can also reach me at
          vincent-lavallee@live.com
        </StyledContactFormSubTitle>
        <StyledContactForm>
          <Box
            sx={{
              display: "flex",
              gap: "50px",
              pt: "10px",
            }}
          >
            <StyledContactTextField
              label="Name"
              sx={{ width: "15%" }}
              InputLabelProps={{
                sx: { color: (theme) => theme.palette.text.secondary },
              }}
            />
            <StyledContactTextField label="Email" sx={{ width: "15%" }} />
          </Box>
          <Box
            sx={{
              mt: "20px",
              display: "flex",
              flexDirection: "column",
              width: "33%",
              gap: "20px",
            }}
          >
            <StyledContactTextField
              label="Subject"
              InputLabelProps={{
                sx: { color: (theme) => theme.palette.text.secondary },
              }}
            />

            <StyledContactTextField
              label="Message"
              multiline
              autoComplete="off"
              InputLabelProps={{
                sx: { color: (theme) => theme.palette.text.secondary },
              }}
            />
          </Box>
        </StyledContactForm>
      </StyledContactFormContainer>
      <StyledContactWave />
    </StyledContactPageContainer>
  );
};

export default ContactPageContent;
