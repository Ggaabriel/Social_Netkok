import React, { useEffect, useRef, useState } from "react";
import {ReactComponent as Arrow} from "../../assets/icons/arrow right.svg"

import Artists from "./Artists";
import CuratedArtwork from "./CuratedArtwork";

import TopSale from "./TopSale";
type Props = {};

const Home = (props: Props) => {
    return (
        <div className="bg-mainWhite w-full text-textColor">
            <CuratedArtwork />
            <Artists />
            <TopSale />
            <div>
                <div className="flex justify-between px-5 md:px-16 py-5 md:py-16">
                   <h1>Curated collections.</h1>
                   <div className="w-[130px] flex justify-between">
                        <div className="w-[60px] h-[60px] cursor-pointer transition group hover:border-none hover:bg-textColor bg-mainWhite border-2 border-gray03 rounded-full flex items-center justify-center">
                            <Arrow className="stroke-textColor group-hover:stroke-mainWhite w-[18px] h-[15px] rotate-180" />
                        </div>
                        <div className="w-[60px] h-[60px] cursor-pointer transition group hover:border-none hover:bg-textColor bg-mainWhite border-2 border-gray03 rounded-full flex items-center justify-center">
                            <Arrow className="stroke-textColor group-hover:stroke-mainWhite w-[18px] h-[15px]" />
                        </div>
                   </div>
                </div>
                <div className="w-full overflow-auto">
                    <div className="px-5 md:px-16 flex  w-fit">
                        {[...Array(8)].map(()=>{
                            return <div className={` flex-grow w-[400px] border-2 border-black h-[400px] bg-${[`red-600`,`yellow-600`,`green-600`][Math.floor(Math.random() * (2 - 0 + 1)) + 0]}`}>

                            </div>
                        })}
                    </div>
                </div> 
            </div>  
        </div>
    );
};

export default Home;
