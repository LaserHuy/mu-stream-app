import { Dispatch, SetStateAction } from "react";

// Movies Information
export interface MovieProps {
    id: number;
    title: string;
    release_date: string;
    poster: string;
    genres: string[];
    vote_average: number;
    original_language: string;
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
    poster: string;
}