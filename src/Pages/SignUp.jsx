import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/useAuthStore";

function SignUp() {
  const navigate = useNavigate();
  const { signup } = useAuthStore();
  const authUser = useAuthStore((state) => state.authUser);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "user"
  });

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      toast.error("Please fill the form completely");
    } else {
      await signup(user);
    }
  };
  
  useEffect(() => {
    if (authUser?.role === "user") {
      navigate("/");
    }
  }, [authUser, navigate]);

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
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
            </div>
            <br />
            <div className="mt-4">
              <input
                type="text"
                placeholder="Enter a email"
                className="input input-ghost border border-zinc-600"
                onChange={(e) => setUser({ ...user, email: e.target.value })}
              />
            </div>
            <br />
            <div className="mt-4">
              <input
                type="password"
                placeholder="Create a Password"
                className="input input-ghost border border-zinc-600"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                className="btn btn-primary mt-3 "
                onClick={(e) => handleRegister(e)}
              >
                Sign Up
              </button>
            </div>
            <div>
              <p className="link " style={{ textDecoration: "none" }}>
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
