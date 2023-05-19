import React from 'react'
import Login  from './Components/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './Components/Dashboard'
import Register from './Components/Register'
import HeartData from './Components/HeartData'
import Liver from './Components/Liver'
import Diabetis from './Components/Diabetis';
import Frontpage from './Frontpage';
const App = () => {
  return (
    <div>
       <BrowserRouter>
       <Routes>
         <Route  exact path="/" element={<Frontpage/>} />
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/dashboard" element={<Dashboard/>} />
          <Route exact path="/heart" element={<HeartData/>} />
          <Route exact path= "/liver" element={<Liver/>}/>
          <Route exact path ="/diabetis"element={<Diabetis/>}/>
       </Routes>
       </BrowserRouter>
    </div>
  )
}

export default App
