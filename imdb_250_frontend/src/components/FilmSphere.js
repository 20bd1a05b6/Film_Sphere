import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Typography from "@mui/material/Typography";
// import ShareIcon from "@mui/icons-material/Share";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import RotatingGlobe from "./RotatingGlobe";
import Main_sphere from "./Main_sphere";
import Footer from "./Footer";

const FilmSphere = () => {
  const [topmovies, setTopMovieData] = useState([]);
  const [genreFilter, setGenreFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [searchFilter, setSearchFilter] = useState("");
  const [movies, setMovies] = useState([]);
  const [ratingFilter, setRatingFilter] = useState("");
  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/get_top_5");
        setTopMovieData(response.data);
        console.log(topmovies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getImages();
  }, []);
  let movie_length = 250;
  // useEffect(() => {
  //   const fetchMoviesByGenre = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://127.0.0.1:5000/api/genre?genre=${genreFilter}`
  //       );
  //       setMovies(response.data);
  //       console.log(movies);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   if (genreFilter) {
  //     fetchMoviesByGenre();
  //   }
  // }, [genreFilter]);
  useEffect(() => {
    const fetchMoviesByRating = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/rating?rating=${ratingFilter}`
        );
        setMovies(response.data);
        console.log(movies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (ratingFilter) {
      fetchMoviesByRating();
    }
  });
  // useEffect(() => {
  //   const fetchMoviesByYear = async () => {
  //     try {
  //       const response = await axios.get(
  //         `http://127.0.0.1:5000/api/year?year=${yearFilter}`
  //       );
  //       setMovies(response.data);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };
  //   if (yearFilter) {
  //     fetchMoviesByYear();
  //   }
  // }, [yearFilter]);
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        let apiUrl = `http://127.0.0.1:5000/api/movies`;
        
        if (yearFilter) {
          apiUrl += `?year=${yearFilter}`;
        }
        if (genreFilter) {
          apiUrl += `${yearFilter ? '&' : '?'}genre=${genreFilter}`;
        }
  
        const response = await axios.get(apiUrl);
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
  
    fetchMovies();
  }, [yearFilter, genreFilter]);  

 
  useEffect(() => {
    const fetchMoviesBySearch = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/casts?casts=${searchFilter}`
        );
        setMovies(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    if (searchFilter) {
      fetchMoviesBySearch();
      setSearchFilter("");
    }
  }, [searchFilter]);
  const generateYearOptions = () => {
    const currentYear = 2020;
    const startYear = 1921;
    const yearOptions = [];

    for (let year = currentYear; year >= startYear; year--) {
      yearOptions.push(
        <MenuItem key={year} value={year}>
          {year}
        </MenuItem>
      );
    }

    return yearOptions;
  };

  return (
    <Box
      sx={{
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "70px",
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* genre filter */}
        {/* section 1 */}
        <div style={{ width: "15%", display: "flex", flexDirection: "column" }}>
          {/* Genre filter */}

          <Box
            sx={{
              width: "15%",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Box
              sx={{
                minWidth: 120,
                color: "black",
                backgroundColor: "#FFF6E0",
                borderRadius: "10px",
                // height: "40px",
                width: "150px",
                marginTop: "10px",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">
                  Select Year
                </InputLabel>
                <Select
                  label="Year"
                  value={yearFilter}
                  onChange={(e) => setYearFilter(e.target.value)}
                >
                  <MenuItem sx={{ color: "green" }} value="">
                    Select Year
                  </MenuItem>
                  {generateYearOptions()}
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                minWidth: 120,
                color: "black",
                backgroundColor: "#FFF6E0",
                borderRadius: "10px",
                // height: "40px",
                width: "150px",
                marginTop: "10px",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Genere</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={genreFilter}
                  label="Genere"
                  onChange={(e) => setGenreFilter(e.target.value)}
                >
                 <MenuItem sx={{ color: "green" }} value="">
                    Genere
                  </MenuItem>
                  <MenuItem value="All">All</MenuItem>
                  <MenuItem value="Drama">Drama</MenuItem>
                  <MenuItem value="Crime">Crime</MenuItem>
                  <MenuItem value="Adventure">Adventure</MenuItem>
                  <MenuItem value="Action">Action</MenuItem>
                  <MenuItem value="Animation">Animation</MenuItem>
                  <MenuItem value="Comedy">Comedy</MenuItem>
                  <MenuItem value="Thriller">Thriller</MenuItem>
                  <MenuItem value="Horror">Horror</MenuItem>
                  <MenuItem value="Romance">Romance</MenuItem>
                  <MenuItem value="Documentary">Documentary</MenuItem>
                  <MenuItem value="Biography">Biography</MenuItem>
                  <MenuItem value="Mystery">Mystery</MenuItem>
                  <MenuItem value="Sci-Fi">Sci-Fi</MenuItem>
                  <MenuItem value="Family">Family</MenuItem>
                  <MenuItem value="Fantasy">Fantasy</MenuItem>
                  <MenuItem value="Sport">Sport</MenuItem>
                </Select>
              </FormControl>
            </Box>
            {/* <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Drama" ? "" : "Drama")
              }
              sx={{
                color: genreFilter === "Drama" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Drama" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Drama
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Crime" ? "" : "Crime")
              }
              sx={{
                color: genreFilter === "Crime" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Crime" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Crime
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Adventure" ? "" : "Adventure")
              }
              sx={{
                color: genreFilter === "Adventure" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Adventure" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Adventure
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Action" ? "" : "Action")
              }
              sx={{
                color: genreFilter === "Action" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Action" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Action
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Animation" ? "" : "Animation")
              }
              sx={{
                color: genreFilter === "Animation" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Animation" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Animation
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Biography" ? "" : "Biography")
              }
              sx={{
                color: genreFilter === "Biography" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Biography" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Biography
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Comedy" ? "" : "Comedy")
              }
              sx={{
                color: genreFilter === "Comedy" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Comedy" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Comedy
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(
                  genreFilter === "Documentary" ? "" : "Documentary"
                )
              }
              sx={{
                color: genreFilter === "Documentary" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Documentary" ? "#EBE76C" : "#C8FFE0",
                width: "120px",
              }}
            >
              Documentary
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Family" ? "" : "Family")
              }
              sx={{
                color: genreFilter === "Family" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Family" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Family
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Fantasy" ? "" : "Fantasy")
              }
              sx={{
                color: genreFilter === "Fantasy" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Fantasy" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Fantasy
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Film-noir" ? "" : "Film-noir")
              }
              sx={{
                color: genreFilter === "Film-noir" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Film-noir" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Film-noir
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "History" ? "" : "History")
              }
              sx={{
                color: genreFilter === "History" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "History" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              History
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Horror" ? "" : "Horror")
              }
              sx={{
                color: genreFilter === "Horror" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Horror" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Horror
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Music" ? "" : "Music")
              }
              sx={{
                color: genreFilter === "Music" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Music" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Music
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Mystery" ? "" : "Mystery")
              }
              sx={{
                color: genreFilter === "Mystery" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Mystery" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Mystery
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Romance" ? "" : "Romance")
              }
              sx={{
                color: genreFilter === "Romance" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Romance" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Romance
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Sci-fi" ? "" : "Sci-fi")
              }
              sx={{
                color: genreFilter === "Sci-fi" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Sci-fi" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Sci-fi
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Sport" ? "" : "Sport")
              }
              sx={{
                color: genreFilter === "Sport" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Sport" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Sport
            </Button>
            <Button
              onClick={() =>
                setGenreFilter(genreFilter === "Thriller" ? "" : "Thriller")
              }
              sx={{
                color: genreFilter === "Thriller" ? "#614BC3" : "",
                backgroundColor:
                  genreFilter === "Thriller" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              Thriller
            </Button>
            <Button
              onClick={() => setGenreFilter(genreFilter === "War" ? "" : "War")}
              sx={{
                color: genreFilter === "War" ? "#614BC3" : "",
                backgroundColor: genreFilter === "War" ? "#EBE76C" : "#C8FFE0",
                width: "100px",
              }}
            >
              War
            </Button> */}
          </Box>
          {/* gener filter end */}
        </div>
        {/* section 2 */}
        <div style={{ width: "70%" }}>
          {/* search filter */}

          <TextField
            sx={{
              width: "98%",
              backgroundColor: "#FFF6E0",
              borderRadius: "10px",
              "& .MuiInputLabel-root": {
                color: "green", // Change this color to your desired color
              },
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "black", // Change this color to your desired color
                },
                "&:hover fieldset": {
                  borderColor: "black", // Change this color to your desired hover color
                },
                "&.Mui-focused fieldset": {
                  borderColor: "black", // Change this color to your desired focus color
                },
              },
            }}
            fullWidth
            label="Search By casts"
            id="fullWidth"
            InputProps={{
              endAdornment: (
                <SearchIcon
                  style={{
                    marginRight: "10px",
                    color: "#888",
                    cursor: "pointer",
                  }}
                />
              ),
            }}
            onChange={(e) => setSearchFilter(e.target.value)}
          />

          <Typography variant="h6">
            Number of Movies: {(movies.length == 207) ? 250 : movies.length}
          </Typography>
          <Main_sphere />
          {/* <RotatingGlobe /> */}
          <div style={{ paddingTop: "500px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "20px",
              }}
            >
              {movies.map((movie) => (
                <MovieCard key={movie.imdb_id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
        {/* search filter end */}
        {/* section 3 */}
        <Box
          style={{
            width: "15%",
            display: "flex",
            // flexDirection: "column",

            gap: "10px",
            marginTop: "10px",
            justifyContent: "center",
            // paddingLeft: "10px",
          }}
        >
          {/* <ShareIcon
            sx={{ width: "35px", height: "35px" }}
            onClick={handleShare}
          /> */}
          {/* rating filter */}
          {/* <Button
            onClick={() => setRatingFilter(ratingFilter === "10" ? "" : "10")}
            sx={{
              color: ratingFilter === "10" ? "#614BC3" : "",
              backgroundColor: ratingFilter === "10" ? "#EBE76C" : "#C8FFE0",
              width: "100px",
            }}
          >
            10
          </Button>
          <Button
            onClick={() => setRatingFilter(ratingFilter === "9" ? "" : "9")}
            sx={{
              color: ratingFilter === "9" ? "#614BC3" : "",
              backgroundColor: ratingFilter === "9" ? "#EBE76C" : "#C8FFE0",
              width: "100px",
            }}
          >
            9
          </Button>
          <Button
            onClick={() => setRatingFilter(ratingFilter === "8" ? "" : "8")}
            sx={{
              color: ratingFilter === "8" ? "#614BC3" : "",
              backgroundColor: ratingFilter === "8" ? "#EBE76C" : "#C8FFE0",
              width: "100px",
            }}
          >
            8
          </Button>
          <Button
            onClick={() => setRatingFilter(ratingFilter === "7" ? "" : "7")}
            sx={{
              color: ratingFilter === "7" ? "#614BC3" : "",
              backgroundColor: ratingFilter === "7" ? "#EBE76C" : "#C8FFE0",
              width: "100px",
            }}
          >
            7
          </Button> */}
          {/* </Box> */}
          {/* rating filter end */}
          {/* year filter */}
        </Box>
        {/* year filter end */}
      </div>
      <Footer />
    </Box>
  );
};

export default FilmSphere;
