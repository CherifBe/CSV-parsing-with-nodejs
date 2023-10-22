import logo from './assets/energy.png';
import './App.css';
import RoomList from './components/RoomList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-content">
        <RoomList/>
      </div>
    </div>
  );
}

export default App;
