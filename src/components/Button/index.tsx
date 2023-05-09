import React from "react";
import { SelectedPage } from "../../shared/types";

type Props = {
    text: string;
    className: string;
    number: number;
    setSelectedPage: (value: SelectedPage) => void;
    selectedPage: SelectedPage;
    currentPage: SelectedPage;
};

const Button = ({ text, className, number, selectedPage, currentPage, setSelectedPage }: Props) => {
    return (
        <button onClick={()=>{
            setSelectedPage(currentPage);
        }} className={`${className} ${selectedPage === currentPage ? "selected" : ""}`}>
            {text} {number}
        </button>
    );
};

export default Button;
