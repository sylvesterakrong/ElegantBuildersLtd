import React from "react";
import Link from "next/link";



const Footer = () => {
    return(
        <>
        
        <div className="bg-black h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-15 bg-footer-bg bg-center bg-cover">
            <div className="p-5">
                <ul>
                    <p className="text-gray-200 font-bold text-3xl pb-4">
                        Elegant Buil<span className="text-blue-100">ders Limited</span>
                    </p>
                </ul>
            </div>
            <div className="p-5"> 
                <ul>
                    <p className="text-gray-200 font-bold text-2xl pb-4">Contact</p>
                    <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">024-444-2390</li>
                    <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-400 cursor-pointer">027-724-2815</li>
                </ul>
            </div>

            <div className="p-5"> 
                <ul>
                    <p className="text-gray-200 font-bold text-2xl pb-4">Address</p>
                    <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Ashongman Estates -</li>
                    <li className="text-gray-300 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">Bank of Ghana Quarters</li>
                </ul>
            </div>
        </div>


        <div className="flex flex-col justify-center items-center text-center p-5 bg-black text-1xl">
            <h1 className="text-gray-500 font-semibold">2023 All rights reserved | Built with ♡ by <Link href="https://linktr.ee/sylvesterakrong" passHref> <span className="hover:text-blue-600 cursor-pointer">  sylvester akrong  </span></Link></h1>
        </div>
    </>
    )
}

export default Footer