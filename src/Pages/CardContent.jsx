import React from "react";
import "../css/CardContent.css"
import { Link } from "react-router-dom";

function CardContent() {
  return (
    <>
      <div className=" grid sm:grid-cols-1 md:grid-cols-2 ">
        <div>
          <img className="max-w-full h-auto"
            src={`http://localhost:5173/uploads/${game.img}`}
            alt=""
            
          />
        </div>
        <div className="game_contents m-5">
            <h2 style={{fontSize:50}}>Legacy: Steel & Sorcery</h2>
            <p  style={{fontSize:20}}> Legacy: Steel & Sorcery is an action-combat PvPvE extraction RPG
                set in the classic fantasy world of Mithrigarde, rich with
                expansive outdoor zones. Play solo or with friends to gather
                loot, slay creatures, and defeat other players.</p>
                <br />
                <p className="mt-4">Recent Review:<Link>10001 reviews</Link></p>
                <p className="mt-4">All Reviews:<Link>100k reviews</Link></p>
                <p className="mt-4">Popular user-defined tags for this product:</p>
                <div className="flex mt-4">
                  <div style={{backgroundColor:"gray",marginRight:2,borderRadius:2,paddingLeft:5,paddingRight:5}}>Action RPG</div>
                  <div style={{backgroundColor:"gray",marginRight:2,borderRadius:2,paddingLeft:5,paddingRight:5}}>Multiplayer</div>
                  <div style={{backgroundColor:"gray",marginRight:2,borderRadius:2,paddingLeft:5,paddingRight:5}}>Co-op</div>
                  <div style={{backgroundColor:"gray",marginRight:2,borderRadius:2,paddingLeft:5,paddingRight:5}}>RPG</div>
                </div>
                <div className="flex mt-4">
                  <div><p>Rating:</p></div>
                  <div style={{color:"yellow"}}><i class="fa-solid fa-star"></i></div>
                  <div style={{color:"yellow"}}><i class="fa-solid fa-star"></i></div>
                  <div style={{color:"yellow"}}><i class="fa-solid fa-star"></i></div>
                  <div style={{color:"yellow"}}><i class="fa-solid fa-star"></i></div> 
                  <div style={{color:"yellow"}}><i class="fa-solid fa-star"></i></div>
                </div>
              
           <div className="cartbutton  flex justify-between">
              <button className="btn bg-primary">Add to cart</button>
              <button className="btn bg-warning">Favourite</button>
           </div>
        </div>
      </div>
    </>
  );
}

export default CardContent;
