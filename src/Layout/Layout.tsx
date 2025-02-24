import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { SearchProps } from "../types/Mu";


const Layout: React.FC<SearchProps> = ({ children, searchTerm, setSearchTerm }) => {
    return (
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
            <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
            {children}
            <Footer />
        </div>
    );
}

export default Layout;