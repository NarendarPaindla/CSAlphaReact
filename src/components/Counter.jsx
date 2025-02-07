// import React,{Component} from 'react';
// class Counter extends Component{
//     constructor(props){
//         super(props);
//         this.state={count:0};
//     }
//     incrementCount=()=>{
//         this.setState((prevState)=>({count:prevState.count+1}));
//     }
//     render(){
//         return(
//           <div>
//             <h2>Class Component Counter</h2>
//             <p>Count:{this.state.count} </p>
//            <button onClick={this.incrementCount}>Increment</button>
//           </div>

//         );
//     }
// }
// export default  Counter;

import React, { useState } from 'react';

const Counter = () => {
  // Declare a state variable "count" with initial value 0
  const [count, setCount] = useState(0);

  // Function to update the count state
  const incrementCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <h2>Functional Component Counter</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
};

export default Counter;