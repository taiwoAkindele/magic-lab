import { Box } from "@mui/material";
import Courses from "../Courses";
import DataAnalysis from "../DataAnalysis";
import Greetings from "../Greetings";
import RecommendedCourses from "../RecommendedCourses";

const Analytics = () => {
  return (
    <Box>
      <Greetings />
      <RecommendedCourses />
      <DataAnalysis />
      <Courses />
    </Box>
  );
};

export default Analytics;
