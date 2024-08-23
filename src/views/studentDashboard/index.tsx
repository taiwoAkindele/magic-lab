import React from "react";
import { Box, Grid } from "@mui/material";
import Profile from "./components/Profile";
import Analytics from "./components/Analytics";

const StudentDashboard: React.FC = () => {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <Box sx={{ display: "flex", gap: "15px" }}>
          <Analytics />

          <Profile />
        </Box>
      </Grid>
    </Grid>
  );
};

export default StudentDashboard;
