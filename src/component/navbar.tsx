import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navBar border">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-between"
        id="navbarNav"
      >
        <div className="form-inline my-2 my-lg-0 ml-auto d-flex gap-4 ms-4 inputVoucher">
          <input
            className="form-control mr-sm-2 rounded-pill bg-light fw-semibold text-secondary"
            type="text"
            placeholder="Input QR Code Number"
          />
          <button
            className="btn btn-danger my-2 px-5 my-sm-0 rounded-pill fw-semibold fs-5"
            type="submit"
          >
            Generate
          </button>
        </div>
        <div className="me-2">
          <div className="text-end me-4">
            <p className="fs-6">03 April 2023, 15:00PM</p>
            <h3 className="fw-bold fs-2">Daily Order</h3>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
