import {
  LinearProgress,
  linearProgressClasses,
  Stack,
  styled,
} from "@mui/material";
import React from "react";

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: "6px",
  borderRadius: "50px",
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: "#D9D9D9",
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: "50px",
    backgroundColor: "#062982",
  },
}));

const CustomizedProgressBar: React.FC<{ value: number }> = ({ value }) => {
  return (
    <Stack>
      <BorderLinearProgress variant="determinate" value={value} />
    </Stack>
  );
};
export default CustomizedProgressBar;
