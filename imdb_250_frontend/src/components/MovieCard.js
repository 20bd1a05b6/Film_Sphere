import { Typography } from '@mui/material';
import React, { useState } from 'react';
import styled from 'styled-components';

const CastsOverlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #D8D9DA;
  opacity: 0;
  border-radius: 10px;
  transition: opacity 0.3s ease;
`;

const MovieCardContainer = styled.div`
  text-align: center;
  position: relative;
  display: inline-block;
  overflow: hidden;
  width: 250px; /* Set your desired width */
  height: auto; /* Set your desired height */
  transition: transform 0.3s ease;
  margin: 10px;
  &:hover {
    transform: translateY(-10px);
    ${CastsOverlay} {
      opacity: 1;
    }
  }
`;

const MovieImage = styled.img`
  width: 100%;
  height: 65%;
  border-radius: 10px;
`;

const MovieCard = ({ movie }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <MovieCardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <MovieImage src={movie.img_src} alt={movie.name} />

      {isHovered && (
        <CastsOverlay>
          <Typography>{movie.casts.split(',')[0]}</Typography>
          <Typography>{movie.casts.split(',')[1]}</Typography>
        </CastsOverlay>
      )}

      <Typography sx={{ color: 'yellow' }} variant='h6'>{movie.name}</Typography>
      <Typography>Year: {movie.year}</Typography> 
      <Typography>Genre: {movie.genre}</Typography>
      <Typography>Rating: {movie.rating}</Typography>

      {/* Add more movie details */}
    </MovieCardContainer>
  );
};

export default MovieCard;
