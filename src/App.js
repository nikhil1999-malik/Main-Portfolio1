import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Pages/Navbar';
import Header from './Components/Header/Header';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Header/>} />  
      </Routes>
    </Router>
  );
}

export default App;
