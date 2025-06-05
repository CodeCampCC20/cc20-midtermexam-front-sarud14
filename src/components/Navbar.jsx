import React from 'react'
import { NavLink } from 'react-router'

export default function Navbar() {
    const navBar = [
        {id:1, name:"Home", path:"/"},
        {id:2, name:"login", path:"/login"},
        {id:3, name:"todo", path:"/todo"}
    ]
  return (
    <div className='flex gap-3 h-15 bg-accent items-center px-3 navbarshadow-sm"'>
        {
            navBar.map((el)=>(
                <NavLink key={el.id} to={el.path} item={el.name} 
                className="btn btn-ghost text-xl"
                >{el.name}</NavLink>
            ))
        }
    </div>
  )
}
