import React from "react";
import about from "../../assets/About.jpg";
const About = () => {
  return (
    <div className="section" id="about">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            We provide the <br />
            best <span className="text-Teal">online courses</span>
          </div>
          <p className="text-sm leading-7 text-gray">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Tristique magna sit amet purus gravida quis blandit turpis cursus.
            Amet consectetur adipiscing elit ut aliquam purus sit amet luctus.
          </p>
          <button className="py-3 px-6 text-sm border border-solid border-gray rounded-lg font-bold">Know More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
