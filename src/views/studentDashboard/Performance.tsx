import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import CustomizedSelects from "../../components/SelectInput";
import { ReactComponent as Avatar } from "../../assets/icons/Avatar.svg";
import { ReactComponent as File } from "../../assets/icons/File.svg";
import { ReactComponent as Alarm } from "../../assets/icons/Alarm.svg";
import GaugeWithPointer from "../../components/GaugeWithPointer";

const PointData = [
  { title: "Absence", value: "90%", icon: Avatar, bgColor: "#1294F2" },
  { title: "Tasks", value: "70%", icon: File, bgColor: "#5DC983" },
  { title: "Quiz", value: "85%", icon: Alarm, bgColor: "#FBA63C" },
];

const Performance: React.FC = () => {
  return (
    <Box>
      <Typography
        marginBottom="16px"
        fontWeight={600}
        fontSize="18px"
        color="#000000"
      >
        Performance
      </Typography>
      <Box
        sx={{
          border: "1px solid #E5E7E7",
          borderRadius: "12px",
          width: "288px",
          height: "305px",
          padding: "16px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div className="w-[16px] h-[16px] bg-[#45A8A3] rounded-[4px]"></div>
            <Typography fontSize="12px" fontWeight={400} color="#42404C">
              Point Progress
            </Typography>
          </Box>
          <CustomizedSelects />
        </Box>
        <Typography
          color="#A5AAB5"
          fontSize="12px"
          fontWeight={400}
          letterSpacing="0.3px"
        >
          January - June 2021
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
              marginTop: "20px",
            }}
          >
            {PointData?.map((item) => (
              <Box key={item.title} sx={{ display: "flex", gap: "10px" }}>
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: item?.bgColor,
                  }}
                >
                  <item.icon />
                </Box>
                <Stack>
                  <Typography
                    fontWeight={500}
                    fontSize="15px"
                    color="#A5AAB5"
                    letterSpacing="0.3px"
                  >
                    {item?.title}
                  </Typography>
                  <Typography
                    fontWeight={600}
                    fontSize="15px"
                    color="#121212"
                    letterSpacing="0.3px"
                  >
                    {item?.value}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Box>
          <Stack>
            <GaugeWithPointer />
          </Stack>
        </Box>
        <Stack
          direction="row"
          spacing="6px"
          alignItems="center"
          justifyContent="center"
          marginTop="20px"
        >
          <Typography color="#83868E" fontWeight={400} fontSize="18px">
            Your Point:
          </Typography>
          <Typography color="#000000" fontWeight={400} fontSize="20px">
            8.966
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default Performance;
