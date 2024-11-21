import { Box, Typography } from "@mui/material";
import React from "react";

const About = () => {
  const about_data = {
    1: {
      name: "Divya Sushma Yakkali",
      branch: "CSE",
      roll: "20BD1A05AG",
      mail: "divyayakkali@gmail.com",
    },
    2: {
      name: "Pravin mr",
      branch: "CSE",
      roll: "20BD1A05B5", 
      mail: "pr2121021@gmail.com",
    },
    3: {
      name: "Chandra Shekhar",
      branch: "CSE",
      roll: "20BD1A05B6",  
      mail: "chandrashekar04897@gmail.com",
    },
    4: {
      name: "V.Navya",
      branch: "CSE",
      roll: "21BD5A0536",
      mail: "vadthyavathnavya@gmail.Com",
    },
  };
  return (
    <div>
      <Box
        sx={{
          paddingTop: "100px",
          // display: "flex",
          // flexdirection: "column",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "center",
            color: "black",
            margin: "20px",
            border: "1px solid white",
            borderRadius: "10px",
            width: "70%",
            marginLeft: "200px",
            padding: "10px",
            backgroundColor: "lightpink",
          }}
        >
          TEAM
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            // border: "2px solid #0C356A",
            borderRadius: "10px",
            width: "70%",
            marginLeft: "200px",
            height: "200px",
            alignItems: "center",
            // backgroundColor: "#61677A",
            color: "#f5f5f5",
          }}
        >
          {Object.keys(about_data).map((key) => {
            return (
              <Box
                sx={{
                  border: "1px solid lightpink",
                  borderRadius: "10px",
                  padding: "10px",
                  width: "auto",
                  ":hover": {
                    backgroundColor: "#E6E6FA",
                    cursor: "pointer",
                    color: "#0C356A",
                    height: "140px",
                    justifyContent: "center",
                    alignItems: "center",
                  }
                }}
              >
                <Typography variant="h6">{about_data[key].name}</Typography>
                <Typography>Branch: {about_data[key].branch}</Typography>
                <Typography>Roll:{about_data[key].roll}</Typography>
                <Typography>Mail:{about_data[key].mail}</Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

export default About;
