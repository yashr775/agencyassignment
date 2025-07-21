import React from 'react';

const Ridescard = ({ id, name, location, description }) => {
    return (
        <div className="relative w-full max-w-[300px] h-[400px] rounded-xl overflow-hidden shadow-lg border border-white/20">
            <video
                className="w-full h-full object-cover"
                src={id}
                autoPlay
                loop
                muted
                playsInline
            />

            <div className="absolute bottom-0 left-0 right-0 text-white p-4">
                <h2 className="text-2xl font-bold">{name}</h2>
                <p className="text-blue-400 text-sm font-medium">{location}</p>
                <p className="text-sm text-gray-200 mt-1">{description}</p>

                <button className="py-3 px-8 mt-3 uppercase font-extrabold bg-[#FAD504] rounded-lg text-blue-700 hover:cursor-pointer mx-auto block">
                    <div className="flex justify-center items-center gap-1">
                        <div className="text-xs">Ride Details</div>
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Ridescard;
