import React, { useEffect, useRef, useState } from "react";
import Leftpart from "./Leftpart";
import Ridescard from "./Ridescard";
import data from "../../public/data.json";

const VISIBLE_CARDS = 4;
const SLIDE_INTERVAL = 2000;
const CARD_WIDTH = 320;

const Middlesection = () => {
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + data.length) % data.length);
    };

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % data.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % data.length);
        }, SLIDE_INTERVAL);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.transform = `translateX(-${index * (CARD_WIDTH / 2)}px)`;
        }
    }, [index]);

    return (
        <div className="flex flex-col">
            <h1 className="text-white flex justify-center mt-10 text-6xl font-extrabold">
                OUR ICONIC RIDES
            </h1>

            <div className="flex flex-row items-start justify-start mt-10 px-6">

                <div className="w-[40%]">
                    <Leftpart />
                </div>


                <div className="w-[60%]">

                    <div className="flex justify-end gap-4 mb-2 pr-4">
                        <button
                            onClick={handlePrev}
                            className="w-10 h-10 bg-[#FAD504] rounded-full flex items-center justify-center text-xl font-bold text-blue-600 hover:scale-105 transition"
                        >
                            &lt;
                        </button>
                        <button
                            onClick={handleNext}
                            className="w-10 h-10 bg-[#FAD504] rounded-full flex items-center justify-center text-xl font-bold text-blue-600 hover:scale-105 transition"
                        >
                            &gt;
                        </button>
                    </div>

                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            ref={containerRef}
                            style={{
                                width: `${data.length * CARD_WIDTH}px`,
                            }}
                        >
                            {data.map((ride, i) => (
                                <div
                                    key={ride.videoUrl + i}
                                    className="flex-shrink-0"
                                    style={{ width: `${CARD_WIDTH}px`, marginRight: "16px" }}
                                >
                                    <Ridescard
                                        id={ride.videoUrl}
                                        name={ride.name}
                                        location={ride.location}
                                        description={ride.description}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center items-center mt-16 mb-10">
                            <button className="px-8 py-4 bg-[#FAD504] text-blue-600 text-lg font-extrabold rounded-full hover:scale-105 transition-transform">
                                Explore All Rides!
                            </button>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Middlesection;
