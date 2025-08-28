import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#FFAD00] text-white shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        <Link to="/">FoodiesHub</Link>
      </h1>
      <ul className="flex space-x-6 font-medium">
        <li>
          <Link to="/" className="hover:text-yellow-300">Home</Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-yellow-300">Contact</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-yellow-300">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
