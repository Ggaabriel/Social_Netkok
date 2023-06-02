import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow right.svg";

import Artists from "./Artists";
import CuratedArtwork from "./CuratedArtwork";

import TopSale from "./TopSale";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
type Props = {};

const Home = (props: Props) => {
    const scroll = useRef<HTMLDivElement>(null);
    const collection = useRef<HTMLDivElement>(null);
    const collections = useRef<HTMLDivElement>(null);
    const dispatch = useAppDispatch();
    const home = useAppSelector((state) => state.home);
    const scrollLeft = () => {
        if (scroll.current && collection.current) {
          const currentCollectionWidth = collection.current.offsetWidth;
          const currentScroll = scroll.current;
          const { paddingLeft} = getComputedStyle(currentScroll);
          const paddingValue = (+paddingLeft.replace(/\D/g, ''));
      
          const increaseNumberToDivisible = (number: number): number => {
            let count = 0;
      
            const targetValue = currentCollectionWidth;
      
            if (!Number.isInteger(number)) {
              number = Math.floor(number);
            }
      
            if (number % targetValue === 0) {
              number--;
              count--;
            }
      
            if (number === 0) {
              number--;
              count--;
            }
      
            while (number % targetValue !== 0) {
              number--;
              count--;
              console.log(count);
            }
      
            return count;
          };
      
          scroll.current.scrollBy({
            left: increaseNumberToDivisible(scroll.current.scrollLeft - paddingValue),
            behavior: "smooth",
          });
        }
      };
      
      
    const scrollRight = () => {
        if (scroll.current && collections.current && collection.current) {
            const currentCollectionWidth = collection.current.offsetWidth;
            const currentScroll = scroll.current;
            const { paddingLeft} = getComputedStyle(currentScroll);
            const paddingValue = (+paddingLeft.replace(/\D/g, ''));
            const increaseNumberToDivisible = (number: number): number => {
                let count = 0;
                let totalScrollWidth = currentScroll?.scrollWidth - currentScroll.offsetWidth;
                const firstClickWidth =
                    Math.floor(totalScrollWidth / currentCollectionWidth) * currentCollectionWidth - totalScrollWidth + paddingValue ||
                    currentCollectionWidth;
                const targetValue =
                    Math.ceil(number / currentCollectionWidth) * currentCollectionWidth + Math.abs(firstClickWidth);
                if (!Number.isInteger(number)) {
                    number = Math.floor(number);
                }

                if (number % targetValue === 0) {
                    number++;
                    count++;
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
                left: increaseNumberToDivisible(scroll.current.scrollLeft ),
                behavior: "smooth",
            });
        }
    };
    return (
        <div className="bg-mainWhite w-full text-textColor">
            <CuratedArtwork />
            <Artists />
            <TopSale />
            <div className="mb-[80px]">
                <div className="flex justify-between px-5 md:px-16 py-5 md:py-16 max-s:flex-col">
                    <h1 className="max-md:text-[56px] max-s:text-[48px]">Curated collections.</h1>
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
                <div className=" w-full overflow-auto collections pb-[80px] relative px-0 md:px-[44px]" ref={scroll}>
                    <div ref={collections} className="flex w-fit">
                        {home.collections.map((elem, i) => {
                            return (
                                <div
                                    ref={collection}
                                    className={` w-[480px] max-s:w-[100vw] aspect-[1/1.2]`}
                                >
                                    <div
                                        className={`h-full max-s:mx-[10px] s:mx-5 grid gap-[10px]`}
                                    >
                                        <div className="bg-textColor w-full aspect-square rounded-2xl"></div>
                                        <div className="w-full h-fit grid grid-cols-3 gap-[10px]">
                                            <div className="bg-acc04 w-full aspect-square rounded-2xl">

                                            </div>
                                            <div className="bg-acc02 w-full aspect-square rounded-2xl">

                                            </div>
                                            <div className="bg-acc06  w-full aspect-square rounded-2xl flex items-center justify-center body1">
                                                +{elem.nfts.length - 3}
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
