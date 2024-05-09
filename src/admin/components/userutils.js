// userUtils.js
import { useState, useEffect } from 'react';
import axios from 'axios';

function Manageusers(){
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('your-backend-api-url/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const addUser = async (newUser) => {
    try {
      setUsers([...users, newUser]);
    } catch (error) {
      console.error('Error adding user:', error);
      alert('An error occurred while adding user.');
    }
  };

  const deleteUser = async (userId) => {
    try {
      await axios.delete(`your-backend-api-url/users/${userId}`);
      setUsers(users.filter((user) => user.id !== userId));
      alert('User deleted successfully!');
    } catch (error) {
      console.error('Error deleting user:', error);
      alert('An error occurred while deleting user.');
    }
  };

  const updateUser = async (updatedUser) => {
    try {
      setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    } catch (error) {
      console.error('Error updating user:', error);
      alert('An error occurred while updating user.');
    }
  };

  return { users, addUser, deleteUser, updateUser };
};

export default Manageusers;
