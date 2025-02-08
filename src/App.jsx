
import './App.css'
import MouseEventsDemo from './components/MouseEventsDemo';
import KeyboardEventsDemo from './components/KeyboardEventsDemo';
function App(){
  const name="iotalpha";
  const course="react";
  const items=['item1','item2', 'item3','item4'];
return( 
<>
{/* <Header name={name} />
<h1>Welcome</h1>
<p>Here {name} is learning {course}</p>
<ul>
  {items.map(item=><li key={item}>{item}</li>)}
</ul>
<Greetings/>
<Counter/>
<ClickHandler/> */}
<MouseEventsDemo/>
<KeyboardEventsDemo/>
</>
);
}

export default App;