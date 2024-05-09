import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/style.css'

function Home(){

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
    <div className="home-main">
      <ToastContainer/>
      <div className="home-header">
      </div>
      <div className="side-nav">
        <Link/>
        <Link/>
      </div>
      <div className="home-body">
        <section className="blog-card">
        </section>
      </div>
    </div>
  );
};

export default Home;
