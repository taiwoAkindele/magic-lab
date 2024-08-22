import React from "react";
import { Box, Typography } from "@mui/material";
import CourseContainer from "./CourseContainer";
import { RecommendedCoursesData } from "../../data/recommendedCourses";

const RecommendedCourses: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          marginTop: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#333333",
        }}
      >
        <Typography fontWeight={600} fontSize="18px">
          Recommended Courses
        </Typography>
        <Typography fontWeight={400} fontSize="14px">
          View All
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {RecommendedCoursesData?.map((course) => (
          <CourseContainer {...course} icon={<course.icon />} />
        ))}
      </Box>
    </Box>
  );
};

export default RecommendedCourses;
