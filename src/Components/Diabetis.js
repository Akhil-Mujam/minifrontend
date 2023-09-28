import React, { useState } from 'react'
import axios from 'axios'

const Diabetis = () => {
    const token = localStorage.getItem("token");
    const [Preg,setpreg] = useState('')
    const [glu,setglucose] = useState('')
    const [bp,setbp] = useState('')
    const [skt,setskin] = useState('')
    const[ins,setinsulin] = useState('')
    const [bmi,setbmi] = useState('')
    const[dpf,setpedigree] = useState('')
    const [age,setage]= useState('')
   const [result,setresult] = useState('')
    // const[info,setinfo]=useState('')
   const SubmitHandler = async(e) =>{
    e.preventDefault();
    let id;
    const ids = await axios.get(`http://localhost:5000/getuserId/${token}`).then((r)=>{
        console.log(r);
        id = r.data._id;
    })
    const endpoint="http://localhost:8000/diabetesprediction";
    axios.post(endpoint,{
          Pregnancies:Preg,
          Glucose:glu,
          BloodPressure:bp,
          SkinThickness:skt,
          Insulin:ins,
          BMI:bmi,
          DiabetesPedigreeFunction:dpf,
          Age:age
    }).then(
      (res)=>{
        console.log(res.data)
        const resultStore = res.data;
        setresult(res.data)
      axios.post('http://localhost:5000/diabetisdata',{
        userid:id,
        Preg:Preg,
          glu:glu,
          bp:bp,
          skt:skt,
          ins:ins,
          bmi:bmi,
          dpf:dpf,
          age:age,
          result:resultStore
      }).then(
        (arr) =>{
          console.log(arr.data)
        }
      )
      }
    )

    
   }
    return (
    <div>
      <h1 class="py-3">Diabetis input form</h1>
      <div class="container p-3">
     
      <form onSubmit={SubmitHandler}>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="preg">No_Of_Pregnancies</label>
              <input type="text" class="form-control" id="preg" onChange={(e)=>{setpreg(e.target.value)}} placeholder="Enter No of pregnancies" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="glu">Glucose</label>
              <input type="text" class="form-control" id="glu" onChange={(e)=>{setglucose(e.target.value)}} placeholder="Enter glucose_level" />
            </div>
          </div>
          <div class="col-md-4">
        <div class="form-group">
              <label for="bp">Blood_Pressure</label>
              <input type="text" class="form-control" id="bp" onChange={(e)=>{setbp(e.target.value)}} placeholder="Enter blood pressure" />
            </div>
        </div>
        
        </div><br/><br/>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="skt">Skin_Thickness</label>
              <input type="text" class="form-control" id="skt" onChange={(e)=>{setskin(e.target.value)}} placeholder="Your skin thickness" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="insulin">Insulin</label>
              <input type="text" class="form-control" id="insulin"   onChange={(e)=>{setinsulin(e.target.value)}} placeholder="Enter insulin level" />
            </div>
          </div>
          <div class="col-md-4">
        <div class="form-group">
              <label for="bmi">BMI_Value</label>
              <input type="text" class="form-control" id="bmi"  onChange={(e)=>{setbmi(e.target.value)}} placeholder="Enter bmi value" />
              
            </div>
        </div>
        
        </div>
        <br/><br/>
        <div class="row">
          
          <div class="col-md-6">
            <div class="form-group">
              <label for="pedigree">Pedigree_Function</label>
              <input type="text" class="form-control" id="pedigree"   onChange={(e)=>{setpedigree(e.target.value)}} placeholder="" />
            </div>
          </div>
          <div class="col-md-6">
        <div class="form-group">
              <label for="age">Age</label>
              <input type="text" class="form-control" id="age"  onChange={(e)=>{setage(e.target.value)}} placeholder="Enter age" />
              
            </div>
        </div>
        
        </div>
        <button type="submit" class="btn btn-success mt-3 d-flex justify-content-center ">Submit</button>
      </form>
      </div>
    {/* <form onSubmit={SubmitHandler}>
        <div>
      <label>No_Of_Pregnancies</label>
         <input type="text" onChange={(e)=>{setpreg(e.target.value)}}/><br/>
           <label>Glucose</label>
        <input type="text" onChange={(e)=>{setglucose(e.target.value)}}/><br/>
         <label >Blood Pressure</label>
         <input type="text" onChange={(e)=>{setbp(e.target.value)}}/><br/>
         <label>Skin_Thickness</label>
         <input type="text" onChange={(e)=>{setskin(e.target.value)}}/><br/>
         <label>Insulin</label>
         <input type="text" onChange={(e)=>{setinsulin(e.target.value)}}/><br/>
         <label>BMI_Value</label>
         <input type="text" onChange={(e)=>{setbmi(e.target.value)}}/><br/>
         <label>Pedigree_Function</label>
         <input type="text" onChange={(e)=>{setpedigree(e.target.value)}}/><br/>
         <label>Age</label>
         <input type="text" onChange={(e)=>{setage(e.target.value)}}/><br/>
         <button class="btn btn-warning" ><input type="submit" value="submit" /></button>
         </div>
        </form> */}
    </div>
  )
}

export default Diabetis
