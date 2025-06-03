import React from 'react'
import { Link } from 'react-router-dom'

function GrantPermission() {
  return (
    <>
      <div className='m-10 '>
        <h1 >You have received a seller request.</h1>
        <p >Tap to show <Link style={{color:'red',fontSize:20}}>user profile</Link></p>
        <br />
        <input type="radio" name='permission' />
        <label htmlFor="permission" >Grant Permission</label>
        <p>Allows the user to publish games in Gamestore.</p>
        <br />
        <input type="radio" name='permission'/>
        <label htmlFor="permission">Reject Request</label>
      </div>
    </>
  )
}

export default GrantPermission
