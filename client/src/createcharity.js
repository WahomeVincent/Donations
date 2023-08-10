import './createcharities.css'
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


function Createcharity({user_id}){
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('');
  const [email, setEmail] = useState('');
  const [license, setLicense] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const newCharity = {
      name,
      description,
      image,
      email,
      license,
      user_id
    };
  
    fetch('/charities', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCharity),
    })
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        alert("Post created successfully");
        navigate("/charities")
      }
    })
    .catch((error) => {
      setError(error.message);
    });
  }
  


    return(
        <>
            <section class="vh-100 gradient-custom">
  <div class="container py-5 h-100">
    <div class="row justify-content-center align-items-center h-100">
      <div class="col-12 col-lg-9 col-xl-7">
        <div class="card shadow-2-strong card-registration" style={{borderRadius: '15px'}}>
          <div class="card-body p-4 p-md-5">
            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Charity Registration Form</h3>
            <form onSubmit={handleSubmit}>

              <div class="row">
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input 
                    type="text" 
                    id="firstName" 
                    class="form-control form-control-lg"
                    placeholder='Enter your charity name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <label class="form-label" for="firstName">Charity Name</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <div class="form-outline">
                    <input 
                    type="text" 
                    id="lastName" 
                    class="form-control form-control-lg" 
                    placeholder='Enter your License No.'
                    value={license}
                    onChange={(e) => setLicense(e.target.value)}
                    />
                    <label class="form-label" for="lastName">License No.</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-6 mb-4 d-flex align-items-center">

                  <div class="form-outline datepicker w-100">
                    <input 
                    type="email" 
                    class="form-control form-control-lg" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                     />
                    <label for="birthdayDate" class="form-label">Email address</label>
                  </div>

                </div>
                <div class="col-md-6 mb-4">

                  <h6 class="mb-2 pb-1">Type: </h6>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                      value="option1" checked />
                    <label class="form-check-label" for="femaleGender">NGO</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                      value="option2" />
                    <label class="form-check-label" for="maleGender">Private</label>
                  </div>

                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="otherGender"
                      value="option3" />
                    <label class="form-check-label" for="otherGender">Governmental</label>
                  </div>

                </div>
              </div>

              <div class="row">
                <div class="col-md-14 mb-4 pb-2">

                  <div class="form-outline">
                    <input 
                    type="text" 
                    class="form-control form-control-lg" 
                    value={image}
                    onChange={(e) => setImage(e.target.value)} 
                    />
                    <label class="form-label" for="emailAddress">Image URL</label>
                  </div>

                </div>
                <div class="col-md-14 mb-4 pb-2">

                  <div class="form-outline">
                    <input 
                    type="text" 
          
                    class="form-control form-control-lg" 
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    />
                    <label class="form-label" for="description">Description</label>
                  </div>

                </div>
              </div>

              <div class="mt-4 pt-2">
                
                
                 <button class="btn btn-primary btn-lg" type="submit" value="Submit">Submit</button>  
              </div>

            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    )
}

export default Createcharity;