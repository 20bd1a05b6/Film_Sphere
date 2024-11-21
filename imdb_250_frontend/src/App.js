import React from "react";
import FilmSphere from "./components/FilmSphere";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box>
      <Navbar />
      {/* <FilmSphere /> */}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/" element={<FilmSphere />} />
      </Routes>
      {/* <Footer /> */}
    </Box>
  );
};

export default App;
