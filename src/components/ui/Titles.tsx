import React from "react";

const Titles: React.FC = ({ title, Icon }) => {
    return (
        <div className="w-full px-2 flex sm:gap-8 gap-4 items-center">
            <Icon size={24} className="sm:w-6 sm:h-6 w-4 h-4 text-primary fill-primary" />
            <h2 className="ml-1">{title}</h2>
        </div>
    );
};

export default Titles;