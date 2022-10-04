import React,{useState} from 'react'
import { FaEdit ,FaCaretLeft} from 'react-icons/fa'
// import { useState } from 'react';
 
function FeedbackEdit() {
     
  const[content, setContent] = useState({ 
      headline:"",
      category:"",
      status:"",
      detail:"",
   }) 
  
   const getContent = ({ currentTarget:input }) =>{
     setContent({...content, [input.name]: input.value});
   }
   const handleSubmit = async (e) =>{
     e.preventDefault();

     const editFeedback = async()=>{
       await fetch("http://localhost:4000/Api/feedback/addFeedback/:id", {
         method : "PUT",
         headers: {
           "Content-Type": "application/json"
         },
         body:JSON.stringify(content)
       }).then((response) =>{
          return response.json();
          
       }).then((response) =>{
           console.log(response);
       }).catch((error) =>{
           console.log(error);
       })
     }
     return editFeedback.json()
   };
  
  
  return (
    <div>
       <i className='text-blue-500 flex justify-center pt-32 hover:underline '><FaCaretLeft />Go back</i>
      <div className='w-16 h-16 rounded-full text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 absolute left-[36%] top-[13%] pt-4  pl-4 text-3xl'>
        <i className=''><FaEdit /></i>
      </div>
  <div className=' w-[30vw] h-auto mb-8 ml-auto mr-auto bg-white pl-16 pt-8'>
    <form action="" onSubmit={handleSubmit} className="pb-6">
     <h1>Edit 'Add tags for solutions'</h1>
     <p>FeedbackTitle</p>
     <label>Add a short,descriptive headline</label>
         <input type="text" placeholder='Add tags for solutions' value={content.headline} onChange={getContent} />

         <p>Category</p>
         <label>Choose a category for your feedback</label>
         <select name='category' value={content.category} onChange={getContent}>
       <option>Feature</option>
       <option>UI</option>
       <option>UX</option>
       <option>Enhancement</option>
       <option>Bug</option>
       </select>

       <p>Update status</p>
         <label>Change feedback status</label>
       <select name='status' value={content.status} onChange={getContent}>
       <option>Suggestion</option>
       <option>Planned</option>
       <option>In-progress</option>
       <option>Live</option>
       </select>

       <h1>Feedback Detail</h1>
       <label className='block'>Include any specific comments on what should be improved,added,etc.</label>
       <textarea value={content.detail} onChange={getContent}></textarea>
        <button className='h-12 w-28 bg-red-600 rounded-lg  mt-8 text-white'>Delete</button>
         <button className='h-12 w-28 bg-blue-900 rounded-lg ml-12 mt-8 text-white'>Cancel</button>
       <button className='h-12 w-32 bg-purple-600 rounded-lg ml-4 mt-8 text-white'>Save changes</button>
         </form>
      </div>
    </div>
  )
}

export default FeedbackEdit;