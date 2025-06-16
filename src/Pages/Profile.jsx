import React from 'react'
import SellerSideBar from './SellerSideBar'
import '../css/Profile.css'

function Profile() {
  return (
    <>
      <div className='sellerPanel'>
        <div><p><SellerSideBar/></p></div>
          <div className='bg-base-300' style={{overflowX: 'auto', width: '100%'}}>
            <form>
              <div className="adminprofile">
          <h2>Profile</h2>
          <div className="bg-base-300 rounded"  style={{marginRight:115}}>
            
              <div className="profileContents">
                <div className="profilePicture" >
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/025/869/629/non_2x/round-profile-image-of-man-avatar-for-social-networks-fashion-beauty-blue-and-black-bright-illustration-in-trendy-style-vector.jpg"
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: 75,
                      margin: 10,
                    }}
                    alt=""
                  />
                </div>
                <div className="adminInfo">
                  <h2>AryaLakshmi</h2>
                  <p>Seller</p>
                  <p>Idukki,Kerala</p>
                </div>
              </div>
            
          </div>
          <br />
          <h2>Personal Information</h2>
         
          <table className="bg-base-300 rounded" style={{marginLeft:0}}>
            <tbody>
              <tr>
                <td>First name:Arya</td>
                <td>Last name:Lakshmi</td>
                <td>Date of Birth:01-02-2005</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Email:spectrum4you321@gmail.com</td>
                <td>Phone Number:9876543210</td>
                <td>Role:Seller</td>
              </tr>
            </tbody>
          </table>
          <br />
          <h2>Address</h2>
          <table className="bg-base-300 rounded" style={{marginLeft:0}}> 
            <tbody>
              <tr>
                <td>Country:India</td>
                <td>City:Thrissur</td>
                <td>Postal Code:685602</td>
              </tr>
            </tbody></table>
        </div>
            </form>
          </div>
          <div></div>
      </div>
    </>
  )
}

export default Profile
