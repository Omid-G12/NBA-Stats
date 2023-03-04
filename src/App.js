import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import ThankYou from './Components/ThankYou';
import { Games } from './Components/Games';
import { Players } from './Components/Players';
import { Standings } from './Components/Standings';
import { Leaders } from './Components/Leaders';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/players" element={<Players />} />
          <Route path="/standings" element={<Standings />} />
          <Route path="/leaders" element={<Leaders />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/thank-you" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

