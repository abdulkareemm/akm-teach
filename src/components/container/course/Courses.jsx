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
          for teaching web development online include comprehensive courses on
          programming languages, frameworks, and design principles essential for
          building robust online applications. Whether you're a beginner or an
          experienced developer, our curated selection ensures you have access
          to the latest tools and techniques to excel in web development.
        </p>
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
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
