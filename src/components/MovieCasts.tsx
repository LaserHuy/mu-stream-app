import React from "react";
import { CastsProps } from "../types/Mu";
import { Users } from "lucide-react";
import Titles from "./ui/Titles";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

import '@splidejs/splide/dist/css/splide.min.css';
import { tr } from "motion/react-client";

const MovieCasts: React.FC<CastsProps> = ({ cast }) => {
    return (
        <div className="container my-10 lg:my-20">
            <Titles title="Casts" Icon={Users} />
            <div className="my-2">
                <Splide options={{
                    type       : 'loop',
                    perPage    : 6,
                    gap        : '1rem',
                    pagination : false,
                    autoWidth  : false,
                    autoHeight : true,
                    focus      : 'center',
                    drag       : 'free',
                    autoScroll: {
                        speed: 0.7,
                    },
                    breakpoints: {
                        640: {
                            perPage: 2,
                        },
                        768: {
                            perPage: 3,
                        },
                        1024: {
                            perPage: 4,
                        },
                    },
                }} extensions={{ AutoScroll }}>
                    {cast.map((actor) => (
                        <SplideSlide key={actor.id}>
                            <div className="w-full p-3 bg-white/10 italic backdrop-blur-lg rounded flex-colo bg-dry border border-gray-700">
                                <img
                                    src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : `/no-movie.png`}
                                    alt={actor.name}
                                    className="w-full h-64 object-cover rounded mb-4"
                                />
                                <h3 className="text-center mt-4 font-bold text-neutral-300">{actor.name}</h3>
                            </div>
                        </SplideSlide>
                    ))}
                </Splide>
            </div>
        </div>
    );
}

export default MovieCasts;
