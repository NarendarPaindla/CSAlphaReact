import React,{Component} from 'react';
class Counter extends Component{
    constructor(props){
        super(props);
        this.state={count:0};
    }
    incrementCount=()=>{
        this.setState((prevState)=>({count:prevState.count+1}));
    }
    render(){
        return(
          <div>
            <h2>Class Component Counter</h2>
            <p>Count:{this.state.count} </p>
           <button onClick={this.incrementCount}>Increment</button>
          </div>

        );
    }
}
export default  Counter;