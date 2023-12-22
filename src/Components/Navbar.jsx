import { Link } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

export const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleSignOut = () => {
    logOut().then().catch();
  };
  const navMenu = (
    <>
      <li>
        <Link className="lg:text-white">Home</Link>
      </li>

      <li>
        <Link className="lg:text-white">Features</Link>
      </li>
      <li>
        <Link className="lg:text-white">About Us</Link>
      </li>
      <li>
        <Link className="lg:text-white">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
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
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navMenu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-white">TaskHub</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navMenu}</ul>
      </div>
      <div className="navbar-end">
        {user?.email ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-info btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={user?.photoURL} alt={user?.displayName} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-content rounded-box w-auto"
            >
              <li>
                <button className="btn btn-sm text-white btn-ghost pointer-events-none">
                  {user?.displayName}
                </button>
              </li>
              <li>
                <button className="btn btn-sm text-white btn-ghost pointer-events-none">
                  {user?.email}
                </button>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-white btn btn-ghost btn-sm"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <button
                  className="btn btn-sm text-white btn-ghost"
                  onClick={handleSignOut}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">
            <button className="px-6 py-2 font-medium bg-orange-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};
