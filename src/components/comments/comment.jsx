import React from 'react'
import FeedBack from '../suggestions/feedBack';
import  image from '../Images/image.png'
function Comment() {
  const feedbacks = [{
    imageStatus: "Preview images not loading",
    numOfComments: 0,
    numOfUpvotes: 3,
    theComment: "Easier to search for solutions based on specific stack"
  },]
  return (
    <div>
          {feedbacks.map(feedback=>{
          return (
          <FeedBack imageStatus={feedback.imageStatus}
          numOfComments={feedback.numOfComments}
          numOfUpvotes={feedback.numOfUpvotes} 
          theComment={feedback.theComment}/>
          )
        })}
            <div className='rounded-lg bg-white float-right h-64 w-[50vw] mt-10 mr-96 pl-8 pt-6'>

             <h1>1 Comments</h1>
               <div className='flex'>
               <img src={image} alt='image' className='h-14 w-14 rounded-full mt-8' />
               {/* <a href='#' className='pl-5'>Reply</a> */}
               <div className='block'>
               <p className='pl-14 pt-8'>Umugwaneza Alice</p>
               <p className='pl-14'>@alicemugwaneza</p>   
               <p className='pl-14 pt-6'>Much easier to get answers from devs who can relate, since they've either finished <br /> the challenge  
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