import React, { useState } from "react";

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
                'Content-Type': 'application/json','Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
        'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization'}
            
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
                if(body)
                  console.log(body.token )

                window.token = JSON.parse(body).token;
                alert(window.token);  
              }
              ) // you can use response body here
               ;
         
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
