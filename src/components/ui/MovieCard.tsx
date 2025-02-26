import React from "react";
import { Link } from "react-router-dom";
import { MovieProps } from "../types/Mu";
import { Star } from "lucide-react";

const MovieCard: React.FC<MovieProps> = ({ 
    movie: {
        id,
        title, 
        release_date, 
        poster_path, 
        vote_average,
        original_language, 
        runtime 
    } 
}) => {
    return (
        <div className="movie-card">
            <Link to={`/movie/${id}`}>
                <img src={poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : `/no-movie.png`} alt={title} />
                <div className="mt-4 ">
                    <h3 className="relative text-wrap overflow-hidden ">{title}</h3>

                    <div className="content">
                        <div className="rating">
                            <Star size={20} className="text-secondary fill-secondary" />
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
            </Link>
        </div>
    );
};

export default MovieCard;