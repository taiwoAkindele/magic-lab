import Courses from "../Courses";
import DataAnalysis from "../DataAnalysis";
import Greetings from "../Greetings";
import RecommendedCourses from "../RecommendedCourses";

const Analytics = () => {
  return (
    <>
      <Greetings />
      <RecommendedCourses />
      <DataAnalysis />
      <Courses />
    </>
  );
};

export default Analytics;
