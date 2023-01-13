import React from 'react'
import {Routes,Route} from "react-router-dom"
import Account from './Pages/Account'
import Cart from './Pages/Cart'
import Consoles from './Pages/Consoles'
import Help from './Pages/Help'
import Home from './Pages/Home'
import Product from './Pages/Product'
import Register from './Pages/Register'
import Sale from './Pages/Sale'
import Sign_In from './Pages/Sign_In'
import Games from './Pages/Games'
const Routing = () => {
  return (

    <div>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/conso" element={<Consoles/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/on" element={<Sale/>} />
        <Route path="/login" element={<Sign_In/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/acc" element={<Account/>} />
        <Route path="/regi" element={<Register/>} />
        <Route path="/games" element={<Games/>} />
        <Route path="/cart" element={<Cart/>} />
        
        
        </Routes>
      
    </div>
  )
}

export default Routing
