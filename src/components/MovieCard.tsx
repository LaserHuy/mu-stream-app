import React from "react";
import { MovieProps } from "../types/Mu";

const MovieCard: React.FC<MovieProps> = ({ 
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
            <img src={poster ? `https://image.tmdb.org/t/p/w500/${poster}` : `/no-movie.png`} alt={title} />
            <div className="mt-4">
                <h3>{title}</h3>

                <div className="content">
                    <div className="rating">
                        <img src="star.svg" alt="Star Icon" />
                        <p>{vote_average ? vote_average.toFixed(1) : 'N/A'}</p>
                    </div>
                    <span>•</span>
                    <p className="lang">{original_language}</p>
                    <span>•</span>
                    <p className="year">
                        {release_date ? release_date.split('-')[0] : 'N/A'}
                    </p>                
                </div>
            </div>
        </div>
    );
};

export default MovieCard;