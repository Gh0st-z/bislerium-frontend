import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Link, redirect, useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import Cookies from 'js-cookie';
import envelope from '../../assets/images/envelope.png';
import padlock from '../../assets/images/padlock.png';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/style.css'

function Register(){
  const [message, setMessage] = useState('');

  const [formKey, setFormKey] = useState(0);

  const [formData, setFormData] = useState({
      Firstname: '',
      Middlename: '',
      Lastname: '',
      Email: '',
      Username: '',
      Password: '',
  });

  const [passData, setPassData] = useState({
        password2: '',
  });

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

  const handleSubmit= async(e) =>{
    e.preventDefault();
    if (
        !formData.Firstname.trim() ||
        !formData.Lastname.trim() ||
        !formData.Email.trim() ||
        !formData.Username.trim() ||
        !formData.Password.trim()
      ){
        showToast('error', 'Please fill in all fields.');
    }
    else{
      if (formData.Password != passData.password2) {
          showToast('error', 'The passwords do not match!');
      }
      else{
        axios.post( 'http://localhost:5234/api/user/register', formData)
        .then(response => {
            console.log(response.data.message);
            setMessage(response.data.message);
            showToast('success', 'Account successfully created!');
            setFormKey((prevKey) => prevKey + 1);
        }).catch(error =>{
            console.log(error);
            setMessage('Error occurred during registration.');
            showToast('error', 'Error occurred during registration.');
        });
      }
    }
  };

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
          ...prevState,
          [name]: value,
      }));
  };

  const handlePassValidation = (e) => {
      const {name, value} = e.target;
      setPassData((prevState) => ({
          ...prevState,
          [name]: value,
      }));
  }

  return(
    <div className="register-main">
      <ToastContainer/>
      <div className="register-form">
        <div className="header-div">
          <h1 className="form-header">Register</h1>
        </div>
        <form key={formKey} action="" method="POST" onSubmit={handleSubmit}>
          <div className="name-input100">
              <span className="name-label-input100">First Name: </span>
              <input className="n-input100" type="text" name="Firstname" onChange={handleInputChange}/>
          </div>
          <div className="name-input100">
              <span className="name-label-input100">Middle Name: </span>
              <input className="n-input100" type="text" name="Middlename" onChange={handleInputChange}/>
          </div>
          <div className="name-input100">
              <span className="lname-label-input100">Last Name: </span>
              <input className="ln-input100" type="text" name="Lastname" onChange={handleInputChange}/>
          </div>
          <div className="wrap-input100">
              <span className="label-input100">Email: </span>
              <input className="input100" type="email" name="Email" placeholder="Enter your Email" onChange={handleInputChange}/>
              <img src={envelope} className="reg-input100"/>
          </div>
          <div className="wrap-input100">
              <span className="label-input100">Username: </span>
              <input className="un-input100" type="text" name="Username" onChange={handleInputChange}/>
          </div>
          <div className="wrap-input100">
              <span className="label-input100">Password: </span>
              <input className="input100" type="password" name="Password" placeholder="Enter your password" onChange={handleInputChange}/>
              <img src={padlock} className="reg-input100"/>
          </div>
          <div className="wrap-input100">
              <span className="label-input100">Confirm Password: </span>
              <input className="input100" type="password" name="password2" placeholder="Re-Enter your password" onChange={handlePassValidation}/>
              <img src={padlock} className="reg-input100"/>
          </div>
          <div className="wrap-input100">
              <button className="register-btn">Create</button>
          </div>
          <p className="account-alr">Already have an account? <Link to="/login/">Sign in here</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
