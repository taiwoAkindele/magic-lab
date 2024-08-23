import { Box } from "@mui/material";
import React from "react";
import StudentBadge from "../StudentBadge";
import Calender from "../Calender";
import TodoList from "../TodoList";

const Profile: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <StudentBadge />
      <Calender />
      <TodoList />
    </Box>
  );
};

export default Profile;
