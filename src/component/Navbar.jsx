import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi"; // Added close icon
   import { Link } from "react-router-dom"; // ✅ Add this import at the top

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  

  return (
    <header className="bg-white fixed top-0 right-0 left-0 shadow-md z-50">
      <nav className="flex justify-between items-center max-w-[1400px] mx-auto h-20 px-5">
        
        {/* ✅ Logo */}
        <a href="#" className="text-3xl font-bold">
          Rahul Gr<span className="text-orange-500 uppercase">o</span>cfiy
        </a>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex items-center gap-x-6">
          <li>
            <a href="/" className="font-bold tracking-wider text-orange-500">
              Home
            </a>
          </li>
        
          <li>
            <a
              href="Contact"
              className="font-bold tracking-wider text-gray-500 hover:text-orange-500"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="/Products"
              className="font-bold tracking-wider text-gray-500 hover:text-orange-500"
            >
              Products
            </a>
          </li>
        </ul>

        {/* ✅ Search Bar (Desktop only) */}
        <div className="hidden md:flex items-center border rounded-full overflow-hidden">
          <input
            type="text"
            className="px-4 py-2 outline-none text-sm"
            placeholder="Search"
          />
          <button className="px-4 text-orange-500">
            <IoSearchOutline size={20} />
          </button>
        </div>

        {/* ✅ Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* ✅ Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full py-6">
   

<ul className="flex flex-col items-center gap-5 text-lg font-semibold">
  <li>
    <Link to="/" className="text-orange-500" onClick={() => setMenuOpen(false)}>
      Home
    </Link>
  </li>
  <li>
    <Link
      to="/About"
      className="text-gray-700 hover:text-orange-500"
      onClick={() => setMenuOpen(false)}
    >
      About
    </Link>
  </li>
  <li>
    <Link
      to="/Contact"
      className="text-gray-700 hover:text-orange-500"
      onClick={() => setMenuOpen(false)}
    >
      Contact
    </Link>
  </li>
  <li>
    <Link
      to="/Products"
      className="text-gray-700 hover:text-orange-500"
      onClick={() => setMenuOpen(false)}
    >
      Product
    </Link>
  </li>

  {/* ✅ Mobile Search */}
  <li className="flex items-center border rounded-full overflow-hidden w-4/5">
    <input
      type="text"
      className="flex-1 px-4 py-2 outline-none text-sm"
      placeholder="Search"
    />
    <button className="px-4 text-gray-600 hover:text-orange-500">
      <IoSearchOutline size={20} />
    </button>
  </li>
</ul>

        </div>
      )}
    </header>
  );
};

export default Navbar;
