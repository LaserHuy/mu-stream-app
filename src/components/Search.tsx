import React from "react";
import { SearchProps } from "../types/Mu";
import { Search } from "lucide-react";

const SearchBar: React.FC<SearchProps> = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="flex">
            <input 
                type="text" 
                placeholder="Search for a movie"
                className="bg-white/10 text-white px-4 py-2 rounded-l-md w-full focus:outline-none "
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="bg-primary text-white px-4 py-2 rounded-r-md">
                <Search />
            </div>
        </div>
    );
}

export default SearchBar;