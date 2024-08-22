import * as React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

interface TabProps {
  label: string;
  id: number;
}

interface TabComponentProps {
  onClick: (value: number) => void;
  tabArray?: TabProps[];
  value: number;
}

const CustomTab: React.FC<TabComponentProps> = (props) => {
  const { tabArray, onClick, value } = props;

  return (
    <Box>
      <Box
        sx={{
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {tabArray?.map((tab) => (
          <Box
            key={tab.id}
            sx={{ cursor: "pointer" }}
            onClick={() => onClick(tab?.id)}
          >
            <Typography
              sx={{
                color: value === tab.id ? "#062982" : "#999999",
                fontSize: "12px",
                fontWeight: 400,
              }}
            >
              {tab?.label}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default CustomTab;
