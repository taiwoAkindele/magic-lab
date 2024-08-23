import { Box } from "@mui/material";
import React from "react";
import HourSpent from "../HourSpent";
import Performance from "../Performance";

const DataAnalysis: React.FC = () => {
  return (
    <Box sx={{ marginTop: "20px", display: "flex", gap: "16px" }}>
      <HourSpent />

      <Performance />
    </Box>
  );
};

export default DataAnalysis;
