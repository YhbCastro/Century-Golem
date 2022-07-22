import { createGame, listGames } from '../back-end/gamesAPI';
import './CreateGameView.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateGameView() {
  const navigate = useNavigate();
  const [maxPlayers, setMaxPlayers] = useState(0);

    return (
      <div className="App">
        <header className="App-header">
          <p>
            Create a game
          </p>
        </header>
        <form onSubmit={() => {createGame(maxPlayers).then(navigate('/')) }}>
            <label htmlFor="maxPlayers">Max players:</label>
            <input type="number" id="maxPlayers" name="maxPlayers" onChange={setMaxPlayers} /><br /><br />
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
  
  export default CreateGameView;