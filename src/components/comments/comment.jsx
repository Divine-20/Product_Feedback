import React, {useState} from 'react'
import FeedBack from '../suggestions/feedBack';
import  image from '../Images/image.png'
import { FaCaretLeft} from 'react-icons/fa'
import {  useNavigate} from 'react-router-dom'
function Comment() {
  const feedbacks = [{
    imageStatus: "Preview images not loading",
    numOfComments: 0,
    numOfUpvotes: 3,
    theComment: "Easier to search for solutions based on specific stack"
  },]
  const navigate = useNavigate();

  const[comment, setComment] = useState(false);
 
  
  return (
  
    <div>
        <div className='flex  ml-[28%] mt-10'>
            <i className='text-blue-500 pt-16'><FaCaretLeft /></i><span className='pt-16 pl-2 hover:underline'>Go Back</span>
            <button className='h-14 w-40 bg-blue-600 text-white ml-[52%] mt-8 rounded-lg ' onClick={()=> navigate('/Edit-feedback')}>Edit-feedback</button>
        </div>
          {feedbacks.map(feedback=>{
          return (
          <FeedBack imageStatus={feedback.imageStatus}
          numOfComments={feedback.numOfComments}
          numOfUpvotes={feedback.numOfUpvotes} 
          theComment={feedback.theComment}/>
          )
        })}
      
            <div className='rounded-lg bg-white float-right h-[51vh] w-[50vw] mt-20 mr-96 pl-8 pt-6'>

             <h1>1 Comments</h1>
              <button  className='float-right pr-14 pt-20 hover:underline  ' onClick={()=>setComment((prev)=>!prev)}>Reply</button> 
             
               <div className='flex'>
               <img src={image} alt='image' className='h-14 w-14 rounded-full mt-8' />
              
               <div className='block'>
               <p className='pl-14 pt-8'>Umugwaneza Alice</p>
               <p className='pl-14'>@alicemugwaneza</p>   
               <p className='pl-14 pt-6  pb-8'>Much easier to get answers from devs who can relate, since they've either finished <br /> the challenge  
               themselves or are in the middle of it.</p>  
               <form action=" " className=''>
                 <div className='flex ' >
             <textarea placeholder='Type your comment here' className='w-[35vw] rounded-lg mt-4 pt-4 pl-4'></textarea>
             <button className='h-14 w-40 bg-purple-600 text-white ml-6  rounded-lg mt-4 ' >Post reply</button>
             </div>
             </form> 
             <div className='h-[2px] w-[40vw] bg-slate-400 mt-2'></div>    
                     
             </div>
             </div>
             <a href='' className='float-right pr-14 pt-20 ' id='reply' >Reply</a>
            

            <div className='flex'>
            <img src={image} alt='image' className='h-14 w-14 rounded-full mt-8' />

            <div className='block'>
            <p className='pl-14 pt-8'>Umugwaneza Alice</p>
            <p className='pl-14'>@alicemugwaneza</p>   
            <p className='pl-14 pt-6 '>Much easier to get answers from devs who can relate, since they've either finished <br /> the challenge  
            themselves or are in the middle of it.</p>              
            </div>
            </div>

        </div>
        
        <div className='rounded-lg bg-white float-right h-72 w-[50vw] mt-10 mr-96 pl-8 pt-6'>
          <h1>Add Comment</h1>
          <form>
            <textarea placeholder='Type your comment here' className='w-[45vw] rounded-lg mt-4 pt-4 pl-4'></textarea>
            <button className='h-14 w-40 bg-purple-600 text-white ml-auto  rounded-lg mt-4 '>Post Comment</button>
          </form>
        </div>
    </div>
  )
}

export default Comment;