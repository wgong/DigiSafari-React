import React from 'react'

function HoverComponent({handleHover}) {
  return (
    <div>
        <h1 onMouseOver={handleHover}>Hover to trigger the event handler</h1>
    </div>
  )
}

export default HoverComponent