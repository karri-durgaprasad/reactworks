import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <div style={{backgroundColor:'lightblue'}}>
        <h3 style={{textAlign:'center'}}>Login</h3>
        <input placeholder='enter your name' style={{marginBottom:'20px',textAlign:'center',marginLeft:'35px'}}/><br/>
        <input placeholder='enter your password' style={{marginBottom:'10px',textAlign:'center',marginLeft:'35px'}} /><br/>
       <Link to='/dashboard'><button className='btn btn-success' style={{fontSize:'13px',marginLeft:'37%'}}>Login</button></Link><br/>
       <p>you dont have an account?<Link to='signin'><button className='btn btn-outline-primary' style={{fontSize:'13px'}}>SignUp</button></Link></p> 
    </div>
    </div>
  )
}

export default Login