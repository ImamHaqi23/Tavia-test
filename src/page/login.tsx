import React, { useState } from 'react';
import banner from '../../public/banner.png';
import logo from '../../public/logo.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginStart, loginSuccess, loginFailure } from '../authSlice';
import { loginUser } from '../api';
import './style.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    try {
      const userData = await loginUser({ email, password });
      console.log(email, password);

      // Check if login was successful
      if (userData.status === 'success') {
        dispatch(loginSuccess(userData));
        // Redirect to the home page
        navigate('/home');
      } else {
        // Handle unsuccessful login (show error message, etc.)
        dispatch(loginFailure('Invalid email or password'));
      }
    } catch (error) {
      dispatch(loginFailure(error.message));
    }
  };
  return (
    <div className="row">
      <div className="col-md-4 position-relative">
        <img src={banner} alt="banner" className="img-fluid h-100" />
        <div className="position-absolute top-50 start-50 translate-middle text-center p-3">
          <img src={logo} alt="logo" className="img-logo" />
          <p className="mb-0 text-light fw-bold">
            An application that will make your gift sending experience even more
            memorable
          </p>
        </div>
      </div>
      <div className="col-md-8 d-flex align-items-center justify-content-center mt-5">
        <form className="centered-form" onSubmit={handleLogin}>
          <h1 className="mb-5 fw-medium">Get Started</h1>
          <div className="mb-3">
            <label className="form-label fw-semibold fs-5">
              Email <span className="text-danger fw-bold">*</span>
            </label>
            <input
              type="email"
              className="form-control border border-top-0 border-end-0 border-start-0"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label fw-semibold fs-5">
              Password <span className="text-danger fw-bold">*</span>
            </label>
            <input
              type="password"
              className="form-control border border-top-0 border-end-0 border-start-0"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
          </div>
          <div className="mb-3 d-grid">
            <button
              type="submit"
              className="btn btn-danger rounded-pill fw-bold fs-5"
            >
              Login
            </button>
          </div>
          <div className="mb-3 text-center">
            <a
              onClick={() => navigate('/register')}
              className="fw-semibold text-decoration-none text-danger"
              style={{ cursor: 'pointer' }}
            >
              REGISTER NOW
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
