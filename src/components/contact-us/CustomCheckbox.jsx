import React from 'react';
import { CheckSvg } from '../common/Icons';

const CustomCheckbox = ({ checked, onChange }) => {
    return (
        <label className="inline-flex items-center cursor-pointer">
            <input
                type="checkbox"
                className="hidden"
                checked={checked}
                onChange={onChange}
            />
            <span className="w-[22px] h-[22px] border-[2.5px] border-grey rounded-sm flex-shrink-0 flex justify-center items-center mr-2">
                {checked && (
                    <CheckSvg />
                )}
            </span>
            <span className="select-none text-black cursor-pointer font-poppins opacity-70 !leading-[150%] text-sm sm:text-base font-normal ">  I’m not a robot</span>
        </label>
    );
};

export default CustomCheckbox;