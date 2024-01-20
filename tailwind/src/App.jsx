import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState("black")

  return (
    <>
    <div class='main' style={{backgroundColor: color}}>
      
          <div class="inner space-x-6">
            
            <button onClick={()=>{setcolor("pink")}}
            class="bg-pink-700 text-white rounded-3xl px-3 py-2 text-sm font-medium" aria-current="page">pink</button>
            <button onClick={()=>{setcolor("green")}}
            class="bg-green-700 text-white rounded-3xl px-3 py-2 text-sm font-medium" aria-current="page">green</button>
            <button onClick={()=>{setcolor("red")}}
            class="bg-red-700 text-white rounded-3xl px-3 py-2 text-sm font-medium">red</button>
            <button onClick={()=>{setcolor("blue")}}
            class="bg-blue-800 text-white  rounded-3xl px-3 py-2 text-sm font-medium">blue</button>
            <button onClick={()=>{setcolor("yellow")}}
            class="bg-yellow-400 text-white rounded-3xl px-3 py-2 text-sm font-medium shadow">yellow</button>
          </div>
        </div>
        
    </>
  )
}

export default App
