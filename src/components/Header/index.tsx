import React from "react";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
import { ReactComponent as Burger } from "../../assets/icons/burger.svg";
import { NavLink, useLocation } from "react-router-dom";

type Props = {
    setIsMenu: (value: boolean) => void;
    isMenu: boolean;
};

const Header = ({ setIsMenu, isMenu }: Props) => {
    const location = useLocation();
    return (
        <header className="fixed max-w-[1600px] mx-auto flex justify-between items-center  w-full h-24 z-20 px-10">
            <div className={`flex items-center w-full h-[inherit] s:border-r border-b  ${location.pathname === `/` ? `border-b-mainBlack s:border-r-mainBlack/50`: `border-b-mainWhite/50 s:border-r-mainWhite/50`}`}>
                <NavLink to={"/"} className="flex items-center">
                    <Logo className={` ${location.pathname === `/` ? `fill-mainBlack`:`fill-mainWhite`}`} />
                    <h1 className= {`font-inter font-black text-2xl text-logo  ${location.pathname === `/` ? `text-mainBlack`: `text-mainWhite`}`}>Cry</h1>
                </NavLink>
            </div>
            <div className={`gap-10 w-full h-[inherit] flex justify-end border-b ${location.pathname === `/` ? `border-b-mainBlack`: `border-b-mainWhite/50`} `}>
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
                    <Burger className={` ${location.pathname === `/` ? `fill-mainBlack`: `fill-gray03`} `}/>
                </button>
            </div>
        </header>
    );
};

export default Header;
