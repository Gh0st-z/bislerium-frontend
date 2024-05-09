import React, {useState} from 'react';
import axios from 'axios';
import '../../assets/css/style.css';

const AdminProfileUpdateForm =() =>{
    const[formData, SetFromData] = useState({
        firstname: '',
        lastName: '',
        email:'',
        password: '',
    });
    const handleChange =(e)=>{
        const {name, value} = e.target;
        SetFromData({ ...formData, [name]: value});
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put('url backend/admin/profile', formData);
            console.log(response.data); 
            alert('Profile updated successfully!');
        } catch (error) {
            console.error('Error updating profile:', error);
            alert('An error occurred while updating profile.');
        }
        };
        return (
            <form onSubmit={handleSubmit}>
            <label>
                First Name:
                <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                />
                </label>
        <br />
        <label>
            Last Name:
            <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            />
            </label>
        <br />
        <label>
            Email:
            <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            />
            </label>
        <br />
        <label>
            Password:
            <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            />
        </label>
        <br />
        <button type="submit">Update Profile</button>
        </form>
        );
    };

export default AdminProfileUpdateForm;
