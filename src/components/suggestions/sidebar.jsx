import React from 'react'
import Identifier from './Identifier'
import Fields from './fields'
import Roadmap from './Roadmap'



function Sidebar() {
  return (
    <div className='SideBar'>
       
        <Identifier />
        <Fields />
        <Roadmap />
    </div>

  )
}

export default Sidebar;