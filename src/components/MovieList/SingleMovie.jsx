import React from 'react';
import { useParams } from 'react-router-dom';

const SingleMovie = () => {
  const { movieId } = useParams();
  return <h2>SingleMovie - {movieId}</h2>;
};

export default SingleMovie;
