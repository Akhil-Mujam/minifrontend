import React, { useState } from 'react'
import axios from 'axios'
import swal from 'sweetalert'
import { TextField} from '@mui/material'

const Register = () => {
  const submitHandler =(e) =>{
    e.preventDefault();

    axios.post('http://localhost:5000/register',{
      name:name,
      email:mail,
      password:password,
      cpassword:cpassword
    }).then(
      arr => 
                 {
                    if(arr.data.msg=="registered successfully")
                    {
                        swal({
                            title:"Registered successfully",
                            icon:"success",
                            button:"Go to Login"
                        }).then(function(){
                            window.location ="/login"
                        })
                      }
                      else if(arr.data.msg=="email already exists")
                      {
                        console.log(arr.data)
                        swal({
                            title:"Opps",
                            text:"User already exits",
                            icon:"warning",
                            button:"ok"
                        })
                      }
                      else if(arr.data.msg=="password do not matches")
                      {
                        
                        swal({
                            title:"Opps",
                            text:"password not match",
                            icon:"warning",
                            button:"ok"
                        })
                      }
                      else 
                      {
                        console.log(arr.data)
                        swal({
                            title:"Opps",
                            text:"invalid credintials",
                            icon:"warning",
                            button:"ok"
                        })
                      }
                    
                 }
    )
  }

  const[mail,setemail] = useState('')
  const[name,setname] = useState('')
  const [password,setpassword] = useState('')
  const [cpassword,setcpassword] = useState('')
  return (
    <div>
      <div class="container-fluid">
        <div class="row d-flex text-center align-items-center">
            <div class="col-md-6 ">
                <img src="https://c8.alamy.com/comp/2BKNARJ/a-man-stands-in-front-of-inputted-secured-data-registration-form-or-login-user-interface-isometric-flat-vector-illustration-of-infographic-elements-2BKNARJ.jpg" class="img-fluid" />
            </div>
        
        <div class=" col-md-6 reg  text-success p-4">
            <center><h2>Register</h2></center> <br/> 
            <form onSubmit={submitHandler}>        
           <div class="row justify-content-center">
               <div class="col-md-8">
               <TextField id="standard-basic"  fullWidth  label="Name" variant="standard" placeholder="enter your name" required onChange={(e) =>{ setname(e.target.value)}} />
                   {/* <input type="text" class="form-control mx-auto text-center w-60" placeholder="enter your name" required onChange={(e) =>{ setname(e.target.value)}}/> */}
               </div>
           </div>
           <br/>
           <div class="row justify-content-center">
               <div class="col-md-8">
               <TextField id="standard-basic" fullWidth label="Email" FullWidth required placeholder="enter your email" onChange={(e) =>{ setemail(e.target.value)}} variant="standard" />
                   {/* <input type="email" class="form-control mx-auto text-center w-60" placeholder="enter your email" required onChange={(e) =>{ setemail(e.target.value)}}/> */}
               </div>
           </div>
           <br/>
           <div class="row justify-content-center">
               <div class="col-md-8">
               <TextField id="standard-basic" fullWidth label="password" variant="standard" placeholder="enter password" required onChange={(e) =>{ setpassword(e.target.value)}}/>
                   {/* <input type="password" class="form-control mx-auto text-center w-60" placeholder="enter password" required onChange={(e) =>{ setpassword(e.target.value)}}/> */}
               </div>
           </div>
           <br/>
           <div class="row justify-content-center">
               <div class="col-md-8">
               <TextField id="standard-basic" fullWidth type="password" label="cpassword" required placeholder="confirm password" onChange={(e) =>{ setcpassword(e.target.value)}} variant="standard" />
                   {/* <input type="password" class="form-control mx-auto text-center w-60"  required placeholder="confirm password" onChange={(e) =>{ setcpassword(e.target.value)}}/> */}
               </div>
           </div>
           <br/>
           <div class="row text-center ">
               <div class="col-md-8 mx-auto">
                      <button class="btn btn-success ">SUBMIT</button>
               </div>
           </div>
           </form>
        </div>
        </div>
        </div>
    </div>
  )
}

export default Register
