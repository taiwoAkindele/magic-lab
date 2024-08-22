import { ReactComponent as Home } from "../assets/icons/Home.svg";
import { ReactComponent as Chevron } from "../assets/icons/Layer.svg";
import { ReactComponent as Coins } from "../assets/icons/Coin.svg";
import { ReactComponent as Community } from "../assets/icons/Community.svg";
import { ReactComponent as Schedule } from "../assets/icons/Schedule.svg";
import { ReactComponent as Support } from "../assets/icons/Support.svg";
import { ReactComponent as Settings } from "../assets/icons/Settings.svg";
import { paths } from "../routes/path";

export const navLinks = [
  { title: "Home", to: paths.STUDENT_DASHBOARD, icon: Home },
  { title: "My Courses", to: paths.MY_COURSES, icon: Chevron },
  { title: "Program", to: paths.PROGRAMS, icon: Chevron },
  { title: "Messages", to: paths.MESSAGES, icon: Coins },
  { title: "Analytics", to: paths.ANALYTICS, icon: Chevron },
  { title: "Schedule", to: paths.SCHEDULE, icon: Schedule },
  { title: "Community", to: paths.COMMUNITY, icon: Community },
];

export const utilityLinks = [
  { title: "Support", to: paths.SUPPORT, icon: Support },
  { title: "Settings", to: paths.SETTINGS, icon: Settings },
];
