import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import Cookies from 'js-cookie';
import companyLogo from '../../assets/images/logo.png';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/style.css'

function Home(){
  const [username, setUsername] = useState('User');

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

  const userID = Cookies.get('userID');
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(`http://localhost:5234/api/ManageUser/${userID}`);
        if (response.status !== 200) {
          showToast('error', 'Username fetch unsuccessful');
        } else {
          const fetchedUsername = response.data.username;
          if (!fetchedUsername) {
            setUsername('User');
          } else {
            setUsername(fetchedUsername);
          }
        }
      } catch (error) {
        console.error('Problem Fetching Username', error);
        showToast('error', 'Problem Fetching Username');
      }
    };

    fetchUsername();
  }, []);

  return(
    <div className="home-main">
      <ToastContainer/>
      <div className="home-header">
        <div className="logo-div">
          <img src={companyLogo} className="image"/>
        </div>
        <input type="text" placeholder="Search...." className="search-bar"/>
        <div className="create-div">
          <button className="create-button">
            <Link to="/add-blogs/"><p>Create Blog</p></Link>
          </button>
        </div>
        <div className="header-icons">
          <button className="bell-icon">
            <i className="fas fa-bell"></i>
          </button>
          <button className="user-circle">
            <i className="fas fa-user-circle"></i>
            <Link to="user-profile/">
              <p className="username">{username}</p>
            </Link>
          </button>
        </div>
      </div>
      <div className="home-content">
        <div className="side-nav">
          <div className="nav-content">
            <Link to="/" className="nav-link">Home</Link>
          </div>
          <div className="nav-content">
            <Link to="/blogs/" className="nav-link">My Blogs</Link>
          </div>
          <div className="nav-content">
            <Link to="/blogs/" className="nav-link">Logout</Link>
          </div>
        </div>
        <div className="home-body">
          <div className="head-home-card">
            <h1> Welcome to Bislerium!</h1>
            <h4> Get the latest blogs and blog updates here </h4>
          </div>
          <div className="home-card">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
