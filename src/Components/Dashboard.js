import React from 'react'

const Dashboard = () => {
    const HeartSubmit = () =>{
        window.location = "/heart"
    }

    const DisSubmit = () =>{
      window.location = '/diabetis'
    }

    const LiverSubmit = () =>{
      window.location = '/liver'
    }
  return (
    <div>
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
