import { Helmet } from "react-helmet-async";
import { FaBuildingLock } from "react-icons/fa6";
import { GiConcreteBag, GiStoneWall, GiWaterTower } from "react-icons/gi";
import {
  MdOutlineBathroom,
  MdOutlineElderlyWoman,
  MdOutlineRoofing,
} from "react-icons/md";
import { TiDocumentText } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurWork = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="px-3 md:px-5 lg:px-14 mb-8 flex flex-col items-center">
      <Helmet>
        <title>Cozy | Work</title>
      </Helmet>
      <h2 className="text-3xl lg:text-5xl text-green-700 mb-5 font-medium">
        THE HOMES
      </h2>
      <h4 className="text-2xl lg:text-5xl mb-10 font-light">WE BUILD</h4>

      <p className="text-lg lg:text-xl mb-10 text-center max-w-4xl font-light">
        At Homes for Homes, it’s important to us that the style of a home meets
        the cultural expectations of a community. That’s why we use
        locally-sourced materials for our homes. We collaborate with local
        leadership to receive design approval, and each home is inspected at
        completion to meet our quality standards.
      </p>

      <div className="border-b border-green-400 w-full my-8"></div>

      <h2 className="text-3xl lg:text-5xl text-green-700 mb-10 mt-10 font-medium ">
        EVERY HOME OFFERS
      </h2>
      <h4 className="text-2xl lg:text-5xl mb-20 font-light">KEY FEATURES</h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        <FeatureCard
          icon={
            <GiConcreteBag className="text-5xl md:text-6xl lg:text-7xl text-green-700" />
          }
          title="Concrete Floor"
          description="Every home starts with a concrete floor, laying the foundation for a healthy and clean environment."
        />
        <FeatureCard
          icon={
            <MdOutlineRoofing className="text-5xl md:text-6xl lg:text-7xl text-green-700" />
          }
          title="Solid Roof Surface"
          description="A solid roof protects family members from weather elements and eliminates roof leaks."
        />
        <FeatureCard
          icon={
            <GiStoneWall className="text-5xl md:text-6xl lg:text-7xl text-green-700" />
          }
          title="Strong Walls"
          description="Brick, concrete, or stucco walls built to stand the test of time and provide a legacy of shelter."
        />
        <FeatureCard
          icon={
            <FaBuildingLock className="text-5xl md:text-6xl lg:text-7xl text-green-700" />
          }
          title="Door & Window Locks"
          description="Locking doors and windows allow families to sleep and work in peace without fear."
        />
        <FeatureCard
          icon={
            <MdOutlineBathroom className="text-5xl md:text-6xl lg:text-7xl text-green-700" />
          }
          title="Latrines & Bathing"
          description="Latrines and bathing stalls spearhead sanitation initiatives to improve community health."
        />
        <FeatureCard
          icon={
            <GiWaterTower className="text-5xl md:text-6xl lg:text-7xl text-green-700" />
          }
          title="Rain Water Systems"
          description="Rain-catch water systems are installed at the homesite if disability hinders travel to local well."
        />
        <FeatureCard
          icon={
            <MdOutlineElderlyWoman className="text-5xl md:text-6xl lg:text-7xl text-green-700" />
          }
          title="Entrance Ramps"
          description="Entrance ramps are installed for elderly and families with disabilities to provide accessibility."
        />
        <FeatureCard
          icon={
            <TiDocumentText className="text-5xl md:text-6xl lg:text-7xl text-green-700" />
          }
          title="Land Ownership"
          description="Local leaders confirm that each family owns the land their home is built on for sustainability."
        />
      </div>

      <h2 className="text-3xl lg:text-5xl text-green-700 mt-10 mb-10 font-medium">
        Take The Next Step
      </h2>
      <h4 className="text-2xl lg:text-5xl mb-10 font-light">GET INVOLVED</h4>
      <p className="text-lg lg:text-xl mb-20 text-center max-w-4xl font-light">
        We are so grateful for the generous support of our donors that makes our
        work possible. We need your help to continue to expand our impact and
        serve more families this year than ever before.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-2 lg:gap-16 mb-20">
        <div data-aos="fade-right" data-aos-delay="100">
          <div className="bg-green-400 h-full text-white rounded-3xl shadow-xl px-3 md:px-8 py-24 flex flex-col items-center">
            <h3 className="text-3xl lg:text-5xl font-medium text-white mb-4 text-center">
              SPONSOR A HOME
            </h3>
            <p className="text-white font-normal text-lg text-center mb-6">
              Content for sponsoring a home goes here.
            </p>
            <button className="btn lg:btn-wide glass text-xl text-white font-normal bg-green-600 rounded-full">
              Learn More →
            </button>
          </div>
        </div>

        <div data-aos="fade-down" data-aos-delay="100">
          <div className="bg-green-400 text-white h-full rounded-3xl shadow-xl px-8 py-24 flex flex-col items-center">
            <h3 className="text-3xl lg:text-5xl font-medium text-white mb-4 text-center">
              GIVE MONTHLY
            </h3>
            <p className="text-white font-normal text-lg text-center mb-6">
              Content for giving monthly goes here.
            </p>
            <button className="btn lg:btn-wide glass text-xl text-white font-normal bg-green-600 rounded-full">
              Learn More →
            </button>
          </div>
        </div>

        <div data-aos="fade-left" data-aos-delay="100">
          <div className="bg-green-400 text-white rounded-3xl shadow-xl px-8 py-24 flex flex-col items-center">
            <h3 className="text-3xl lg:text-5xl font-medium text-white mb-4 text-center">
              START A CAMPAIGN
            </h3>
            <p className="text-white font-normal text-lg text-center mb-6">
              Content for starting a campaign goes here.
            </p>
            <button className="btn lg:btn-wide glass text-xl text-white font-normal bg-green-600 rounded-full">
              Learn More →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div
    data-aos="zoom-in"
    data-aos-delay="100"
    className="bg-slate-50 border border-green-700 px-3 md:px-6 py-8 md:py-12 rounded-3xl shadow-md flex flex-col items-center gap-3"
  >
    {icon}
    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-green-800">
      {title}
    </h3>
    <p className="text-sm md:text-base lg:text-lg text-center text-green-700">
      {description}
    </p>
  </div>
);

export default OurWork;
