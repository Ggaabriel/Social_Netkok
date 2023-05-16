import React from "react";
import { ReactComponent as Arrow } from "../../assets/icons/big arrow rigth.svg";
import { ReactComponent as Arrow2 } from "../../assets/icons/arrow right.svg";
import { ReactComponent as Placeholder } from "../../assets/icons/placeholder.svg";
import { ReactComponent as Hexagon } from "../../assets/icons/hexagon.svg";
type Props = {};

const Home = (props: Props) => {
    return (
        <div className="bg-mainWhite w-full text-textColor">
            <div className="grid s:grid-cols-2">
                <div className="flex max-s:flex-col mt-24 px-5 md:px-16">
                    <h1 className="hero max-md:text-[56px] max-md:leanding-[50px] ">
                        Curated
                        <br />
                        Artwork.
                    </h1>
                    <div className=" bg-acc06 m:min-w-[192px] m:h-[72px] max-m:min-w-[128px] max-m:h-[44px] max-s:w-[128px] rounded-full flex justify-center items-center s:my-8">
                        <Arrow className="w-[65%] h-[40%]" />
                    </div>
                </div>
                <div className="px-5 md:px-16 mt-24 py-8">
                    <p className="body2 text-gray05">
                        We are laying the groundwork for web3 — the next generation of the internet full of limitless
                        possibilities.
                    </p>
                    <button className="py-6 flex items-center gap-5">
                        start your search
                        <Placeholder className="stroke-gray03" />
                    </button>
                </div>
                <div className="w-full aspect-square bg-gray-400"></div>
                <div className="w-full aspect-square bg-acc04">
                    <div className="w-full h-full px-5 md:px-16 py-16 flex flex-col justify-between">
                        <div className="w-full grid grid-cols-2 md:grid-cols-3 h-20 bg-mainWhite  items-center  justify-items-center rounded-xl">
                            <div className="">
                                <p className="base">Collection</p>
                                <div className="flex items-center gap-3">
                                    <Placeholder />
                                    <p className="body1">Name</p>
                                </div>
                            </div>
                            <div className="">
                                <p className="base">Buy now</p>
                                <div className="flex items-center gap-3">
                                    <Placeholder />
                                    <p className="body1">Price</p>
                                </div>
                            </div>
                            <div className="max-md:hidden">
                                <p className="base">Reserve</p>
                                <div className="flex items-center gap-3">
                                    <Placeholder />
                                    <p className="body1">2Price</p>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <h1 className="max-md:text-[56px] max-md:leanding-[56px] max-s:text-[48px] max-s:leading-[48px] ">
                                The creator
                                <br />
                                network.
                            </h1>
                            <div className="flex justify-between gap-5">
                                <button className="w-full h-16 border-2 border-textColor rounded-md ">View NFT</button>
                                <button className="w-full h-16 text-mainWhite bg-textColor   rounded-md ">
                                    place a bid
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid s:grid-cols-2 w-full h-full">
                <div className="w-full h-full grid">
                    <div className="flex max-s:flex-col px-5 md:px-16 py-16 gap-10">
                        <h1 className="max-md:text-[56px] max-md:leanding-[56px] max-s:text-[48px] max-s:leading-[48px] ">
                            Hot NFT
                            <br />
                            artists of the
                            <br />
                            month.
                        </h1>
                        <button className=" bg-mainWhite w-20 h-20  transition shadow-md rounded-full flex items-center justify-center">
                            <Arrow2 className="stroke-mainBlack w-[18px] h-[15px]" />
                        </button>
                    </div>
                    <div className="body2 px-5 md:px-16 py-16 text-gray05 row-start-3 row-end-4">
                        We are laying the groundwork for web3 — the next generation of the internet full of limitless
                        possibilities. Join the millions of creators, collectors, and curators who are on this journey
                        with you.
                    </div>
                </div>
                <div className="w-full h-full">
                    <div className="w-full  grid grid-cols-2 bg-gray03 gap-[1px] pb-[1px]">
                        {[...Array(8)].map((_, index) => (
                            <div
                                key={index}
                                className="w-full transition group max-w-[400px] aspect-[1/1] max-md:aspect-[1/1.5] bg-gray02 hover:bg-mainWhite hover:shadow-[0px_62px_48px_-16px_rgba(0,0,0,0.1)] hover:z-10"
                            >
                                <div className="p-6 h-full flex flex-col">
                                    <div className=" flex justify-end">
                                        <div className="flex justify-center">
                                            <Hexagon className="fill-mainWhite  transition group-hover:fill-textColor" />
                                            <p className="base absolute p-2 group-hover:text-mainWhite">{index + 1}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center flex-col justify-center flex-grow">
                                        <div className=" rounded-full bg-gray03 w-[120px] max-md:w-28 aspect-square"></div>
                                        <div className="text-center">
                                            <p className="body1 text-textColor">Nickname</p>
                                            <p className="base text-gray05">
                                                Total sale: <span className="text-mainBlack">2.2 RUB</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="w-full h-[10vh] col-start-1 col-end-3 flex items-center bg-gray02">
                        <button className="w-5/6 h-10 bg-textColor text-mainWhite mx-auto block">EXPLORE MORE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
