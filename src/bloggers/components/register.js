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

  return(
    <div className="register-main">
      <ToastContainer/>
      <div className="register-form">
        <div className="header-div">
          <h1 className="form-header">Register</h1>
        </div>
      </div>
    </div>
  );
};

export default Register;
