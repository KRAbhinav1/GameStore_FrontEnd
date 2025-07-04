import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../store/useCartStore";
import { baseURL } from "../lib/baseURL";
import { axiosInstance } from "../lib/axios";

function Favourites() {
  const [responseId, setResponsive] = useState("");
  const [responseState, setResponseState] = useState([]);

  const { getCart, cart } = useCartStore();

  useEffect(() => {
    getCart();
  }, []);

  const totalAmt = cart?.games?.reduce(
    (total, item) => total + item.gameId.rate,
    0
  );

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");

      script.src = src;
      script.onload = () => {
        resolve(true);
      };

      script.onerror = () => {
        resolve(false);
      };

      document.body.appendChild(script);
    });
  };

  const createRazorpayOrder = async () => {
    const response = await axiosInstance.post("/order/create");
    handleRazorpayScreen(response.data.amount);
  };

  const handleRazorpayScreen = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      alert("Some error at razorpay screen loading.");
      return;
    }

    const options = {
      key: "rzp_test_Xd27hxbFVPVBj9",
      amount,
      currency: "INR",

      handler: async function (response) {
        try {
          await axiosInstance.put("/order/update", {
            orderId: res.id,
            paymentId: response.razorpay_payment_id,
          });
          alert("success");
          await getCart();
        } catch (err) {
          console.log(err);
        }
      },
      theme: {
        color: "#F4C430",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 me-5 mt-5  ">
        {cart?.games?.length <= 0 ? (
          <>
            <p></p>
            <img
              src="https://w7.pngwing.com/pngs/432/660/png-transparent-empty-cart-illustration-thumbnail.png"
              className="m-5"
              alt=""
            />
          </>
        ) : (
          cart?.games?.map((game) => (
            <div className="card bg-base-300 shadow-lg" key={game.gameId.id}>
              <figure>
                <img
                  src={`${baseURL}/uploads/${game.gameId.img}`}
                  alt={game.gameId.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title italic">{game.gameId.name}</h2>
                <p>{game.gameId.desc}</p>
              </div>
            </div>
          ))
        )}
        {cart?.games?.length > 0 ? (
          <div className="border p-2 rounded" style={{ width: 250 }}>
            <div>
              <h1 style={{ fontSize: 20 }}>
                <ins>Price Details</ins>
              </h1>
            </div>
            <div>
              <p>{`Total amount: ${totalAmt}`}</p>
            </div>
            <br />
            <button className="btn btn-warning" onClick={createRazorpayOrder}>
              Proceed to pay
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}

export default Favourites;
