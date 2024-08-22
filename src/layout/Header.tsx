import React from "react";
import { ReactComponent as NotificationIcon } from "../assets/icons/Notification.svg";
import StudentAvatar from "../assets/images/Avatar.jpg";
import { Box, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        right: 0,
        display: "flex",
        alignItems: "center",
        gap: "20px",
        justifyContent: "end",
        width: "calc(100vw - 300px)",
        padding: "8px 20px 0px 20px",
        height: "40px",
        zIndex: 3,
        background: "#fff",
      }}
    >
      <NotificationIcon />
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img src={StudentAvatar} alt="" />
        <Box>
          <Typography
            fontWeight={500}
            fontSize="14px"
            lineHeight="20px"
            color="#101828"
          >
            Pomaline Moses
          </Typography>
          <Typography
            fontWeight={400}
            fontSize="13px"
            lineHeight="20px"
            color="#667085"
          >
            Student
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
