import React from "react";
import { TopArrow } from "./Icons";

function Backtotop() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            document.getElementById("Top").style.display = "flex";
        } else {
            document.getElementById("Top").style.display = "none";
        }
    });

    function up() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
    return (
        <>
            <button id="Top" className="cursor-pointer hidden fixed z-20 sm:bottom-5 bottom-2 right-2 sm:right-5 p-1 sm:p-3 bg-darkpurple border border-white rounded-2xl animate-bounce" onClick={up}>
                <TopArrow />
            </button>
        </>
    );
}

export default Backtotop;