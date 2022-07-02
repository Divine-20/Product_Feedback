import React from 'react'
import Suggestion from './suggestion'
import FeedBack from './feedBack'

function SuggestionContent() {
  const feedbacks = [{
    imageStatus: "Preview images not loading",
    numOfComments: 2,
    numOfUpvotes: 4,
    theComment: "Easier to search for solutions based on specific stack"
  },
  {
    imageStatus: "Preview images are actually loading",
    numOfComments: 4,
    numOfUpvotes: 6,
    theComment: "This is just another comment that is meaningless"
},{
  imageStatus: "No output noticed",
    numOfComments: 8,
    numOfUpvotes: 5,
    theComment: "This is testing whether it works out"}
]


  return (
    <div>
        <Suggestion />
        {feedbacks.map(feedback=>{
          return (
          <FeedBack imageStatus={feedback.imageStatus}
          numOfComments={feedback.numOfComments}
          numOfUpvotes={feedback.numOfUpvotes} 
          theComment={feedback.theComment}/>
          )
        })}

        
    </div>
  )
}

export default SuggestionContent