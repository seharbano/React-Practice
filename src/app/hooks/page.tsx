"use client"
import UseEffectFetchDataOnMount from '@/components/hooks/UseEffectFetchDataOnMount'
import UseEffectUsed from '@/components/hooks/UseEffectUsed'
import UseStateUsed from '@/components/hooks/UseStateUsed'
import React,{useState} from 'react'

const Hooks = () => {
const[showCounter,setShowCounter] = useState(false)
  return (
    <div className='flex flex-col justify-start items-center h-screen w-full gap-y-10'>
        <UseStateUsed/>
       <button className='outline-none bg-purple-600 px-4 rounded-md py-1 text-white' onClick={(e) => setShowCounter(!showCounter)}>Toggle</button>
        {showCounter ?   <UseEffectUsed/> : "" }
      
      <div>
        <UseEffectFetchDataOnMount name='Aleyar' email='Aleyar@gmail.com'/>
      </div>
    </div>
  )
}

export default Hooks