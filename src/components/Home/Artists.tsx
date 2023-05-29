import React from "react";
import { ReactComponent as Hexagon } from "../../assets/icons/hexagon.svg";
import { ReactComponent as Arrow2 } from "../../assets/icons/arrow right.svg";
type Props = {};

const Artists = (props: Props) => {
    return (
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
                    possibilities. Join the millions of creators, collectors, and curators who are on this journey with
                    you.
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
    );
};

export default Artists;
