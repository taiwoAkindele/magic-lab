import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import { ReactComponent as BookIcon } from "../../assets/icons/BookIcon.svg";
import { ReactComponent as ReadIcon } from "../../assets/icons/ReadIcon.svg";
import { ReactComponent as PeopleIcon } from "../../assets/icons/PeopleIcon.svg";

const CourseContainer = ({
  icon,
  title,
  bgColor,
}: {
  icon?: React.ReactElement;
  title?: string;
  bgColor: string;
}) => {
  const RecomendedCoursesData = [
    { icon: BookIcon, value: 8 },
    { icon: ReadIcon, value: 10 },
    { icon: PeopleIcon, value: 50 },
  ];

  return (
    <Box
      sx={{
        maxWidth: "240px",
        height: "177px",
        borderRadius: "12px",
        bgcolor: bgColor,
        padding: "10px 8px 10px 10px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "19px" }}>
        <Box
          sx={{
            width: "50px",
            height: "50px",
            borderRadius: "100%",
            background: "#FFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </Box>
        <Typography>{title}</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "44px",
          borderRadius: "11px",
          padding: "12px 24px",
          gap: "10px",
          background: "#FCF9FF",
          marginTop: "20px",
        }}
      >
        {RecomendedCoursesData?.map((item, index) => (
          <React.Fragment key={index}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <item.icon />
              <Typography fontWeight={400} fontSize="10px" color="#000000">
                {item.value}
              </Typography>
            </Box>
            {RecomendedCoursesData?.length - 1 !== index && (
              <Divider
                sx={{ width: "2px", color: "#EDEDFB" }}
                orientation="vertical"
                flexItem
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  );
};

export default CourseContainer;
