import { Box, Typography } from "@mui/material";
import React from "react";
import StackedBarChart from "../../components/StackedBarChart";

const HourSpent: React.FC = () => {
  return (
    <Box>
      <Typography
        marginBottom="16px"
        fontWeight={600}
        fontSize="18px"
        color="#000000"
      >
        Hours Spent
      </Typography>
      <Box
        sx={{
          border: "1px solid #E5E7E7",
          borderRadius: "12px",
          width: "380px",
          height: "305px",
          padding: "16px",
        }}
      >
        <StackedBarChart />
      </Box>
    </Box>
  );
};

export default HourSpent;
