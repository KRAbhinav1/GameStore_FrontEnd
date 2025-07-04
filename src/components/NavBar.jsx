import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
// import "../css/NavBar.css";

function NavBar() {
  const { authUser, checkAuth, logout } = useAuthStore();
  const navigate = useNavigate();

  useEffect(() => {
    checkAuth();
    if (!authUser) {
      navigate("/login");
    }
  }, [checkAuth, authUser]);

  const handleLogout = async () => {
    await logout();
  };
  return (
    <>
      <div
        className="navbar bg-base-100 shadow-sm sticky 
                w-full top-0 left-0 z-100 h-16 "
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
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
                  d="M4 6h16M4 12h16M4 18h7"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-1 shadow"
            >
              {!authUser && (
                <>
                  <li>
                    <Link to={"/login"}>Login</Link>
                  </li>
                  <li>
                    <Link to={"/signup"}>SignUp</Link>
                  </li>
                  <li>
                    <Link to={"/becomeaseller"}>Become a publisher</Link>
                  </li>
                </>
              )}
              <li>
                <Link to={"/myOrders"}>My Orders</Link>
              </li>
              <li>
                <Link onClick={handleLogout}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <Link className="btn btn-ghost text-xl" to={"/"}>
            GameStore
          </Link>
        </div>
        <div className="navbar-end">
          <Link to={"/favourites"}>
            <button className="btn btn-ghost btn-circle">
              <div className="indicator">
                <i class="fa-solid fa-heart"></i>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
