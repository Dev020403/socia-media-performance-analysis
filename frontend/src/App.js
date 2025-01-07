
import './App.css';
import Analyse from './pages/Analyse';
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/analysis" element={<Analyse />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
