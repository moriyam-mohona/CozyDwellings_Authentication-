
import { Link } from "react-router-dom";

const EstateCard = ({ estate, className }) => {
    const { image, estate_title, segment_name, status, price, id } = estate;

    return (
        <div className={`card w-auto bg-base-100 border border-gray-300 shadow-xl flex flex-col justify-between mx-1 mb-1 ${className}`} >
            <div className="rounded-md shadow-sm  p-3">

                <img src={image} alt={estate_title} className="object-cover object-center w-full h-72 " />
                <div className="flex items-start justify-between">
                    <div className="">
                        <h2 className="text-xl font-semibold">{segment_name}</h2>
                        <p className='text-sm'>{estate_title}</p>
                        <div className='flex justify-between'>
                            <p className='text-md text-green-500 font-bold'>#{status}</p>
                            <p className='text-md  font-bold'>{price}</p>
                        </div>
                    </div>

                </div>
                <div>
                    {/* <p className="text-sm">{description}</p> */}
                    <Link to={`/estate/${id}`}><button className="bg-green-500 text-white px-4 py-2 rounded-full mt-5">View Property</button></Link>
                </div>
            </div>
        </div >
    );
};

export default EstateCard;
