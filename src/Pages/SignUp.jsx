import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <>
      <div className="flex items-center justify-center w-full h-100 ">
        <div className="border p-5 rounded">
          <form className="w-70">
            <h2 className="text-3xl flex item-center justify-center">
              Sign Up
            </h2>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="input input-ghost border border-zinc-600"
              />
              
            </div>
            <br />
            <div className="mt-4">
              <input
                type="text"
                placeholder="Create a username"
                className="input input-ghost border border-zinc-600"
              />
            </div>
            <br />
            <div className="mt-4">
              <input
                type="password"
                placeholder="Create a Password"
                className="input input-ghost border border-zinc-600"
              />
            </div>
            <div className="flex justify-center items-center">
              <button className="btn btn-primary mt-3 ">Sign Up</button>
            </div>
            <div>
              <p
                className="link "
                style={{ textDecoration: "none" }}
              >
                Already have an account?
                <Link
                  to={"/login"}
                  className="link text-blue-500 ms-1"
                  style={{ textDecoration: "none" }}
                >
                  login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
