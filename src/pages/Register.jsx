import React, {useEffect, useState} from 'react'
import '../assets/image/iphon.png'
import "./Auth.scss"
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import {toast } from 'react-toastify';
import { FaRegEye } from "react-icons/fa";
import { PiEyeSlash } from "react-icons/pi";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';

function Register() {
    const [user, setUser] = useState ({email:"", password: ""});
    const [active, setActive] = useState(false)
    function handler (event) {
        const{value, name} = event.target;

        setUser ({...user, [name] : value})
    }

    async function createUser () {
        try{
            const res = await createUserWithEmailAndPassword(auth, user.email,user.password)
            console.log(res);
            
            if(res) {
                toast.success("user was success created")
            }
            
        }catch (error) {
            console.log(error);
            toast.error("user alredy in use")
        }
    }

  return (
    <div>
      <div className='signup container'> 
      <div className='image'> 
        <img src="" alt="" /> 
      </div> 
      <div className='create'> 
        <h1>Create an account</h1> 
        <p>Enter your details below</p> 
      
        <input placeholder='Name' type="text" /> <br /> 
        <input placeholder='Email or Phone Number' 
        type= {"email"}
         value={user.email}
          name='email'
           onChange={handler}/><br /> 

      {active ? <FaRegEye onClick={() => setActive (false)} /> : <PiEyeSlash onClick={() => setActive(true)} />}


        <div className='inputs'>

        </div>
        <input placeholder='Password' 
        type= {active ? "text" : "password"}
        value={user.password} 
        name='password'onChange={handler}/><br /> 

        <button onClick={() => createUser()}>Create Account</button> 
        <div className='google'> 
        <img src="" alt="" /> 
        <button>Sign up with Google</button> 
 
        </div> 
        <div className='log'> 
        <span>Already have account?</span> 
        <Link to="/login">Log in</Link> 
 
        </div> 
      </div> 
       
    </div>
    <hr />
  </div>
  )
}

export default Register
