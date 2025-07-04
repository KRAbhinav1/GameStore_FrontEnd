import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { axiosInstance } from "../lib/axios";
import { baseURL } from "../lib/baseURL";

function Products() {
  const [product, setProduct] = useState([]);

  const adminGetOrder = async () => {
    try {
      const response = await axiosInstance.get("/admin/order/get");
      setProduct(response.data);
      // console.log(response);
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  };
  console.log(product);

  useEffect(() => {
    adminGetOrder();
  }, []);

  return (
    <>
      <div className="adminPanel">
        <div>
          <SideBar />
        </div>
        <div>
          {product?.map((p) => (
            <div className="flex grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-3">
              {p?.items?.map((game) => (
                <div className="card bg-base-300 shadow-lg " key={game.id}>
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
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Products;
