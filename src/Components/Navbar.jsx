import { useContext } from "react";
import { AuthContext } from "../Routes/AuthProvider";
import { Link } from "react-router-dom";


const Navbar = () => {
  const {user, singInOut} = useContext(AuthContext)
  return (
    <div className="navbar bg-base-100 px-4 md:px-8">
      <div className="navbar-start">
        {/* Dropdown for small screens */}
        <div className="dropdown">
          <button
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            <li>
              {user && user.displayName ? (
                <span className="font-semibold">{user.displayName}</span>
              ) : (
                <span>Guest</span>
              )}
            </li>
            {user && user.email && (
              <li>
                <span className="text-gray-500">{user.email}</span>
              </li>
            )}
          </ul>
        </div>

        {/* User Info for Large Screens */}
        <div className="hidden lg:block">
          {user && user.email ? (
            <span className="font-medium">{user.email}</span>
          ) : (
            <span>Guest</span>
          )}
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user && user.displayName ? (
            <span className="font-semibold">{user.displayName}</span>
          ) : (
            <span>Welcome</span>
          )}
        </ul>
      </div>

      <div className="navbar-end flex items-center">
        {/* Profile Picture */}
        {user && user.email && (
          <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-[2px] rounded-full mr-3">
            <img
              title={user.displayName}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white object-cover"
              src={user.photoURL}
              alt="User"
            />
          </div>
        )}

        {/* Logout Button */}
        {user && user.email ? (
          <Link to="/">
            <button
              onClick={singInOut}
              className="bg-gradient-to-r from-[#008080] to-[#a569bd] text-white font-semibold py-2 px-4 rounded shadow hover:shadow-lg transform hover:scale-105 transition-all text-sm md:text-base"
            >
              Log out
            </button>
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;