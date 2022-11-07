import React from 'react'
import Add from "../img/addAvatar.png"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from 'react';

const Register = () => {
  const [err,setErr] = useState(false);
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);
    }
    catch(err){
      setErr(true);
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Lonely Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='display name'/>
          <input type="email" placeholder='email'/>
          <input type="password" placeholder='password'/>
          <input style={{display:"none"}}type="file" id='file'/>
          <label htmlFor='file'> 
            <img src={Add} alt='Add avatar'></img>
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>You already have an account? Login</p>
      </div>
    </div>
  )
}

export default Register