import React, { useState } from 'react'

function Fields() {
    const [tags, setTags] = useState([
        'All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feauture'

    ])
    return (
        <div className='Fields'>
           
            <div className='tags-input-container'>
                {tags.map((tag, index) => (
                    <div className='tag-item' key={index}>
                          <span className="text">{tag}</span>
                          
                        </div>
                   
                    
                ))}
            </div>
        </div>
    )
}

export default Fields;