import React from 'react'
import RoadmapLayout from '../Roadmap/roadmapLayout'
// import { Link } from 'react-router-dom'

function Roadmap() {
  return (
    <div className='roadmap-container'>
      <div className='title'>

        <h3 className='heading3'>Roadmap</h3><span><a href='/view'>view</a></span>
     
      </div>
      <div className='list'>
       <div className='planned-dot flex'><span>Planned</span></div>
         <div className='progress-dot'><span>In_Progress</span></div>               
         <div className='live-dot'><span>Live</span></div>
         </div>
    </div>
  )
}

export default Roadmap