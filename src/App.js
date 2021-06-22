import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import {GreetingNew} from './GreetingNew';
import {PeopleList} from './PeopleList';
import {GreetingNewNew} from './GreetingNewNew';

const people = [{
  name: 'Vishal',
  age: 39,
},  {
    name: 'Sonali',
    age: 35,
  }]

function App() {  
  let specialMessage = "The Cool one.";
  let url = 'https://reactjs.org';

  const displayAlert = () => {
    alert ('Hello');
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick = {displayAlert}> Click it!</button>
        <button onClick = {() => alert ('Hello2')}> Click it!</button>
        <Greeting name="Vishal" numOfMessages = {5}/>
        <PeopleList people = {people} />
        <GreetingNew name = "Vishal 1" numOfMessages = {0}/> 
        <GreetingNewNew person = {{name:"Vishal", numOfMessages:15}} />
        <img src={logo} className="App-logo" alt="logo" />
        <p style ={{color: 'red', fontSize: '96px' }}>
          Here we go this is new Application - {specialMessage}
        </p>
        <a
          className="App-link"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
