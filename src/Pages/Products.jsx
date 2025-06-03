import React from "react";
import SideBar from "./SideBar";

function Products() {
  return (
    <>
    <div className='adminPanel'>
        <div><p><SideBar/></p></div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 me-5 mt-5">
        <div className="card bg-base-300 w-75 shadow-lg">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-warning">Delete</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-75 shadow-lg">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">Edit</button>
              <button className="btn btn-warning">Delete</button>
            </div>
          </div>
        </div>

        <div className="card bg-base-300 w-75 shadow-lg">
          <figure>
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Card Title</h2>
            <p>
              A card component has a figure, a body part, and inside body there
              are title and actions parts
            </p>
            <div className="card-actions justify-between">
              <button className="btn btn-primary">View</button>
              <button className="btn btn-warning">Delete</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Products;
