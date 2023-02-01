import React from "react";

const Categories = ({ icon, category }) => {
  return (
    <div className="flex items-center flex-col gap-4 bg-white p-8 rounded-md">
      <div className="text-4xl text-Teal ">{icon}</div>
      <div className="tracking-wide">{category}</div>
      <a href="" className="text-sm text-gray hover:text-blue-600">
        View More
      </a>
    </div>
  );
};

export default Categories;
