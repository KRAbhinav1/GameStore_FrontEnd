import React, { useState } from "react";
import { toast } from "react-toastify";
import { useGameStore } from "../store/useGameStore";

function AddGameForm() {
  const { addGames } = useGameStore();
  const [game, setGame] = useState({
    name: "",
    category: "",
    desc: "",
    rate: "",
    img: "",
  });
  console.log(game);

  const handleAdd = async () => {
    if (!game.name || !game.category || !game.desc || !game.rate || !game.img) {
      toast.error("Please fill up all the details");
    } else {
      const formData = new FormData();
      formData.append("name",game.name)
      formData.append("category", game.category);
      formData.append("desc", game.desc);
      formData.append("rate", game.rate);
      formData.append("img", game.img);
      await addGames(formData);
    }
  };

  return (
    <>
      <div className="flex flexcol justify-center items-center">
        <div className="border ps-10 pe-10 pt-2 pb-2 rounded">
          <h1 className="text-center" style={{ fontSize: 30 }}>
            Game Details
          </h1>
          <br />
          <input
            type="text"
            placeholder="Name of your game"
            className="input"
            onChange={(e) => setGame({ ...game, name: e.target.value })}
          />
          <br />
          <br />
          <select
            className="select"
            onChange={(e) => setGame({ ...game, category: e.target.value })}
          >
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
          <br />
          <div>
            <h1>Description:</h1>
            <div>
              <textarea
                name="description"
                rows="4"
                cols="40"
                onChange={(e) => setGame({ ...game, desc: e.target.value })}
                className="border rounded"
              ></textarea>
            </div>
          </div>
          <br />
          <div>
            <h1>Rate:</h1>
            <div>
              <input
                type="text"
                className="input"
                onChange={(e) => setGame({ ...game, rate: e.target.value })}
              />
            </div>
          </div>
          <br />
          <div>
            <h1>Upload Game Image:</h1>
            <div>
              <input
                className="bg-base-300 w-50"
                type="file"
                name="image"
                onChange={(e) => setGame({ ...game, img: e.target.files[0] })}
              />
            </div>
          </div>
          <button className="btn btn-primary" onClick={handleAdd}>
            Upload
          </button>
        </div>
      </div>
    </>
  );
}

export default AddGameForm;
