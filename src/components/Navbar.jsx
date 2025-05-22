
import { House, SquareUserRound, Store, Contact } from "lucide-react";
import Toggel from "./toggle";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="  dark:bg-gray-900 ">
      <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50 flex-center py-4 transition-colors duration-300 z-50">
        <nav className="flex w-[300px] gap-6 px-6 py-2 w-fit h-14 px-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition-all duration-300 hover:shadow-md ">
        <NavItem icon={<House className="w-5 h-5" />} label="Home" to="/" />
          <NavItem icon={<SquareUserRound className="w-5 h-5" />} label="About" to="/about" />
          <NavItem icon={<Store className="w-5 h-5" />} label="Projects" to="/projects" />
          <NavItem icon={<Contact className="w-5 h-5" />} label="Contact" to="/contact" />
          <Toggel />

        </nav>
      </div>
    </div>
  );
};

// NavItem component for cleaner code and reusability
const NavItem = ({ icon, label, to }) => {
  return (
    <NavLink to = {to} >
    <div className="relative group">
      <div className="flex flex-col items-center cursor-pointer">
        <div className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
          {icon}
        </div>
        {/* Label that appears on hover */}
        <span className="absolute bottom-0  whitespace-nowrap text-xs font-medium text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-200 group-hover:-bottom-8">
          {label}
        </span>
      </div>
    </div>
    </NavLink>
  );
};

export default Nav;
