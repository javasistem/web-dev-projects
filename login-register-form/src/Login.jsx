import React, { useState } from "react";
import NavBar from './components/NavBar.js';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'

window.token = "";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email+"-"+pass);

        fetch('http://35.224.193.229:5000/Authenticate/authenticate',{
              //fetch('https://localhost:7193/api/users',{
              method: 'POST',
              headers:{
<<<<<<< HEAD
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
                'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
              },
=======
                'Content-Type': 'application/json','Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'},
>>>>>>> 6740f48d6ea897010d61fe3d03c1f68b49c00c21
              body: JSON.stringify({
                "name": 'string',
                "sirname": 'string',
                "email": email,
                "password": pass,
                "accessCode": "string",
                "token": "string",
                "salt": "string",
                "logTime": "2023-04-03T19:38:56.101Z",
                "logUserId": 0,
                "logIP": "string",
                "cellPhone": "string",
                "countryCode": "string",
                "recDate": "2023-04-03T19:38:56.101Z",
                "lang": "string",
                "companyId": 0
              })
            })
            .then(response => console.log(response.status) || response) // output the status and return response
            .then(response => response.text()) // send response body to next then chain
            .then(body => 
              {
                    
                window.token = JSON.parse(body).token;
                alert(window.token);  
              })
              .catch(error => {
                //Here is still promise
                alert(error);
             
            });         
         
    }

    return (
      
            <Form>
            <NavBar/>
            <h2>Login</h2>
            <form  className="login-form" onSubmit={handleSubmit}>
            <div class="form-group">
              <label htmlFor="email">Email</label>
              <input class="form-control" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            </div>
            <div class="form-group">
              <label htmlFor="password">Password</label>
              <input class="form-control" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            </div>
            <div class="checkbox">
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
            </div>
            <div class="form-group">
              <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-primary"  onClick={handleSubmit}>Submit</button>
              </div>
              <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-link"  onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button></div>

            </div>          
            </form>
            </Form>
    )
}
