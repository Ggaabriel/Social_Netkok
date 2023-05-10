import React from "react";
import Button from "../../components/Button";
import { ReactComponent as Copy } from "../../assets/icons/copy.svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/profile.svg";
import { SelectedPage } from "../../shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
    selectedPage: SelectedPage;
};

const Profile = ({setSelectedPage, selectedPage}: Props) => {
    return (
        <section className=" text-textColor h-without-300">
            <div className="s:grid s:grid-cols-2 bg-mainWhite w-full h-full">
                <div className="bg-mainWhite w-full h-fit">
                    <div className="w-full grid s:grid-cols-3 grid-cols-2 gap-3 px-5 md:px-16 ">
                        <div className="bg-mainBlack rounded-full s:w-52 s:h-52 h-40 w-40 s:-mt-32 -mt-24 z-10 col-start-1 col-end-4 shadow-[0px_0px_0px_12px_rgba(255,255,255,0.5)]"></div>
                        <div className="col-start-1 col-end-3">
                            <h2 className="">Nickname</h2>
                        </div>
                        <div className="flex md:justify-end max-md:row-start-4 max-md:row-end-5 max-md:col-start-1 max-md:col-end-4">
                            <button className=" my-auto py-3 px-8 border-2 border-gray03 rounded-md whitespace-nowrap">
                                FOLLOW +
                            </button>
                        </div>
                        <div className="col-start-1 col-end-4 flex items-center gap-8">
                            <span className="body1 text-gray05">@nickname</span>
                            <div className="flex gap-3 bg-logoC px-3 py-2 rounded-xl">
                                <span className=" base text-textColor">link....5533B</span>
                                <Copy className=" stroke-mainBlack" />
                            </div>
                        </div>
                        <div className=" max-s:hidden">
                            <h4>123 ETH</h4>
                            <div className="flex">
                                <ProfileIcon className="stroke-gray05" />
                                <p className="base text-gray05">Total sales</p>
                            </div>
                        </div>
                        <div>
                            <h4>123</h4>
                            <div className="flex">
                                <ProfileIcon className="stroke-gray05" />
                                <p className="base text-gray05">Following</p>
                            </div>
                        </div>
                        <div>
                            <h4>123</h4>
                            <div className="flex">
                                <ProfileIcon className="stroke-gray05" />
                                <p className="base text-gray05">Followers</p>
                            </div>
                        </div>
                        <p className=" button text-gray05 col-start-1 col-end-3">BIO</p>
                        <p className="basem text-gray05 col-start-1 col-end-3">
                            We are laying the groundwork for web3 — the next generation of the internet full of
                            limitless possibilities. Join the millions of creators, collectors, and curators who are on
                            this journey.
                        </p>
                    </div>
                </div>
                <div className="bg-mainBlack w-full s:h-full h-fit s:overflow-auto flex flex-col">
                    <div className="h-20 w-full flex justify-around">
                        <Button
                            className="text-gray05 w-full h-20 border-b border-b-textColor"
                            text="123"
                            number={4}
                            setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}
                            currentPage={SelectedPage.Created}
                        />
                        <Button
                            className="text-gray05 w-full h-20 border-b border-b-textColor"
                            text="123"
                            number={4}
                            setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}
                            currentPage={SelectedPage.Collections}
                        />
                        <Button
                            className="text-gray05 w-full h-20 border-b border-b-textColor"
                            text="123"
                            number={4}
                            setSelectedPage={setSelectedPage}
                            selectedPage={selectedPage}
                            currentPage={SelectedPage.Owned}
                        />
                    </div>
                    <div className="flex flex-col w-full h-full px-5 md:px-16">
                        <div className="flex justify-between col-start-1 col-end-3 py-10">
                            <button className="base w-full text-gray05 tracking-normal normal-case text-left">
                                Collected by{" "}
                            </button>
                            <div className="base text-gray05 flex">
                                <p>1</p>
                                <p>2</p>
                                <p>3</p>
                            </div>
                        </div>
                        <div className="h-full grid grid-cols-1 gap-4 s:grid-cols-2 md:gap-6">
                            {[...Array(12)].map((_, index) => (
                                <div key={index} className="">
                                    <div className="w-full aspect-square bg-gray-400"></div>
                                    <p className="body1 text-mainWhite">NFT</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
