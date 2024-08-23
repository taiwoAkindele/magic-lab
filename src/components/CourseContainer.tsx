import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";
import CustomizedProgressBar from "./LinearProgressBar";
import { ReactComponent as PeopleIcon } from "../assets/icons/PeopleIcon.svg";
import { ReactComponent as Star } from "../assets/icons/Star.svg";
import { ReactComponent as ArrowRight } from "../assets/icons/Arrow-right.svg";

interface CourseContainerProps {
  courseBanner: string;
  courseTitle: string;
  tag: string;
  author: string;
  authorImg: string;
  occupation: string;
  coursePrice?: number;
  courseRating?: number;
  noOfLessons?: number;
  courseSubscribers?: number;
  isMain?: boolean;
  buttonText?: string;
}

const CourseContainer: React.FC<CourseContainerProps> = ({
  courseBanner,
  courseTitle,
  tag,
  author,
  authorImg,
  occupation,
  coursePrice,
  courseRating,
  noOfLessons,
  courseSubscribers,
  isMain = false,
  buttonText,
}) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        padding: "12px",
        maxWidth: "270px",
        // maxHeight: "258px",
        background: "#FFFFFF",
      }}
    >
      <Stack spacing="10px">
        <img src={courseBanner} alt={courseTitle} className="" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Box
            borderRadius="8px"
            bgcolor="rgba(112, 45, 255, 0.2)"
            width={72}
            display="flex"
            alignContent="center"
            justifyContent="center"
          >
            <Typography
              textAlign="center"
              fontWeight={400}
              fontSize="8px"
              color="#062982"
            >
              {tag}
            </Typography>
          </Box>
          {isMain && (
            <StyledFlexBox>
              <StyledFlexBox>
                <PeopleIcon />
                <Typography fontWeight={400} fontSize="10px">
                  {courseSubscribers}
                </Typography>
              </StyledFlexBox>
              <StyledFlexBox>
                <Star />
                <Typography fontWeight={400} fontSize="10px">
                  {courseRating}
                </Typography>
              </StyledFlexBox>
            </StyledFlexBox>
          )}
        </Box>
        <Typography
          fontWeight={500}
          fontSize="14px"
          lineHeight="17px"
          color="#202020"
        >
          {courseTitle}
        </Typography>
        <Typography fontWeight={500} fontSize="12px" color="#202020">
          {noOfLessons} Lessons
        </Typography>
        <CustomizedProgressBar value={60} />
        <Box display="flex" gap="8px">
          <img src={authorImg} alt={author} className="" />
          <Stack spacing="4px">
            <Typography fontWeight={500} fontSize="10px" color="#202020">
              {author}
            </Typography>
            <Typography
              fontWeight={400}
              fontSize="8px"
              color="#202020"
              textTransform="capitalize"
            >
              {occupation}
            </Typography>
          </Stack>
        </Box>
        {isMain && (
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography fontWeight={600} fontSize="14px" color="#202020">
              ${coursePrice}
            </Typography>
            <Button
              sx={{
                borderRadius: "15px",
                backgroundColor: "#062982",
                fontWeight: 400,
                fontSize: "10px",
                color: "#FFFFFF",
              }}
              variant="contained"
              endIcon={<ArrowRight />}
            >
              {buttonText}
            </Button>
          </Stack>
        )}
      </Stack>
    </Box>
  );
};

export default CourseContainer;

export const StyledFlexBox = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "8px",
}));
