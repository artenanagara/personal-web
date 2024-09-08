import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/index.css'; 
import Navbar from './components/Navbar';
import About from './pages/About';
import Works from './pages/Works';
import Home from './pages/Home';


const App: React.FC = () => {
  return (
    <Router>
      <div className='container mx-auto'>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/works" element={<Works />}/>
          </Routes>
      </div>
    </Router>

  );
};

export default App;
