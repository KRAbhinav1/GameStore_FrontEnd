import React, { useState } from "react";
import { Link } from "react-router-dom";

function SellerSideBar() {
  return (
    <>
      <div className="border-r-1 border-zinc-600">
        <ul style={{ listStyleType: "none" }} className="ms-3">
          <li className="mt-5">
            <Link to={"/sellerprofile"}>Profile</Link>
          </li>
          <li className="mt-3">
            <Link to={"/sellerproducts"}>Products</Link>
          </li>
          <li className="mt-3">
            <Link to={"/sellerAddGame"}>Add Game</Link>
          </li>
          <li className="mt-3">
            <Link to={"/requestpermission"}>Permissions</Link>
          </li>
          <li className="mt-50 mb-5">
            <Link to={"/signup"}>Log Out</Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SellerSideBar;
