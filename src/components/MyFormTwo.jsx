import React,{useState} from "react";

export default function MyFormTwo(){
    const [inputs,setInputs]=useState({});
    const handleChange=(event)=>{
        const name=event.target.name;
        const value=event.target.value;
        setInputs((values)=>({...values,[name]:value}));
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(inputs);
        alert(`Thew anme you entered was: ${inputs.username} ${inputs.age}`);
    }
    return(
        <form onSubmit={handleSubmit}>
    <label>Enter your name
    <input
    type="text"
    name="username"
    value={inputs.username || ""}
    onChange={handleChange}
    />
    </label>
    <label>Enter your Age
    <input
    type="number"
    name="age"
    value={inputs.age || ""}
    onChange={handleChange}
    />
    </label>
    <input type="submit"/>
</form>
    )
}