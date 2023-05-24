import './App.css';
import MyCarousel from './components/MyCarousel';
import Navbar from './components/Navbar';
import Poster from './components/Poster';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MyCarousel />
      <Poster/>
    </div>
  );
}

export default App;
