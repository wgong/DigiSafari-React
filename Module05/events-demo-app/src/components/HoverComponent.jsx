import React from 'react'

function HoverComponent({handleHover, id}) {
  return (
    <div>
        <h1 onMouseOver={()=>handleHover(id)}>Hover to trigger the event handler</h1>
    </div>
  )
}

export default HoverComponent