import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Dummy ride data
const rides = [
    {
        title: "Recoil",
        image: "https://d22pimhl2qmbj7.cloudfront.net/public/Recoil_ride.jpg",
        category: "Thrill",
    },
    {
        title: "Boomerang",
        image: "https://d22pimhl2qmbj7.cloudfront.net/public/Boomerang.jpg",
        category: "Water",
    },
    {
        title: "Sky Wheel",
        image: "https://d22pimhl2qmbj7.cloudfront.net/public/Skywheel.jpg",
        category: "Family",
    },
    {
        title: "Wonder Splash",
        image: "https://d22pimhl2qmbj7.cloudfront.net/public/Wondersplash.jpg",
        category: "Water",
    },
    {
        title: "Techno Jump",
        image: "https://d22pimhl2qmbj7.cloudfront.net/public/Technojump.jpg",
        category: "Land",
    },
];

const RideCarousel = () => {
    const carouselRef = useRef(null);

    const scroll = (direction) => {
        const scrollAmount = 300;
        if (carouselRef.current) {
            carouselRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="flex-1 px-6 py-10">
            <h2 className="text-3xl font-bold mb-6">Popular Rides</h2>

            <div className="relative">
                {/* Scroll Left Button */}
                <button
                    onClick={() => scroll("left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white text-blue-700 rounded-full shadow-md hover:bg-gray-200"
                >
                    <FaChevronLeft />
                </button>

                {/* Ride Cards */}
                <div
                    ref={carouselRef}
                    className="flex space-x-6 overflow-x-auto scrollbar-hide px-10"
                >
                    {rides.map((ride, index) => (
                        <div
                            key={index}
                            className="min-w-[250px] bg-white rounded-xl overflow-hidden shadow-lg text-black transform transition hover:scale-105"
                        >
                            <img
                                src={ride.image}
                                alt={ride.title}
                                className="h-48 w-full object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold">{ride.title}</h3>
                                <p className="text-sm text-gray-600 mt-1">{ride.category} Ride</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Scroll Right Button */}
                <button
                    onClick={() => scroll("right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 bg-white text-blue-700 rounded-full shadow-md hover:bg-gray-200"
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default RideCarousel;
