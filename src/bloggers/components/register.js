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
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      phone_number: '',
      address: '',
      password: '',
      role: 'customer'
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
        !formData.first_name.trim() ||
        !formData.last_name.trim() ||
        !formData.email.trim() ||
        !formData.phone_number.trim() ||
        !formData.password.trim()
      ){
        showToast('error', 'Please fill in all fields.');
      }
    else{
      if (formData.password != passData.password2) {
          showToast('error', 'The passwords do not match!');
      }
      else if (!/^\d+$/.test(formData.phone_number)) {
          showToast('error', 'Phone number should contain only numeric values.');
      }
      else{
        const emailCheckResponse = await axios.get('/autho/register-get/', {
            params: {
                email: formData.email,
            },
        });
        if(emailCheckResponse.data.exists){
            showToast('error', 'Email already registered!');
            setFormKey((prevKey) => prevKey + 1);
        }
        else{
          axios.post( '/autho/register/', formData)
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
    }
  };

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      if (name === 'phone_number' && !isNaN(value)) {
          setFormData((prevState) => ({
              ...prevState,
              [name]: value,
          }));
      } else if (name !== 'phone_number') {
          setFormData((prevState) => ({
              ...prevState,
              [name]: value,
          }));
      }
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
        <div class="name-input100">
              <span class="name-label-input100">First Name: </span>
              <input class="n-input100" type="text" name="first_name" onChange={handleInputChange}/>
          </div>
          <div class="name-input100">
              <span class="name-label-input100">Middle Name: </span>
              <input class="n-input100" type="text" name="middle_name" onChange={handleInputChange}/>
          </div>
          <div class="name-input100">
              <span class="lname-label-input100">Last Name: </span>
              <input class="ln-input100" type="text" name="last_name" onChange={handleInputChange}/>
          </div>
          <div class="wrap-input100">
              <span class="label-input100">Email: </span>
              <input class="input100" type="email" name="email" placeholder="Enter your Email" onChange={handleInputChange}/>
              <span class="focus-input100" data-symbol="&#x2709;"></span>
          </div>
          <div class="phn-num-wrap-input100">
              <span class="phn-num-label-input100">Phone Number: </span>
              <input class="phn-num-input100" type="text" name="phone_number" onChange={handleInputChange}/>
          </div>
          <div class="addr-wrap-input100">
              <span class="addr-label-input100">Address: </span>
              <input class="addr-input100" type="text" name="address" onChange={handleInputChange}/>
          </div>
          <div class="wrap-input100">
              <span class="label-input100">Password: </span>
              <input class="input100" type="password" name="password" placeholder="Enter your password" onChange={handleInputChange}/>
              <span class="focus-input100" data-symbol="&#xf190;"></span>
          </div>
          <div class="wrap-input100">
              <span class="label-input100">Confirm Password: </span>
              <input class="input100" type="password" name="password2" placeholder="Re-Enter your password" onChange={handlePassValidation}/>
              <span class="focus-input100" data-symbol="&#xf190;"></span>
          </div>
          <div class="wrap-input100">
              <button class="register-btn">Create</button>
          </div>
          <p id="account-alr">Already have an account? <Link to="/">Sign in here</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Register;
