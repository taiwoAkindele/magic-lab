import React from "react";
import { Box } from "@mui/material";
import Profile from "./components/Profile";
import Analytics from "./components/Analytics";

const StudentDashboard: React.FC = () => {
  return (
    <Box sx={{ display: "flex", gap: "31px", paddingLeft: "31px" }}>
      <Box sx={{ width: "70%" }}>
        <Analytics />
      </Box>

      <Box>
        <Profile />
      </Box>
    </Box>
  );
};

export default StudentDashboard;
