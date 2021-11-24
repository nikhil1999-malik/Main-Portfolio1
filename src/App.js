import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Pages/Navbar';
import Header from './Components/Header/Header';
import Signin from './Components/Signin';
import Login from './Components/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header/>} />  
        <Route path="/SignIn" element={<Signin/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
