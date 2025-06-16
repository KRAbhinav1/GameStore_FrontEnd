import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useAuthStore } from "../store/useAuthStore";
import { Navigate, useNavigate } from "react-router-dom";

function SellerSignup() {
  const navigate = useNavigate();
  const { signup } = useAuthStore();
  const authUser = useAuthStore((state) => state.authUser);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "publisher"
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.name || !user.email || !user.password) {
      toast.error("Please fill out all the details..!");
    } else {
      await signup(user);
    }
  };

  useEffect(() => {
    if (authUser?.role === "publisher") {
      navigate("/sellerprofile");
    }
  }, [authUser]);

  return (
    <>
      <div className="sellersignup flex justify-center items center">
        <form>
          <div className="border p-5 rounded">
            <h1 className="text-center m-5" style={{ fontSize: 25 }}>
              <ins>Become a seller</ins>
            </h1>
            <input
              type="text"
              style={{ width: 300 }}
              placeholder="Name of publisher"
              className="input"
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
            <br />
            <br />
            <input
              type="email"
              style={{ width: 300 }}
              placeholder="Email"
              className="input"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <br />
            <br />
            <input
              type="password"
              style={{ width: 300 }}
              placeholder="Password"
              className="input"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <br />
            <br />
            {/* <input
              type="text"
              style={{ width: 300 }}
              placeholder="Your phone number"
              className="input"
            />
            <br />
            <br /> */}
            <button className="btn" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SellerSignup;
