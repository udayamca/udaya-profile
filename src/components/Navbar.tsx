import { useState } from "react";
import { Link } from "react-router-dom";
import ucLogo from "../assets/uc-logo.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-between bg-slate-900 text-white p-4 border-b-1 border-gray-800
      "
      >
        <div>
          <img src={ucLogo} alt="Udaya Chandar" className="w-15 sm:w-25" />
        </div>
        <button
          className="text-2xl cursor-pointer sm:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <div className="hidden sm:flex gap-2 p-4 text-sm">
          <Link
            to="/"
            className="mr-3 pb-1 boder-b-2 hover:border-b-2 hover:border-blue-500 hover:text-base hover:text-blue-500 transition-all duration-500  "
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="mr-3 pb-1 boder-b-2 hover:border-b-2 hover:border-blue-500 hover:text-base hover:text-blue-500 transition-all duration-500 "
          >
            Skills
          </Link>
          <Link
            to="/experience"
            className="mr-3 pb-1 boder-b-2 hover:border-b-2 hover:border-blue-500 hover:text-base hover:text-blue-500 transition-all duration-500 "
          >
            Experience
          </Link>
          <Link
            to="/about"
            className="mr-3 pb-1 boder-b-2 hover:border-b-2 hover:border-blue-500 hover:text-base hover:text-blue-500 transition-all duration-500 "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mr-3 pb-1 boder-b-2 hover:border-b-2 hover:border-blue-500 hover:text-base hover:text-blue-500 transition-all duration-500 "
          >
            Contact
          </Link>
        </div>
      </div>
      {open && (
        <div className="flex flex-col  text-center text-white  gap-2 p-4 text-xs sm:hidden">
          <Link
            to="/"
            className="mr-3 pb-1 boder-b-2 hover:border-b-2 hover:border-blue-500 hover:text-sm hover:text-blue-500 transition-all duration-500  "
          >
            Home
          </Link>
          <Link
            to="/skills"
            className="mr-3 pb-1 boder-b-2 hover:border-b-2 hover:border-blue-500 hover:text-sm hover:text-blue-500 transition-all duration-500 "
          >
            Skills
          </Link>
          <Link
            to="/experience"
            className="mr-3 pb-1 boder-b-2 hover:border-b-2 hover:border-blue-500 hover:text-sm hover:text-blue-500 transition-all duration-500 "
          >
            Experience
          </Link>
          <Link
            to="/about"
            className="mr-3 pb-1 boder-b-2 hover:border-b-2 hover:border-blue-500 hover:text-sm hover:text-blue-500 transition-all duration-500 "
          >
            About
          </Link>
          <Link
            to="/contact"
            className="mr-3 pb-1 boder-b-2 hover:border-b-2 hover:border-blue-500 hover:text-sm hover:text-blue-500 transition-all duration-500 "
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
}
