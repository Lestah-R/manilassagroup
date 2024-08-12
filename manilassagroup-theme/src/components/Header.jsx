import { NavLink } from "react-router-dom";

function Header() {
  return (
    <nav className='relative container mx-auto p-6 bg-customDark text-white'>
      <div className='flex items-center justify-between'>
        <img src='/ssa-logo.png' alt='logo' className='h-8 w-auto' />
        <div className='hidden lg:flex space-x-8 font-bold'>
          <ul className='flex space-x-8'>
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-500")} end>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to='/services' className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-500")} end>
                Services
              </NavLink>
            </li>
            <li>
              <NavLink to='/newsroom' className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-500")} end>
                Newsroom
              </NavLink>
            </li>
            <li>
              <NavLink to='/contact' className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-500")} end>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to='/shop' className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-500")} end>
                Shop
              </NavLink>
            </li>
            <li>
              <NavLink to='/login' className={({ isActive }) => (isActive ? "text-yellow-500" : "hover:text-yellow-500")} end>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
