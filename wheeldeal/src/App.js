import './App.css';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import MyCarousel from './components/MyCarousel';
import Navbar from './components/Navbar';
import Poster from './components/Poster';
import Poster2 from './components/Poster2';
import Poster3 from './components/Poster3';
import SpinWheel from './components/SpinWheel';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <MyCarousel />
      <Poster/>
      <Poster2/>
      <Poster3/>
      <ContactForm/>
      <Footer/>
      <SpinWheel/>
    </div>
  );
}

export default App;
