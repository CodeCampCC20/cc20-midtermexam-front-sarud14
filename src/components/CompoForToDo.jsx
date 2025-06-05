import React, { useState } from 'react'
import { useFetchStore } from '../stores/useFetchStore'

export default function CompoForToDo() {
  

  return (
    <div>
   
        <div className='flex mt-4 text-2xl justify-between items-center'>
          <input type='checkbox'></input>
          <p>Learn React</p>
          <button className='btn btn-accent'>x</button>
        </div>
  
    </div>
  )
}
