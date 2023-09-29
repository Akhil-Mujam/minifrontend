import React from 'react'
import Login  from './Components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import Register from './Components/Register'
import HeartData from './Components/HeartData'
import Liver from './Components/Liver'
import Diabetis from './Components/Diabetis';
import Frontpage from './Frontpage';
import Display from './Components/Display';
const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
         <Route  exact path="/" element={<Frontpage/>} />
          <Route exact path="/auth/login" element={<Login/>}/>
          <Route exact path="/auth/register" element={<Register/>}/>
          <Route exact path="/user/dashboard" element={<Dashboard/>} />
          <Route exact path="/user/heart-pred" element={<HeartData/>} />
          <Route exact path= "/user/liver-pred" element={<Liver/>}/>
          <Route exact path ="/user/diabetis-pred"element={<Diabetis/>}/>
          <Route exact path="/user/history" element={<Display/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
