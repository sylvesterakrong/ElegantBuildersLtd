import React from "react";
import Image from "next/image";


const Follow_Us = () => {
    return(
        <>
            <div className=" p-14 bg-black text-gray-500  text-center h-[24rem] max-w-screen-2xl mx-auto flex flex-col justify-center items-center">
                <div className="p-4">
                    <div className="text-gray-300 text-2xl">
                        <h1>
                        Follow Elegant Builders Limited
                        </h1>
                    </div>
                </div>
                <div className="p-1"> 
                <ul className="grid grid-cols-5 place-items-center gap-10">
                    <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
                        <Image 
                            src="/assets/facebook.svg" 
                            alt="" 
                            width={30} height={30} 
                            className="text-md"
                        />
                    </li>

                    <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
                        <Image 
                            src="/assets/twitter.svg" 
                            alt="" 
                            width={30} height={30} 
                            className="mr-2"
                        />
                    </li>

                    <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
                        <Image 
                            src="/assets/youtube.svg" 
                            alt="" 
                            width={30} height={30} 
                            className="mr-2"
                        />
                    </li>

                    <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
                        <Image 
                            src="/assets/linkedin.svg" 
                            alt="" 
                            width={30} height={30} 
                            className="mr-2"
                        />
                    </li>

                    <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">
                        <Image 
                            src="/assets/instagram.svg" 
                            alt="" 
                            width={30} height={30} 
                            className="mr-2"
                        />  
                    </li>
                </ul>
            </div>
            </div>
        
        </>
    );
}

export default Follow_Us