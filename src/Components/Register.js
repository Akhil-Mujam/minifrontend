import React, { useState } from 'react';
import axios from 'axios';
import swal from 'sweetalert';
import { TextField } from '@mui/material';
import './Login.css';

const Register = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/register', {
      name: name,
      email: mail,
      password: password,
      cpassword: cpassword,
    }).then(
      (arr) => {
        if (arr.data.msg === 'registered successfully') {
          swal({
            title: 'Registered successfully',
            icon: 'success',
            button: 'Go to Login',
          }).then(function () {
            window.location = '/auth/login';
          });
        } else if (arr.data.msg === 'email already exists') {
          console.log(arr.data);
          swal({
            title: 'Opps',
            text: 'User already exits',
            icon: 'warning',
            button: 'ok',
          });
        } else if (arr.data.msg === 'password do not matches') {
          swal({
            title: 'Opps',
            text: 'Password does not match',
            icon: 'warning',
            button: 'ok',
          });
        } else {
          console.log(arr.data);
          swal({
            title: 'Opps',
            text: 'Invalid credentials',
            icon: 'warning',
            button: 'ok',
          });
        }
      }
    );
  };

  const [mail, setemail] = useState('');
  const [name, setname] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');

  return (
    <div>
      <center>
        <br />
        <br />
        <center>
          <h2 className="c">Register</h2>
        </center>{' '}
        <br />
        <form onSubmit={submitHandler} style={{ width: '60%' }}> {/* Set the width to 60% */}
          <div className="row justify-content-center">
            <div className="col-md-8">
              <TextField
                id="standard-basic"
                fullWidth
                label="Name"
                variant="standard"
                placeholder="Enter your name"
                required
                onChange={(e) => {
                  setname(e.target.value);
                }}
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="col-md-8">
              <TextField
                id="standard-basic"
                fullWidth
                label="Email"
                FullWidth
                required
                placeholder="Enter your email"
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                variant="standard"
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="col-md-8">
              <TextField
                id="standard-basic"
                fullWidth
                label="Password"
                variant="standard"
                placeholder="Enter password"
                required
                onChange={(e) => {
                  setpassword(e.target.value);
                }}
              />
            </div>
          </div>
          <br />
          <div className="row justify-content-center">
            <div className="col-md-8">
              <TextField
                id="standard-basic"
                fullWidth
                type="password"
                label="Confirm Password"
                required
                placeholder="Confirm password"
                onChange={(e) => {
                  setcpassword(e.target.value);
                }}
                variant="standard"
              />
            </div>
          </div>
          <br />
          <div className="row text-center ">
            <div className="col-md-8 mx-auto">
              <button className="ch">Register</button>
            </div>
          </div>
        </form>
      </center>
    </div>
  );
};

export default Register;
