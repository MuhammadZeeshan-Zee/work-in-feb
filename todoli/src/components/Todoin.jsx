import React,{useState} from 'react'

function Todoin(props) {
    const [Inpt, setInpt]= useState('')
  
  return (
    <div>
      <input type="text" placeholder='ADD LIST DATA'  
      onChange={(e)=>{
        setInpt(e.target.value)
      }} value={Inpt}/>
      <button type='button' onClick={()=>{
        props.addlist(Inpt)
        setInpt("")
      }}>+</button>
      <ol>
     
       {
        List.map((val,ind)=>{
          return (<li key={ind}>{val}</li>)

        })
       }
         
      </ol>
      <hr />

    </div>
  )
}

export default Todoin
