import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [lenghth, setLenghth] = useState(8)
  const [numberAllowed, setNumberAllowed ] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)

  const [password, setPassword] = useState("")
  const passwordRef =useRef(null)

  const passwordGenrator = useCallback(()=>{
    let pass =""
    let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let num = "0123456789"
    let special = "!@#$%^&*()_+"

    if(numberAllowed) str+=num
    if(characterAllowed) str+=special

    for (let i = 1; i <= lenghth; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length+1));
    }

    setPassword(pass)

  },[lenghth,numberAllowed,characterAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password) 
  },[password])

  useEffect(()=>{
    passwordGenrator()
  },[lenghth,numberAllowed,characterAllowed,passwordGenrator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg p-2 m-8 text-orange-600 bg-gray-600'>
          
          <h1 className='text-center text-white'>Password Genrator</h1>
          
          
          <div className="flex shadow rounded-lg overflow-hidden mb-4">
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 my-2 rounded-lg'
            placeholder='password'
            readOnly 
            ref={passwordRef}/>
            <button onClick={copyPasswordToClipboard} className='bg-blue-700 text-white outline-none py-1 px-3 my-2 rounded-lg'>Copy</button>
          </div>
          

          <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input type="range"
              min={8}
              max={32}
              value={lenghth}
              className='cursor-pointer' 
              onChange={(e)=>{
                setLenghth(e.target.value)
              }}/>
              <label >length :{lenghth}</label>
            </div>

            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={()=>{
                setNumberAllowed((prev)=>!prev)
              }}/>
              <label htmlFor="numberInputs">Numbers</label>

            </div>

            <div className='flex items-center gap-x-1'>
              <input type="checkbox"
              defaultChecked={characterAllowed}
              id="CharacterAllowed"
              onChange={()=>{
                setCharacterAllowed((prev)=>!prev)
              }}/>
              <label htmlFor="CharacterInputs">Character</label>
            </div>

          </div>
      </div>
    </>
  )
}
export default App
