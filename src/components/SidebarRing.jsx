import React from "react";
import { FaWater, FaUmbrellaBeach, FaMountain } from "react-icons/fa";

const SidebarRing = () => {
    return (
        <div className="relative w-[350px] h-screen overflow-hidden">
            {/* Arc background */}
            <div className="absolute -left-60 top-1/2 -translate-y-1/2 w-[600px] h-[1200px] bg-gradient-to-b from-gray-100 via-yellow-400 to-gray-100 rounded-full">
                {/* Inner cutout */}
                <div className="absolute inset-8 bg-[#1f2b45] rounded-full z-10" />

                {/* Water Circle Center */}
                <div className="absolute top-1/2 left-[140px] -translate-y-1/2 w-40 h-40 bg-white rounded-full z-20 flex items-center justify-center border-[6px] border-yellow-400">
                    <FaWater className="text-blue-500 text-5xl" />
                </div>

                {/* Top Label - Land */}
                <div className="absolute top-[140px] left-[170px] text-white z-30 text-center">
                    <FaMountain className="text-blue-500 text-3xl mx-auto mb-1" />
                    <p className="text-sm">Land</p>
                    <span className="bg-blue-500 text-xs px-3 py-1 rounded-full inline-block mt-1">
                        73 Rides
                    </span>
                </div>

                {/* Bottom Label - Kids */}
                <div className="absolute bottom-[140px] left-[170px] text-white z-30 text-center">
                    <FaUmbrellaBeach className="text-blue-500 text-3xl mx-auto mb-1" />
                    <p className="text-sm">Kids</p>
                    <span className="bg-blue-500 text-xs px-3 py-1 rounded-full inline-block mt-1">
                        35 Rides
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SidebarRing;
