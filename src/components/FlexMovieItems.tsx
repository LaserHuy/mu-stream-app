import React from "react";
import { MovieProps } from "../types/Mu";
import { CalendarDays, Clock }from "lucide-react";

const FlexMovieItems: React.FC<MovieProps> = ({
    genres,
    belongs_to_collection,
    runtime,
    release_date,
}) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{genres[0].name}</span>
            </div>
            <div className="flex items-center gap-2">
                <CalendarDays className="text-subMain w-3 h-3" />
                <span className="text-sm font-medium">{release_date.split('-')[0]}</span>
            </div>
            <div className="flex items-center gap-2">
                <Clock className="text-subMain w-3 h-3" />
                <span className="text-sm font-medium">{runtime}</span>
            </div>
        </>
    );
}

export default FlexMovieItems;