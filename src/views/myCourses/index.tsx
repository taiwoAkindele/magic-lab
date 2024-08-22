import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomTab from "../../components/Tabs";
import TabPanel from "../../components/TabPanel";
import OngoingTab from "./components/OngoingTab";
import CompletedTab from "./components/CompletedTab";
import SavedTab from "./components/SavedTab";

const customTabData = [
  { label: "Ongoing", id: 10 },
  { label: "Completed", id: 20 },
  { label: "Saved", id: 30 },
];

const MyCourses: React.FC = () => {
  const [tabValue, setTabValue] = useState<number>(10);
  const handleTabClick = (value: number) => {
    setTabValue(value);
  };
  return (
    <Box
      sx={{
        background: "#FAFBFC",
        height: "100%",
        width: "100%",
        paddingLeft: "31px",
      }}
    >
      <Typography
        fontWeight={500}
        fontSize="24px"
        lineHeight="29px"
        color="#211C37"
      >
        My Courses
      </Typography>
      <Box mt="16px">
        <CustomTab
          value={tabValue}
          tabArray={customTabData}
          onClick={handleTabClick}
        />
      </Box>
      <Box>
        <TabPanel value={tabValue} index={10}>
          <OngoingTab />
        </TabPanel>
        <TabPanel value={tabValue} index={20}>
          <CompletedTab />
        </TabPanel>
        <TabPanel value={tabValue} index={30}>
          <SavedTab />
        </TabPanel>
      </Box>
    </Box>
  );
};

export default MyCourses;
