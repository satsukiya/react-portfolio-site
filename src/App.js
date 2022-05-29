import logo from './logo.svg';
import './App.css';
//import Welcome from './sample';
import { Welcome, MorningCall, Profile } from './sample';
//import { MorningCall } from './sample';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Welcome name="foge"></Welcome>
          <Profile age={22} country="jp"></Profile>
          <Welcome name="moge"></Welcome>
          <Profile age={24} country="jp"></Profile>
        </div>
        <div>
          <MorningCall name="okome"></MorningCall>
          <MorningCall name="mochi"></MorningCall>
        </div>
      </header>
    </div>
  );
}

export default App;
