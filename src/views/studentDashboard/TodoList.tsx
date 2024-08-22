import { Box, Checkbox, Divider, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { TodoListData } from "../../data/todoListData";

const TodoList: React.FC = () => {
  const [checkboxValue, setCheckboxValue] = useState<number[]>([]);

  const handleCheckBoxClick = (value: number) => {
    if (checkboxValue?.includes(value)) {
      setCheckboxValue((prev) => prev.filter((item) => item !== value));
    } else {
      setCheckboxValue([...checkboxValue, value]);
    }
  };
  return (
    <Box>
      <Typography fontWeight={600} fontSize="18px" color="#000000">
        To Do List
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        {TodoListData?.map((item) => (
          <Box
            key={item?.id}
            sx={{ display: "flex", alignItems: "start", gap: "15px" }}
          >
            <Checkbox onChange={() => handleCheckBoxClick} />
            <Box>
              <Typography
                sx={{}}
                fontWeight={600}
                fontSize="14px"
                color="#42404C"
              >
                {item?.title}
              </Typography>
              <Stack direction="row" alignItems="center" spacing="8px">
                <Typography fontWeight={500} fontSize="14px" color="#676767">
                  {item?.course}
                </Typography>
                <Divider
                  sx={{ width: "2px", color: "#EDEDFB" }}
                  orientation="vertical"
                  flexItem
                />
                <Typography fontWeight={600} fontSize="14px" color="#FE764B">
                  {item?.time}
                </Typography>
              </Stack>
              {item?.subTodo?.length > 0 && (
                <Box>
                  <Divider />
                  <Box>
                    {item?.subTodo?.map((sub) => (
                      <Box
                        key={sub}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          //   gap: "15px",
                        }}
                      >
                        <Checkbox onChange={() => handleCheckBoxClick} />

                        <Typography
                          sx={{}}
                          fontWeight={600}
                          fontSize="14px"
                          color="#42404C"
                        >
                          {sub}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TodoList;
