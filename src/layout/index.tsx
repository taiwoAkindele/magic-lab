import Sidebar from "./Sidebar";
import Header from "./Header";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const ContentLayout = () => {
  return (
    <Box>
      <Box display="flex">
        <Sidebar />
        <Header />
      </Box>
      <Box
        sx={{
          height: "calc(100vh - 40px)",
          width: "calc(100vw - 280px)",
          marginLeft: "280px",
          marginTop: "45px",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};

export default ContentLayout;
