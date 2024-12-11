import React from 'react';
import './Auth.css';

const Register = () => (
  <div className="auth">
    <h1>Register</h1>
    <form>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  </div>
);

export default Register;
