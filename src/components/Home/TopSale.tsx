import React, { useEffect, useRef } from "react";
import useColorLight from "../../hooks/useColorLight";
import useMediumColor from "../../hooks/useMediumColor";
type Props = {};

const TopSale = (props: Props) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const randomNumber = useRef( Math.floor(Math.random() * (3 - 1 + 1)) + 1);
    const image = `topSale${randomNumber.current}.jpg`;
    const backgroundColor = useMediumColor(canvasRef, image);
    const textColor = useColorLight(backgroundColor);
    return (
        <div
            style={{ backgroundColor: `${backgroundColor}` }}
            className={`w-full s:h-[584px] md:h-[1000px] grid s:grid-cols-2 px-5 md:px-16 items-center`}
        >
            <div className="w-full s:max-w-[500px] h-full max-h-[500px] flex flex-col justify-evenly s:pr-5">
                <div>
                    <div className="w-fit gap-[16px] flex justify-between ">
                        <div className="flex justify-between items-center gap-[16px] py-[12px] px-[12px] bg-textColor rounded-xl">
                            <div className="rounded-full bg-gray05 w-10 h-10"></div>
                            <p className="title text-mainWhite">Nickname</p>
                        </div>
                        <div className="max-s:hidden flex justify-between items-center gap-[16px] py-[12px] px-[12px] bg-textColor rounded-xl">
                            <div className="rounded-lg bg-gray05 w-10 h-10"></div>
                            <p className="title text-mainWhite">NFT Collection</p>
                        </div>
                    </div>
                    <h1
                        className={`${
                            textColor ? "text-textColor" : "text-mainWhite"
                        } max-md:text-[56px] max-s:text-[48px]`}
                    >
                        NFT NAME
                    </h1>
                </div>
                <div className="grid grid-cols-2 items-center">
                    <p className="title text-gray04 col-start-1 col-end-3">Buy now price</p>
                    <h3
                        className={`${
                            textColor ? "text-textColor" : "text-mainWhite"
                        } block w-full max-s:col-start-1 max-s:col-end-3 max-s:text-[32px]`}
                    >
                        8.00 ETH
                    </h3>
                    <button
                        className={`${
                            textColor
                                ? "text-textColor border-textColor hover:bg-textColor hover:text-mainWhite"
                                : "text-mainWhite border-mainWhite hover:bg-mainWhite hover:text-textColor"
                        } max-s:mt-[24px] w-full h-16 border-2 transition rounded-md
                                            max-s:row-start-4 max-s:col-start-1 max-s:col-end-3`}
                    >
                        make offer
                    </button>
                    <p className="title text-gray04 col-start-1 col-end-3">price in dollars</p>
                </div>
            </div>
            <div className="w-full h-full flex items-center">
                <img src={image} alt="" className=" aspect-square w-[800px] object-cover" />
                {backgroundColor === null && <canvas ref={canvasRef} className=" hidden"></canvas>}
            </div>
        </div>
    );
};

export default TopSale;
