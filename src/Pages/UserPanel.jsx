import React from "react";
import SideBar from "./SideBar";
import "../css/UserPanel.css";

function UserPanel() {
  return (
    <>
      <div className="adminPanel">
        <div>
          <p>
            <SideBar />
          </p>
        </div>
        <div className="overflow-x-auto">
          <table className="table  table-auto">
            {/* head */}
            <thead>
              <tr>
                <th>Sl.no</th>
                <th>Name</th>
                <th>Email</th>
                <th>Mob.no</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover:bg-base-300">
                <th>1</th>
                <td>K R Abhinav</td>
                <td>abhinav321@gmail.com</td>
                <td>9876543210</td>
                <td>tmgo5483</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default UserPanel;
