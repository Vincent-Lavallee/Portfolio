import { Alert, useMediaQuery } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
import Collapse from "@mui/material/Collapse/Collapse";
import { Theme } from "@mui/material/styles";
import { useFormik } from "formik";
import { useState } from "react";
import SendEmailModel from "../../Models/SendEmail";
import {
  StyledContactPageContainer,
  StyledContactTextField,
  StyledContactFormContainer,
  StyledContactFormHeader,
  StyledContactFormSubTitle,
  StyledContactForm,
  StyledEmailLink,
} from "./ContactPageContent.styled";
import { useIntl } from "react-intl";

import { object, string } from "yup";
const ContactPageContent = () => {
  const isMobile = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const { formatMessage } = useIntl();

  const [responseCode, setReponseCode] = useState<null | number>(null);

  const {
    isSubmitting,
    isValid,
    values,
    handleChange,
    handleSubmit,
    setSubmitting,
  } = useFormik<SendEmailModel>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: object({
      subject: string().required("Subject is required"),
      message: string().required("Message is required"),
    }),
    isInitialValid: false,
    onSubmit: (values) => {
      fetch("/api/email", {
        method: "POST",
        body: JSON.stringify(values),
      }).then((res) => {
        setReponseCode(res.status);
        setSubmitting(false);
        setTimeout(() =>
          setTimeout(() => {
            setReponseCode(null);
          }, 5000)
        );
      });
    },
  });

  return (
    <StyledContactPageContainer
      sx={{ "&:after": isMobile ? { content: '""' } : {} }}
    >
      <StyledContactFormContainer sx={{ ml: isMobile ? "50px" : "100px" }}>
        <StyledContactFormHeader sx={{ fontSize: isMobile ? "45px" : "?" }}>
          {formatMessage({ id: "contact.form.header" })}
        </StyledContactFormHeader>
        <StyledContactFormSubTitle sx={{ width: isMobile ? "90%" : "30%" }}>
          {formatMessage({ id: "contact.form.subtitle" })}
          <StyledEmailLink href="mailto:vincent-lavallee@live.com">
            {" "}
            vincent-lavallee@live.com
          </StyledEmailLink>
        </StyledContactFormSubTitle>
        <StyledContactForm>
          <Box
            sx={{
              display: "flex",
              gap: isMobile ? "20px" : "50px",
              pt: "10px",

              width: isMobile ? "90%" : "33%",
            }}
          >
            <StyledContactTextField
              label={formatMessage({ id: "contact.form.name" })}
              name="name"
              value={values.name}
              onChange={handleChange}
              sx={{ width: "50%" }}
              InputLabelProps={{
                sx: { color: (theme) => theme.palette.text.secondary },
              }}
            />
            <StyledContactTextField
              label={formatMessage({ id: "contact.form.email" })}
              name="email"
              value={values.email}
              onChange={handleChange}
              sx={{ width: "50%" }}
            />
          </Box>
          <Box
            sx={{
              mt: "20px",
              display: "flex",
              flexDirection: "column",
              width: isMobile ? "90%" : "33%",
              gap: "20px",
            }}
          >
            <StyledContactTextField
              label={formatMessage({ id: "contact.form.subject" })}
              name="subject"
              onChange={handleChange}
              value={values.subject}
              InputLabelProps={{
                sx: { color: (theme) => theme.palette.text.secondary },
              }}
            />

            <StyledContactTextField
              label={formatMessage({ id: "contact.form.message" })}
              name="message"
              onChange={handleChange}
              value={values.message}
              multiline
              autoComplete="off"
              InputLabelProps={{
                sx: { color: (theme) => theme.palette.text.secondary },
              }}
            />
            <Collapse in={isValid}>
              <Button
                sx={{ width: "100%" }}
                onClick={() => handleSubmit()}
                disabled={isSubmitting}
                variant={isSubmitting ? "text" : "contained"}
              >
                {isSubmitting ? <CircularProgress color="primary" /> : "Submit"}
              </Button>
            </Collapse>
            <Collapse in={!!responseCode}>
              {responseCode && (
                <Alert severity={responseCode === 200 ? "info" : "error"}>
                  {responseCode === 200
                    ? "Email sent successfully"
                    : "Email couldn't be sent, please try again later"}
                </Alert>
              )}
            </Collapse>
          </Box>
        </StyledContactForm>
      </StyledContactFormContainer>
    </StyledContactPageContainer>
  );
};

export default ContactPageContent;
