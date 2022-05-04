import React from 'react'
import { FaCaretLeft, FaPlus} from 'react-icons/fa'
function FeedBackForm() {
  return (
    <div className=''>
      <i className='text-blue-500 flex justify-center pt-40 '><FaCaretLeft />Go back</i>
      <div className='w-16 h-16 rounded-full text-white bg-gradient-to-r from-violet-500 to-fuchsia-500 ml-auto mr-auto pt-4 pl-4 text-3xl'>
        <i className=''><FaPlus /></i>
      </div>
   <div className=' w-[30vw] h-[70vh] ml-auto mr-auto bg-white pl-16 pt-8'>
   

     <form>
        <h1>Create New Feedback</h1>
        <label className=''>Add a short, descriptive headline</label>
        <input type='text' name='headline' />

        <h1>Category</h1>
        <label className='block'>Choose a category for your feedback</label>
      <select name='category'>
       <option>Feature</option>
       <option>UI</option>
       <option>UX</option>
       <option>Enhancement</option>
       <option>Bug</option>
       </select>

       <h1>Feedback Detail</h1>
       <label className='block'>Include any specific comments on what should be improved,added,etc.</label>
       <textarea></textarea>
       <button className='h-12 w-28 bg-blue-900 rounded-lg ml-36 mt-8 text-white'>Cancel</button>
       <button className='h-12 w-40 bg-purple-600 rounded-lg ml-4 mt-8 text-white'>Add Feedback</button>
         </form>
   </div>
    </div>
  )
}

export default FeedBackForm;