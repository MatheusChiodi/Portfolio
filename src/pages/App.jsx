import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import AllProjectsPage from './AllProjectsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<AllProjectsPage />} />
      </Routes>
    </Router>
  );
}
