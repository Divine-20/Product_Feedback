import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'

function Signup() {
  const [fname, setfname] = useState('');
  const [lname, setlname] = useState('');
  const [email, setemail] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const navigate = useNavigate("")
  const [errors, setErrors] = useState({})
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const [data, setData] = useState({
    fname: "",
    lname: "",
    username: "",
    cpassword: "",
    password: "",
    email: ""
  })

  const handlefnameChange = e => {
    setfname(e.target.value);

  }
  const handlelnameChange = e => {
    setlname(e.target.value);

  }
  const handlemailChange = e => {
    setemail(e.target.value);
  }
  const handleusernameChange = e => {
    setusername(e.target.value);
  }
  const handlePasswordChange = e => {
    setPassword(e.target.value);
  }
  const handlecpassordChange = e => {
    setcpassword(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    setData({
      fname: fname,
      lname: lname,
      username: username,
      cpassword: cpassword,
      password: password,
      email: email
    })
    // setDataIsCorrect(true);
    const register = async()=>{
      await fetch("http://localhost:4000/Api/v1/auth/register",{
         method:"POST",
         // mode: "no-cors",
         headers: {
           "Content-Type":"application/json"
         },
         body:JSON.stringify(data)
       }).then((response)=>{
             return response.json()
       }).then((data)=>{
         console.log(data)
       }).catch((error)=>{
         console.log(error)
       })
     
     }
       register();   
    setErrors(Validation(fname,lname,username, password, email, cpassword));
    setfname('');
    setlname('');
    setemail('');
    setusername('');
    setPassword('');
    setcpassword('');
    
   
  

  }
  const Validation = (fname, lname, username, password, email, cpassword) => {
    console.log(fname, lname, username, password, email, cpassword)
    fname = fname === "" ? null : fname;
    lname = lname === "" ? null : lname;
    email = email === "" ? null : email;
    username = username === "" ? null : username;
    password = password === "" ? null : password;
    cpassword = cpassword === "" ? null : cpassword;

   
    if (!fname) {
      errors.fname = "firstname is required."
    }
    if (!lname) {
      errors.lname = "lastname is required."
    }
    if (!username) {
      errors.username = "username is required."
    }
    if (!password) {
      errors.password = "The password is required."
    }
    if(!/\S+@\S+\.\S+/.test(email)){
        errors.email="Invalid email."
    }
  
    if (!email) {
      errors.email = "email is required";
    }
    if(password?.length < 6){
        errors.password="The password must have more than 6 characters"; 
    }
    if(password !== cpassword){
        errors.cpassword = "The password entered is incorrect";
    }
   

    // password.length < 6 ? errors.password = "The password must have more than 6 characteres" : errors.password = "Password okay";
    // password === cpassword ? errors.cpassword = "The password entereed is correct" : errors.cpassword = "The password is incorrecterly entered and doesnt match the cpassword";
    if(Object.keys(errors).length === 0){
      setDataIsCorrect(true)
      console.log(dataIsCorrect)
    }else{
      console.log(dataIsCorrect)
    }
    return errors;

  }

  
return (
    <div>
      <div className='h-[100vh] w-[30vw] bg-[white] ml-auto mr-auto mt-20' id='signupp'>
        <h1 className='text-4xl  text-center pt-4'>Welcome to Feedback mentor</h1>
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="" className='pl-10 mt-6'>First name</label>
          <input type="text" name='fname' value={fname} onChange={handlefnameChange} placeholder='First name ' className='ml-10  bg-[white] border-b-2 pl-2 border-b-violet-400 outline-none' />
          {errors.fname && <p className="error text-[red] pl-10">{errors.fname}</p>}
          <label htmlFor="" className='pl-10'>Last name</label>
          <input type="text" name='lname' value={lname} onChange={handlelnameChange} placeholder='Last name' className='ml-10  bg-[white] border-b-2 pl-2 border-b-violet-400  outline-none' />
          {errors.lname && <p className="error text-[red] pl-10">{errors.lname}</p>}
          <label htmlFor="" className='pl-10'>Email</label>
          <input type="text" name='email' value={email} onChange={handlemailChange} placeholder='Email' className='ml-10  bg-[white] border-b-2 pl-2 border-b-violet-400  outline-none' />
          {errors.email && <p className="error text-[red] pl-10">{errors.email}</p>}
          <label htmlFor="" className='pl-10'>User name</label>

          <input type="text" value={username} onChange={handleusernameChange} placeholder='User name' className='ml-10  bg-[white] border-b-2 pl-2 border-b-violet-400  outline-none' />
          {errors.username && <p className="error text-[red] pl-10">{errors.username}</p>}
          <label htmlFor="" className='pl-10'>Password</label>
          <input type="password" name='password' value={password} onChange={handlePasswordChange} placeholder='Password' className='ml-10  bg-[white] border-b-2 pl-2 border-b-violet-400  outline-none' />
          {errors.password && <p className="error text-[red] pl-10">{errors.password}</p>}
          <label htmlFor="" className='pl-10'>Confirm Password</label>
          <input type="password" name='cpassword' value={cpassword} onChange={handlecpassordChange} placeholder='Confirm password' className='ml-10  bg-[white] border-b-2 pl-2 border-b-violet-400  outline-none' />
          {errors.cpassword && <p className="error text-[red] pl-10">{errors.cpassword}</p>}
          {/* <Link to='/roadmapLayout'> */}
          <button className='block h-16 w-40 bg-violet-400 ml-48 mt-8 hover:bg-[white] border-2 border-violet-400' type='submit' >Sign Up</button>

          {/* </Link> */}
          <p className='pl-48 pt-4' >Already a member? <Link to='/login'><a href='/login' className='text-violet-600 hover:underline hover:text-[purple] '>Log in</a></Link></p>
        </form>
      </div>
    </div>
  )
    
}


export default Signup