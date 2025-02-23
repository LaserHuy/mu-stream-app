import React from "react";
import { NavProps } from "../types/Mu";


const Header: React.FC<NavProps> = ({ title }) => {
    return (
        <div className="w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md">
            <img
                src="/head.png"
                alt="AboutUs"
                className="w-full h-full object-cover"
            />
            <div className="absolute lg:top-24 top-16 w-full flex-colo">
                <h1 className="text-white text-center font-bold">
                {title && title}
                </h1>
            </div>
        </div>
    );
}

export default Header;