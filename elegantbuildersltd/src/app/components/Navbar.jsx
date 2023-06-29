import Image from "next/image";
import React from "react";


const Navbar = () => {
    return(
        <div className="w-full h-24 border-b-[1px] border-gray-400 text-white">
           <div className="max-w-screen-2xl h-full mx-auto px-4 flex items-center">
            <Image 
              src="/assets/favicon-32x32.png" 
              alt="" 
              width={30} height={30} 
              className="mr-2"
            />
              <h1 className="text-5 uppercase font-bold"> 
               Elegant Builders Limited 
              </h1>
           </div>
        </div>
    )
}


export default Navbar