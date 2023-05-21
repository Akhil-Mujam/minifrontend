import React, { useState } from 'react'

import axios from 'axios'

const HeartData = () => {

    const[result,setresult] = useState('')

   const [age,setage] = useState('')
   const [sex,setsex] = useState('')
   const[cp,setcp] = useState('')
   const[trestbps,setbp]=useState('')
   const [chol,setchol] = useState('')
   
   const[fbs,setfbs] = useState('')
   const[restecg,setecg] = useState('')
   const [thalach,setthalach] = useState('')
   const[exang,setexcercise] = useState('')
   const[oldpeak,setoldpeak] = useState('')
   const [slope,setslope] = useState('')
   const[ca,setca]= useState('')
   const[thal,setthal]= useState('')

//    #input_list = [age,sex,cp,trestbps,chol,fbs,restecg,thalach,exang,oldpeak,slope,ca,thal]
    const SubmitHandler = (e) =>{
        e.preventDefault();
        const endpoint="http://localhost:8000/heartprediction"
        axios.post(endpoint,{
            age:age,
            sex:sex,
            cp:cp,
            trestbps:trestbps,
            chol:chol,
            fbs:fbs,
            restecg:restecg,
            thalach:thalach,
            exang:exang,
            oldpeak:oldpeak,
            slope:slope,
            ca:ca,
            thal:thal

        }).then(
            (res) =>{
                console.log(res.data)
                setresult(res.data)
                
                axios.post('http://localhost:5000/heartdata',{
                age:age,
            sex:sex,
            cp:cp,
            trestbps:trestbps,
            chol:chol,
            fbs:fbs,
            restecg:restecg,
            thalach:thalach,
            exang:exang,
            oldpeak:oldpeak,
            slope:slope,
            ca:ca,
            thal:thal,
            result:result
                }).then(
                    (arr)=>{
                        console.log(arr.data)
                    }
                )
            }
        ).catch((err)=>{
          console.log(err)
        })


    }
  return (
    <div>
         <h1 class="py-3">Heart input form</h1>
      <div class="container p-3">
     
      <form onSubmit={SubmitHandler}>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="age">Age</label>
              <input type="text" class="form-control" id="age" onChange={(e)=>{setage(e.target.value)}} placeholder="Enter age" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="cp">Chest_Pain_Type</label>
              <input type="text" class="form-control" id="cp" onChange={(e)=>{setcp(e.target.value)}} placeholder="Enter glucose_level" />
            </div>
          </div>
          <div class="col-md-4">
        <div class="form-group">
              <label for="chol">Cholestrol</label>
              <input type="text" class="form-control" id="chol"  onChange={(e)=>{setchol(e.target.value)}} placeholder="Enter blood pressure" />
            </div>
        </div>
        
        </div><br/><br/>
        <div class="row">
          <div class="col-md-4">
            <div class="form-group">
              <label for="bp">Resting Blood_Pressure</label>
              <input type="text" class="form-control" id="bp" onChange={(e)=>{setbp(e.target.value)}} placeholder="Your skin thickness" />
            </div>
          </div>
          <div class="col-md-4">
            <div class="form-group">
              <label for="fbs">FBS</label>
              <input type="text" class="form-control" id="fbs"   onChange={(e)=>{setfbs(e.target.value)}} placeholder="Enter insulin level" />
            </div>
          </div>
          <div class="col-md-4">
        <div class="form-group">
              <label for="ecg">Rest_ECG</label>
              <input type="text" class="form-control" id="ecg"  onChange={(e)=>{setecg(e.target.value)}} placeholder="Enter bmi value" />
              
            </div>
        </div>
        
        </div>
        <br/><br/>
        <div class="row">
          
          <div class="col-md-4">
            <div class="form-group">
              <label for="thalach">Thalach</label>
              <input type="text" class="form-control" id="thalach"   onChange={(e)=>{setthalach(e.target.value)}} placeholder="" />
            </div>
          </div>
          <div class="col-md-4">
        <div class="form-group">
              <label for="ex">Excercise_induced</label>
              <input type="text" class="form-control" id="ex"  onChange={(e)=>{setexcercise(e.target.value)}} placeholder="Enter age" />
              
            </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
              <label for="peak">OldPeak</label>
              <input type="text" class="form-control" id="peak"  onChange={(e)=>{setoldpeak(e.target.value)}} placeholder="Enter age" />
              
            </div>
        </div>
        </div>
        <br/><br/>
        <div class="row">
          
          <div class="col-md-4">
            <div class="form-group">
              <label for="slope">slope</label>
              <input type="text" class="form-control" id="slope"   onChange={(e)=>{setslope(e.target.value)}} placeholder="" />
            </div>
          </div>
          <div class="col-md-4">
        <div class="form-group">
              <label for="ca">CA</label>
              <input type="text" class="form-control" id="ca"  onChange={(e)=>{setca(e.target.value)}} placeholder="Enter age" />
              
            </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
              <label for="thal">thal</label>
              <input type="text" class="form-control" id="thal"  onChange={(e)=>{setthal(e.target.value)}} placeholder="Enter age" />
              
            </div>
        </div>
        <div class="col-md-4">
        <div class="form-group">
              <label for="thal">Sex</label>
              <input type="text" class="form-control" id="thal"  onChange={(e)=>{setsex(e.target.value)}} placeholder="Enter age" />
              
            </div>
        </div>
        </div>
        <button type="submit" class="btn btn-success mt-3 d-flex justify-content-center ">Submit</button>
      </form>
      </div>
       {/* <form onSubmit={SubmitHandler}>
<div class="text-center">
         <label>Age</label>
        <input type="text" name="age" onChange={(e)=>{setage(e.target.value)}}/><br/>
        <label>Sex</label>
               <input type="radio" id="Male" name="fav_language" value="Male"/>
                        <label for="Male">Male</label>
                    <input type="radio" id="Female" name="fav_language" value="Female"/>
                        <label for="Female">Female</label><br/>
<label>Sex</label>
         <input type="text" onChange={(e)=>{setsex(e.target.value)}}/><br/>
         
         <label>Chest_Pain_Type</label>
         <input type="text" onChange={(e)=>{setcp(e.target.value)}}/><br/>
           <label>Cholestrol</label>
        <input type="text" onChange={(e)=>{setchol(e.target.value)}}/><br/>
         <label >Resting Blood Pressure</label>
         <input type="text" onChange={(e)=>{setbp(e.target.value)}}/><br/>
         <label>fbs</label>
         <input type="text" onChange={(e)=>{setfbs(e.target.value)}}/><br/>
         <label>Rest_ECG</label>
         <input type="text" onChange={(e)=>{setecg(e.target.value)}}/><br/>
         <label>Thalach</label>
         <input type="text" onChange={(e)=>{setthalach(e.target.value)}}/><br/>
         <label>Excercise_induced</label>
         <input type="text" onChange={(e)=>{setexcercise(e.target.value)}}/><br/>
         <label>OldPeak</label>
         <input type="text" onChange={(e)=>{setoldpeak(e.target.value)}}/><br/>
         <label>slope</label>
         <input type="text" onChange={(e)=>{setslope(e.target.value)}}/><br/>
         <label>CA</label>
         <input type="text" onChange={(e)=>{setca(e.target.value)}}/><br/>
         <label>thal</label>
         <input type="text" onChange={(e)=>{setthal(e.target.value)}}/><br/>
         <button class="btn btn-warning" ><input type="submit" value="submit" /></button>
         </div>
        </form> */}

    </div>
  )
}

export default HeartData
