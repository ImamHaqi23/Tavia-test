import React from 'react';
import banner from '../../public/banner.png';
import logo from '../../public/logo.png';
import './style.css';

const Register = () => {
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
      <div className="col-md-8 d-flex align-items-center justify-content-center ">
        <form className="centered-form">
          <h1 className="mb-5 fw-medium">Register</h1>
          <div className="mb-3">
            <label className="form-label fw-semibold fs-5">
              HP <span className="text-danger fw-bold">*</span>
            </label>
            <input
              type="text"
              className="form-control border border-top-0 border-end-0 border-start-0"
              id="exampleInputHp"
              aria-describedby="Hp"
              placeholder="HP"
            />
          </div>
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
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
