import React from 'react'
import './Front.css'
import { Link } from 'react-router-dom'


const Frontpage = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-sm navbar-light" id="neubar">
      <div class="container">
        <a class="navbar-brand" href="#"><img src="https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/62e7c3d0894fda6f903b0a5f_healthcare-logo-generator.png" height="60" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
    
        <div class=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto ">
            <li class="nav-item">
              <a class="nav-link mx-2 active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
            <Link to="/about" class="links">About</Link>
            </li>
            <li class="nav-item">
              <Link to="/login" class="links">Login</Link>
            </li>
            <li class="nav-item">
               <Link to="/register" class="links">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <div class="bg-light">
  <div class="container py-5">
    <div class="row h-100 align-items-center py-5">
      <div class="col-lg-6">
        <h1 class="display-4">Diet Recommendation and Multiple Disease Prediction System</h1>
        <p class="lead text-muted mb-0">The Proposed Model predicts diseases like Heart,Diabetes etc and provides the certain diet recommendations to the users.</p><br/>
        <Link to="/login"><button type="button" class="ch">Try Out</button></Link>
      </div>
      <div class="col-lg-6 d-none d-lg-block"><img src="https://bootstrapious.com/i/snippets/sn-about/illus.png" alt="" class="img-fluid" /></div>
    </div>
  </div>
</div>

<div class="bg-white py-5">
  <div class="container py-5">
    <div class="row align-items-center mb-5">
      <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
        <h2 class="font-weight-light">Diet Recommendation System</h2><br/>
        <p class="font-italic text-muted mb-4">The main objective of this work is to recommend a diet to different individuals. The recommender system deals with a large volume of information present by filtering the most important information based on the data provided by a user and other factors that take care of the user’s preference and interest.</p><a href="" class="btn btn-light px-5 rounded-pill shadow-sm">Learn More</a>
      </div>
      <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src="https://bootstrapious.com/i/snippets/sn-about/img-1.jpg" alt="" class="img-fluid mb-4 mb-lg-0" /></div>
    </div>
  </div>
</div>

<div class="bg-light py-5">
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-lg-5">
        <h2 class="display-4 font-weight-light">Disease Prediction</h2>
        <p class="font-italic text-muted"> Multi Disease Prediction system based on predictive modeling predicts the disease of the user on the basis of the symptoms that user provides as part of prediction</p>
      </div>
    </div>

    <div class="row text-center">
    
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://scitechdaily.com/images/Heart-Disease-Concept.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">Heart Disease Prediction</h5><span class="small text-uppercase text-muted">
          <Link to="/login"><button type="button" class="ch">Check Now</button></Link>
          </span>
        </div>
      </div>
      
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://baptisthealthforyou.files.wordpress.com/2014/11/istock_000034390542_large.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">Diabetes Prediction</h5><span class="small text-uppercase text-muted">
          <Link to="/login"><button type="button" class="ch">Check Now</button></Link>
          </span>
        </div>
      </div>
      
      <div class="col-xl-4 col-sm-6 mb-5">
        <div class="bg-white rounded shadow-sm py-5 px-4"><img src="https://blog.mamashealth.com/wp-content/uploads/2018/05/liver.jpg" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
          <h5 class="mb-0">Liver</h5><span class="small text-uppercase text-muted">
          <Link to="/login"><button type="button" class="ch">Check Now</button></Link>
          </span>
        </div>
      </div>
    


    </div>
  </div>
</div>


<footer class="bg-light pb-5">
  <div class="container text-center">
    <p class="font-italic text-muted mb-0">&copy; Copyrights Company.com All rights reserved.</p>
  </div>
</footer>


    </div>
  )
}

export default Frontpage
