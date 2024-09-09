import React from 'react'
import { offerCards } from '../common/Helper'

const OfferCards = () => {
    return (
        <div>
            <div className="container sm:max-w-[600px] lg:max-w-[1164px] mx-auto px-3 lg:px-4 xl:px-3 py-12 md:py-16 lg:py-[70px] xl:pt-[130px] xl:pb-[150px]">
                <div className="grid sm:grid-cols-2  lg:grid-cols-4 gap-[22px]">
                    {offerCards.map((data, index) => (
                        <div key={index} className=' max-w-[268px] mx-auto group max-h-[262px] px-[10px] py-[22px] bg-white rounded-md shadow-[0_4px_27px_0_#4B17E614]'>
                            <div className="max-w-[248px] lg:min-h-[156px]  xl:min-h-[182px] lg:max-h-[156px]  xl:max-h-[182px]  rounded-md overflow-hidden" ><img className='group-hover:scale-105 object-cover w-full duration-300' src={data.img} alt="DataImages" /></div>
                            <p className='pt-3 font-poppins font-semibold text-xl text-center leading-[120%] text-darkblue' >{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OfferCards
