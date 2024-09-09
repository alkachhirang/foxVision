import React, { useState, useEffect } from "react";
import { CommonsubHeading } from '../common/CommonHeading';
import contactConversation from '../../asstes/images/webp/contact-us/contactConversation.webp';
import robotsvg from '../../asstes/images/svg/robot.svg';
import CommonBtn from "../common/CommonBtn";
import CustomCheckbox from "./CustomCheckbox";
import { AiOutlineClose } from 'react-icons/ai';

const ContactWithFoxvision = () => {
    const [showSuccessPopup, setShowSuccessPopup] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        subject: "",
        number: "",
        email: "",
        message: "",
        box: false,
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        lastname: "",
        subject: "",
        number: "",
        email: "",
        message: "",
        box: "",
    });

    useEffect(() => {
        if (showSuccessPopup) {
            const timer = setTimeout(() => {
                handlePopupClose();
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [showSuccessPopup]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if (name === 'number' && (!/^\d*$/.test(value) || value.length > 10)) {
            return;
        }
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleCheckboxChange = (event) => {
        const isChecked = event.target.checked;
        setFormData((prevFormData) => ({
            ...prevFormData,
            box: isChecked,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const regex = {
            name: /^[a-zA-Z\s]*$/,
            lastname: /^[a-zA-Z\s]*$/,
            subject: /^.*$/,
            number: /^\d{10}$/,
            email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: /^.*$/,
        };
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = "Name is required.";
        } else if (!regex.name.test(formData.name)) {
            errors.name = "Name is invalid.";
        }
        if (!formData.lastname.trim()) {
            errors.lastname = "Last Name is required.";
        } else if (!regex.lastname.test(formData.lastname)) {
            errors.lastname = "Last Name is invalid.";
        }
        if (!formData.subject.trim()) {
            errors.subject = "Subject is required.";
        } else if (!regex.subject.test(formData.subject)) {
            errors.subject = "Subject is invalid.";
        }
        if (!formData.number.trim()) {
            errors.number = "Number is required.";
        } else if (!regex.number.test(formData.number)) {
            errors.number = "Number is invalid.";
        }
        if (!formData.email.trim()) {
            errors.email = "Email is required.";
        } else if (!regex.email.test(formData.email)) {
            errors.email = "Email is invalid.";
        }
        if (!formData.message.trim()) {
            errors.message = "Message is required.";
        } else if (!regex.message.test(formData.message)) {
            errors.message = "Message is invalid.";
        }
        if (!formData.box) {
            errors.box = "Please confirm you are not a robot";
        }
        setFormErrors(errors);
        if (Object.keys(errors).length === 0) {
            setShowSuccessPopup(true);
        }
    };

    const handlePopupClose = () => {
        setShowSuccessPopup(false);
        setFormData({
            name: "",
            lastname: "",
            subject: "",
            number: "",
            email: "",
            message: "",
            box: false,
        });
        setFormErrors({
            name: "",
            lastname: "",
            subject: "",
            number: "",
            email: "",
            message: "",
            box: "",
        });
    };

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (!e.target.closest(".success-popup")) {
                handlePopupClose();
            }
        };
        if (showSuccessPopup) {
            document.addEventListener("mousedown", handleOutsideClick);
        } else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [showSuccessPopup]);

    return (
        <div className='xl:pt-[126px] lg:pt-20 md:pt-16 sm-pt-14 pt-12'>
            <div className='container xl:max-w-[1164px] px-3 lg:px-4 xl:px-3 mx-auto'>
                <div className='flex flex-wrap flex-row justify-center lg:justify-between '>
                    <div className='lg:w-[43%] w-full'>
                        <CommonsubHeading className="lg:!text-start !uppercase" subheading="Contact With FoxVision" />
                        <h2 className='font-semibold font-montserrat text-center lg:text-start text-4xl md:text-5xl xl:text-6xxl !leading-md text-darkblue mb-5'>Let's Start a Conversation</h2>
                        <div className='flex justify-center items-center lg:justify-start'>
                            <img src={contactConversation} alt="contactConversation" className='max-w-[483px] xl:h-[349px] w-full' />
                        </div>
                    </div>
                    <div className='lg:w-[53%] w-full sm:w-[80%] mt-[40px] lg:mt-[57px]'>
                        <form onSubmit={handleSubmit}>
                            <div className='flex sm:flex-row flex-col sm:gap-[11px]'>
                                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-3">
                                    <input className="text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-12 sm:h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                        type="text"
                                        placeholder="First Name"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {formErrors.name && (
                                        <p className="error-message font-poppins text-red-600">{formErrors.name}</p>
                                    )}
                                </div>
                                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-3">
                                    <input className="text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-12 sm:h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                        type="text"
                                        placeholder="Last Name"
                                        id="lastname"
                                        name="lastname"
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {formErrors.lastname && (
                                        <p className="error-message font-poppins text-red-600">{formErrors.lastname}</p>
                                    )}
                                </div>
                            </div>
                            <div className="flex sm:flex-row flex-col sm:gap-[11px]">
                                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-3">
                                    <input className="text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-12 sm:h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                        type="text"
                                        placeholder="Subject"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        autoComplete="off"
                                    />
                                    {formErrors.subject && (
                                        <p className="error-message font-poppins text-red-600">{formErrors.subject}</p>
                                    )}
                                </div>
                                <div className="lg:max-w-[297px] w-full mb-3 sm:mb-3">
                                    <input className="text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-12 sm:h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                        type="text"
                                        placeholder="Mobile Number"
                                        id="number"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        autoComplete="off"
                                        maxLength={10}
                                    />
                                    {formErrors.number && (
                                        <p className="error-message font-poppins text-red-600">{formErrors.number}</p>
                                    )}
                                </div>
                            </div>
                            <div className="w-full mb-3 sm:mb-3">
                                <input className="text-base !text-black placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 h-12 sm:h-[55px] font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                    type="text"
                                    placeholder="Email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                                {formErrors.email && (
                                    <p className="error-message font-poppins text-red-600">{formErrors.email}</p>)}
                            </div>
                            <div className="w-full mb-3 sm:mb-3 lg:mb-[18px]" >
                                <textarea className="resize-none text-base !text-black h-[100px] sm:h-[159px] placeholder:text-black placeholder:!text-opacity-50 !text-opacity-50 font-poppins font-normal p-3 sm:p-[15px] outline-none w-full border border-lightBlue shadow-[0px_0px_5px_-2px_#4B17E666]"
                                    type="text"
                                    placeholder="Tell us more about your projects"
                                    id="message"
                                    name="message"
                                    rows="5"
                                    cols="20"
                                    value={formData.message}
                                    onChange={handleChange}
                                    autoComplete="off"
                                />
                                {formErrors.message && (
                                    <p className="error-message font-poppins text-red-600">{formErrors.message}</p>
                                )}
                            </div>
                            <div className="flex justify-center lg:justify-start" >
                                <div className="w-full max-w-[277px] border border-offGrey bg-extraLightgrey rounded-[6px] p-[8px_12px_7px_13px]">
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-2">
                                            <CustomCheckbox
                                                checked={formData.box}
                                                onChange={handleCheckboxChange}
                                            />
                                        </div>
                                        <div>
                                            <img src={robotsvg} alt="robotsvg" className="mx-auto w-[49px] h-[45px]" />
                                            <p className='font-normal font-poppins !text-[8px] text-lightGrey '>Privacy - Terms</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {formErrors.box && (
                                <p className="error-message font-poppins text-red-600 mt-[-5px]" >{formErrors.box}</p>
                            )}
                            <div className="flex lg:justify-start justify-center pt-[18px]">
                                <CommonBtn type="submit" className="md:!px-[99px]" btnName="Send Message" />
                            </div>
                        </form>
                        {showSuccessPopup && (
                            <div className="success-popup fixed top-[50%] left-[50%] h-[200px] sm:h-[280px] md:h-[350px] w-full max-w-[300px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] bg-white border border-darkpurple p-[20px] sm:p-[40px] rounded shadow-[0px_0px_10px_0px_#0000001A] flex justify-center items-center flex-col translate-x-[-50%] translate-y-[-50%] z-[50]">
                                <button
                                    className="absolute top-2 right-2 text-darkblue"
                                    onClick={handlePopupClose}
                                >
                                    <AiOutlineClose size={24} />
                                </button>
                                <p className="mb-[40px] text-darkblue text-xl sm:text-3xl font-semibold font-poppins text-center leading-normal">
                                    Message sent successfully!
                                </p>
                                <div className="flex justify-center items-center">
                                    <div className="w-full">
                                        <button
                                            onClick={handlePopupClose}
                                            className="sm:py-[14px] py-3 sm:px-[50px] px-7 bg-sky hover:bg-darkpurple transition-all duration-300 ease-in-out rounded-[69px] text-white font-semibold font-poppins sm:text-base text-sm leading-normal"
                                        >
                                            Ok
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ContactWithFoxvision;
