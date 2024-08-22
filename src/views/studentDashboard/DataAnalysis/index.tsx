import { Box, Grid } from "@mui/material";
import React from "react";
import HourSpent from "../HourSpent";
import Performance from "../Performance";

const DataAnalysis: React.FC = () => {
  return (
    <Box sx={{ marginTop: "20px", display: "flex", gap: "16px" }}>
      {/* <Grid container gap="16px">
        <Grid item xs={6}> */}
      <HourSpent />
      {/* </Grid>
        <Grid item xs={1}> */}
      <Performance />
      {/* </Grid>
      </Grid> */}
    </Box>
  );
};

export default DataAnalysis;
