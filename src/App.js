import './App.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';

function App() {
  let navigate = useNavigate();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Play Century Golem!
        </p>
      </header>
      <button onClick={()=>{navigate('/create-game')}}>Create game</button>
    </div>
  );
}

export default App;
