import { useState } from 'react'
import './CSS/LoginSignup.css'



const LoginSignup = () => {

  const [states,setStates] = useState("Login");
  const [formData,setFormData] = useState({
    username:"",
    password:"",
    email:""
  })

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
  }
  
  
  
  const login = async () => {
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4444/login',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp)=> resp.json()).then((data)=>responseData=data)
    if(responseData.errors) {
      alert(responseData.errors);
      return;
    }
    
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace('/');

    
  }

  const signup = async () => {
    console.log("Signup Function Executed",formData);
    console.log("Login Function Executed",formData);
    let responseData;
    await fetch('http://localhost:4444/signup',{
      method:'POST',
      headers:{
        Accept:'application/form-data',
        'Content-Type':'application/json',
      },
      body: JSON.stringify(formData),
    }).then((resp)=> resp.json()).then((data)=>responseData=data)

    if(responseData.errors) {
      alert(responseData.errors);
      return;
    }
    
    localStorage.setItem('auth-token',responseData.token);
    window.location.replace('/');
    
  }
  
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{states}</h1>
        <div className="loginsignup-fields">
          {states === "Sign Up"?<input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name'/>:<></>}
          <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Your Email'/>
          <input name='password'value={formData.password} onChange={changeHandler} type="password" placeholder='Password'/>
        </div>
        <button onClick={()=>{states==="Login"?login():signup()}} >Continue</button>
        {states === "Sign Up"
        ?<p className='loginsignup-login'>Already have account ? <span onClick={() => {setStates("Login")}}>Click here</span></p>
        : <p className='loginsignup-login'>Create an account ? <span onClick={() => {setStates("Sign Up")}}>Click here</span></p>}
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
