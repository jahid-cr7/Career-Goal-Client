import React, { use } from "react";
import { Link, NavLink } from "react-router";
import "./Navbar.css";
import { AuthContext } from "../ContextAPI/ContextAuth";
import { toast, ToastContainer } from "react-toastify";

const minlink = (
  <>
    <li>
      <NavLink>Home</NavLink>
    </li>
    <li>
      <NavLink>About</NavLink>
    </li>
    <li>
      <NavLink>Contact Us</NavLink>
    </li>
    <li>
      <NavLink>Login</NavLink>
    </li>
  </>
);
const maxlink = (
  <>
    <li>
      <NavLink to={"/"}>Home</NavLink>
    </li>
    <li>
      <NavLink to={"/about"}>About</NavLink>
    </li>
    <li>
      <NavLink to={"/services"}>Services</NavLink>
    </li>
    <li>
      <NavLink to={"/contact"}>Contact</NavLink>
    </li>
  </>
);
const button = (
  <>
    <button className="bg-[#D9A299] px-5 py-1.5 saira text-black rounded-md">
      Login
    </button>
  </>
);
const signOutbutton = (
  <>
    <button className="bg-[#D9A299] px-5 py-1.5 saira text-black rounded-md">
      SignOut
    </button>
  </>
);

const Navbar = () => {
  const { users, signout } = use(AuthContext);

  const handleSignOut = () => {
    signout()
      .then((result) => {
        toast.success("User Sign Out Successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.error("Sign out failed", error);
        toast.error("Sign Out Failed", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className="navbar bg-[#9ECAD6] shadow-sm text-black px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {minlink}
          </ul>
        </div>
        <Link to={"/"} className="normal-case text-xl font-bold">
          <span></span>
          Career Goal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 saira text-[15px]">
          {maxlink}
        </ul>
      </div>
      <div className="navbar-end">
        {users ? (
          <div onClick={handleSignOut}>{signOutbutton}</div>
        ) : (
          <Link to={"/login"}>{button}</Link>
        )}
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Navbar;
