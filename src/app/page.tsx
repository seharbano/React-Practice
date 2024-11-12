"use client"
import React, { useState } from 'react'

const home = () => {
  const [color, setColor] = useState("Brown")
  return (
    <div className='w-full h-screen flex justify-center items-center duration-200' style={{ backgroundColor: color }}>
      <div className='fixed flex w-auto flex-wrap justify-center items-center bottom-12 inter-x-0 px-2 '>
<div className='flex flex-wrap justify-center items-center gap-4 shadow-md bg-white px-4 py-3 rounded-full'>
<button className='outline-none px-6 py-2 rounded-full text-white capitalize shadow-md' onClick={() => setColor("red") } style={{backgroundColor:"red"}}>Red</button>
<button className='outline-none px-6 py-2 rounded-full text-white capitalize shadow-md' onClick={() => setColor("green") }  style={{backgroundColor:"green"}}>green</button>
<button className='outline-none px-6 py-2 rounded-full text-white capitalize shadow-md' onClick={() => setColor("blue") }  style={{backgroundColor:"blue"}}>blue</button>
<button className='outline-none px-6 py-2 rounded-full text-white capitalize shadow-md' onClick={() => setColor("olive") }  style={{backgroundColor:"olive"}}>olive</button>
<button className='outline-none px-6 py-2 rounded-full text-white capitalize shadow-md' onClick={() => setColor("pink") }  style={{backgroundColor:"pink"}}>pink</button>
<button className='outline-none px-6 py-2 rounded-full text-white capitalize shadow-md' onClick={() => setColor("orange") }  style={{backgroundColor:"orange"}}>orange</button>
<button className='outline-none px-6 py-2 rounded-full text-white capitalize shadow-md' onClick={() => setColor("black") }  style={{backgroundColor:"black"}}>black</button>

</div>
      </div>
    </div>
  )
}

export default home
