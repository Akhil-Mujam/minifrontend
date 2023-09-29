import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import Nav from './Nav'
const Dashboard = () => {

     const dat = localStorage.getItem('token')
     const [name,setname] = useState();

     useEffect(() =>{
      
          axios.get('http://localhost:5000/getuserId/'+dat).then(
            (res) =>{
              console.log(res.data)
              setname(res.data.name)
            }
          )
     },[])
     

    const HeartSubmit = () =>{
        window.location = "/user/heart-pred"
    }

    const DisSubmit = () =>{
      window.location = '/user/diabetis-pred'
    }

    const LiverSubmit = () =>{
      window.location = '/user/liver-pred'
    }
  return (
    <div>
      <Nav/>
      <div class="continer my-4">
         <h1>Welcome {name}</h1>
      </div>
      <div class="container my-5">
      <center><h2>Get your Disease Predicted</h2></center>
    
      <div class="row text-center align-items-center">
          <div class="col-md-12 p-3 m-3">
              <button class="btn btn-success btn-lg" onClick={HeartSubmit}>Heart Disease</button>
          </div>
          <div class="col-md-12 m-3">
              <button class="btn btn-success btn-lg" onClick={DisSubmit}>Diabeties Disease</button>
          </div>
          <div class="col-md-12 p-3 m-3">
              <button class="btn btn-success btn-lg" onClick={LiverSubmit}>Liver Disease</button>
          </div>
      </div>

      </div>
      
    </div>
  )
}

export default Dashboard


