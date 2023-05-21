import React from 'react'
import './Front.css'
import { Link } from 'react-router-dom'


const Frontpage = () => {
  return (
    <div class="background">
        
       <div class="container cd">
        
         
            <button class="btn btn-dark text-white  " ><Link to={'/login'}>Login</Link></button>
           
           <button class="btn btn-dark text-white" ><Link to={'register'}>Sign-up</Link></button> 
        
        
         
          
       </div>
    </div>
  )
}

export default Frontpage
