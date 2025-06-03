import React from 'react'
import SideBar from './SideBar'
import '../css/UserPanel.css'

function UserPanel() {
  return (
    <>
      <div className='adminPanel'>
        <div><p><SideBar/></p></div>
       <div style={{overflowX: 'auto', width: '100%'}}>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Abhinav</td>
                  <td>spectrum4u321@gmail.com</td>
                  <td><button>Edit</button></td>
                  <td><button>Delete</button></td>
                </tr>
              </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default UserPanel
