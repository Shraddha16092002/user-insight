
 import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './details.css';
function UserDetails() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const userId = params.get('id');

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => setUser(data))
      .catch(error => console.error('Error fetching user details: ', error));
  }, []);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid d-flex justify-content-center">
          <span className="navbar-brand mb-0 h1 title">User Insights</span>
        </div>
      </nav>
      <div className="user-details">
      <Link to="/"><h5>Explore other users</h5></Link>

        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</p>
      </div>
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

export default UserDetails;
