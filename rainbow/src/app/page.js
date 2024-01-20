"use client"
import React, { useState } from 'react'



const page = () =>{
  const [first, setfirst] = useState('white')

  return (
    <>
      <div className='h-screen w-full relative ' style={{ backgroundColor: first }}>

        <h1 className='text-center font-bold text-6xl h-52 py-9'>Rainbow Seven Colours</h1>
        <p className='text-center font-bold py-4'>A ReactJS  with Tailwind CSS integration, showcasing a dynamic rainbow color generator. Users can experience a visual treat by clicking a button.</p>
        <p className='text-center text-white font-bold text-6xl'>{first}</p>
        
        <div className=' flex px-2 py-3 gap-4 absolute top-96 left-80'>
          <button onClick={() => setfirst("Red")} 
          className='bg-red-600 px-3 py-2 rounded-3xl'>
          Red
          </button>
          <button onClick={() => setfirst("Orange")} 
          className='bg-orange-600 px-3 py-2 rounded-3xl'>
            Orange
          </button>
          <button onClick={() => setfirst("Yellow")} 
          className='bg-yellow-600 px-3 py-2 rounded-3xl'>
          Yellow
          </button>
          <button onClick={() => setfirst("Green")} 
          className='bg-green-600 px-3 py-2 rounded-3xl time'>
          Green
          </button>
          <button onClick={() => setfirst("Blue")} 
          className='bg-blue-400 px-3 py-2 rounded-3xl'>
          Blue
          </button>
          <button onClick={() => setfirst("Indigo")}
          className='bg-indigo-600 px-3 py-2 rounded-3xl'>
          Indigo
          </button>
          <button onClick={() => setfirst("Violet")} 
          className='bg-violet-600 px-3 py-2 rounded-3xl duration-500'>
          Violet
          </button>
          <button onClick={() => setfirst("White")} 
          className=' bg-black text-white px-3 py-2 rounded-3xl duration-500'>
          Click to Restart
          </button>
        </div>
      </div>

    </>
  )
}

export default page