import React, { useState } from 'react'
import { useFetchStore } from '../stores/useFetchStore'

export default function CompoForToDo(item) {
  const fetch = useFetchStore((state) => state.fetchData)
   const hdlDel = async(id) => {
    await fetch(`http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/todos/${id}/27`, {
      method: "delete"
    })
    fetch(27)
   }

  return (
    <div>
   
        <div className='flex mt-4 text-2xl justify-between items-center'>
          <input type='checkbox'></input>
          <p>asdfasdasd</p>
          <button className='btn btn-accent' onClick={()=> hdlDel(item.id)}>x</button>
        </div>
  
    </div>
  )
}
