import React from "react";
import { motion } from "motion/react";
import ImagesSlider from "./images-slider";
import { HeroProps } from "../types/Mu";


const Hero: React.FC<HeroProps> = ({ images }) => {
    return (
        <ImagesSlider images={images}>
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
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                    <span>Join now →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
            </motion.div>
        </ImagesSlider>
    );
};

export default Hero;