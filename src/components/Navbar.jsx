import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'> Lonely Chat</span>
      <div className="user">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg" alt="" />
        <span>David</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar