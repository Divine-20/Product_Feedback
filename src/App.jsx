import { useState } from 'react'
import RoadmapLayout from './components/Roadmap/roadmapLayout'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Roadmapdetails from './components/Roadmap/roadmapdetails';
import FeedBackinfo from './components/feeBack/feedBankinfo';
import Home from './components/Form/home';
import CommentContent from './components/comments/commentContent';
import SuggestionContent from './components/suggestions/suggestionContent';
import Signup from './components/Form/signup';
import Login from './components/Form/login';
import FeedbackEdit from './components/comments/feedbackEdit';
function App() {


  return (
    <div className='App'>
      <Router>
        <Routes>
          
          <Route path='/' exact element={<Home />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/roadmapLayout' element={<RoadmapLayout />}></Route>
          <Route path='/view' element={<Roadmapdetails />}></Route>
          <Route path='/Addfeedback' element={<FeedBackinfo />}></Route>
          <Route path='/roadmapLayout/tag' element={<CommentContent />}></Route>
          <Route path='/Edit-feedback' element={<FeedbackEdit />}></Route>
          
        </Routes>
      </Router>
  
    </div>
  )
}

export default App;
