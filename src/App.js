import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './bloggers/components/login.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="login/" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default App;
