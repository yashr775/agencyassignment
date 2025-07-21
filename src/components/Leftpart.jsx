import { useState } from "react";
import { motion } from "framer-motion";
import { FaLandmark, FaWater } from "react-icons/fa";
import { GiKidSlide } from "react-icons/gi";

const Leftpart = () => {
    const [active, setActive] = useState("water");

    const iconSize = 50;
    const circleSize = 125;

    const positions = {
        land: { top: "2rem", right: "4rem", angle: "300deg" },
        water: { top: "40%", right: "-0.6rem", angle: "10deg" },
        kids: { bottom: "40px", right: "5rem", angle: "60deg" },
    };

    return (
        <div className="relative h-screen w-full bg-blue-950 overflow-hidden">
            <motion.div
                className="absolute left-[-130px] top-80 -translate-y-1/2 h-[600px] w-[600px] z-10 rounded-full flex items-center justify-center"
                style={{
                    background: `conic-gradient(from ${positions[active].angle}, #E8E9F1 10deg, #FAD500 70deg, #FAD500 110deg, #E8E9F1 160deg, #E8E9F1)`,
                }}
                key={`gradient-${active}`}
                transition={{ duration: 3, ease: "easeInOut" }}
            >
                {/* Inner Circle */}
                <div className="h-[420px] w-[420px] bg-blue-950 rounded-full z-10"></div>

                {/* Center Yellow Circle */}
                <div
                    className="absolute"
                    style={{
                        top: "19rem",
                        left: "26rem",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <div className="h-[170px] w-[170px] rounded-full bg-yellow-400 flex items-center justify-center">
                        <div className="h-[150px] w-[150px] rounded-full bg-white" />
                    </div>
                </div>

                {/* === Yellow Selection Ring === */}
                {active && (
                    <motion.div
                        key={active}
                        className="absolute z-30 border-8 border-yellow-300 rounded-full"
                        style={{
                            width: `${circleSize}px`,
                            height: `${circleSize}px`,
                            ...(positions[active].top && { top: positions[active].top }),
                            ...(positions[active].right && { right: positions[active].right }),
                            ...(positions[active].bottom && { bottom: positions[active].bottom }),
                            transform: "translate(-50%, -50%)",
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,  // Reduced stiffness for slower movement
                            damping: 15,     // Reduced damping for more fluid motion
                            mass: 1.5,       // Increased mass for slower acceleration
                            duration: 0.8    // Added explicit duration
                        }}
                    />
                )}

                {/* === White Background (Under Icon) === */}
                {active && (
                    <motion.div
                        key={`bg-${active}`}
                        className="absolute z-20 bg-white rounded-full"
                        style={{
                            width: `${circleSize}px`,
                            height: `${circleSize}px`,
                            ...(positions[active].top && { top: positions[active].top }),
                            ...(positions[active].right && { right: positions[active].right }),
                            ...(positions[active].bottom && { bottom: positions[active].bottom }),
                            transform: "translate(-50%, -50%)",
                        }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                            damping: 15,
                            mass: 1.5,
                            duration: 0.8
                        }}
                    />
                )}

                {/* === Land Icon === */}
                <div>
                    <motion.div
                        className="absolute top-24 right-20 transform -translate-x-1/2 -translate-y-1/2 z-30 hover:cursor-pointer"
                        animate={{
                            scale: active === "land" ? 1.2 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 10 }}
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

                {/* === Water Icon === */}
                <div>
                    <motion.div
                        className="absolute top-1/2 right-1 transform -translate-x-1/2 -translate-y-1/2 z-30 hover:cursor-pointer"
                        animate={{
                            scale: active === "water" ? 1.2 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 10 }}
                        onClick={() => setActive("water")}
                    >
                        <FaWater size={iconSize} />
                    </motion.div>
                    <div
                        className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-xl capitalize"
                        style={{ right: "-145px" }}
                    >
                        <div>Water</div>
                        <div className="text-sm rounded-2xl px-3 py-1 bg-blue-400">54 Rides</div>
                    </div>
                </div>

                {/* === Kids Icon === */}
                <div>
                    <motion.div
                        className="absolute bottom-15 right-20 transform -translate-x-1/2 -translate-y-1/2 z-30 hover:cursor-pointer"
                        animate={{
                            scale: active === "kids" ? 1.2 : 1,
                        }}
                        transition={{ type: "spring", stiffness: 10 }}
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
            </motion.div>
        </div>
    );
};

export default Leftpart;