import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './bloggers/components/login.js';
import Register from './bloggers/components/register.js';
import Home from './bloggers/components/home.js';
import ForgotPassword from './bloggers/components/forgot-password.js';
import AdminProfileUpdateForm from './admin/components/adminprofile.js';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="login/" element={<Login/>} />
        <Route path="register/" element={<Register/>} />
        <Route path="forgot-password/" element={<ForgotPassword/>} />
        <Route path="admin-profile/" element={<AdminProfileUpdateForm/>} />
      </Routes>
    </Router>
  );
}

export default App;
