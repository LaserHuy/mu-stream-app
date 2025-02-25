import React from "react";
import { motion } from "motion/react";
import ImagesSlider from "./images-slider";
import { HeroProps } from "../types/Mu";


const Hero: React.FC<HeroProps> = ({ images }) => {
    return (
        <ImagesSlider images={images} autoplay={true} direction="up">
            <motion.div
                initial={{
                    opacity: 0,
                    y: -80,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.6,
                }}
                className="z-50 flex flex-col justify-center items-center h-[90vh]"
            >
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    Free Movies to Watch
                </motion.p>
                <motion.p className="text-center text-lg md:text-2xl text-neutral-300 mt-4">
                The search is ready! Watch your favorite movies and TV shows with us.
                </motion.p>
            </motion.div>
        </ImagesSlider>
    );
};

export default Hero;