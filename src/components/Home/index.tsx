import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/icons/arrow right.svg";

import Artists from "./Artists";
import CuratedArtwork from "./CuratedArtwork";

import TopSale from "./TopSale";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import OfferNft from "./OfferNft";
import Nft from "../../shared/Nft";
import Footer from "../Footer";
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
            const { paddingLeft } = getComputedStyle(currentScroll);
            const paddingValue = +paddingLeft.replace(/\D/g, "");

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
            const { paddingLeft } = getComputedStyle(currentScroll);
            const paddingValue = +paddingLeft.replace(/\D/g, "");
            const increaseNumberToDivisible = (number: number): number => {
                let count = 0;
                let totalScrollWidth = currentScroll?.scrollWidth - currentScroll.offsetWidth;

                const firstClickWidth =
                    Math.floor(totalScrollWidth / currentCollectionWidth) * currentCollectionWidth -
                        totalScrollWidth +
                        paddingValue || currentCollectionWidth;

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
                left: increaseNumberToDivisible(scroll.current.scrollLeft),
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
                                <div ref={collection} className={` w-[480px] max-s:w-[100vw] aspect-[1/1.2]`}>
                                    <div className={`h-full max-s:mx-[10px] s:mx-5 grid gap-[10px]`}>
                                        <div className="bg-textColor w-full aspect-square rounded-2xl"></div>
                                        <div className="w-full h-fit grid grid-cols-3 gap-[10px]">
                                            <div className="bg-acc04 w-full aspect-square rounded-2xl"></div>
                                            <div className="bg-acc02 w-full aspect-square rounded-2xl"></div>
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
            <div className="mt-[80px] grid s:grid-cols-2">
                <div className="w-full bg-acc02 ass:pect-[1/1.5] px-5 md:px-16 py-5 md:py-16 flex flex-col justify-between items-start">
                    <h1 className="max-md:text-[56px] max-s:text-[48px] s:w-[440px]">Auctions ending soon</h1>
                    <button className="px-[36px] py-[20px] bg-mainWhite">explorer more</button>
                </div>
                <div className="w-full aspect-[1/1.5] overflow-y-auto">
                    {[...Array(3)].map((e) => {
                        return <OfferNft user="kok123" price="24 RUB" endStamp={1703887200000} />;
                    })}
                </div>
            </div>
            {/* Spotlight */}
            <div className="px-5 md:px-16 py-5 md:py-16 bg-mainBlack text-gray05">
                <div className="flex max-s:flex-col justify-between s:items-end">
                    <div>
                        <h1 className="max-md:text-[56px] max-s:text-[48px] text-mainWhite">Spotlight.</h1>
                        <p className="body1 text">Projects you'll love</p>
                    </div>
                    <div className="flex gap-[12px]">
                        <div className="base py-[8px] px-[24px] hover:bg-mainWhite hover:text-textColor rounded-full cursor-pointer">
                            1 days
                        </div>
                        <div className="base py-[8px] px-[24px] hover:bg-mainWhite hover:text-textColor rounded-full cursor-pointer">
                            7 days
                        </div>
                        <div className="base py-[8px] px-[24px] hover:bg-mainWhite hover:text-textColor rounded-full cursor-pointer">
                            30 days
                        </div>
                    </div>
                </div>
                <div className="grid s:grid-cols-4 gap-[40px] max-md:gap-[32px]">
                    {[...Array(12)].map((e) => {
                        return <Nft title="NFT" price="100 RUB" />;
                    })}
                </div>
                <div className="w-full text-center">
                    <button className="px-[36px] py-5 bg-mainWhite text-textColor">explorer more</button>
                </div>
            </div>

            <div className="px-5 md:px-16 py-[48px] md:py-[96px]">
                <div className="flex flex-col text-center pb-20 items-center">
                    <div className="s:w-[768px] ">
                        <h1 className="max-md:text-[56px] max-s:text-[48px]">Own your creativity.</h1>
                        <p className="body1 text-gray05">
                            Each web3 community is unique and deserves a custom marketplace with its own look, features,
                            fees.
                        </p>
                    </div>
                </div>
                <div className="grid grid-rows-3 gap-20">
                    <div className="grid s:grid-cols-2  h-fit">
                        <div className="bg-[#C3CAD4] w-full aspect-square rounded-[32px]"></div>
                        <div className="flex items-center justify-end w-full aspect-square ">
                            <div className="s:w-[640px] flex flex-col gap-10 items-start">
                                <h2 className="max-md:text-[56px] max-s:text-[48px]">Your Collection, your way.</h2>
                                <p className="body2 text-gray05">
                                    In web3, artists are taking back ownership and control over their creativity. All
                                    collections on Crypter are creator-owned smart contracts that will stand the test of
                                    time.
                                </p>
                                <div>
                                    <div className="flex items-center">
                                        <div>1</div>
                                        <p>You’ll earn a 10% royalty for all secondary market sales.</p>
                                    </div>
                                    <div className="flex items-center">
                                        <div>1</div>
                                        <p>Creativity is valuable on Crypter</p>
                                    </div>
                                </div>

                                <button className="px-[32px] py-[12px] border-2">learn more</button>
                            </div>
                        </div>
                    </div>
                    <div className="grid s:grid-cols-2 w-full h-fit">
                        <div className="flex items-center justify-start w-full max-s:order-2 aspect-square ">
                            <div className="s:w-[640px] flex flex-col gap-10 items-start">
                                <h2 className="max-md:text-[56px] max-s:text-[48px]">Lowest mint fees</h2>
                                <p className="body2 text-gray05">
                                    Minting an NFT is like adding your signature to a painting. Make your mark in web3
                                    with works that are emblematic of your creative practice. Plus, you’ll earn a 10%
                                    royalty for all secondary market sales. Forever.
                                </p>
                                <button className="px-[32px] py-[12px] border-2">learn more</button>
                            </div>
                        </div>
                        <div className="bg-[#DED0F4] w-full max-s:order-1 aspect-square rounded-[32px]"></div>
                    </div>
                    <div className="grid s:grid-cols-2 w-full h-fit ">
                        <div className="bg-[#C1D6D5] w-full aspect-square rounded-[32px]"></div>
                        <div className="flex items-center justify-end w-full aspect-square ">
                            <div className="s:w-[640px] flex flex-col gap-10 items-start">
                                <h2 className="max-md:text-[56px] max-s:text-[48px]">Lowest mint fees</h2>
                                <p className="body2 text-gray05">
                                    Minting an NFT is like adding your signature to a painting. Make your mark in web3
                                    with works that are emblematic of your creative practice. Plus, you’ll earn a 10%
                                    royalty for all secondary market sales. Forever.
                                </p>
                                <button className="px-[32px] py-[12px] border-2">learn more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
                
        </div>
    );
};

export default Home;
