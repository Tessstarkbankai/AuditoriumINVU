import React from 'react'
import img from '../../Assets/invertisHome.jpg'
import Image from 'next/image'


function HomePage() {
  return (
    <div className="cont">
      <div className="img w-full h-[75vh] z-0">
        <Image className=' overflow-hidden h-[700px] w-full blur-sm' src={img} width={1400} height={300} />
      </div>
      <div className="flex flex-col justify-center  items-center overlay absolute z-10 bg-black h-[30vw] w-[60%] mt-[-470px] opacity-50 rounded-r-lg">
        <h1 className=' text-white text-7xl text-center font-extrabold tracking-wider'>Invertis Auditorium <br /> Booking System</h1>
        <div className="btn mt-10">
          <button className=' w-28 rounded-full font-bold text-lg h-14 bg-white text-black mr-16'>Login</button>
          <button className=' w-28 rounded-full font-bold text-lg h-14 border-2 p-2 border-white text-white hover:bg-white hover:text-black transition duration-300 '>SignUp</button>
        </div>
      </div>
    </div>
  )
}

export default HomePage