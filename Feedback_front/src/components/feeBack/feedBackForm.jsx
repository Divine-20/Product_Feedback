import React,{useState} from 'react'
import { FaCaretLeft, FaPlus} from 'react-icons/fa'
function FeedBackForm() {

  const [values,setvalues] = useState({
    headline:"",
    category:"",
    detail:"",
  })

  const collectData = ({ currentTarget : input}) => {
    setvalues({...values, [input.name]: input.value});
  }
  const handleSubmit = async (e) => {
     e.preventDefault();

     const feedback = async()=>{
      await fetch("http://localhost:4000/Api/feedback/addFeedback", {
        method : "POST",
        headers :{
          "content-Type":"application/json"
        },
        body : JSON.stringify(values)
      }).then((response)=>{
        return response.json();
      }).then((response) =>{
        console.log(response);
      }).catch((error)=>{
          console.log(error);
      })
    
    }
    feedback();
    
  }

  
  
  return (
    <div className=''>
      <i className='text-blue-500 flex justify-center pt-40 hover:underline '><FaCaretLeft />Go back</i>
      <div className='w-16 h-16 rounded-full text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 absolute left-[36%] top-[17%] pt-4  pl-4 text-3xl'>
        <i className=''><FaPlus /></i>
      </div>
   <div className=' w-[30vw] h-auto ml-auto mr-auto bg-white pl-16 pt-8'>
   

     <form onSubmit={handleSubmit} className="pb-6">
        <h1>Create New Feedback</h1>
        <label className=''>Add a short, descriptive headline</label>
        <input type='text' name='headline' value={values.headline} onChange={collectData}/>

        <h1>Category</h1>
        <label className='block'>Choose a category for your feedback</label>
      <select name='category' value={values.category} onChange={collectData}>
       <option>Feature</option>
       <option>UI</option>
       <option>UX</option>
       <option>Enhancement</option>
       <option>Bug</option>
       </select>

       <h1>Feedback Detail</h1>
       <label className='block'>Include any specific comments on what should be improved,added,etc.</label>
       <textarea value={values.detail} onChange={collectData} name='detail'></textarea>
       <button className='h-12 w-28 bg-blue-900 rounded-lg  mt-8 text-white' type='submit'>Cancel</button>
       <button className='h-12 w-40 bg-purple-600 rounded-lg ml-4 mt-8 text-white' type='submit'>Add Feedback</button>
         </form>
   </div>
    </div>
  )
}


export default FeedBackForm;