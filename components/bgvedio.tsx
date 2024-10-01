import React from "react";
import {title} from "@/components/primitives";
import {button} from "@/components/primitives";
import {Button} from "@nextui-org/button";
import {Tooltip} from "@nextui-org/tooltip";
export default function Bgvedio() {
    return (
        <div className=" relative w-full h-full ">
            <video
                autoPlay
                loop
                muted
                className="relative inset-0 w-full h-full object-cover z-1"
            >
                <source src="/vedio2.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
            {/* contenue au dessus  de vedio */}

            <div className="absolute top-4 z-10 flex items-center justify-center h-full left-5">
                <div className="bg-black bg-opacity-75 p-8 rounded-lg">
                    <p className="flex flex-col  text-3xl font-bold text-black-900">
                        <span className={title()}> Make your Body  </span>
                        <span className={title()}> your greatest masterpiece.</span>
                    </p>
                    <p className="flex flex-col  text-3xl font-bold text-black-900">
                        <span className={title()}> chose your </span>
                        <Tooltip className={title({color:'yellow',size:"sm"})}
                                 content="register Now"
                                 placement="bottom">
                            <Button className={button({color: "yellow", size: "md"})}>
                                Work out now
                            </Button>
                        </Tooltip>
                    </p>

                </div>
            </div>

            {/* Optional dark overlay to make the text more visible */}
            <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        </div>
)
}