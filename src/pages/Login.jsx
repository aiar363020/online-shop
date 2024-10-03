import React from 'react'
import "./Login.scss"

function Login() {
  return (
    <div className='signup container'>
      <div className='image'>
        <img src="" alt="" />
      </div>
      <div className='crate'>
      <h1>Log in to Exclusive</h1>
      <p>Enter your details below</p>
      <input placeholder='Email or Phone Number'type="text" />
      <input  placeholder='Password' type="text" />
      </div>
      <div className='Login'>
        <h1>Login In</h1>
      </div>
    </div>
  )
}

export default Login
