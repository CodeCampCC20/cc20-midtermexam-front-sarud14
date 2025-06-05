import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { schema } from '../validator/schema';
import YupToLogin  from "../validator/YupToLogin"


export default function Login() {
    const navi = useNavigate();

    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const [errObj, setErrObj] = useState({})
    const hdlChange = (e) => {
        setLogin({ ...login, [e.target.id]: e.target.value })
    }
    const hdlLogin = async (e) => {
        e.preventDefault()
        try {
            await schema.validate(login, { abortEarly: false })
            await fetch("http://cc20-todo-midterm-env.eba-fi9p2pds.ap-southeast-1.elasticbeanstalk.com/api/V1/auth/login", {
                method: "post",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(login)
            })
            navi("/todo")
        } catch (error) {
            console.log(error)
            const err = YupToLogin(error)
            setErrObj(err)
        }
        console.log(errObj)
    }
    return (
        <div className='flex h-screen items-center justify-center'>
            <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-lg h-[450px] border p-4 flex flex-col justify-center">
                <legend className="fieldset-legend text-4xl">Welcome</legend>

                <label className="label px-4 text-lg mb-3">Username</label>
                <input type="text" className="input mb-3 w-full" placeholder="Username" id='username' value={login.username} onChange={hdlChange} />
                <p className='text-red-500 text-center'>{errObj.username}</p>
                <label className="label px-4 text-lg mb-3">Password</label>
                <input type="password" className="input mb-3 w-full" placeholder="Password" id='password' value={login.password} onChange={hdlChange} />
                 <p className='text-red-500 text-center'>{errObj.password}</p>
                <button className="btn btn-neutral mt-4" onClick={hdlLogin}>Login</button>
            </fieldset>
        </div>

    )
}
