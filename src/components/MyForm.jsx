import React, { useState } from 'react';

function MyForm(){
    const [name,setName]=useState("");
    const handleSubmit=(event)=>{
     event.preventDefault();
     alert(`Thew anme you entered was: ${name}`);
    }
    return(
<form onSubmit={handleSubmit}>
    <label>Enter your name
    <input
    type="text"
    value={name}
    onChange={(event)=>setName(event.target.value)}
    />
    </label>
    <input type="submit"/>
</form>

    )
}
export default MyForm;