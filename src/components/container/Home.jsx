import React from "react";
import hero from "../../assets/hero.png";
import { logos } from "../../Data";
import { motion } from "framer-motion";

const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delyChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className="section" id="home">
      <div className="md:flex items-center justify-center">
        <div>
          <div className="font-bold text-xs text-Teal mb-4">
            your e-learning partner
          </div>
          <div className="sm:text-[2.5rem] text-[1.825rem] font-bold">
            This is <br /> the new way <br /> to learn online
          </div>
          <p className="text-sm leading-7 text-gray max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique magna sit amet purus gravida quis blandit turpis cursus.
            Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
          </p>
          <div className="mt-6">
            <button className="px-6 py-3 font-bold text-white bg-Teal rounded-lg mr-4 text-sm ">
              Get Started
            </button>
            <button className="px-6 py-3 font-bold border border-gray rounded-lg text-sm">
              Discover
            </button>
          </div>
        </div>
        <div className="md:w-[60%]">
          <img src={hero} alt="" />
        </div>
      </div>
      <div className="">
        <p className="text-center text-xl">
          We collaborate with{" "}
          <span className="text-Teal">100+ leading universites ans companies</span>
        </p>
        <motion.div variants={container} initial="hidden" whileInView="visible"  className="flex items-center justify-center flex-wrap gap-8 p-2">
          {logos.map((logo,idx)=>(
            <motion.div variants={item}  className="w-28" key={idx}>
              <img src={logo} alt="" className="w-full object-cover"/>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
