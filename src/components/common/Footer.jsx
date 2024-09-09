import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import footerLogo from '../../asstes/images/svg/footerLogo.svg';
import { footerIcons } from './Helper';
import footerVector1 from '../../asstes/images/webp/footer/footerVector1.webp';
import footerVector2 from '../../asstes/images/webp/footer/footerVector2.webp';

const Footer = () => {
    const location = useLocation();

    return (
        <div className='bg-darkblue relative'>
            <img src={footerVector1} alt="footerVector1" className='sm:w-[205px] sm:h-[360px] w-[150px] h-[200px] absolute left-0 top-0 pointer-events-none ' />
            <img src={footerVector2} alt="footerVector2" className='sm:w-[205px] sm:h-[360px] w-[150px] h-[200px] absolute right-0 bottom-0 pointer-events-none ' />
            <div className={`container xl:max-w-[1140px] px-3 mx-auto ${location.pathname === '/contact' ? 'pt-[81px]' : 'pt-[150px] md:pt-[210px]'}`}>
                <div className='flex flex-row flex-wrap pb-[48px] sm:pb-[64px] md:pb-[80px] lg:pb-[98px] justify-between'>
                    <div className='lg:w-4/12 w-full'>
                        <Link to="/">
                            <img src={footerLogo} alt="logo" className='sm:w-[252px] h-[33px] w-[230px]' />
                        </Link>
                        <p className='font-poppins text-white opacity-70 max-w-[311px] leading-normal mt-2 sm:mt-4 mb-4 sm:mb-[30px]'>Libero morbi pharetra sollicitudin enim praesent nulla velit sitonec leodui.</p>
                        <div className="flex gap-[16px] items-center">
                            {footerIcons.map((icon, index) => {
                                return (
                                    <Link key={index} to={icon.link} aria-label={icon.label} target='blank' className="hover:-translate-y-2 transition-all duration-300 ease-linear">
                                        {icon.footersvg}
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className='lg:w-7/12 w-full mt-[40px] lg:mt-0'>
                        <div className='flex flex-wrap flex-row lg:justify-end'>
                            <div className='sm:w-3/12 w-6/12'>
                                <ul>
                                    <li className='text-white font-poppins font-semibold text-base mb-[14px] inline-block'>Home</li>
                                    <li><Link to="/about" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]'>About us</Link></li>
                                    <li><Link to="/offer" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]'>Offer</Link></li>
                                    <li><Link to="/contact" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]'>Contact</Link></li>
                                </ul>
                            </div>
                            <div className='lg:w-[29%] sm:w-3/12 w-6/12'>
                                <ul>
                                    <li className='text-white font-poppins font-semibold text-base mb-[14px] inline-block'>Agency</li>
                                    <li><Link to="/vision" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] text-nowrap'>Fox Vision GmbH </Link></li>
                                    <li><Link to="https://www.google.com/maps/place/Badstrasse+50,+5200+Brugg,+Switzerland" target='blank' className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] max-w-[149px]'>Badstrasse 50 CH-5200 Brugg</Link></li>
                                    <li><Link to="tel:+919711008738" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] text-nowrap'>+41 79 725 61 00</Link></li>
                                    <li><Link to="mailto:info@foxvision.ch" className='text-white opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] text-nowrap'>info@foxvision.ch</Link></li>
                                </ul>
                            </div>
                            <div className='sm:w-4/12 w-full flex sm:justify-end md:justify-center lg:justify-end mt-2 sm:mt-0'>
                                <ul>
                                    <li className='text-white font-poppins font-semibold text-base mb-[14px] inline-block'>Legal</li>
                                    <li><Link to="/imprint" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]'>Imprint</Link></li>
                                    <li><Link to="/Dataprotection" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px] text-nowrap'>Data protection</Link></li>
                                    <li><Link to="/Copyright" className='text-white text-opacity-70 hover:text-white font-poppins font-normal text-base mb-[12px] inline-block after:h-[1px] after:w-[0] hover:after:w-full after:bg-white after:absolute relative after:transition-all after:duration-300 after:ease-linear left-0 after:left-[50%] hover:after:left-[0] after:bottom-[-2px] after:rounded-[10px]'>Copyright</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-center text-white opacity-70 text-sm font-normal font-poppins pb-[12px] px-8 sm:px-0">
                    Copyright©{new Date().getFullYear()} Fox Vision GmbH. All right reserved.
                </p>
            </div>
        </div>
    );
};

export default Footer;
