import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import TranslateIcon from "@mui/icons-material/Translate";
import { OutlinedInput } from "@mui/material";
import { styled } from "@mui/material/styles";

const InlineInput = styled(OutlinedInput)(() => ({
  "& .MuiOutlinedInput-input": {
    display: "flex",
    alignItems: "center",
    padding: "8px 12px",
  },
  "& .MuiListItemIcon-root": {
    minWidth: "unset",
    marginRight: "8px",
  },
  "& .MuiTypography-root": {
    fontSize: "14px",
    lineHeight: "19px",
    fontWeight: 500,
  },
}));

const LanguageSelect = () => {
  const [age, setAge] = React.useState(
    () => window.localStorage.getItem("lang") ?? "en"
  );

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as string;
    setAge(value);
    window.localStorage.setItem("lang", value);
  };

  return (
    <Box sx={{ minWidth: 164, marginRight: "16px", height: "40px" }}>
      <FormControl fullWidth variant="standard">
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          input={<InlineInput />}
          onChange={handleChange}
        >
          <MenuItem value="en">
            <ListItemIcon>
              <TranslateIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Eng (UK)"
              primaryTypographyProps={{
                fontSize: "14px",
                lineHeight: "19px",
                fontWeight: 500,
              }}
            />
          </MenuItem>
          <MenuItem value="rs">
            <ListItemIcon>
              <TranslateIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText
              primary="Srb (Lat)"
              primaryTypographyProps={{
                fontSize: "14px",
                lineHeight: "19px",
                fontWeight: 500,
              }}
            />
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default LanguageSelect;
