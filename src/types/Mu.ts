import { Dispatch, SetStateAction } from "react";

// Movies Information
export interface MovieProps {
    id: number;
    title: string;
    release_date: string;
    poster_path: string;
    genres: string[];
    vote_average: number;
    original_language: string;
    belongs_to_collection: string;
    overview: string;
    runtime: number;
}

// Navbar Props
export interface NavProps {
    title: string;
    url: string;
    searchTerm: string;
    setSearchTerm: Dispatch<SetStateAction<string>>;
}

// Footer Props
export interface ContactProps {
    title: string;
    info: string;
    icon: any;
    contact: string;
}

// Search Props
export interface SearchProps {
    searchTerm: string
    setSearchTerm: Dispatch<SetStateAction<string>>
}

// Trending Props
export interface TrendingProps {
    $id: string;
    title: string;
    poster_path: string;
}

//Hero Props
export interface HeroProps {
    images: string[];
}

// Casts Props
export interface CastsProps {
    id: number;
    name: string;
    profile_path: string;
}