import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as ProfileContainer } from "../../assets/images/profileContainer.svg";
import ProfilePicture from "../../assets/images/profile_profile.jpg";
import { ReactComponent as VerificationIcon } from "../../assets/icons/VerificationIcon.svg";

const StudentBadge: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "6rem",
      }}
    >
      <Box>
        <div>
          <ProfileContainer className="relative" />
          <img
            src={ProfilePicture}
            alt=""
            className="absolute top-[9.7rem] bottom-[30rem] right-[5.7rem] rounded-[100%]"
          />
        </div>
        <Stack spacing={1}>
          <Stack direction="row" alignItems="center" spacing="8px">
            <Typography
              fontWeight={500}
              fontSize="16px"
              color="#000000"
              lineHeight="19px"
            >
              Pomaline Moses
            </Typography>
            <VerificationIcon />
          </Stack>
          <Typography
            textAlign="center"
            fontWeight={400}
            fontSize="13px"
            color="#000000"
          >
            Student
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default StudentBadge;
