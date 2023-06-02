import React from "react";

type Props = {
    title:string;
    price: string;
};

const Nft = ({title, price}: Props) => {
    return (
        <div className="w-full h-fit md:py-[24px] s:py-[16px]">
            <div className="w-full  aspect-square bg-gray03"></div>
            <div>
                <p className="body1 text-mainWhite">
                    {title}
                </p>
                <p>Buy now <span className="base text-mainWhite">{price}</span></p>
            </div>
        </div>
    );
};

export default Nft;
