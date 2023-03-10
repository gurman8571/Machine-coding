import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Message from './Message'
import { addMessage } from '../utils/Chatslice';
import  Random from '../utils/RndomnameGenerator'
export default function Chat() {
const chats=useSelector((Store)=>Store.Chat.messages)
const dispatch=useDispatch();
//const chats=useSelector((Store)=>Store.Suggestion)
useEffect(() => {
 const i=setInterval(() => {
    console.log('api called');
    dispatch(addMessage(Random()))
 }, 500);

  return () => {
   clearInterval(i)
  }
}, [])



  return (
  <div className='mx-4'>
      <div className=' flex  flex-col-reverse justify-start h-screen overflow-y-scroll w-1/2 border-gray-900  border shadow-sm my-8 rounded-md'>

        


{chats.map((item ,i )=>{
return (<Message name={item.name} message={item.message} key={i}/>)
})}
<p className='flex justify-start text-2xl font-bold mx-6 my-2 '> Chat:</p>
</div>
  </div>
  )
}
