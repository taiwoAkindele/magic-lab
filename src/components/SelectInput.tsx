import * as React from "react";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputBase from "@mui/material/InputBase";
import ArrowDown from "../assets/icons/ArrowDown";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "#EFF1F3",
    fontSize: 16,
    // padding: "7px 12px 7px 12px",
    // width: "95px",
    // height: "29px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));

const CustomizedSelects: React.FC = () => {
  const [age, setAge] = React.useState("");
  const handleChange = (event: { target: { value: string } }) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <FormControl variant="standard">
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={age}
          onChange={handleChange}
          input={<BootstrapInput />}
          displayEmpty
          renderValue={(selected) => {
            if (selected?.length === 0) {
              return (
                <MenuItem sx={{ fontSize: "12px", fontWeight: 400 }}>
                  Monthly
                </MenuItem>
              );
            } else {
              return selected;
            }
          }}
          IconComponent={(props) => <ArrowDown {...props} />}
        >
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};

export default CustomizedSelects;
