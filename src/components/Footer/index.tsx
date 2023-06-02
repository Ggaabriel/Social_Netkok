import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/images/logo.svg";
type Props = {};

const Footer = (props: Props) => {
    const location = useLocation();
    return (
        <div className="grid grid-cols-2 max-s:hidden">
            <div className="px-5 md:px-16 py-5 md:py-16">
                <div className={`flex  w-full  flex-col`}>
                    <NavLink to={"/"} className="flex items-center">
                        <Logo className={` ${location.pathname === `/` ? `fill-mainBlack` : `fill-mainWhite`}`} />
                        <h1
                            className={`font-inter font-black text-2xl text-logo  ${
                                location.pathname === `/` ? `text-mainBlack` : `text-mainWhite`
                            }`}
                        >
                            Cry
                        </h1>
                    </NavLink>
                    Empower your creativity.
                </div>
            </div>
            <div className="px-5 md:px-16 py-5 md:py-16 flex items-center justify-start">
                <div className="flex justify-between w-full">
                    <ul className="flex flex-col gap-[22px]">
                        <li>
                            <button>CRYPTER.</button>
                        </li>
                        <li>Explorer</li>
                        <li>Connect wallet</li>
                        <li>Upload</li>
                        <li>How it work</li>
                    </ul>
                    <ul className="flex flex-col gap-[22px]">
                        <li>
                            <button>INFO</button>
                        </li>
                        <li>Download</li>
                        <li>Help center</li>
                        <li>Blog</li>
                        <li>Jobs</li>
                    </ul>
                    <ul className="flex flex-col gap-[22px]">
                        <li>
                            <button>SOCIAL</button>
                        </li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                        <li>Facebook</li>
                        <li>Mirror</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
