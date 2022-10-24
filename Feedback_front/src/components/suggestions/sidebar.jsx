import React from 'react'
import Identifier from './Identifier'
import Fields from './fields'
import Roadmap from './Roadmap'



function Sidebar() {
  return (
    <div className='SideBar flex'>
       <div className='block ml-24'>
        <Identifier />
        <Fields />
        <Roadmap />
        </div>

    </div>

  )
}

export default Sidebar;