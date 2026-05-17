import { useState } from "react";
import { NavLink } from "react-router-dom";
import ucLogo from "../assets/uc-logo.png";

import Toggle from "./Toggle";

type NavbarProps = {
  toggleEnabled: boolean;
  onToggleChange: (value: boolean) => void;
};

const desktopLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? "selectedLink" : ""} mr-3 pb-1 boder-b-2 hover:border-b-2 hover:text-blue-500 hover:border-blue-500 hover:text-base  hover:leading-none transition-all duration-500`;

const mobileLinkClass = ({ isActive }: { isActive: boolean }) =>
  `${isActive ? "selectedLink" : ""} selectedLink:text-4xl mr-3 pb-1 hover:text-blue-500 hover:border-blue-500 hover:text-sm  hover:leading-none transition-all duration-500`;

const Navbar: React.FC<NavbarProps> = ({ toggleEnabled, onToggleChange }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-between dark:bg-slate-900 text-slate-900 dark:text-white p-4 border-b-1 border-blue-300 dark:border-gray-800
      "
      >
        <div>
          <img
            src={ucLogo}
            alt="Udaya Chandar"
            className="uc-logo w-15 sm:w-25 animate-[spin_12s_ease-in-out_infinite]"
          />
        </div>

        <div className="flex items-center sm:hidden gap-2">
          <button
            className="text-2xl cursor-pointer sm:hidden text-right mb-2"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
          <Toggle enabled={toggleEnabled} onToggle={onToggleChange} />
        </div>
        <div className="hidden sm:flex gap-2 p-4 text-sm">
          <NavLink to="/" end className={desktopLinkClass}>
            Home
          </NavLink>
          <NavLink to="/skills" className={desktopLinkClass}>
            Skills
          </NavLink>
          <NavLink to="/experience" className={desktopLinkClass}>
            Experience
          </NavLink>
          <NavLink to="/about" className={desktopLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={desktopLinkClass}>
            Contact
          </NavLink>
          <Toggle enabled={toggleEnabled} onToggle={onToggleChange} />
        </div>
      </div>
      {open && (
        <div className="flex flex-col  text-center text-black dark:text-white  gap-2 p-4 text-xs sm:hidden transition-all duration-500">
          <NavLink to="/" end className={mobileLinkClass}>
            Home
          </NavLink>
          <NavLink to="/skills" className={mobileLinkClass}>
            Skills
          </NavLink>
          <NavLink to="/experience" className={mobileLinkClass}>
            Experience
          </NavLink>
          <NavLink to="/about" className={mobileLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={mobileLinkClass}>
            Contact
          </NavLink>
        </div>
      )}
    </>
  );
};

export default Navbar;
