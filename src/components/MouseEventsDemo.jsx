import React, {useState} from 'react';
const MouseEventsDemo=()=>{
    const [message,setMessage]=useState("NO mouse event yet");
    const handleClick=()=>setMessage("Clicked!");
    const handleDoubleClick=()=>setMessage("Double Clicked!");
    const handleMouseDown=()=>setMessage("Mouse button Pressed");
    const handleMouseUp=()=>setMessage("Mouse button relewased.");
    const handleMouseEnter=()=>setMessage("Mouse entered into the box");
    const handleMouseLeave=()=>setMessage("mouse left the box");
    const handleMouseMove = (e) =>
        setMessage(`Mouse at (${e.clientX}, ${e.clientY})`);
      const handleContextMenu = (e) => {
        e.preventDefault();
        setMessage('Right-click: Context menu prevented.');
      };
    return(
        <div>
            <h2>Mouse Events Demo</h2>
            <div
            style={{
                border:"1px solid black",
                padding:'20px',
                marginBottom:'10px',
                cursor:'pointer'
            }}
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            onContextMenu={handleContextMenu}
            >
             Interact with me using your mouse!
            </div>
   <p>{message}</p>
        </div>
    );
}
export default MouseEventsDemo;