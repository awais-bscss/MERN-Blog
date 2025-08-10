import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-800 border-b border-gray-700 shadow-md z-50 font-bold text-white  ">
      <ul className="flex justify-end p-4 mr-20">
        <li className="inline-block py-4">
          <Link to="/" className="hover:text-gray-300">
            Home
          </Link>
        </li>
        <li className="inline-block py-4">
          <Link to="/about" className="hover:text-gray-300 ml-4">
            About
          </Link>
        </li>
        {/* <li className="inline-block py-4">
          <Link to="/article" className="hover:text-gray-300 ml-4">
            article
          </Link>
        </li> */}
        <li className="inline-block py-4">
          <Link to="/articlesList" className="hover:text-gray-300 ml-4">
            Articles List
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
