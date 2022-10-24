import React from 'react'
import { useState} from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { FaCaretLeft,FaPlus,FaComment } from 'react-icons/fa'
import FeedBackinfo from '../feeBack/feedBankinfo'
function Roadmapdetails(props) {
    const [tags, setTags] = useState([
        'Feature','^123'
        
    ])
    const navigate = useNavigate();
  return (
    <div className=''>
        <div className='h-20 w-[54vw] bg-blue-900 flex ml-auto mr-auto mt-10 rounded-lg pt-4'>
           <i className='text-white flex pl-5 pt-1 hover:underline'><FaCaretLeft /></i><span className='text-white'>Go Back</span>
      <h1 className='text-white pl-12 text-3xl'>Roadmap</h1>
           

           <button className=' bg-purple-600 w-40 rounded-lg flex pt-3 justify-center ml-auto mr-4 mb-4' onClick={()=> navigate('/AddFeedback')}>
          <i className='text-white pl-2 pt-1'><FaPlus /></i>
          <p className='text-white pl-2 '>Add Feedback</p>
         
      </button>
        </div>
        <div className='flex mt-10 justify-center mr-[25em]'>
        
        <div>
            <h1 className='pl-[26em]'>planned(2)</h1>
            <p className='pl-[26em]'>Ideas prioritized for research</p>
            <div className='h-80 w-72 bg-white border-t-8 border-orange-400 rounded-md ml-[26em] block mt-6' >
       <div className='planned-dot flex mt-5'><span className='pl-8'>Planned</span></div>
             <h1 className='pl-8 pt-14'>More comprehensive reports</h1>
             <p className='pl-8 pt-10'>It would be great to see a mre detailed breakdown of solutions</p>
             <div className='flex float-right'>
        <i className='text-gray-500  text-2xl mr-3 pt-6' ><FaComment /></i><span className='pr-8 pt-6'>2</span>
             </div>
             <div className='tags-input-container  mt-10 ml-8 '>
                 
                {tags.map((tag, index) => (
                    <div className='tag-item' key={index}>
                          <span className="text">{tag}</span>
                          
                    </div>
                ))}
        </div>
   
             </div>
        </div>
        <div>
            <h1 className='pl-12'>In-progress(3)</h1>
            <p className='pl-12'>Currently being developed</p>
            <div className='h-80 w-72 bg-white border-t-8 border-purple-600 mt-6 rounded-md ml-[3em]'>
       <div className='progress-dot  mt-5'><span className='pl-8 '>In_progress</span></div>
       <h1 className='pl-8 pt-14'>More comprehensive reports</h1>
             <p className='pl-8 pt-10'>It would be great to see a mre detailed breakdown of solutions</p>
             <div className='flex float-right'>
        <i className='text-gray-500  text-2xl mr-3 pt-6' ><FaComment /></i><span className='pr-8 pt-6'>2</span>
             </div>
             <div className='tags-input-container  mt-10 ml-8 '>
                 
                {tags.map((tag, index) => (
                    <div className='tag-item' key={index}>
                          <span className="text">{tag}</span>
                          
                    </div>
                ))}
        </div>
             </div>
        </div>
        <div>
            <h1 className='pl-12'>Live(1)</h1>
            <p className='pl-12'>Released Research</p>
            <div className='h-80 w-72 mt-6 bg-white border-t-8 border-sky-500 rounded-md ml-[3em]'>
       <div className='live-dot flex mt-5 '><span className='pl-8'>Live</span></div>
       <h1 className='pl-8 pt-14'>More comprehensive reports</h1>
             <p className='pl-8 pt-10'>It would be great to see a mre detailed breakdown of solutions</p>
             <div className='flex float-right'>
        <i className='text-gray-500  text-2xl mr-3 pt-6' ><FaComment /></i><span className='pr-8 pt-6'>2</span>
             </div>
             <div className='tags-input-container  mt-10 ml-8 '>
                 
                {tags.map((tag, index) => (
                    <div className='tag-item' key={index}>
                          <span className="text">{tag}</span>
                          
                    </div>
                ))}
        </div>
             </div>
        </div>
       
        </div>

    </div>
  )
}

export default Roadmapdetails