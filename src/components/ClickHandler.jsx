const ClickHandler=()=>{
    const handleClick=(event)=>{
        console.log("Button clicked",event);
    }
    return(
        <div>
            <h2>Function component event handling</h2>
           <button onClick={handleClick}>Click here</button>
        </div>
    )
}

export default ClickHandler;