import { lazy } from "react";
import { paths } from "./path";

const routes = [
  {
    path: paths.STUDENT_DASHBOARD,
    exact: true,
    component: lazy(() => import("../views/studentDashboard")),
  },
  {
    path: paths.MY_COURSES,
    exact: true,
    component: lazy(() => import("../views/myCourses")),
  },
];

export default routes;
