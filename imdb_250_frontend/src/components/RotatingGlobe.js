import React, { useRef, useEffect, useState } from "react";
import "./RotatingGlobe.css";
import axios from "axios";

const RotatingGlobe = () => {
  const [topMovieData, setTopMovieData] = useState([]);
  const globeRef = useRef(null);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const getImages = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/get_top_5");
        setTopMovieData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getImages();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setRotation((prevRotation) => (prevRotation + 72) % 360);
      }
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
    globeRef.current.style.animationPlayState = "paused";
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    globeRef.current.style.animationPlayState = "running";
  };

  return (
    <div className="globe-container" style={{ height: "350px" }}>
      <div
        ref={globeRef}
        className="carousel"
        style={{ transform: `rotateY(${rotation}deg)` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {topMovieData.map((movie, index) => (
          <img
            key={index}
            src={movie.img_src}
            alt="Globe"
            style={{
              transform: `rotateY(${
                (360 / topMovieData.length) * index
              }deg) translateZ(150px)`,
            }}
          />
        ))}
      </div>
      <dv></dv>
    </div>
  );
};

export default RotatingGlobe;
