import React from "react";
import { angebotCardList } from "../common/Helper";
import { FoxWhiteLogo } from "../common/Icons";
import { CommonHeading, CommonsubHeading } from "../common/CommonHeading";
import AngebotCard from "./AngebotCard";

export const Angebot = () => {
    return (
        <div className="bg-darkpurple xl:pt-[122.94px] lg:pt-[90px] sm:pt-[64px] pt-[48px]">
            <div className="container xl:max-w-[1164px] px-3 lg:px-4 xl:px-3 mx-auto">
                <CommonsubHeading className='text-white !text-center' subheading=" A RESULTS-DRIVEN AGENCY" />
                <CommonHeading heading="Angebot" className="!text-center text-white" />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-3 xl:gap-[22px]  xl:pt-[98px] lg:pb-[77px] xl:py-16 py-8">
                    {angebotCardList.map((data, index) => (
                        <div key={index}>
                            <AngebotCard
                                className={`${index === 0 ? "sm:pb-[59px]" : index === 1 ? "sm:pb-[59px]" : index === 2 ? "sm:pb-[59px]" : ""}`}
                                angebotsvg={data.angebotsvg}
                                title={data.title}
                                description={data.description}
                                cardBtn={data.cardBtn}
                                Btnarrow={data.Btnarrow}
                                bgCardSvg={index === 0 || index === 2 || index === 4}
                                cardLink={index === 3 || index === 4 || index === 5}
                            />
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <FoxWhiteLogo className="lg:w-[141px] lg:h-[172px] sm:w-[120px] sm:h-[100px] h-[80px] w-[101px] cursor-pointer" />
                </div>
            </div>
        </div>
    );
};

export default Angebot;