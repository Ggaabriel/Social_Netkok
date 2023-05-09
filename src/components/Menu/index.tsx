import React from "react";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { NavLink } from "react-router-dom";

type Props = {
    setIsMenu: (value: boolean) => void;
    isMenu: boolean;
};

const Menu = ({ setIsMenu, isMenu }: Props) => {
    const menuItemsText = [`Discover`, `Create`, `Feed`, `Help center`, `Blog`];
    return (
        <div className="z-30 text-textColor h-full w-full max-w-[1920px] mx-auto fixed">
            <div className="s:flex w-full h-full">
                <div className="bg-acc02 w-full">
                    <div className="w-full grid s:grid-cols-3 grid-cols-2 gap-3 px-5 md:px-16 "></div>
                </div>
                <div className="bg-mainBlack w-full h-full">
                    <div className=" grid grid-cols-1 grid-rows-6  px-10">
                        <div className="flex justify-end h-24">
                            <button
                                onClick={() => {
                                    setIsMenu(!isMenu);
                                }}
                            >
                                <Close className=" stroke-gray03" />
                            </button>
                        </div>
                        {menuItemsText.map((elem,i) => {
                            return (
                                <NavLink to={"/"} className="text-gray03 ">
                                    <h3 className="background01 min-s: text-[32px]">{elem}</h3>
                                </NavLink>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;
