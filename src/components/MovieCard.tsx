import React from "react";
import { Movie } from "../types/Mu";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ 
    movie: { 
        title, 
        release_date, 
        poster, 
        vote_average,
        original_language, 
        runtime 
    } 
}) => {
    return (
        <div className="movie-card">
            Card here
        </div>
    );
};