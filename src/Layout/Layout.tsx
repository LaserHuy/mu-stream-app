import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout: React.FC = ({ children }) => {
    return (
        <div className="grid min-h-[100dvh] grid-rows-[auto_1fr_auto]">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;