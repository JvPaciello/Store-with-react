import './App.css';
import Header from './Header';
import Slide from './Slide';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Slide />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
