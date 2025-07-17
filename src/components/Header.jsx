import React, { useState, useRef, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoTicket } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const timeoutRef = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(timeoutRef.current);
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 200); // Delay in ms
    };

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current); // Clean up on unmount
    }, []);

    const locations = [
        {
            name: "Kochi",
            image:
                "https://d22pimhl2qmbj7.cloudfront.net/public/Kochi_cb42a7a748_3d2d5912c4.webp?w=48&q=75",
        },
        {
            name: "Bengaluru",
            image:
                "https://d22pimhl2qmbj7.cloudfront.net/public/Bangalore_a29cdf2e2c_dd51c380ad.webp?w=48&q=75",
        },
        {
            name: "Hyderabad",
            image:
                "https://d22pimhl2qmbj7.cloudfront.net/public/Hyderabad_44ee040feb.jpg?w=96&q=75",
        },
        {
            name: "Bhubaneshwar",
            image:
                "https://d22pimhl2qmbj7.cloudfront.net/public/Bhubaneswar_b007f8a2ac.jpg?w=96&q=75",
        },
    ];

    const iconStyle = {
        color: "transparent",
        filter:
            "brightness(0) saturate(100%) invert(48%) sepia(12%) saturate(368%) hue-rotate(182deg) brightness(94%) contrast(86%)",
    };

    return (
        <div className="bg-white flex justify-between items-center px-6 py-4 shadow mx-14 rounded-2xl">
            <img
                className="transition-transform duration-300 hover:scale-110 h-12 cursor-pointer"
                src="https://d22pimhl2qmbj7.cloudfront.net/public/Main_Logo_0ad2299b54.png?w=256&q=75"
                alt="wonderla"
            />

            <ul className="flex text-gray-500 font-bold text-lg cursor-pointer relative">
                <li
                    className="mx-4 relative"
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={dropdownRef}
                >
                    <div className="flex items-center gap-2 cursor-pointer">
                        <CiLocationOn />
                        LOCATION
                        <svg
                            className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                            />
                        </svg>
                    </div>

                    {isOpen && (
                        <div
                            className="absolute top-full left-0 mt-4 bg-white border shadow w-80 z-50 rounded-2xl"
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                        >
                            {locations.map((loc, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 px-4 py-2 my-4 hover:bg-gray-100 text-lg text-gray-800 border-b last:border-b-0"
                                >
                                    <img
                                        src={loc.image}
                                        alt={`${loc.name} image`}
                                        className="h-8 w-8 object-cover rounded-[10px]"
                                    />
                                    <span>{loc.name}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </li>

                {/* Other Menu Items */}
                {[
                    {
                        label: "OFFERS",
                        icon: "https://d22pimhl2qmbj7.cloudfront.net/public/discount_star_01_fdc6bc5632.svg?w=48&q=75",
                    },
                    {
                        label: "RIDES",
                        icon: "https://d22pimhl2qmbj7.cloudfront.net/public/marker_02_e495ae7481.svg?w=48&q=75",
                    },
                    {
                        label: "RESTAURANTS",
                        icon: "https://d22pimhl2qmbj7.cloudfront.net/public/Frame_12_ebee895750.svg?w=48&q=75",
                    },
                    {
                        label: "EVENTS",
                        icon: "https://d22pimhl2qmbj7.cloudfront.net/public/Frame_13_c4d6212160.svg?w=48&q=75",
                    },
                ].map((item, idx) => (
                    <li key={idx} className="mx-4 flex items-center gap-2 hover:underline">
                        <img src={item.icon} alt={item.label} className="w-5 h-5" style={iconStyle} />
                        {item.label}
                    </li>
                ))}
            </ul>

            <div className="flex space-x-1.5">
                <button className="bg-yellow-400 text-blue-800 font-bold rounded-lg px-4 py-2 cursor-pointer hover:bg-yellow-300 flex justify-between">
                    Book Tickets
                    <IoTicket className="mt-1 ml-2" />
                </button>
                <GiHamburgerMenu size={40} className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Header;
