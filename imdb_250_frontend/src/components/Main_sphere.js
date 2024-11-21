import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./Main_sphere.css";
import axios from "axios";
import onebg from "./images/1bg.jpg";
import twobg from "./images/2bg.jpg";
import threebg from "./images/3bg.jpg";
import fourbg from "./images/4bg.jpg";
import fivebg from "./images/5bg.jpg";

const Main_sphere = () => {
  const [topmovies, setTopMovieData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [genreFilter, setGenreFilter] = useState("");
  // const [current_url, setCurrent_url] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // useEffect(() => {
  //   const getImages = async () => {
  //     try {
  //       const response = await axios.get("http://127.0.0.1:5000/get_top_5");
  //       setTopMovieData(response.data);

  //       // Create an array of image URLs
  //       const imageUrls = response.data.map((movie) => movie.img_src);
  //       setCurrent_url(imageUrls);

  //       console.log(current_url); // This might not display the updated value immediately
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   getImages();
  // }, []);
  // const path = "./images/";
  const current_url = [onebg, twobg, threebg, fourbg, fivebg];
  useEffect(() => {
    const fetchMoviesByGenre = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/genre?genre=drama`
        );
        setMovies(response.data);
        console.log(movies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (genreFilter) {
      fetchMoviesByGenre();
    }
  });
  useEffect(() => {
    if (current_url.length > 0) {
      const interval = setInterval(() => {
        setCurrentImageIndex(
          (prevIndex) => (prevIndex + 1) % current_url.length
        );
      }, 900);

      return () => {
        clearInterval(interval);
      };
    }
  }, [current_url]);
  return (
    <div className="body">
      <section>
        {/* <Box>
          <Box
            // sx={{ backgroundImage: `url(${movies[0].img_src})`}}
            className="sphere"
            
          ></Box>
          {movies.map((movie) => (
            <Box  key={movie.id}>
              <Box className="sphere" src={movie.img_src} alt={movie.name} ></ Box>            
            </Box>
          ))}
        </Box> */}
        {/* semi working */}
        {/* {current_url.length > 0 && (
          <Box
            sx={{
              backgroundImage: `url(${current_url[currentImageIndex]})`,
            }}
            className="sphere"
          ></Box> */}
        {current_url.length > 0 && (
          <div>
            {current_url.map((current_url, index) => (
              <Box
                key={index}
                sx={{
                  backgroundImage: `url(${current_url})`,
                  // backgroundImage: `url(${onebg})`,
                  display: index === currentImageIndex ? "block" : "none",
                }}
                className="sphere"
              ></Box>
            ))}
          </div>
        )}
        {/* // mobing courosle */}
      </section>
    </div>
  );
};

export default Main_sphere;
