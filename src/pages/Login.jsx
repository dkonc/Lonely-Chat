import React from 'react'
import Add from "../img/addAvatar.png"
const Login = () => {
  return (
    <div class="popup">
      <h1 class="h1">Lonely Chat</h1>
      <h2 class="h2">Login</h2>
      <form action="#">
        <input type="email" placeholder="email"/>
        <input type="password" placeholder="password"/>
        <input class="popup-submit" type="submit" value="Sign In"/>
      </form>
      <div class="popup-hint">
        <p>You don't have an account?</p>
        <a href="#">Register</a>
      </div>
    </div>
  )
}

export default Login