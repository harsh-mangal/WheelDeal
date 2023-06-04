import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SpinWheel from "./pages/SpinWheel";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <Navbar/>
    <Router>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/" element={<LoginPage/>}/>
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/spin" element={<SpinWheel />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
