import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/style.css'

function Login(){
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    UsernameOrEmail: '',
    Password: '',
  });

  const [formKey, setFormKey] = useState(0);

  const showToast = (type, message) => {
    toast[type](message, {
      position: 'top-center',
      autoclose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.UsernameOrEmail.trim() || !formData.Password.trim()) {
      showToast('error', 'Please Fill In All The Fields.');
    }else{
      axios.post('http://localhost:5234/api/user/login', formData).then(response => {
        setMessage(response.data.message);
        showToast('success', response.data.message);
      }).catch(error => {
        console.log(error);
        setMessage('Error occured during login process. Please Try Again!');
        showToast('error', 'Error occured during login process. Please Try Again!');
      });
    };
  };

  const handleInput = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:value,
    }));
  }

  return(
    <div className="login-main">
      <ToastContainer/>
      <div className="login-form">
        <div className="header-div">
          <h1 className="form-header">Login</h1>
        </div>
        <form key={formKey} action="" method="POST" onSubmit={handleSubmit}>
          <div className="wrap-input100">
            <span className="label-input100">Username/Email: </span>
            <input className="input100" type="text" name="UsernameOrEmail" placeholder="Enter your username/email" onChange={handleInput}/>
            <span className="focus-input100" data-symbol="&#x2709;"></span>
          </div>
          <div className="wrap-input100">
            <span className="label-input100">Password: </span>
            <input className="input100" type="password" name="Password" placeholder="Enter your password" onChange={handleInput}/>
            <span className="focus-input100" data-symbol="&#xf190;"></span>
          </div>
          <a href="#" className="for-pass">Forgot Password?</a>
          <div className="wrap-input100">
            <button className="login-btn">Login</button>
          </div>
          <span className="account">Don't have an account?</span><br/>
          <nav>
            <Link className="loginlink" to="/register"> Create an account</Link>
          </nav>
        </form>
      </div>
    </div>
  );
};

export default Login;
