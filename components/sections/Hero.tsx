"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function Hero() {
    const images = [
        "https://mir-s3-cdn-cf.behance.net/project_modules/fs/f75019188392861.659bcbb3355d8.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/6341ff188392861.659bcbb86102f.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/max_3840/5e0ac4188392861.659bcbb865816.png",
        "https://mir-s3-cdn-cf.behance.net/project_modules/1400/f57b98188392861.659bcbb863839.png"
    ];
    return (
        <ImagesSlider className="h-[100vh] object-cover" images={images}>
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
                className="z-50 flex flex-col justify-center items-center"
            >
                <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
                    The hero section slideshowww <br /> nobody asked for
                </motion.p>
                <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
                    <span>Join now →</span>
                    <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
                </button>
            </motion.div>
        </ImagesSlider>
    );
}
