import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { Box } from "@mui/system";

interface LanguageSelectorProps {}

const LanguageSelector = ({}: LanguageSelectorProps) => {
  return (
    <Select
      value={"En"}
      sx={{
        boxShadow: "none",
        ".MuiSvgIcon-root": {
          color: "white",
        },
        ".MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
      variant="outlined"
      fullWidth
    >
      <MenuItem value="En">En</MenuItem>
    </Select>
  );
};

export default LanguageSelector;
