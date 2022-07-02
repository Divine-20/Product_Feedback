import React, {useState} from 'react'
import FeedBack from '../suggestions/feedBack';
import  image from '../Images/image.png'
import { FaCaretLeft} from 'react-icons/fa'
import {  useNavigate} from 'react-router-dom'
import server from "../../axios/axios"
// import { comment } from 'postcss';
function Comment(props) {
  const feedbacks = [{
    imageStatus: "Preview images not loading",
    numOfComments: 0,
    numOfUpvotes: 3,
    theComment: "Easier to search for solutions based on specific stack"
  },]
  const navigate = useNavigate();

  const[newcomment, setNewComment] = useState(false);
  const[comment, setComment] = useState("");
  const [response, setResponse] = useState("");
  const {comments} = props;
   
 
  
  return (
  
    <div>
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
        </div>
       
            <div className='TheComments rounded-lg bg-white float-right h-absolute w-[50vw] mt-20 mr-96 pl-8 pt-6'>

             <h1>1 Comments</h1>
               
              {comments.map(coment =>(
               <div className='flex'>
               <button  className='absolute right-[23%] pt-20 hover:underline  ' onClick={()=>setNewComment((prev)=>!prev)} >Reply</button> 
               <img src={image} alt='image' className='h-14 w-14 rounded-full mt-8' />
               
              <div className='block'>
               <p className='pl-14 pt-8'>{coment.name}</p>
               <p className='pl-14'>{coment.mail}</p>
               <div className='h-absolute w-[35vw]'>
               <p className='pl-14 pt-6  pb-8'>{coment.commenting}</p>  
               </div>   
               <form action=" " value={newcomment} className={` ${newcomment ? 'block ' : 'hidden'}`}>
                 <div className='flex ' >
             <textarea placeholder='Type your comment here' className='w-[35vw] rounded-lg mt-4 pt-4 pl-4' onChange={(e)=>{setComment(e.target.value);console.log(e.target.value)}}></textarea>
             <button className='h-14 w-40 bg-purple-600 text-white ml-6  rounded-lg mt-4 ' onClick={()=>{server.post("/Api/feedback/addFeedback",{title:"divine",category:"one",Detail:"help",Comment:comment,Reply:"hello"})}}>Post reply</button>
             </div>
             </form> 
             <div className='h-[2px] w-[38vw] bg-slate-400 mt-2 mb-8'></div>    
                     
             </div>
             </div>))}
      

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