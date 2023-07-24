// import logo from './logo.svg';
import './App.css';
import HobbyIntroduction from './components/Introduction';
import MyPlants from './components/Projects';

function App() {
  return (
    <div className="App">
      <h1>My Hobby: Plants</h1>
      <HobbyIntroduction />
      <MyPlants />
    </div>
  );
}

export default App;
