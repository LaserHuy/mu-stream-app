// Movies Information
export interface Movies {
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
}

// Footer Props
export interface ContactProps {
    title: string;
    info: string;
    icon: any;
    contact: string;
}