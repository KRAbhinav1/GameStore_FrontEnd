import React, { useEffect, useState } from "react";
import SellerSideBar from "./SellerSideBar";
import { useGameStore } from "../store/useGameStore";
import { baseURL } from "../lib/baseURL";

function SellerProduct() {
  const { pubGames, getPublisherGames } = useGameStore();

  useEffect(() => {
    getPublisherGames();
  }, []);
  console.log(pubGames);

  return (
    <>
      <div className="adminPanel">
        <div>
          <p>
            <SellerSideBar />
          </p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 me-5 mt-5">
          {pubGames.map((game) => (
            <div className="card bg-base-300 w-75 shadow-lg">
              <div>
                <figure>
                  <img src={`${baseURL}/uploads/${game.img}`} alt={game.name} />
                </figure>
                <div className="card-body">
                  <h2 className="card-title italic">{game.name}</h2>
                  <p>{game.desc}</p>
                  <div className="card-actions justify-between">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-warning">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SellerProduct;
