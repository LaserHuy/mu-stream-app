import React from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../pages/MovieDetail";

const MovieDetailWrapper: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <MovieDetail id={Number(id)} />;
};

export default MovieDetailWrapper;