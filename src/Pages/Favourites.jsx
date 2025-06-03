import React from "react";
import { Link } from "react-router-dom";

function Favourites() {
  return (
    <>
      <div>
        <h1 style={{ fontSize: 20 }}>Favourites</h1>
        <div className="flex m-5">
          <div>
            <img
              src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2344320/ss_20b74712f86f84f168f66e959aac596ba513e7cf.600x338.jpg?t=1747328908"
              alt=""
              width={"300px"}
            />
          </div>
          <div className="flex" >
            <div>
              <h1 style={{fontSize:30}}>Legacy: Steel & Sorcery</h1>
              <p>2024</p>
              <div className="flex mt-4">
                <div
                  style={{
                    backgroundColor: "gray",
                    marginRight: 2,
                    borderRadius: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  Action RPG
                </div>
                <div
                  style={{
                    backgroundColor: "gray",
                    marginRight: 2,
                    borderRadius: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  Multiplayer
                </div>
                <div
                  style={{
                    backgroundColor: "gray",
                    marginRight: 2,
                    borderRadius: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  Co-op
                </div>
                <div
                  style={{
                    backgroundColor: "gray",
                    marginRight: 2,
                    borderRadius: 5,
                    paddingLeft: 5,
                    paddingRight: 5,
                  }}
                >
                  RPG
                </div>
              </div>
              <br />
              <div>
                <button className="btn btn-primary w-20">
                  Buy
                </button>
                <button className="btn btn-warning w-50 ms-5">
                  Remove from favourites
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Favourites;
