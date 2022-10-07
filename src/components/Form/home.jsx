import React from 'react'
import { Link} from 'react-router-dom'

function Home() {
  return (
    <div>
        <div className='w-full h-screen '>
               <h1 className=' font-extrabold' id='feedback'>Feedback Mentor</h1>
               <Link to='/signup'>
               <button className='h-16 text-2xl ml-[45%] hover:bg-white border-2  w-64 bg-[#d5d5f8] border-none ' id='signup'>Sign up</button>
               </Link>
        </div>
    </div>
  )
}

export default Home