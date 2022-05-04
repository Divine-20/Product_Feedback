import React from 'react'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import FeedBackinfo from '../feeBack/feedBankinfo'
import Roadmapdetails from '../Roadmap/roadmapdetails'
import RoadmapLayout from '../Roadmap/roadmapLayout'
import Roadmap from './Roadmap'
import Comment from '../comments/comment'
// import Roadmapdetails from '../Roadmap/roadmapdetails'
function HomePage() {
  return (
    <div>
    <Router>    
     
          <Routes>
              <Route path='/' exact element={<RoadmapLayout />}></Route> 
              <Route path='/view'  element={<Roadmapdetails />}></Route> 
              <Route path='/Addfeedback' element={<FeedBackinfo />}></Route>
              <Route path='/tag' element={<Comment />}></Route>
          </Routes> 
          </Router> 
    </div>
  )
}

export default HomePage