import React from 'react';
import { FaAlignJustify, FaRegCreditCard } from 'react-icons/fa';
import { CiLogout } from 'react-icons/ci';
import icon from '../../public/kaon_icon.png';
import { useDispatch } from 'react-redux';
import { logOut } from '../authSlice';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <div
      className="sideBar px-2 border d-flex flex-column align-items-center"
      id="sidebar-wrapper"
    >
      <img src={icon} alt="" className="icon-logo" />
      <div className="d-flex flex-column mt-4">
        <div className="d-flex flex-column mb-5 gap-3 mt-3">
          <a
            href="#"
            className="text-decoration-none text-secondary d-flex flex-column align-items-center mb-4"
          >
            <span className="fs-5">
              <FaAlignJustify />
            </span>
            Menu
          </a>
          <a
            href="#"
            className="text-decoration-none text-secondary d-flex flex-column align-items-center mb-4"
          >
            <span className="fs-5">
              <FaRegCreditCard />
            </span>
            Sales
          </a>
        </div>
        <div>
          <a
            style={{ cursor: 'pointer' }}
            onClick={handleLogout}
            className="btn-logout text-decoration-none text-secondary d-flex flex-column align-items-center mb-4"
          >
            <span className="fs-5 text-black">
              <CiLogout />
            </span>
            <p className="logOut">Log Out</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
