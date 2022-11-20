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
    <div className="popup">
      <h1 className="h1">Lonely Chat</h1>
      <h2 className="h2">Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="name"/>
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input style={{display:"none"}}type="file" id='file'/>
        <label className="popup-addImage" htmlFor='file'> 
          <img className="popup-addImage-image" src={Add} alt='Add avatar'/>
          <span>Add an avatar</span>
        </label>
        <input className="popup-submit" type="submit" value="Sign up"/>
        {err && <span>Something went wrong</span>}
      </form>
      <div className="popup-hint">
        <p>You already have an account?</p>
        <a href="#">Login</a>
      </div>
    </div>
  )
}

export default Register