import React from "react";

function AddGameForm() {
  return (
    <>
      <div className="flex flexcol justify-center items-center">
       <div className="border ps-10 pe-10 pt-2 pb-2 rounded">
            <h1 className="text-center" style={{fontSize:30}}>Game Details</h1>
            <br />
            <input type="text" placeholder="Name of your game" className="input" />
            <br />
            <br />
            <h1>Please select the categories</h1>
            <select defaultValue="Pick a color" className="select">
              <option disabled={true}>Pick a category</option>
              <option>Action</option>
              <option>Adventure</option>
              <option>Arcade</option>
              <option>Puzzle</option>
              <option>Sports</option>
              <option>Racing</option>
              <option>Strategy</option>
              <option>Simulation</option>
              <option>RPG</option>
              <option>MMORPG</option>
              <option>Fighting</option>
              <option>Shooter</option>
              <option>Platformer</option>
              <option>Stealth</option>
              <option>Survival</option>
              <option>Idle</option>
              <option>Rhythm</option>
              <option>Board</option>
              <option>Card</option>
              <option>Trivia</option>
              <option>Educational</option>
              <option>Horror</option>
              <option>Sandbox</option>
            </select>
          <br />
            <div>
                <h1>Description:</h1>
                <div>
                <textarea name="description" rows="4" cols="30"></textarea>
              </div>
            </div>
          <br />
          <div>
            <h1>Upload Game Image:</h1>
            <div><input className="bg-base-300 w-50" type="file" name="image"/></div>
          </div>
          <button className="btn btn-primary">Upload</button>
       </div>
      </div>
    </>
  );
}

export default AddGameForm;
