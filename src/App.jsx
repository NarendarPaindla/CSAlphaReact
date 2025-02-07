import Header from './components/Header';
import './App.css'
import Greetings from './components/Greetings';
import Counter from './components/Counter';

function App(){
  const name="iotalpha";
  const course="react";
  const items=['item1','item2', 'item3','item4'];
return( 
<>
<Header name={name} />
<h1>Welcome</h1>
<p>Here {name} is learning {course}</p>
<ul>
  {items.map(item=><li key={item}>{item}</li>)}
</ul>
<Greetings/>
<Counter/>
</>
);
}

export default App;