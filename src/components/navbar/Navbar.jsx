import React from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import { useState } from "react";
import MobileNavLink from "./MobileNavLink";
const Navbar = () => {
  const [toggel,setToggel] = useState(false)
  return (
    <div className="fixed w-full top-0 left-0 z-20">
      <div>
        <div className="container py-4 mx-auto flex items-center justify-between px-2">
          <div className="flex items-center gap-4">
            <HiMenuAlt1 className="text-3xl cursor-pointer sm:hidden" onClick={()=>setToggel(true)} />
            <div className="text-xl text-Teal uppercase tracking-wide font-bold">
              Skillex
            </div>
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map(navLink=>{
              return <NavLink key={navLink.id} {...navLink}/>
            })}
          </div>
          <div>
            <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray">Sign Up</button>
            {toggel && <div className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8 ">
              {navLinks.map(navLink=>{
                return <MobileNavLink key={navLink.id} {...navLink} setToggel={setToggel}/>
              })}
              <HiX className="absolute right-14 top-12 text-3xl border border-solid cursor-pointer hover:bg-white hover:text-black" onClick={()=>setToggel(false)}/>
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
