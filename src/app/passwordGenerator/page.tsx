"use client"
import React, { useCallback, useState,useEffect,useRef } from 'react'

const PasswordGenerator = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charactAllowed, setCharactAllowed] = useState(false)
  const [randomPassword, setRandomPassowrd] = useState("")
  const passwordRef = useRef<HTMLInputElement>(null);
  // const PasswordGenerator = useCallback (() => {

  // },[length,numberAllowed,charactAllowed,setRandomPassowrd])
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charactAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setRandomPassowrd(pass)


  }, [length, numberAllowed, charactAllowed, setRandomPassowrd])
  const CopypasswordToClipboard = useCallback( () =>{
    window.navigator.clipboard.writeText(randomPassword);
  },[randomPassword])

  useEffect(()=>{
    passwordGenerator()
  },
  [length, numberAllowed, charactAllowed, PasswordGenerator])
  return (
    <>
      <div className='w-full flex flex-col gap-y-4 justify-center max-w-md mx-auto shadow-md rounded-lg px-6 py-6 my-8 text-orange-400 bg-gray-400 '>
        <h1 className='text-white font-600 mx-auto '> Password Generator</h1>
        <div className='flex justify-center items-center'>
          <input
            type='text'
            value={randomPassword}
            className='w-full outline-none py-2 px-3 rounded-l-md '
            placeholder='Password'
            ref={passwordRef}
            readOnly
          />
          <button className='bg-blue-700 text-white shrink-0  py-2 px-3 rounded-r-md '
          onClick={CopypasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div className='flex justify-center items-center gap-x-2'>
          <div className='flex text-sm gap-x-2'>
            <input
              type='range'
              min={6}
              max={40}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(Number(e.target.value)) }}
            />
            <label  className='text-black'>Lable:{length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type='checkbox'
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}

            />
            <label htmlFor='numberInput' className='text-black'>Numbers</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type='checkbox'
              defaultChecked={charactAllowed}
              id="CharactInput"
              onChange={() => {
                setCharactAllowed((prev) => !prev);
              }}

            />
            <label htmlFor='CharactInput' className='text-black'>Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default PasswordGenerator