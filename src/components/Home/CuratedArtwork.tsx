import React from "react";
import { ReactComponent as Placeholder } from "../../assets/icons/placeholder.svg";
import { ReactComponent as Arrow } from "../../assets/icons/big arrow rigth.svg";

type Props = {};

const CuratedArtwork = (props: Props) => {
    return (
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
                            <button className="w-full h-16 border-2 transition hover:text-mainWhite border-textColor hover:bg-textColor rounded-md ">View NFT</button>
                            <button className="w-full h-16 border-2 transition hover:text-mainWhite border-textColor hover:bg-textColor rounded-md ">
                                place a bid
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CuratedArtwork;
