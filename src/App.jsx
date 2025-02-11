import React,{useState} from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
function App(){
  const [matchid,setMatchId]=useState("40381");
  const [matchData, setMatchData]=useState(null);
  const fetchData= async()=>{
    try{
      const response= await fetch();
    }
  }
  return(
 <div className='app'>  
    <Header/>
    <Navigation/>
    <Footer/>
    </div>
  )
}

export default App;