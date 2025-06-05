import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Layout from '../Layout/Layout'
import Login from '../pages/Login'
import ToDo from '../pages/ToDo'
import Home from '../pages/Home'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home />}/>
                <Route path='login' element={<Login />} />
                <Route path='todo' element={<ToDo />} />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}
