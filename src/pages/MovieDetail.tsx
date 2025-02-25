import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout/Layout";
import MovieInfo from "../components/MovieInfo";
import { useMovie, useMovieCast } from "../hooks/useMovie";
import CircularBarsSpinnerLoader from "../components/Spinner";


const MovieDetail: React.FC = () => {
    const { id } = useParams();
    const { movie, isLoading, error } = useMovie(Number(id));
    const { cast, isLoading: isLoadingCast, error: errorCast } = useMovieCast(Number(id));
    console.log(cast);
    return (
        <Layout>
            <div className="container">
                {isLoading && <CircularBarsSpinnerLoader />}
                {error && <h1>{error}</h1>}
                {movie && <MovieInfo {...movie} />}
            </div>
        </Layout>
    );
};

export default MovieDetail;