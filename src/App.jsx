import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Portfolio from './pages/potfolio';

// Pages publiques



function App() {
  return (
    <Router>
      <Routes>
      <Route path="/Portfolio" element={<Portfolio />} />
      <Route path="/" element={<Navigate to="Portfolio" replace />} />      </Routes>

    
    </Router>
  );
}

export default App;