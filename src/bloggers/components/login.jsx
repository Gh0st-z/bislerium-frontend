import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import Cookies from 'js-cookie';
import '../../assets/css/style.css'

funtion Login(){
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    if (!formData.username.trim() || !formData.password.trim()) {
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
      <div className="login-div">
        <form className="login-form" action="" method="POST" enctype="multipart/form-data" onSubmit={handleSubmit}>
          <h1 className="form-title">Login</h1>
        </form>
      </div>
    </div>
  );
};

export default Login;
