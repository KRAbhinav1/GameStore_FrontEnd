import React from "react";
import { Link } from "react-router-dom";
import "../css/SideBar.css"
function SideBar() {
  return (
    <>
      <div className="sidebar border-r-1 border-zinc-600">
        
            <ul style={{listStyleType:'none'}} className="ms-1">
                <li className="mt-5" style={{fontSize:14}}><Link className="adminpanel" to={'/profile'} >Profile</Link></li>
                <li className="mt-3" style={{fontSize:14}}><Link className="adminpanel" to={'/userpanel'}>User Panel</Link></li>
                <li className="mt-3" style={{fontSize:14}}><Link className="adminpanel" to={'/products'}>Products</Link></li>
                <li className="mt-3" style={{fontSize:14}}><Link className="adminpanel" to={'/analytics'}>Analytics</Link></li>
                <li className="mt-3" style={{fontSize:14}}><Link className="adminpanel" to={'/offers'}>Offers</Link></li>
                <li className="mt-3" style={{fontSize:14}}><Link className="adminpanel" to={'/grantpermission'}>Requests</Link></li>
                {/* <li className="mt-32 mb-5" style={{fontSize:14}}><Link to={'/logout'}>Log Out</Link></li> */}
            </ul>
      </div>
    </>
  );
}

export default SideBar;
