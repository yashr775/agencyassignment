import { useState } from "react";
import { motion } from "framer-motion";
import { FaLandmark, FaWater } from "react-icons/fa";
import { GiKidSlide } from "react-icons/gi";

const Leftpart = () => {
    const [active, setActive] = useState("water");

    const iconSize = 50;
    const circleSize = 100;

    const positions = {
        land: { top: "3rem", right: "5rem" },
        water: { top: "43%", right: "0.3rem" },
        kids: { bottom: "60px", right: "5rem" },
    };

    return (
        <div className="relative h-screen w-full bg-blue-950 overflow-hidden">
            {/* Half Ring Container */}
            <div
                className="absolute left-[-130px] top-80 -translate-y-1/2 h-[600px] w-[600px] z-10 rounded-full flex items-center justify-center"
                style={{
                    background:
                        "conic-gradient(from 90deg, #E8E9F1 10deg, #FAD500 70deg, #FAD500 110deg, #E8E9F1 160deg, #E8E9F1)",
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

                {/* === Animated Selection Circle === */}
                {active && (
                    <motion.div
                        key={active} // Forces re-render when active changes
                        className="absolute z-30 border-4 border-yellow-300 rounded-full"
                        style={{
                            width: `${circleSize}px`,
                            height: `${circleSize}px`,
                            position: "absolute",
                            ...positions[active],
                            transform: "translate(-50%, -50%)",
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />
                )}

                {/* === Land Ride === */}
                <div>
                    <motion.div
                        className="absolute top-24 right-20 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:cursor-pointer"
                        animate={{ scale: active === "land" ? 1.2 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => setActive("land")}
                    >
                        <FaLandmark size={iconSize} />
                    </motion.div>
                    <div
                        className="absolute top-24 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl capitalize"
                        style={{ right: "-80px" }}
                    >
                        <div>Land</div>
                        <div className="text-sm rounded-2xl px-3 py-1 bg-blue-400">73 Rides</div>
                    </div>
                </div>

                {/* === Water Ride === */}
                <div>
                    <motion.div
                        className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:cursor-pointer"
                        animate={{ scale: active === "water" ? 1.2 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => setActive("water")}
                    >
                        <FaWater size={iconSize} />
                    </motion.div>
                    <div
                        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl capitalize"
                        style={{ right: "-135px" }}
                    >
                        <div>Water</div>
                        <div className="text-sm rounded-2xl px-3 py-1 bg-blue-400">54 Rides</div>
                    </div>
                </div>

                {/* === Kids Ride === */}
                <div>
                    <motion.div
                        className="absolute bottom-15 right-20 transform -translate-x-1/2 -translate-y-1/2 z-20 hover:cursor-pointer"
                        animate={{ scale: active === "kids" ? 1.2 : 1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        onClick={() => setActive("kids")}
                    >
                        <GiKidSlide size={iconSize} />
                    </motion.div>
                    <div
                        className="absolute bottom-[60px] transform -translate-x-1/2 -translate-y-1/2 text-white text-xl capitalize"
                        style={{ right: "-80px" }}
                    >
                        <div>Kids</div>
                        <div className="text-sm rounded-2xl px-3 py-1 bg-blue-400">35 Rides</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Leftpart;
