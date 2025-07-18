import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Leftpart = () => {
    return (
        <div className="relative h-screen w-full bg-blue-950 overflow-hidden">
            {/* Half Ring Container */}
            <div
                className="absolute left-[-120px] top-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full flex items-center justify-center"
                style={{
                    background:
                        "conic-gradient(from 90deg, #E8E9F1 10deg, #FAD500 70deg, #FAD500 110deg, #E8E9F1 160deg, #E8E9F1)"
                }}
            >
                {/* Inner Circle */}
                <div className="h-[420px] w-[420px] bg-blue-950 rounded-full z-10"></div>

                {/* Center Circle Button */}
                <div
                    className="absolute"
                    style={{ top: "19rem", left: "26rem", transform: "translate(-50%, -50%)" }}
                >
                    <div className="h-[170px] w-[170px] rounded-full bg-yellow-400 flex items-center justify-center">
                        <div className="h-[150px] w-[150px] rounded-full bg-white" />
                    </div>
                </div>

                {/* --- Ride Icons with Labels --- */}

                {/* Land Ride */}
                <div>
                    <div className="absolute top-24 left-36 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer z-20">
                        <img
                            src="/icons/landRides.svg"
                            alt="Land Rides"
                            className="transition-transform duration-300"
                        />
                    </div>
                    <div className="absolute top-24 left-56 text-white text-xl capitalize -translate-y-1/2">
                        <div>Land</div>
                        <div className="text-sm rounded-2xl px-3 py-1 bg-blue-400">73 Rides</div>
                    </div>
                </div>

                {/* Water Ride */}
                <div>
                    <div className="absolute top-1/2 left-24 -translate-y-1/2 hover:cursor-pointer z-20">
                        <img
                            src="/icons/waterRides.svg"
                            alt="Water Rides"
                            className="scale-[1.4] transition-transform duration-300"
                        />
                    </div>
                    <div className="absolute top-1/2 left-44 -translate-y-1/2 text-white text-xl capitalize">
                        <div>Water</div>
                        <div className="text-sm rounded-2xl px-3 py-1 bg-blue-400">54 Rides</div>
                    </div>
                </div>

                {/* Kids Ride */}
                <div>
                    <div className="absolute bottom-20 left-36 transform -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer z-20">
                        <img
                            src="/icons/kidsRides.svg"
                            alt="Kids Rides"
                            className="transition-transform duration-300"
                        />
                    </div>
                    <div className="absolute bottom-20 left-56 text-white text-xl capitalize -translate-y-1/2">
                        <div>Kids</div>
                        <div className="text-sm rounded-2xl px-3 py-1 bg-blue-400">35 Rides</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Leftpart;
