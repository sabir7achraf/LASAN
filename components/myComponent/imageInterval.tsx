"use client"
import {useEffect, useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Button} from "@nextui-org/button";
import {faDumbbell} from "@fortawesome/free-solid-svg-icons";
import {faPersonRunning} from "@fortawesome/free-solid-svg-icons";
import {faPersonSkating} from "@fortawesome/free-solid-svg-icons";

import {button} from "@/components/primitives";

export const ImageInterval =() => {
    const [currentImageIndex, setIndex]=useState(0);
    const images=['/image1.jpg','/image2.jpg'];
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevImage) => (prevImage === 0 ? 1 : 0));
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return(
        <div className="relative  h-full">
            <div className="absolute inset-0 z-0 ">
            <img src={images[currentImageIndex]} alt="imagesPlan" className="w-full h-full object-cover"/>
            </div>
    <div  className="absolute right-20 top-20 z-10  bg-black bg-opacity-20 p-6 rounded-lg w-1/3 max-w-lg md:max-w-4xl lg:max-w-3xl h-3/4 backdrop-blur-md ">
                {/* Section Activities */}
                <div className="text-xl text-gray-800 mb-4 font-semibold">Activities</div>
                <div className="grid grid-cols-3 gap-4 mb-8">
                    <button className="flex flex-col items-center bg-white text-gray-900 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
                        <FontAwesomeIcon icon={faDumbbell} className="mb-2" />
                        <span>Strength</span>
                    </button>
                    <button className="flex flex-col items-center bg-white text-gray-900 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
                        <FontAwesomeIcon icon={faPersonRunning} className="mb-2" />
                        <span>Cardio</span>
                    </button>
                    <button className="flex flex-col items-center bg-white text-gray-900 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
                        <FontAwesomeIcon icon={faDumbbell} className="mb-2" />
                        <span>Yoga</span>
                    </button>
                </div>

                {/* Section Equipment */}
                <div className="text-xl text-gray-800 mb-4 font-semibold">Equipment</div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <button className="flex items-center justify-center bg-white text-gray-900 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
                        <FontAwesomeIcon icon={faPersonSkating} className="mr-2" />
                        <span>Bodyweight Only</span>
                    </button>
                    <button className="flex items-center justify-center bg-white text-gray-900 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
                        <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
                        <span>Dumbbell</span>
                    </button>
                </div>

                {/* Section Modification */}
                <div className="text-xl text-gray-800 mb-4 font-semibold">Modification</div>
                <div className="grid grid-cols-2 gap-4">
                    <button className="flex items-center justify-center bg-white text-gray-900 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 border-white">
                        <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
                        <span>Low Impact</span>
                    </button>
                    <button className="flex items-center justify-center bg-white text-gray-900 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100">
                        <FontAwesomeIcon icon={faDumbbell} className="mr-2" />
                        <span>Pregnancy</span>
                    </button>
                </div>
            </div>
            <div className=" flex flex-col absolute left-5 top-1/2 z-10 text-white" >
                <div className="text-3xl">
                Remember  progress isn’t always fast
                </div>
                <div className="text-xl">
                    and results aren’t always visible
                    but every effort you make counts
                </div>

            </div>
        </div>
    );
}

