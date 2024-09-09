import React from 'react'
import logo from '../../Assets/logofinal.png'
import Image from 'next/image';

function Navbar() {
  return (
    <div className='w-full font-helv h-24 flex bg-gradient-to-r from-[#e0d4dd] to-[#c8b4c3] shadow-xl justify-around gap-80'>
      <div className="logo">
        <Image className='' src={logo} width={120} height={96} />
      </div>
      <div className="list flex list-none gap-14 text-xl items-center text-black">
        <li>About</li>
        <li>Events</li>
        <li>Team</li>
        <li>Login</li>
        <li>SignUp</li>
      </div>
    </div>
  )
}


export default Navbar