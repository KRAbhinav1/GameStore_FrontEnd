import React, { useEffect } from "react";
import HomeSideBar from "./HomeSideBar";
import "../css/Home.css";
import { Link } from "react-router-dom";
import { useGameStore } from "../store/useGameStore";
import { baseURL } from "../lib/baseURL";

function Home() {
  const { games, getGames } = useGameStore();

  useEffect(() => {
    getGames();
  }, []);

  return (
    <>
      <div className="home">
        <div className="">
          <HomeSideBar />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 me-5 mt-5  ">
          <div id="ham-icon" className=" drawer drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer-4"
                className="drawer-button btn btn-ghost ms-20"
              >
                Categories
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-60 p-4">
                {/* Sidebar content here */}
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Action </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Action-Adventure </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Adventure </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Battle Royale </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Board </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Card </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Casual </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>City-Building </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Educational </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Fighting </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>First-Person Shooter (FPS) </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Horror </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Indie </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Music / Rhythm </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Party </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Platformer </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Puzzle </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Racing </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Real-Time Strategy (RTS) </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Sandbox </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Simulation </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Sports </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Stealth </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Survival </Link>
                </li>
                <li className="mt-3">
                  <Link to={"/homesidebar"}>Third-Person Shooter (TPS) </Link>
                </li>
              </ul>
            </div>
          </div>
          {games.map((game) => (
            <div className="card bg-base-300 shadow-lg" key={game.id}>
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
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
