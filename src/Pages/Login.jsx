import { GoogleLogin } from "@react-oauth/google";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

function Login() {
  const { login, googleSignin } = useAuthStore();
  const navigate = useNavigate();
  const authUser = useAuthStore((state) => state.authUser);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!user.email || !user.password) {
      toast.error("Please fill the form completely");
    }
    await login(user);
  };

  useEffect(() => {
    if (authUser?.role === "user") {
      navigate("/");
    } else if (authUser?.role === "publisher") {
      navigate("/sellerprofile");
    } else if (authUser?.role === "admin") {
      navigate("/dashboard");
    }
  }, [authUser, navigate]);

  
  
  return (
    <>
      <div className="flex items-center justify-center w-full h-100 ">
        <div className="border p-5 rounded">
          <form className="w-70">
            <h2 className="text-3xl flex item-center justify-center">Login</h2>
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter your email"
                className="input input-ghost border border-zinc-600"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <br />
            <div className="mt-4">
              <input
                type="password"
                placeholder="Enter a password"
                className="input input-ghost border border-zinc-600"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <Link className=" text-xs mt-5" style={{ textDecoration: "none" }}>
              Forgot Password?
            </Link>
            <div className="flex justify-centre items-center flex-col w-full ">
              <button
                className="btn btn-primary mt-3 w-20 mb-5"
                onClick={(e) => handleLogin(e)}
              >
                Login
              </button>
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  googleSignin(credentialResponse)
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
              />
            </div>

            <div
              className="link flex justify-center item-center"
              style={{ textDecoration: "none" }}
            >
              <p className="mt-3 text-sm">
                Don't have an account?
                <Link
                  to={"/signup"}
                  className="link text-blue-500 ms-1"
                  style={{ textDecoration: "none" }}
                >
                  SignUp
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
