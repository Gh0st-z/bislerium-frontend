import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
import Cookies from 'js-cookie';
import companyLogo from '../../assets/images/logo.png';
import 'react-toastify/dist/ReactToastify.css';
import '../../assets/css/style.css'

function AddBlog(){
  const [username, setUsername] = useState('User');

  const [message, setMessage] = useState('');

  const [formKey, setFormKey] = useState(0);

  const [formData, setFormData] = useState({
      Title: '',
      Description: '',
      BlogImage: '',
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

  const userID = Cookies.get('userID');
  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const response = await axios.get(`http://localhost:5234/api/manage-user/${userID}`);
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

  const handleSubmit= async(e) =>{
    e.preventDefault();
    if (
        !formData.Title.trim() ||
        !formData.Description.trim()
      ){
        showToast('error', 'Please fill in all fields.');
    }
    else{
      axios.post( 'http://localhost:5234/api/blog/createblog', formData)
      .then(response => {
          console.log(response.data.message);
          setMessage(response.data.message);
          showToast('success', 'Blog successfully created!');
          setFormKey((prevKey) => prevKey + 1);
      }).catch(error =>{
          console.log(error);
          setMessage('Error occurred during registration.');
          showToast('error', 'Error occurred during registration.');
      });
    }
  };

  const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevState) => ({
          ...prevState,
          [name]: value,
      }));
  };

  return(
    <div className="home-main">
      <ToastContainer/>
      <div className="home-header">
        <div className="logo-div">
          <img src={companyLogo} className="image"/>
        </div>
        <input type="text" placeholder="Search...." className="search-bar"/>
        <div className="header-icons">
          <button className="bell-icon">
            <i className="fas fa-bell"></i>
          </button>
          <button className="user-circle">
            <i className="fas fa-user-circle"></i>
            <p className="username">{username}</p>
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
        <div className="blog-body">
          <form key={formKey} action="" method="POST" onSubmit={handleSubmit}>
            <div className="blog-input100">
                <span className="label-blog100">Blog Title: </span>
                <input className="blog100" type="text" name="Title" placeholder="Enter your Email" onChange={handleInputChange}/>
            </div>
            <div className="blog-input100">
                <span className="label-blog100">Blog Content: </span>
                <input className="blog100" type="text" name="Description" onChange={handleInputChange}/>
            </div>
            <div class="blog-input100">
                <span class="label-blog100">Blog Image: </span>
                <input class="sdo-file-input100" type="file" name="BlogImage" onChange={handleInputChange}/>
            </div>
            <div className="blog-input100">
                <button className="blg-btn">Add Blog</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
