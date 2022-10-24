import React from 'react'
import Comment from './comment'
import image from '../Images/image.png'

function CommentContent() {
    const comments = [
        {
        name : "Umugwaneza Alice",
        image : "../Images/image.png",
        mail:"@umugwanezaalice",
        commenting:"Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it."

    },
    {
        name : "Umugwaneza Alice",
        image : "../Images/image.png",
        mail:"@umugwanezaalice",
        commenting:"Much easier to get answers from devs who can relate, since they've either finished the challenge themselves or are in the middle of it."

    },
    {
      name : "Umugwaneza Alice",
      image : "../Images/image.png",
      mail:"@umugwanezaalice",
      commenting:"Much easier to get answers from devs who can relate, since they've either finished  challengi themselves or are in the middle of it."

  },
]
  return (
    
      <div>
        <Comment comments = {comments} />
      </div>
  )
}

export default CommentContent