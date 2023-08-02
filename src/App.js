import logo from "./logo.svg";
import "./App.css";

function App() {
  const myName = "Charan Vignesh";

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hi {myName}!</p>
      </header>
    </div>
  );
}

export default App;
