import React from 'react'

export default function Message({name,message}) {
  return (
    <div>

        <div className='border-gray-300 flex justify-start  rounded-md px-4 shadow-md bg-gray-200 my-2 mx-4 py-2'><b>{name}: </b>{message}</div>
    </div>
  )
}
