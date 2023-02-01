import React from "react";
import { categories, courses } from "../.../../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";
const Courses = () => {
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
  return (
    <div className="section" id="courses">
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="text-sm leading-7 text-gray max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tristique
          magna sit amet purus gravida quis blandit turpis cursus. Amet
          consectetur adipiscing elit ut aliquam purus sit amet luctus.
        </p>
      </div>
      <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8">
        {categories.map((categorie) => {
          return <Categories key={categorie.id} {...categorie} />;
        })}
      </motion.div>
      <div className="text-xl font-bold mt-32">Most Populer Courses</div>
      <div className="mt-12 overflow-x-hidden w-full">
        <div className="flex gap-8 md-w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {courses.map((course) => {
            return <Course key={course.id} {...course} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Courses;
