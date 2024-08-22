import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowDown from "../../assets/icons/ArrowDown";
import { ReactComponent as VideoPlayer } from "../../assets/icons/VideoPlayer.svg";
import AuthorImage from "../../assets/images/AuthorImage.jpg";
import GaugeComponent from "../../components/Gauge";

const Courses: React.FC = () => {
  return (
    <Box my="20px" width="600px">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb="20px"
      >
        <Typography color="#333333" fontWeight={600} fontSize="18px">
          My Courses
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#F8F8FF",
            width: "103.17px",
            height: "34.21px",
            borderRadius: "17.1px",
            padding: "8.55px 13.68px 8.55px 13.68px",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography>Active</Typography>
          <ArrowDown color="#615E83" width="8.27px" height="4.67px" />
        </Box>
      </Stack>
      <Stack spacing="16px">
        {[1, 2, 3]?.map((_) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              border: "1px solid #E4E7EC",
              borderRadius: "15px",
              width: "600px",
              height: "60px",
              padding: "12px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
              }}
            >
              <VideoPlayer />
              <Stack>
                <Typography fontWeight={600} fontSize="14px" color="#333333">
                  3D Design
                </Typography>
                <Stack direction="row" alignItems="center" spacing="14px">
                  <img src={AuthorImage} alt="" className="w-[20px] h-[20px]" />
                  <Typography color="#595959" fontWeight={400} fontSize="12px">
                    Natalie Benson
                  </Typography>
                </Stack>
              </Stack>
            </Box>
            <Stack>
              <Typography fontWeight={600} fontSize="14px" color="#333333">
                Remaining
              </Typography>
              <Typography color="#595959" fontWeight={400} fontSize="12px">
                2h 45 min
              </Typography>
            </Stack>
            <GaugeComponent value={60} startAngle={-150} endAngle={150} />
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Courses;
