import React from 'react';

const EstateCard = ({ estate }) => {
    const { image, estate_title, segment_name, status, area, location, description } = estate;

    return (
        <div className="card w-auto bg-base-100 border border-gray-300 shadow-xl flex flex-col justify-between mx-4 mb-4">
            <div className="rounded-md shadow-sm  p-3">
                <div className="flex items-center justify-between">
                    <div className="">
                        <h2 className="text-lg font-semibold">{segment_name}</h2>
                        <p className='text-sm'>{estate_title}</p>
                    </div>
                    <button className="bg-green-500 text-white px-4 py-1 rounded-full" >{status}</button>
                </div>
                <img src={image} alt={estate_title} className="object-cover object-center w-full h-72 " />
                <div className="">
                    <p className="text-sm">{description}</p>
                    <button className="bg-green-500 text-white px-4 py-2 rounded-full mt-5">View Property</button>
                </div>
            </div>
        </div>
    );
};

export default EstateCard;
