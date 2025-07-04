import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { useGameStore } from "../store/useGameStore";
import { baseURL } from "../lib/baseURL";

function Analytics() {
  const { games, getGames } = useGameStore();

  useEffect(() => {
    getGames();
  }, []);
  console.log(games);

  return (
    <>
      <div className="adminPanel">
        <div>
          <p>
            <SideBar />
          </p>
        </div>
        <div className="flex grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 me-5 mt-5 ">
          {games.map((game) => (
            <div className="card bg-base-300 shadow-lg" key={game.id}>
              <figure>
                <img src={`${baseURL}/uploads/${game.img}`} alt={game.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title italic">{game.name}</h2>
                <p>{game.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Analytics;
