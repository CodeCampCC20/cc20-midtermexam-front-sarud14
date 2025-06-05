import { useState } from 'react'
import CompoForToDo from '../components/compoForToDo'
import { Rocket } from "lucide-react"
import { useFetchStore } from '../stores/useFetchStore'
import { useNewStore } from '../stores/useNewStore'
import YupToLogin  from "../validator/YupToLogin"

export default function ToDo() {
  const post = useFetchStore((state) => state.posts)
  const fetch = useFetchStore((state) => state.fetchData)
  const newTask = useNewStore((state)=> state.fetchDataTask)
  const [task, setTask] = useState({
    task: "",
    userId: "27"
  })

 const [errObj, setErrObj] = useState({})

  const hdlTask = (e) => {
    setTask({ ...task, [e.target.id]: e.target.value })
  }
  const hdlSubmit = async (e) => {
    e.preventDefault()
    try {
      await schema.validate(login, { abortEarly: false })
      setTask(newTask)
      navi("/todo")
    } catch (error) {
      console.log(error)
      const errObj = YupToLogin(error)
      setErrObj(errObj)
    }
    console.log(errObj)
  }

  return (

    <div className='h-screen flex flex-col justify-center items-center'>
      <fieldset className="fieldset w-lg h-[450px] border p-4 flex flex-col justify-center bg-base-300 border-base-300 rounded-box">
        <div className='flex items-center justify-around gap-30'>
          <legend className="fieldset-legend text-4xl">My Todo </legend>
          <Rocket className='' />
        </div>
        <input type="text" className="mt-4 mb-3 w-full h-10 text-2xl border-b-1 border-b-amber-50 p-3"
          placeholder="New Tesk" onChange={hdlTask} />
          <p className='text-red-500 text-center'>{errObj.task}</p>
        <button className='btn btn-accent' onClick={hdlSubmit} >Submit</button>

        <CompoForToDo />
      </fieldset>
    </div>

  )
}
