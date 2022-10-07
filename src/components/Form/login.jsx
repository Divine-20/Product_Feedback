import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'
import Signup from './signup';

function Login() {
  const [email,setemail] = useState();
  const [username,setusername] = useState();
  const [password,setPassword] = useState();
  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false);
  const [data, setData] = useState({
    username:"",
    password : "",
    email : ""
  })

  const handlemailChange = e =>{
    setemail(e.target.value);
  }
  const handleusernameChange = e =>{
    setusername(e.target.value);
  }
  const handlePasswordChange = e =>{
    setPassword(e.target.value);
  }
  const handleSubmit = e =>{
    e.preventDefault();
    setData({
      username:username,
      password : password,
      email : email
    })
    setemail('');
    setusername('');
    setPassword('');
    setErrors(validate(username, password, email));
    setDataIsCorrect(true);
  }

  const validate = (username,email,password)=>{
    email = email === "" ? null : email;
    username = username === "" ? null : username;
    password = password === "" ? null  : password;
     
    let errors = {};
    if(!email){
      errors.email = "Email required";
    }
    if(!password){
      errors.password="The password is required."
  }
     if(!/\S+@\S+\.\S+/.test(email)){
      errors.email="Invalid email."
  }
  if(password?.length < 6){
    errors.password="The password must have more than 6 characters"; 
}
  }
return (
    <div>
    <div className='h-[65vh] w-[30vw] bg-[white] ml-auto mr-auto mt-20' id='signupp'>
      <h1 className='text-4xl  text-center pt-10'>Welcome to Feedback mentor</h1>
     <form action="" onSubmit={handleSubmit}>
      
       <label htmlFor="" className='pl-10 mt-8'>Email</label>
       <input type="email" value={email} onChange={handlemailChange} placeholder='Email' className='ml-10  bg-[white] border-b-2 pl-2 border-b-violet-400  outline-none'/>
       <label htmlFor="" className='pl-10'>User name</label>
       <input type="text"  value={username} onChange={handleusernameChange}  placeholder='User name' className='ml-10  bg-[white] border-b-2 pl-2 border-b-violet-400  outline-none'/>
       <label htmlFor="" className='pl-10'>Password</label>
       <input type="password" value={password} onChange={handlePasswordChange} placeholder='Password'className='ml-10  bg-[white] border-b-2 pl-2 border-b-violet-400  outline-none'/>
       
       {/* <Link to='/roadmapLayout'> */}
       <button className='block h-16 w-40 bg-violet-400 ml-48 mt-6 hover:bg-[white] border-2 border-violet-400 ' >Log in</button>

       {/* </Link> */}
       <p className='pl-48 pt-4' >Don't have an account?<Link to='/signup'><a  className='text-violet-600 hover:underline hover:text-[purple] '> Sign up</a></Link></p>
     </form>
    </div>
  </div>
  )
}

export default Login