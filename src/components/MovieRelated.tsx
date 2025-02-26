import React from "react";
import { MovieProps } from "../types/Mu";
import MovieCard from "./ui/MovieCard";
import Titles from "./ui/Titles";
import { GalleryVerticalEnd } from "lucide-react";
import CircularBarsSpinnerLoader from "../components/ui/Spinner";


const MovieRelated: React.FC<MovieProps> = ({ movie }) => {
    return (
        <section className="all-movies">
            <Titles title="Related Movies" Icon={GalleryVerticalEnd}/>
            <ul className="">
                {movie ? (
                    movie.map((movie) => (
                        <li key={movie.id}>
                            <MovieCard movie={movie} />
                        </li>
                    ))
                ) : (
                    <CircularBarsSpinnerLoader />
                )}
            </ul>
        </section>
    );
};

export default MovieRelated;