import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { LocalizationContext } from "../../../pages/_app";
import SupportedLanguage from "../../../lang/supportedLanguage";
import { capitalize } from "@mui/material";

interface LanguageSelectorProps {}

const LanguageSelector = ({}: LanguageSelectorProps) => {
  return (
    <LocalizationContext.Consumer>
      {(contextValues) => (
        <Select
          value={contextValues.selectedLanguage}
          sx={{
            boxShadow: "none",
            ".MuiSvgIcon-root": {
              color: "white",
            },
            ".MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          }}
          onChange={(e) =>
            contextValues.setSelectedLanguage(
              e.target.value as SupportedLanguage
            )
          }
          variant="outlined"
          fullWidth
        >
          {Object.values(SupportedLanguage).map((language) => {
            return (
              <MenuItem key={language} value={language}>
                {capitalize(language)}
              </MenuItem>
            );
          })}
        </Select>
      )}
    </LocalizationContext.Consumer>
  );
};

export default LanguageSelector;
