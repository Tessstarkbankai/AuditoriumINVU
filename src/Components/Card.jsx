import Image from 'next/image'
import React from 'react'


function Card({image,details,date}) {
  return (
    <div className='px-8 py-4 mt-24'>
      <div className=' hover:scale-110 transition ease-in-out'>
        <div className=' shadow-2xl'>
          <Image className=' rounded-lg' src={image} width={300}/>
        </div>
        <div className=' my-2'>
          <p className=' text-center font-semibold'>{details}</p>
          <p className='text-center font-semibold'>{date}</p>
        </div>
      </div>
    </div>
  )
}

export default Card