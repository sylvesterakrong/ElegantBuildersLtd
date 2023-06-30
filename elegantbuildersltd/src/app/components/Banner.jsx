'use client'
import React from "react";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
    const [text] = useTypewriter({
        words: [
            "where excellence in construction meets timeless elegance.",
            "With our unwavering commitment to quality craftsmanship,",
            "we transform dreams into stunning realities.",
        ],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 15,
        delaySpeed: 2000,
    });



    return(
        <div className="h-96 max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
            <h1 className="text-4xl uppercase
             font-bold mx-3 my-3">Welcome to Elegant Builders Limited</h1>

            <p className=" mt-2 my-3 mx-3"> {text} </p>
            <Cursor cursorBlinking cursorStyle="|" cursorColor="#ffaa17"/>
        </div>
    )
}

export default Banner