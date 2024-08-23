import React from "react";
import { Box, Typography } from "@mui/material";
import { ReactComponent as WavingHand } from "../../assets/images/WavingHandSign.svg";

const Greetings: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          fontWeight={500}
          fontSize="24px"
          lineHeight="29px"
          color="#211C37"
        >
          Hello Moses
        </Typography>
        <WavingHand />
      </Box>
      <Typography fontSize="14px" fontWeight={400} color="#85878D">
        Let’s learn something new today!
      </Typography>
    </Box>
  );
};

export default Greetings;
