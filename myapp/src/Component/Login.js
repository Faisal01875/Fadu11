import React ,{useState} from 'react'
import './Login.css'

const Login=()=>{
const [email,setemail]=useState()
const [password,setpassword]=useState()
const handler=(e)=>{
    e.preventDefault();
    if(!email || !password){
        alert("Pleses enter details")
    }
    if(email==="shaikh01faisal0134gmail.com" && password==="jafer"){
        alert("Login Sucessful")
    }
    else{
        alert("Login Failled")
    }
}
return(
    <div classname="Login">
        <div className="Login-form">
          <form onSubmit={handler}>
           
                <h2>Login Page</h2>
                <div className="input-groups">
                    <input type="email" placeholder='Email' onChange={(e)=>setemail(e.target.value)}></input>
                    </div>
                    <div className="input-groups">
                    <input type="password" placeholder="Password" onChange={(e)=>setpassword(e.target.value)}></input>
                </div>
                    <button onClick={handler}>Login</button>          
        </form>
        </div>  
    </div>
)
}
export default Login;