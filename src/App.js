// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserDetails from './Components/UserDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users: ', error));
  }, []);

  return (
    
      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid d-flex justify-content-center">
            <span className="navbar-brand mb-0 h1 title">User Explorer</span>
          </div>
        </nav>
        <ul className="user-list">
          {users.map(user => (
            <li key={user.id}>
              <Link to={`/user-details?id=${user.id}`}>
                <h4>{user.name}</h4>
                <p>{user.email}</p>
              </Link>
            </li>
          ))}
        </ul>
        <footer className="text-dark py-4 fixed-bottom foot">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center ">
                <p>&copy; 2024 User Directory. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    
  );
}

export default App;
