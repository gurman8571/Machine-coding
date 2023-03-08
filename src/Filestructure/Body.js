import React, { useState } from 'react'
import {data} from './config'

export default function Body() {
    
        
const Component=({data,key})=>{
const [display, setdisplay] = useState(false)
const icons=['📃','📊','📜','📃','📊','📜','📃','📊','📜','📃','📊','📜','📃','📊','📜']
return(
  <>
  {data.isFolder?
  <>
  <li
  className=' font-bold text-md  cursor-pointer' onClick={()=>{setdisplay(!display)}} > 🗂 {data.name}</li>

  <li className={display?'block px-4':'hidden'}>
{data?.children.map((item,i)=>{

    return(<Component key={i} data={item}/>)
})}

  </li>
  </>
  :<li
  className=' font-bold text-md '> {icons[ Math.floor(Math.random() * icons.length)]} {data.name}</li>}
  </>
)
}

  return (
    <ul className=' table mt-8'>
{data.map((item,i)=>{

return(<>

<Component key={i} data={item}/>


</>)
})}

    </ul>
  )
}
