import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { ReactComponent as MagicLab } from "../assets/icons/MagicLab.svg";
import { ReactComponent as Graphic } from "../assets/images/HowDoesItWorkCardInfoGraphic.svg";
import InputField from "../components/InputField";
import { navLinks, utilityLinks } from "./Navlinks";
import { Link, useLocation } from "react-router-dom";

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        position: "relative",
        marginRight: "280px",
      }}
    >
      <Paper
        sx={{
          width: "280px",
          height: "max-content",
          paddingTop: "32px",
          paddingLeft: "20px",
          paddingRight: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          position: "fixed",
          overflow: "scroll",
          top: 0,
          // bottom: 0,
          left: 0,
          maxHeight: "100vh",
        }}
      >
        <Box>
          <MagicLab />
        </Box>
        <InputField />
        <Box sx={{ display: "flex", flexDirection: "column", gap: "90px" }}>
          <ul className="flex flex-col gap-[20px]">
            {navLinks?.map((link) => {
              const isActive = location.pathname === link.to;

              return (
                <Link to={link.to} key={link.title}>
                  <li
                    className={`flex items-center justify-between w-full py-[8px] px-[12px] bg-white rounded-[6px] ${
                      isActive && "bg-[#EFF8FF]"
                    } `}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                      }}
                    >
                      <link.icon />
                      <Typography
                        color="#344054"
                        fontWeight={500}
                        fontSize="16px"
                      >
                        {link.title}
                      </Typography>
                    </Box>
                    {link.title?.toLowerCase() === "messages" && (
                      <Box
                        sx={{
                          height: "24px",
                          width: "30px",
                          borderRadius: "16px",
                          padding: "2px 10px",
                          background: "#EFF8FF",
                        }}
                      >
                        <Typography
                          fontSize="14px"
                          fontWeight={500}
                          textAlign="center"
                          color="#344054"
                        >
                          0
                        </Typography>
                      </Box>
                    )}
                  </li>
                </Link>
              );
            })}
          </ul>
          <ul className="flex flex-col gap-[20px]">
            {utilityLinks?.map((link) => {
              const isActive =
                location.pathname === link.to ||
                (location.pathname
                  .split("/")[1]
                  .startsWith(link.to.split("/")[1]) &&
                  link.to !== "/");

              return (
                <Link to={link.to} key={link.title}>
                  <li
                    className={`flex items-center py-[8px] px-[12px] gap-[12px] bg-white ${
                      isActive ? "bg-[#EFF8FF] rounded-[6px]" : ""
                    } `}
                  >
                    <link.icon />
                    <Typography
                      color="#344054"
                      fontWeight={500}
                      fontSize="16px"
                    >
                      {link.title}
                    </Typography>
                  </li>
                </Link>
              );
            })}
          </ul>
          <Box
            sx={{
              background: "#EFF8FF",
              padding: "20px 16px 0px",
              borderRadius: "8px",
              color: "#1570EF",
            }}
          >
            <Typography fontWeight={600} fontSize="14px" lineHeight="20px">
              Go Premium
            </Typography>
            <Typography fontWeight={400} fontSize="14px" lineHeight="20px">
              Explore about 5K+ courses and programs with life time membership
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Graphic />
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};

export default Sidebar;
