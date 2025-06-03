import React from 'react'

function RequestPermission() {
  return (
    <>
      <form className='flex justify-center item-center'>
          <div className='border p-5 rounded'>
            <h1 className='text-center m-5' style={{fontSize:25}}><ins>Publisher Details</ins></h1>
            <p style={{fontSize:20}}>What's the name of your profile?</p>
            <input type="text" style={{width:'80%'}} placeholder="Type here" className="input" />
            <br /><br />
            <p style={{fontSize:20}}>Share your info with the current owner to continue.</p>
             <input type="text" style={{width:'80%'}} placeholder="Your contact name" className="input" />
             <br /><br />
             <input type="text" style={{width:'80%'}} placeholder="Your phone number" className="input" />
             <br /><br />
            <p style={{fontSize:20}}>GSTIN</p>
            <input type="text" style={{width:'80%'}} placeholder="Type here" className="input" />
             <div className='flex justify-center items-center'><button className="btn">Submit</button></div>
          </div>
      </form>
    </>
  )
}

export default RequestPermission
