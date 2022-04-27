import React from 'react'
import axios from 'axios';

export default function UserForm() {

  const handleSubmit = async (event) => {
     event.preventDefault();
     console.log("Submit the form", event.target);
     
     const formData = new FormData(event.target);
     console.log("the formdata is ", formData);

     console.log("the firstname is ", formData.get('firstname'));
      
     const data = {
         firstName:formData.get('firstname'),
         lastName:formData.get('lastname'),
         username:formData.get('username'),
         email:formData.get('email'),
         password:formData.get('password'),
         dateOfBirth:formData.get('birthdate')
     }
     console.log("the data", data)

     try {
         const res = await axios.post('http://localhost:3001/user/register', data)
         console.log("data saved ", res)
     } catch (error) {
         console.warn("There was an error", error)
     }
  }

  return (
      <>
      <h1>Create a new user</h1>
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-6">
              <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
              <div className="form-group">
                  <label>First name</label>
                  <input type="text" name="firstname"  className="form-control" placeholder="First name" />
              </div>
  
              <div className="form-group">
                  <label>Last name</label>
                  <input type="text" name="lastname"   className="form-control" placeholder="Last name" />
              </div>
  
              <div className="form-group">
                  <label>Username</label>
                  <input type="text"  name="username"  className="form-control" placeholder="Username" />
              </div>
  
              <div className="form-group">
                  <label>Email address</label>
                  <input type="email" name="email"  className="form-control" placeholder="Enter email" />
              </div>
  
              <div className="form-group">
                  <label>Password</label>
                  <input type="password" name="password" className="form-control" placeholder="Enter password" />
              </div>

              <div className="form-group mb-3">
                  <label>Birthdate</label>
                  <input type="date" name="birthdate" className="form-control" placeholder="Enter birthdate" />
              </div>
    
             
              <button className="btn btn-primary btn-block">Sign Up</button>
        
        </form>
              </div>
          </div>
      </div>
   
      </>

  )
}
