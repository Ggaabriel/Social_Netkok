import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Burger } from "../../assets/icons/burger.svg";
import { NavLink } from "react-router-dom";

type Props = {
    setIsMenu: (value: boolean) => void;
    isMenu: boolean;
};

const Header = ({ setIsMenu, isMenu }: Props) => {
    return (
        <header className="fixed max-w-[1600px] mx-auto flex justify-between items-center  w-full h-24 z-20 px-10">
            <div className="flex items-center w-full h-[inherit] s:border-r border-b s:border-r-mainWhite/50 border-b-mainWhite/50">
                <NavLink to={"/"} className="flex items-center">
                    <Logo className=" fill-mainWhite" />
                    <h1 className=" font-inter font-black text-2xl text-logo text-mainWhite">Cry</h1>
                </NavLink>
            </div>
            <div className="gap-10 w-full h-[inherit] flex justify-end border-b border-b-mainWhite/50">
                <button>
                    <NavLink to={"/profile"}>
                        <div className="bg-gray05 w-10 h-10 rounded-full"></div>
                    </NavLink>
                </button>
                <button
                    onClick={() => {
                        setIsMenu(!isMenu);
                    }}
                >
                    <Burger className="fill-gray03" />
                </button>
            </div>
        </header>
    );
};

export default Header;
