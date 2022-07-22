import './CreateGameView.css';

function CreateGameView() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Create a game
          </p>
        </header>
        <form action="">
            <label for="maxPlayers">Max players:</label>
            <input type="number" id="maxPlayers" name="maxPlayers" /><br /><br />
            <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
  
  export default CreateGameView;