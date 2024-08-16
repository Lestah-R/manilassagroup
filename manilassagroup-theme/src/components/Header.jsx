import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [servicesSubMenu, setServicesSubMenu] = useState(false);
  const [newsroomSubMenu, setNewsRoomSubMenu] = useState(false);
  const location = useLocation();

  const toggleServicesMenu = () => setServicesSubMenu((prev) => !prev);
  const toggleNewsRoomSubMenu = () => setNewsRoomSubMenu((prev) => !prev);

  return (
    <nav
      className={`max-w-full mx-auto p-6 bg-customDark text-white  ${
        location.pathname == "/about"
          ? "bg-transparent absolute container"
          : "relative"
      }`}
    >
      <div className={`flex container items-center justify-between`}>
        <NavLink to="/">
          <img src="/ssa-logo.png" alt="logo" className="h-9 w-auto" />
        </NavLink>
        <div className="hidden lg:flex space-x-8">
          <ul className="nav flex gap-20">
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "hover:text-yellow-500"
                }
                end
              >
                About
              </NavLink>
            </li>
            <li
              className="relative"
              onMouseEnter={toggleServicesMenu}
              onMouseLeave={toggleServicesMenu}
            >
              <div className="cursor-pointer">
                <span
                  className={
                    ["/consulting", "/training"].includes(location.pathname)
                      ? "text-yellow-500 font-bold"
                      : ""
                  }
                >
                  Services
                </span>
                <div
                  className={`absolute top-8 bg-white rounded-md px-4 w-44 text-black origin-top animate-open-menu ${
                    servicesSubMenu ? "block" : "hidden"
                  }`}
                >
                  <ul>
                    <li className="py-2 my-2 border-b-2">
                      <NavLink to="/consulting">Consulting</NavLink>
                    </li>
                    <li className="py-2 my-2 border-b-2">
                      <NavLink to="/training">Training</NavLink>
                    </li>
                    <li className="py-2 my-2 ">
                      <NavLink to="/innov">Innovation</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li
              className="relative"
              onMouseEnter={toggleNewsRoomSubMenu}
              onMouseLeave={toggleNewsRoomSubMenu}
            >
              <div className="cursor-pointer">
                Newsroom
                <div
                  className={`absolute bg-white rounded-md px-4 w-44 text-black mt-2 origin-top animate-open-menu ${
                    newsroomSubMenu ? "block" : "hidden"
                  }`}
                >
                  <ul>
                    <li className="py-2 my-2 border-b-2">
                      <NavLink to="/events">Events</NavLink>
                    </li>
                    <li className="py-2 my-2 ">
                      <NavLink to="/blogs">Blogs</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "hover:text-yellow-500"
                }
                end
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-500 font-bold"
                    : "hover:text-yellow-500"
                }
                end
              >
                Shop
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "text-yellow-500" : "hover:text-yellow-500"
                }
                end
              >
                Login
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
