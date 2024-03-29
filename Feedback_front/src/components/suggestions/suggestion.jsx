import React from 'react'
import { Link } from 'react-router-dom'
import { FaLightbulb, FaCaretDown,FaPlus } from 'react-icons/fa';
function Suggestion() {
  return (
    <div className='h-20 w-[50vw] bg-blue-900 ml-auto  mr-96 flex pt-5 rounded-lg mt-10 selection:justify-evenly'>
      <i className='text-white pl-5 h-30 w-20 pt-2 text-2xl' ><FaLightbulb/></i>
      <h1 className='text-white pl-5 pt-1'>6 Suggestions</h1>
      <p className='text-white pl-36 pt-1'>sort by:</p>
      {/* <h3 className='text-white pl-2 pt-1'>Most Upvotes</h3> */}
      <select name="" id="" className='bg-blue-900 text-white  w-40 mt-[-10px] ml-4 outline-none '>
        <option value="" className='pt-24 bg-white text-black  w-14 border-b-2 border-b-gray-500' >Most upvotes</option>
        <option value="" className='pt-24 bg-white text-black  w-14 '>Least Upvotes</option>
        <option value="" className='pt-24 bg-white text-black  w-14 '>Most comments</option>
        <option value="" className='pt-24 bg-white text-black  w-14 '>Least comments</option>
      </select>
      {/* <i className='text-white pl-2 pt-2'><FaCaretDown /></i> */}
       <Link to='/AddFeedback'>
      <button className=' bg-purple-600 w-40 rounded-lg  flex pt-3 justify-center h-12 ml-12 mb-4'>
          <i className='text-white pl-2'><FaPlus /></i>
          <p className='text-white pl-2'>Add Feedback</p>
         
      </button>
      </Link>
    </div>
  )
}

export default Suggestion;