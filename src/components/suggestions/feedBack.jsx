import React, { useState } from 'react'
import { FaCaretUp, FaComment } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
function FeedBack(props) {
    const[feedBack, setFeedBack]  = useState([
        
    ])
    const [tags, setTags] = useState([
        'Feature', "something"
    ])
    const navigate = useNavigate();
  return (
    <div className='rounded-lg bg-white float-right h-60 w-[50vw] mt-10 mr-96 ' id='suggest'>
        <div className='flex pl-5 pt-4'>
        <div className=' bg-slate-400 w-10 h-16 rounded-lg  mt-2 pl-3 pt-3'>
          <i><FaCaretUp /></i>
          <p className=' pl-1'>{props.numOfUpvotes}</p>
          
          </div>
        <h2 className=' pl-10 pt-7'>{props.imageStatus}</h2>
        <i className='text-slate-400 ml-auto mr-2  mt-14 text-2xl'><FaComment /></i><span className='mr-10 mt-14'>{props.numOfComments}</span>
        </div>
    
        <p className='pl-[100px] justify-center'>{props.theComment}</p>
       
        <div className='tags-input-container ml-24 mt-8'>
                {tags.map((tag, index) => (
                    <div className='tag-item' onClick={()=> navigate('/tag')} key={index}>
                          <span className="text">{tag}</span>
                          
                    </div>
                ))}
        </div>
    </div>
  )
}

export default FeedBack;