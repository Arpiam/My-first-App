import logo from './logo.svg';
import './App.css';

function App() {
  console.log("Hello World")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
         test
        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Smbat du mozg es
        </a>
      </header>
    </div>
  );
}

export default App;
