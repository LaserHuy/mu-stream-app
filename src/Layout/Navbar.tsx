import React from "react";
import { Link } from "react-router-dom";
import { NavProps } from "../types/Mu";
import { Search } from "lucide-react";
import { NavData } from "../data/Data";

const Navbar: React.FC<NavProps> = ({ title, url  }) => {
    return (
        <nav className="bg-white/10 shadow-md sticky top-0 z-50 backdrop-blur-lg">
            <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-6 justify-between items-center">
                <div className="col-span-1 lg:block hidden">
                    <Link to="/">
                        <img
                            src="/MuStream.png"
                            alt="logo"
                            className="w-full h-12 object-contain"
                        />
                    </Link>
                </div>
                <div className="col-span-3 shadow-md">
                    <form className="flex items-center">
                        <input
                            type="text"
                            placeholder="Search Movies"
                            className="bg-white/10 text-white px-4 py-2 rounded-l-md w-full focus:outline-none "
                        />
                        <button className="bg-primary text-white px-4 py-2 rounded-r-md">
                            <Search />
                        </button>
                    </form>
                </div>
                <div className="col-span-2 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
                    {NavData.map((item) => (
                        <Link
                            to={item.url}
                            key={item.id}
                            className="text-white hover:text-secondary"
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;