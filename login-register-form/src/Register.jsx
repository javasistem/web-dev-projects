import React, { useEffect, useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [posts, setPosts] = useState([]);

   
    const handleSubmit = () => {
            alert("İşlem yapılıyor!");        
            fetch('http://35.224.193.229:5000/api/users',{
              //fetch('https://localhost:7193/api/users',{
              method: 'POST',
              headers:{
                'Content-Type': 'application/json',
                //Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiMzMiLCJuYmYiOjE2Nzk4MzQyMDAsImV4cCI6MTY4MDQzOTAwMCwiaWF0IjoxNjc5ODM0MjAwfQ.SgNJ9yampgWt_j3p1hihkEDFROwX6E0efhTOIBm3dWA"},
                Authorization: "Bearer " + window.token
              }, 
              body: JSON.stringify({
                name: name,
                sirname: 'string',
                email: email,
                password: pass,
                accessCode: 'string',
                logUserId: 0,
                logIP: 'string',
                cellPhone: 'string',
                countryCode: 'TR',
                lang: 'TR',
                companyId: 0
              })
            })
            .then(response => console.log(response.status) || response) // output the status and return response
            .then(response => response.text()) // send response body to next then chain
            .then(body => 
              {
                if(body)
                  console.log(body )

                alert(body);  
              }
              ) // you can use response body here
               ;
         
        }
        
    

    return (
        <div className="auth-form-container">
            <h2>Register</h2>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" onClick={handleSubmit}>Log In</button>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    
    </div>

    
    )
}
