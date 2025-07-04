import React, { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios";
import { baseURL } from "../lib/baseURL";

function Orders() {
    const [response,setResponse]= useState([])

  const getOrder = async () => {
    try {
      const response = await axiosInstance.get("/order/get");
      setResponse(response.data)
    } catch (error) {
      res.status(500).send({ message: "Internal server error" });
    }
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <>
      <div>
        {
        response?.map((order) => (
         <div className="flex" key={order.OrderId}>
              
               {order?.items?.map((game,index) => (
                  <div className="border rounded flex p-5 m-5 flex flex-col" style={{width:300}} key={index}>
                    <div className="">
                      <h1>{order.OrderId}</h1> 
                      <figure>
                        <img
                          src={`${baseURL}/uploads/${game.gameId.img}`}
                          alt={""}
                          width={300}
                        />
                      </figure>
                       <h1 style={{ fontSize: 17 }}>{`${game.gameId.name}`}</h1>
                      <p style={{ fontSize: 17 }}>{`${game.gameId.rate}$`}</p>
                    </div>
                  </div>
               ))}
         </div>      
        ))
        }
      </div>
    </>
  );
}

export default Orders;
