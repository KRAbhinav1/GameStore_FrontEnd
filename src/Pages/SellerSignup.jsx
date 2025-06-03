import React from 'react'

function SellerSignup() {
  return (
    <>
      <div className='sellersignup flex justify-center items center'>
          <form>
            <div className='border p-5 rounded'>
              <h1 className='text-center m-5' style={{fontSize:25}}><ins>Become a seller</ins></h1>
              <input type="text" style={{width:300}} placeholder="Name of publisher" className="input" />
              <br /><br />
              <label htmlFor="Gender">Gender:  </label>
              <label htmlFor="Gender">Male: </label>
              <input type="radio" name='Gender' /> 
              <label htmlFor="Gender">Female: </label>
              <input type="radio" name='Gender' />
              <br /><br />
              <input type="email" style={{width:300}} placeholder="Email" className="input" />
              <br /><br />
              <input type="password" style={{width:300}} placeholder="Password" className="input" />
              <br /><br />
              <input type="text" style={{width:300}} placeholder="Your phone number" className="input" />
              <br /><br />
              <button className="btn">Submit</button>
            </div>
          </form>
      </div>
    </>
  )
}

export default SellerSignup
