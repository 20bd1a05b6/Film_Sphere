import { Box } from "@mui/material";
import React from "react";
import world from "./images/world.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div className="body">
      <section>
        <Box>
          <Box className="earth"></Box>
          <div className="orbit">
            <div className="circle">
              <span style={{ "--i": 1 }}>..</span>
              <span style={{ "--i": 2 }}>..</span>
              <span style={{ "--i": 3 }}>F</span>
              <span style={{ "--i": 4 }}>I</span>
              <span style={{ "--i": 5 }}>L</span>
              <span style={{ "--i": 6 }}>M</span>
              <span style={{ "--i": 7 }}>S</span>
              <span style={{ "--i": 8 }}>P</span>
              <span style={{ "--i": 9 }}>H</span>
              <span style={{ "--i": 10 }}>E</span>
              <span style={{ "--i": 11 }}>R</span>
              <span style={{ "--i": 12 }}>E</span>
            </div>
          </div>
        </Box>
      </section>
    </div>
  );
};

export default Logo;
