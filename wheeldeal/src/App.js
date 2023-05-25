import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import SpinWheel from "./pages/SpinWheel";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/register" element={<RegisterPage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/spin" element={<SpinWheel />} />
      </Routes>
    </Router>
  );
}

export default App;
