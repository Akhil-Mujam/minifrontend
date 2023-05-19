import React, { useState } from 'react'
import './Login.css';
import axios from 'axios';
import swal from 'sweetalert';
import { TextField } from '@mui/material';

const Login = () => {
  const [email,setemail] = useState('')
  const [password,setpassword] = useState('')

  const submitHandler= (e) =>{
              e.preventDefault();

              axios.post('http://localhost:5000/login',{
                email:email,
                password:password
              }).then(
                (res) =>{
                  console.log(res.data)

                  if(res.data == "user not found")
                  {
                    swal({
                      title:"Opps",
                      text:"User not found",
                      icon:"warning",
                      button:"ok"
                  })
                  }
                  if(res.data == "Email does not match")
                  {
                    swal({
                      title:"Opps",
                      text:"Email not found",
                      icon:"warning",
                      button:"ok"
                  })
                  }
                  if(res.data == "password does not match")
                  {
                    swal({
                      title:"Opps",
                      text:"Password MisMatch",
                      icon:"warning",
                      button:"ok"
                  })
                  }
                  if(res.data.token.length>0)
                  {
                    localStorage.setItem('token',res.data.token)

                     swal({
                        title:"Successfull Login",
                         icon:"success",
                         button:"Go to Dashboard"
                          }).then(function() {
                         window.location ="/dashboard"
                        })
                  }


                }
              )
              
  }
  return (
    <div >
         <div class="row d-flex align-items-center justify-content-between">
      <div class="col-md-5 ">
         <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-135.jpg?w=2000" alt="..error" class="img-responsive h-auto w-100 " />
      </div>
      <div class="col-md-6">

      <div class="container login  text-warning text-center " >
         <h2 class="text-success"><strong>Welcome</strong></h2>  
         <br/>
         <br/>
         <form >
       <div class="row justify-content-between">
         <div class="col-md-8">
         <TextField id="standard-basic" fullWidth label="Email" FullWidth required placeholder="enter your email" onChange={(e) =>{ setemail(e.target.value)}} variant="standard" />
             {/* <input type="email"  class="form-control mx-auto w-70 text-center"  name='email'   required placeholder="enter your email"  onChange={(e) =>{setemail(e.target.value)}}/> */}
             </div>
           </div>
        <br/>
        <div class="row justify-content-between">
            <div class="col-md-8">
            <TextField id="standard-basic" fullWidth type="password" label="password" variant="standard" placeholder="enter password" required onChange={(e) =>{ setpassword(e.target.value)}}/>
                  {/* <input type="password"  class="form-control mx-auto text-center w-70" required  name='password' placeholder="enter password" onChange={(e) =>{ setpassword(e.target.value)}}/> */}
            </div>
        </div>
        <br/>
        <div class="row justify-content-between">
            <div class="col-md-8">
             <button class="btn btn-success ml-2" onClick={submitHandler}>LOGIN</button>
            </div>
        </div>
        </form>
    
      </div>

      </div>
     </div>

    </div>
  )
}

export default Login
