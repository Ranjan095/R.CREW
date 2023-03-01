import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Cart from '../../Pages/Cart'
import Cashmere from '../../Pages/Cashmere'
import Home from '../../Pages/Home'
import Kids from '../../Pages/Kids'
import Login from '../../Pages/Login'
import New from '../../Pages/New'
import Sales from '../../Pages/Sales'
import SignUp from '../../Pages/SignUp'
import Stories from '../../Pages/Stories'
import Swim from '../../Pages/Swim'
import Women from '../../Pages/Women'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cashmere' element={<Cashmere/>}/>
            <Route path='/kids' element={<Kids/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/new' element={<New/>}/>
            <Route path='/sales' element={<Sales/>}/>
            <Route path='/stories' element={<Stories/>}/>
            <Route path='/swim' element={<Swim/>}/>
            <Route path='/women' element={<Women/>}/>
            <Route path='/cart' element={<Cart/>}></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes