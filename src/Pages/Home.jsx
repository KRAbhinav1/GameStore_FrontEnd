import React from "react";
import HomeSideBar from "./HomeSideBar";
import "../css/Home.css";
import { Link } from "react-router-dom";
function Home() {
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

          <div className="card bg-base-300 shadow-lg">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
                alt="Games"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Legacy: Steel & Sorcery</h2>
              <p>
                Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1973530/ss_c14bbf4d204aab3372dfb89b1101556dde999ac1.600x338.jpg?t=1728532474"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Limbus Company</h2>
              <p>
                As the Executive Manager of Limbus Company, lead your group of
                twelve Sinners, venture into the buried facilities of Lobotomy
                Corporation, and lay claim on the Golden Boughs.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1229490/ss_7460a480b1deb03f64cbfff0173445fb50d0c514.600x338.jpg?t=1740623813"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Ultrakill</h2>
              <p>
                ULTRAKILL is a fast-paced ultraviolent retro FPS combining the
                skill-based style scoring from character action games with
                unadulterated carnage inspired by the best shooters of the '90s.
                Rip apart your foes with varied destructive weapons and shower
                in their blood to regain your health
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">View</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
                alt="Games"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Legacy: Steel & Sorcery</h2>
              <p>
                Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
                alt="Games"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Legacy: Steel & Sorcery</h2>
              <p>
                Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
                alt="Games"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Legacy: Steel & Sorcery</h2>
              <p>
                Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
                alt="Games"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Legacy: Steel & Sorcery</h2>
              <p>
                Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
                alt="Games"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Legacy: Steel & Sorcery</h2>
              <p>
                Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
                alt="Games"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Legacy: Steel & Sorcery</h2>
              <p>
                Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
                alt="Games"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Legacy: Steel & Sorcery</h2>
              <p>
                Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
                alt="Games"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Legacy: Steel & Sorcery</h2>
              <p>
                Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-300 shadow-lg ">
            <figure>
              <img
                src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
                alt="Games"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title italic">Legacy: Steel & Sorcery</h2>
              <p>
                Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.
              </p>
              <div className="card-actions justify-between">
                <button className="btn btn-primary">Edit</button>
                <button className="btn btn-warning">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
