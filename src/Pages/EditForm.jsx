import React, { useState } from "react";
import { baseURL } from "../lib/baseURL";
import { useGameStore } from "../store/useGameStore";
import { toast } from "react-toastify";

function EditForm({ game, modalId }) {
  // console.log(game);

  const { editGames , getPublisherGames } = useGameStore();

  const [edit, setEdit] = useState({
    name: game.name,
    desc: game.desc,
    rate: game.rate,
    category: game.category,
    img: game.img,
  });

  const gameEdit = async () => {
    if (!edit.name || !edit.desc || !edit.rate || !edit.category || !edit.img) {
      toast.error("Please fill up all the details.");
    } else {
      const formdata = new FormData();
      formdata.append("name", edit.name);
      formdata.append("desc", edit.desc);
      formdata.append("category", edit.category);
      formdata.append("rate", edit.rate);
      formdata.append("img", edit.img);
      await editGames(game._id, formdata);
      await getPublisherGames()
    }
  };
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button onClick={() => document.getElementById(modalId).showModal()}>
        Edit
      </button>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div className="modal-action ms-17">
            <form method="dialog">
              <label htmlFor="fileInput" className="mb-10">
                <img
                  src={`${baseURL}/uploads/${edit.img}`}
                  alt=""
                  style={{ height: "200px", width: "200px" }}
                />
              </label>
              <input
                type="file"
                name=""
                id="fileInput"
                className="hidden"
                onChange={(e) => setEdit({ ...edit, img: e.target.file[0] })}
              />

              <input
                type="text"
                placeholder="Name"
                value={edit.name}
                onChange={(e) => setEdit({ ...edit, name: e.target.value })}
                className="input mt-4"
              />
              <input
                type="text"
                value={edit.desc}
                onChange={(e) => setEdit({ ...edit, desc: e.target.value })}
                placeholder="Description"
                className="input mt-5"
              />
              <input
                type="text"
                placeholder="Rate"
                onChange={(e) => setEdit({ ...edit, rate: e.target.value })}
                value={edit.rate}
                className="input mt-5"
              />
              <input
                type="text"
                value={edit.category}
                onChange={(e) => setEdit({ ...edit, category: e.target.value })}
                placeholder="Category"
                className="input mt-5"
              />
              <br />
              <div className="flex ">
                <div>
                  <button className="btn mt-5 ms-35" onClick={gameEdit}>
                    Update
                  </button>
                </div>
                <div>
                  <button className="btn mt-5 ms-35">Close</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
}

export default EditForm;
