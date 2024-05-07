import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import Cookies from 'js-cookie';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/style.css'

function Home(){
  return(
    <h1>HOME PAGE</h1>
  );
};

export default Home;
