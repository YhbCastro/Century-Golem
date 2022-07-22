import './App.css';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { listGames } from './create_game/back-end/gamesAPI';
import { useState, useEffect } from 'react';

function App() {
  let navigate = useNavigate();
  const [games, setGames] = useState([]);
  
  useEffect(() => {
    listGames().then(setGames);
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Play Century Golem!
        </p>
      </header>
      <button onClick={()=>{navigate('/create-game')}}>Create game</button>
      <ul>
        {games.map(game => (<li>{game}</li>))}
      </ul>
    </div>
  );
}

export default App;
