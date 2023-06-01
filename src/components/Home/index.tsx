import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow right.svg";

import Artists from "./Artists";
import CuratedArtwork from "./CuratedArtwork";

import TopSale from "./TopSale";
type Props = {};

const Home = (props: Props) => {
    const scroll = useRef<HTMLDivElement>(null);
    const collection = useRef<HTMLDivElement>(null);
    const collections = useRef<HTMLDivElement>(null);
    
    const scrollLeft = () => {
        if (scroll.current && collection.current) {
            const currentCollectionWidth = collection.current.offsetWidth
            const increaseNumberToDivisible = (number: number): number => {
                let count = 0;
                if (number % currentCollectionWidth === 0) {
                    number--;
                    count--;
                }
                if (!Number.isInteger(number)) {
                  number = Math.floor(number);
                }
              
                if (number === 0) {
                  number--;
                  count--;
                }
              
                while (number % currentCollectionWidth !== 0) {
                  number--;
                  count--;
                  console.log(count);
                }
              
                return count;
              };


            scroll.current.scrollBy({
                left: increaseNumberToDivisible(scroll.current.scrollLeft),
                behavior: "smooth",
            });

        }
    };
    const scrollRight = () => {
        
        if (scroll.current && collections.current && collection.current) {
            const currentCollectionWidth = collection.current.offsetWidth
            const currentScroll = scroll.current;
            const currentCollections = collections.current;
            const increaseNumberToDivisible = (number: number): number => {
                let count = 0;
       
                let totalScrollWidth = currentScroll?.scrollWidth - currentScroll.offsetWidth;
                // let firstClickWidth =   totalScrollWidth - Math.floor(totalScrollWidth / currentCollectionWidth) * currentCollectionWidth;//395
                const firstClickWidth = Math.floor(totalScrollWidth / currentCollectionWidth) * currentCollectionWidth - totalScrollWidth || currentCollectionWidth;
                const targetValue = Math.ceil(number / currentCollectionWidth) * currentCollectionWidth + Math.abs(firstClickWidth);
                if (number % targetValue === 0) {
                    number++;
                    count++;
                }
                if (!Number.isInteger(number)) {
                  number = Math.floor(number);
                }
              
                if (number === 0) {
                  number++;
                  count++;
                }

            
                while (number % targetValue !== 0) {
                  number++;
                  count++;
                }
                console.log(currentScroll?.scrollWidth - currentScroll.offsetWidth); // настоящая ширина скролла
                
                return count;
              };


            scroll.current.scrollBy({
                left: increaseNumberToDivisible(scroll.current.scrollLeft),
                behavior: "smooth",
            });
        }
    };
    // useEffect(() => {
    //     const currentScroll = scroll.current;
    //     const currentCollections = collections.current;
    //     if (currentScroll === null) return;
    //     if (currentCollections === null) return;

    //     const handleScroll = () => {
    //         console.log(currentScroll.scrollLeft);
    //         console.log(currentScroll.offsetWidth); //ширина блока с блоками
    //         console.log(currentCollections.offsetWidth / 2 + (1600 - currentScroll.offsetWidth)); //максимальная точка скролла с учетом ширины
    //         console.log(currentCollections.offsetWidth / 2);
    //     };

    //     currentScroll.addEventListener("scroll", handleScroll);

    //     return () => {
    //         currentScroll.removeEventListener("scroll", handleScroll);
    //     };
    // }, [scroll]);

    return (
        <div className="bg-mainWhite w-full text-textColor">
            <CuratedArtwork />
            <Artists />
            <TopSale />
            <div className="mb-[80px]">
                <div className="flex justify-between px-5 md:px-16 py-5 md:py-16 max-s:flex-col">
                    <h1 className="max-md:text-[56px] max-s:text-[48px]" >Curated collections.</h1>
                    <div className="w-[130px] flex justify-between">
                        <div
                            onClick={scrollLeft}
                            className="w-[60px] h-[60px] cursor-pointer transition group hover:border-none hover:bg-textColor bg-mainWhite border-2 border-gray03 rounded-full flex items-center justify-center"
                        >
                            <Arrow className="stroke-textColor group-hover:stroke-mainWhite w-[18px] h-[15px] rotate-180" />
                        </div>
                        <div
                            onClick={scrollRight}
                            className="w-[60px] h-[60px] cursor-pointer transition group hover:border-none hover:bg-textColor bg-mainWhite border-2 border-gray03 rounded-full flex items-center justify-center"
                        >
                            <Arrow className="stroke-textColor group-hover:stroke-mainWhite w-[18px] h-[15px]" />
                        </div>
                    </div>
                </div>
                <div className="w-full overflow-auto collections pb-[80px]" ref={scroll}>
                    <div ref={collections} className=" flex w-fit">
                        {[...Array(8)].map(() => {
                            return (
                                <div
                                    ref={collection}
                                    className={` flex-grow w-[400px] border-2 border-black h-[400px] ${
                                        [`bg-red-600`, `bg-yellow-600`, `bg-green-600`][
                                            Math.floor(Math.random() * (2 - 0 + 1)) + 0
                                        ]
                                    }`}
                                ></div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="mt-[80px]">
                <h3>123</h3>
            </div>
        </div>
    );
};

export default Home;
