import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Play Century Golem!
        </p>
      </header>
      <button onClick={()=>{alert("click")}}>Create game</button>
    </div>
  );
}

export default App;
