import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";


const Footer: React.FC = ({}) => {
    return (
        <footer className="bg-dark-100 text-white text-center py-4 bottom-0 w-full">
            <div className="container mx-auto py-4">
                <img src="/MuStream.png" alt="logo" className="h-20 mx-auto" />
                <div className="mt-5 w-full flex flex-col items-center px-10 py-5 gap-6 justify-between border-t border-slate-600 md:flex-row text-gray-100">
                    <p>&copy; 2025 LaserHuy</p>
                    <div className="flex flex-nowrap gap-5 object-contain">
                        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                            <Facebook size={24} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                            <Instagram size={24} />
                        </a>
                        <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                            <Youtube size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;