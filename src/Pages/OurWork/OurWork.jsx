import { Helmet } from "react-helmet-async";
import { FaBuildingLock } from "react-icons/fa6";
import { GiConcreteBag, GiStoneWall, GiWaterTower } from "react-icons/gi";
import { MdOutlineBathroom, MdOutlineElderlyWoman, MdOutlineRoofing } from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";

const OurWork = () => {
    return (
        <div className="md:p-3 lg:px-14 mb-8 flex flex-col items-center">
            <Helmet>
                <title>Cozy | Work</title>
            </Helmet>
            <h2 className="text-5xl text-green-700 mb-10 font-medium">THE HOMES</h2>
            <h4 className="text-3xl mb-10 font-light">WE BUILD</h4>

            <p className="text-lg mb-10 text-center max-w-4xl font-light">At Homes for Homes, it’s important to us that the style of a home meets the cultural expectations of a community. That’s why we use locally-sourced materials for our homes. We collaborate with local leadership to receive design approval, and each home is inspected at completion to meet our quality standards.</p>

            <div className="border-b border-green-400 w-full my-8"></div>

            <h2 className="text-5xl text-green-700 mb-10 font-medium">EVERY HOME OFFERS</h2>
            <h4 className="text-7xl mb-10 font-light">KEY FEATURES</h4>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 ">
                <div className="bg-slate-50 border border-green-700 p-6 rounded-3xl shadow-md flex flex-col items-center gap-5">
                    <GiConcreteBag className="text-7xl text-green-700 " />
                    <h3 className="text-3xl font-light mb-4">Concrete Floor</h3>
                    <p className='text-base text-ce'>Every home starts with a concrete floor, laying the foundation for a healthy and clean environment.</p>
                </div>
                <div className="bg-slate-50 border border-green-700 p-6 rounded-3xl shadow-md flex flex-col items-center gap-5">
                    <MdOutlineRoofing className="text-7xl text-green-700 " />
                    <h3 className="text-3xl font-light mb-4">Solid Roof Surface</h3>
                    <p className='text-base text-ce'>A solid roof protects family members from weather elements and eliminates roof leaks.</p>
                </div>
                <div className="bg-slate-50 border border-green-700 p-6 rounded-3xl shadow-md flex flex-col items-center gap-5">
                    <GiStoneWall className="text-7xl text-green-700 " />
                    <h3 className="text-3xl font-light mb-4">Strong Walls</h3>
                    <p className='text-base text-ce'>Brick, concrete, or stucco walls built to stand the test of time and provide a legacy of shelter.</p>
                </div>
                <div className="bg-slate-50 border border-green-700 p-6 rounded-3xl shadow-md flex flex-col items-center gap-5">
                    <FaBuildingLock className="text-7xl text-green-700 " />

                    <h3 className="text-3xl font-light mb-4">Door & Window Locks</h3>
                    <p className='text-base text-ce'>Locking doors and windows allow families to sleep and work in peace without fear.</p>
                </div>
                <div className="bg-slate-50 border border-green-700 p-6 rounded-3xl shadow-md flex flex-col items-center gap-5">
                    <MdOutlineBathroom className="text-7xl text-green-700 " />
                    <h3 className="text-3xl font-light mb-4">Latrines & Bathing</h3>
                    <p className='text-base text-ce'>Latrines and bathing stalls spearhead sanitation initiatives to improve community health.</p>
                </div>
                <div className="bg-slate-50 border border-green-700 p-6 rounded-3xl shadow-md flex flex-col items-center gap-5">
                    <GiWaterTower className="text-7xl text-green-700 " />

                    <h3 className="text-3xl font-light mb-4">Rain Water Systems</h3>
                    <p className='text-base text-ce'>Rain-catch water systems are installed at the homesite if disability hinders travel to local well.</p>
                </div>
                <div className="bg-slate-50 border border-green-700 p-6 rounded-3xl shadow-md flex flex-col items-center gap-5">
                    <MdOutlineElderlyWoman className="text-7xl text-green-700 " />
                    <h3 className="text-3xl font-light mb-4">Entrance Ramps</h3>
                    <p className='text-base text-ce'>Entrance ramps are installed for elderly and families with disabilities to provide accessibility.</p>
                </div>
                <div className="bg-slate-50 border border-green-700 p-6 rounded-3xl shadow-md flex flex-col items-center gap-5">
                    <TiDocumentText className="text-7xl text-green-700 " />
                    <h3 className="text-3xl font-light mb-4">Land Ownership</h3>
                    <p className='text-base text-ce'>Local leaders confirm that each family owns the land their home is built on for sustainability.</p>
                </div>
            </div>


            <h2 className="text-5xl text-green-700 mb-10 font-medium ">Take The Next Step</h2>
            <h4 className="text-7xl mb-10 font-light">GET INVOLVED</h4>
            <p className="text-lg mb-10 text-center max-w-4xl font-light">We are so grateful for the generous support of our donors that makes our work possible. We need your help to continue to expand our impact and serve more families this year than ever before.</p>




            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 ">

                <div className="bg-green-400 text-white rounded-3xl shadow-xl p-20 flex flex-col items-center">
                    <h3 className="text-5xl font-medium text-white mb-4 text-center">SPONSOR A HOME</h3>
                    <p className="text-white font-normal text-lg text-center mb-6">Give an Entire Home(s) as an Individual, Family, Or Business</p>
                    <button className="btn btn-wide glass text-xl text-white font-normal bg-green-600 rounded-full ">Learn More →</button>
                </div>
                <div className="bg-green-400 text-white rounded-3xl shadow-xl p-20 flex flex-col items-center">
                    <h3 className="text-5xl font-medium text-white mb-4 text-center">GIVE MONTHLY</h3>
                    <p className="text-white font-normal text-lg text-center mb-6">Give Monthly Toward Essential Components of Home Construction</p>
                    <button className="btn btn-wide glass text-xl text-white font-normal bg-green-600 rounded-full ">Learn More →</button>
                </div>
                <div className="bg-green-400 text-white rounded-3xl shadow-xl p-20 flex flex-col items-center">
                    <h3 className="text-5xl font-medium text-white mb-4 text-center">START A CAMPAIGN</h3>
                    <p className="text-white font-normal text-lg text-center mb-6">Start a Campaign to Support Our Cause</p>
                    <button className="btn btn-wide glass text-xl text-white font-normal bg-green-600 rounded-full ">Learn More →</button>
                </div>




            </div>
        </div>
    );
};

export default OurWork;
