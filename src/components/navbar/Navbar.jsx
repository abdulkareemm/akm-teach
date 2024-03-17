import React, { useState, useEffect } from "react";
import { navLinks } from "../../Data";
import { HiMenuAlt1, HiX } from "react-icons/hi";
import NavLink from "./NavLink";
import MobileNavLink from "./MobileNavLink";
import {motion} from "framer-motion"
import logo from "../../assets/logo.png"

const Navbar = () => {
  const [toggel, setToggel] = useState(false);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const scrollActive = () => {
      setActive(window.scrollY > 20);
    };
    window.addEventListener("scroll", scrollActive);
    return () => window.removeEventListener("scroll", scrollActive);
  }, [active]);
  return (
    <div
      className={`${
        active ? "shadow-lg bg-Solitude" : ""
      } fixed w-full top-0 left-0 z-20`}
    >
      <div>
        <div
          className={`${
            active ? "py-2 transition-all duration-300" : "py-4"
          } container mx-auto flex items-center justify-between px-2`}
        >
          <div className="flex items-center gap-4">
            <HiMenuAlt1
              className="text-3xl cursor-pointer sm:hidden"
              onClick={() => setToggel(true)}
            />
            <img
              src={logo}
              alt="logo"
              className={
                active ? "w-12 h-12 hidden md:flex" : "w-24 h-24 hidden md:flex"
              }
            />
          </div>
          <div className="sm:flex items-center hidden">
            {navLinks.map((navLink) => {
              return <NavLink key={navLink.id} {...navLink} />;
            })}
          </div>
          <div>
            <button className="py-3 px-6 font-bold text-sm border border-solid rounded-lg border-gray">
              Sign Up
            </button>
            {toggel && (
              <motion.div
                initial={{ x: -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="fixed h-full w-96 top-0 left-0 z-20 bg-Teal text-white flex flex-col justify-center items-center shadow-lg gap-8 py-8 "
              >
                {navLinks.map((navLink) => {
                  return (
                    <MobileNavLink
                      key={navLink.id}
                      {...navLink}
                      setToggel={setToggel}
                    />
                  );
                })}
                <HiX
                  className="absolute right-14 top-12 text-3xl border border-solid cursor-pointer hover:bg-white hover:text-black"
                  onClick={() => setToggel(false)}
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
