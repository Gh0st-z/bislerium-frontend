import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import Cookies from 'js-cookie';
import envelope from '../../assets/images/envelope.png';
import padlock from '../../assets/images/padlock.png';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/style.css'

function Login(){
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    UsernameOrEmail: '',
    Password: '',
  });

  const [formKey, setFormKey] = useState(0);
  const navigate = useNavigate();

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.UsernameOrEmail.trim() || !formData.Password.trim()) {
      showToast('error', 'Please Fill In All The Fields.');
    }else{
       try{
         const response = await axios.post('http://localhost:5234/api/user/login', formData);
         const responseData = response.data;
         const {jwtToken, userId} = responseData;

         if(!jwtToken || !userId){
           showToast('error', 'Invalid Response Data!');
         }

         showToast('success', 'Logged in successfully!');
         Cookies.set('isLoggedIn', 'true', {secure:true, sameSite: 'Strict'});
         Cookies.set('token', jwtToken, {secure:true, sameSite: 'Strict'});
         Cookies.set('userId', userId, {secure:true, sameSite: 'Strict'});

         navigate('/');
       }catch (error){
         showToast('error', 'Error occured during login process! Try Again!');
       }
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
            <img src={envelope} className="focus-input100"/>
          </div>
          <div className="wrap-input100">
            <span className="label-input100">Password: </span>
            <input className="input100" type="password" name="Password" placeholder="Enter your password" onChange={handleInput}/>
            <img src={padlock} className="focus-input100"/>
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
