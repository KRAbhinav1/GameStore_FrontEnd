import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/HomeSideBar.css"
function HomeSideBar() {
    return (
      <>
        <div
          className={`sidebar_content
    h-screen bg-gray-800 text-white z-40 w-50 p-4
     overflow-auto fixed`}
        >
          <ul>
            <li className="mt-3">
              <Link to={"/homesidebar"}>Action</Link>
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
      </>
    );
  }


export default HomeSideBar;
