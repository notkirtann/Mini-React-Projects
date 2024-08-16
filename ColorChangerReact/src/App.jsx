import { useState } from "react" 

function App() {
  const [color, setColor] = useState("orange")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className='flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl'>
            
            <button onClick={()=>setColor("red")} className=" text-white font-bold outline-none rounded-full shadow-lg px-2" style={{backgroundColor : "red"}}>
              Red
            </button>
            
            <button onClick={()=>setColor("blue")} className=' text-white font-bold outline-none rounded-full shadow-lg px-2'style={{backgroundColor : "blue"}}>
              Blue
            </button>
            
            <button onClick={()=>setColor("green")} className=' text-white font-bold outline-none rounded-full shadow-lg px-2 bg-green-700 hover:bg-green-900'>
              Green
            </button>
            
            <button onClick={()=>setColor("black")} className=' text-white font-bold outline-none rounded-full shadow-lg px-2 bg-slate-800 hover:bg-black'>
              Black
            </button>
          
          </div>
        </div>
      </div>

    </>
  )
}

export default App
