import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const [servicesSubMenu, setServicesSubMenu] = useState(false);
  const [newsroomSubMenu, setNewsRoomSubMenu] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const location = useLocation();

  const toggleServicesMenu = () => setServicesSubMenu((prev) => !prev);
  const toggleNewsRoomSubMenu = () => setNewsRoomSubMenu((prev) => !prev);
  const toggleMobileMenu = () => setMobileMenu((prev) => !prev);

  useEffect(() => {
    if (mobileMenu) {
      document.body.classList.toggle("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileMenu]);

  return (
    <>
      <nav
        className={`max-w-full mx-auto p-6 bg-customDark text-white  ${
          ["/about", "/training"].includes(location.pathname)
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
                className="relative hover:text-yellow-500"
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
                className="relative hover:text-yellow-500"
                onMouseEnter={toggleNewsRoomSubMenu}
                onMouseLeave={toggleNewsRoomSubMenu}
              >
                <div className="cursor-pointer">
                  <span
                    className={
                      ["/events", "/blogs"].includes(location.pathname)
                        ? "text-yellow-500 font-bold"
                        : ""
                    }
                  >
                    Newsroom
                  </span>
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
          <div
            className="lg:hidden cursor-pointer relative h-8 w-8 z-50"
            onClick={toggleMobileMenu}
          >
            <button
              id="hamburger-btn"
              className={`text-3xl text-white focus:outline-none ${
                mobileMenu ? "toggle-btn" : ""
              }`}
            >
              <div className="absolute top-4 -mt-0.5 h-[0.18rem] w-8 rounded bg-white transition-all duration-500 before:absolute before:h-[0.18rem] before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-[0.18rem] after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
            </button>
          </div>
        </div>
      </nav>
      <div
        className={`fixed top-0 bottom-0 bg-customDark w-full h-screen overflow-y-auto text-3xl origin-top animate-open-menu flex-col lg:hidden z-10 ${
          mobileMenu ? "block" : "hidden"
        }`}
      >
        <div className="text-[18px] font-bold leading-[28px] text-white">
          <div className="h-[96px]"></div>
          <ul className="grid">
            <li className="p-10 md:pl-20 border-b-2 border-customGray">
              <a href="">About</a>
            </li>
            <li className="p-10 md:pl-20 border-b-2 border-customGray">
              <a href="">About</a>
            </li>
            <li className="p-10 md:pl-20 border-b-2 border-customGray">
              <a href="">About</a>
            </li>
            <li className="p-10 md:pl-20 border-b-2 border-customGray">
              <a href="">About</a>
            </li>
            <li className="p-10 md:pl-20 border-b-2 border-customGray">
              <a href="">About</a>
            </li>
            <li className="p-10 md:pl-20 border-b-2 border-customGray">
              <a href="">About</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
