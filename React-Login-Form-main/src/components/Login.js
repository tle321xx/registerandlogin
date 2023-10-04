import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Login() {
    // 22. useNavigate is used to navigate between different pages in react router 
    const history=useNavigate();

    // 4.
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    // 5.
    async function submit(e){
        e.preventDefault();
        // 6.
        try{
            // 7.
            await axios.post("http://localhost:8000/",{
                email,password
            })
            // 21. handle check from app
            .then(res=>{
                // this line of code if exist will redirect to home
                if(res.data=="exist"){
                    // type like this for display in Home
                    history("/home",{state:{id:email}})
                }
                else if(res.data=="notexist"){
                    alert("User have not sign up")
                }
            })
            // 23.
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        // 8.
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login">
            {/* 1. */}
            <h1>Login</h1>
            {/* 2. */}
            <form action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit" onClick={submit} />

            </form>

            <br />
            <p>OR</p>
            <br />
            {/* 3. */}
            <Link to="/signup">Signup Page</Link>

        </div>
    )
}

export default Login