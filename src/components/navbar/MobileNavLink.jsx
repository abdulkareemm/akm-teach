import React from 'react'
import { Link } from "react-scroll";

const MobileNavLink = ({href,link,setToggel}) => {
  return (
    <li className="list-none cursor-pointer mr-8 hover:border border-solid px-10">
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={500}
        offset={-50}
        className="font-bold transition-all duration-300 "
        onClick={()=>setToggel(false)}
      >
        {link}
      </Link>
    </li>
  );
}

export default MobileNavLink