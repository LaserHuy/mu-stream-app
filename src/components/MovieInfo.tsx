import React from "react";
import { MovieProps } from "../types/Mu";
import { Link } from "react-router-dom";
import FlexMovieItems from "./FlexMovieItems";
import { Share2, Play } from "lucide-react";

const MovieInfo: React.FC<MovieProps> = ({ 
    id,
    title, 
    release_date,
    backdrop_path,
    poster_path, 
    vote_average,
    overview,
    genres,
    belongs_to_collection,
    original_language, 
    runtime 
}) => {
    return (
        <div className="w-screen xl:h-screen relative text-white">
            <img
                src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                alt={title}
                className="w-full hidden xl:inline-block h-full object-cover"
            />
            <div className="bg-dark-100/80 flex-colo xl:absolute top-0 left-0 right-0 bottom-0 backdrop-blur-xxs">
                <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-colo py-10 lg:py-20 gap-8">
                    <div className="xl:col-span-1 w-full xl:order-none order-last h-header border border-light-200 rounded-lg overflow-hidden">
                        <img
                            src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                            alt={title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
                        <div className="col-span-3 flex flex-col gap-10">
                            {/* Title */}
                            <h1 className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                                {title}
                            </h1>
                            {/* flex items */}
                            <div className="flex items-center gap-4 font-medium text-dryGray">
                                <div className="flex-colo bg-primary text-xs px-2 py-1">
                                    HD 4K
                                </div>
                                <FlexMovieItems 
                                    genres={genres}
                                    runtime={runtime}
                                    release_date={release_date}
                                />
                            </div>
                            {/* description */}
                            <p className="text-text text-sm leading-7">{overview}</p>
                            <div className="grid sm:grid-cols-5 grid-cols-3 items-center justify-center gap-4 p-6 bg-white/10 border border-light-200 rounded-lg backdrop-blur-lg">
                                {/* share */}
                                <div className="flex border-r border-border">
                                    <button
                                        // onClick={() => setModalOpen(true)}
                                        className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center"
                                    >
                                        <Share2 className="w-6 h-6 cursor-pointer" />
                                    </button>
                                </div>
                                {/* language */}
                                <div className="col-span-2 flex font-medium">
                                    <p>
                                        Language :{" "}
                                        <span className="ml-2 uppercase">{original_language}</span>
                                    </p>
                                </div>
                                {/* watch button */}
                                <div className="col-span-2 flex-col sm:col-span-2">
                                    <Link
                                        to={`/watch/${id}`}
                                    >
                                        <button className="w-full border-2 border-primary hover:bg-primary text-white text-center py-2 rounded-lg cursor-pointer">
                                            <Play className="w-6 h-4 inline-block fill-white" /> Watch Trailer
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;