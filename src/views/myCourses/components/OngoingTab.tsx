import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CourseContainer from "../../../components/CourseContainer";
import {
  DummyCourseData,
  DummyRecommendCourseData,
} from "../../../data/courseData";
import { ReactComponent as CircleButtonRight } from "../../../assets/icons/CircleButtonLeft.svg";
import { ReactComponent as CircleButtonLeft } from "../../../assets/icons/CircleButtonRight.svg";

const OngoingTab: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "70px",
      }}
    >
      <Stack spacing="20px">
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography color="#202020" fontWeight={500} fontSize="16px">
            Continue Watching
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              padding: "16px",
            }}
          >
            <CircleButtonLeft className="cursor-pointer" />
            <CircleButtonRight className="cursor-pointer" />
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {DummyCourseData?.map((course) => (
            <Box key={course?.id}>
              <CourseContainer {...course} />
            </Box>
          ))}
        </Box>
      </Stack>
      <Stack spacing="20px">
        <Typography color="#202020" fontWeight={500} fontSize="16px">
          Recommendations
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "15px" }}>
          {DummyRecommendCourseData?.map((course) => (
            <Box key={course?.id}>
              <CourseContainer
                {...course}
                isMain={true}
                buttonText="View Details"
              />
            </Box>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export default OngoingTab;
