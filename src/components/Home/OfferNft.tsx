import React, { useEffect, useState } from "react";

type Props = {
    user: string;
    price: string;
    endStamp: number;
};
export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

const OfferNft = ({ user, price, endStamp }: Props) => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = endStamp - now.getTime();

        if (difference <= 0) {
            // Если прошла целевая дата, то таймер закончил свою работу
            setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setTimeLeft({ days, hours, minutes, seconds });
        }
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            calculateTimeLeft();
        }, 1000);

        return () => clearTimeout(timer);
    });
    return (
        <div className="border-2 border-black w-full aspect-square bg-acc04 px-5 md:px-16 py-5 md:py-16 flex flex-col items-start justify-between">
            <div className="bg-textColor/75 px-[12px] py-[12px] flex justify-between items-center gap-4 rounded-[12px]">
                <div className="bg-gray03 w-10 aspect-square rounded-[8px] "></div>
                <p className="title">@randomdash</p>
            </div>
            <div className="w-full flex justify-between">
                <div>
                    <p className="title">Current bid</p>
                    <h3 className="">{price}</h3>
                    <p className="title">price in dollars</p>
                </div>
                <div className="">
                    <p className="title">Auction ends in</p>
                    <div className=" flex justify-between gap-[32px]">
                        <div>
                            <h3>{timeLeft.hours}</h3>
                            <p className="title">hours</p>
                        </div>
                        <div>
                            <h3>{timeLeft.minutes}</h3>
                            <p className="title">minutes</p>
                        </div>
                        <div>
                            <h3>{timeLeft.seconds}</h3>
                            <p className="title">seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferNft;
