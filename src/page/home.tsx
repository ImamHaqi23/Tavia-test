import React from 'react';
import Menu from '../../public/menu.png';
import Menu1 from '../../public/menu1.png';
import Menu2 from '../../public/menu2.png';
import Menu3 from '../../public/menu3.png';
import { useDispatch } from 'react-redux';
import { logOut } from '../authSlice';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/navbar';
import Sidebar from '../component/sidebar';
import Card from '../component/card';
import CardOrder from '../component/cardOrder';
import './style.css';

const data = [
  {
    id: 1,
    img: Menu,
    name: 'Strawberry Pancake',
    price: '28,000',
    qty: 1,
  },
  {
    id: 2,
    img: Menu3,
    name: 'Strawberry Pancake',
    price: '28,000',
    qty: 2,
  },
  {
    id: 3,
    img: Menu2,
    name: 'Strawberry Pancake',
    price: '28,000',
    qty: 1,
  },
  {
    id: 4,
    img: Menu1,
    name: 'Strawberry Pancake',
    price: '28,000',
    qty: 3,
  },
  {
    id: 5,
    img: Menu,
    name: 'Strawberry Pancake',
    price: '28,000',
    qty: 1,
  },
  {
    id: 6,
    img: Menu3,
    name: 'Strawberry Pancake',
    price: '28,000',
    qty: 2,
  },
  {
    id: 7,
    img: Menu2,
    name: 'Strawberry Pancake',
    price: '28,000',
    qty: 1,
  },
  {
    id: 8,
    img: Menu1,
    name: 'Strawberry Pancake',
    price: '28,000',
    qty: 3,
  },
];

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/');
  };
  return (
    <>
      {/* Sidebar */}
      <div className="d-flex" id="wrapper">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Content */}
        <div id="page-content-wrapper" className="w-100 navBar">
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <div className="container-fluid p-2 bgMain">
            <div className="row">
              <div className="col-xs-12 col-md-8">
                <div className="row">
                  {data.map((item) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      img={item.img}
                      name={item.name}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>

              <div className="col-xs-12 col-md-4">
                <div className="d-flex flex-column gap-2">
                  {data.map((item) => {
                    return (
                      <CardOrder
                        key={item.id}
                        id={item.id}
                        qty={item.qty}
                        name={item.name}
                        price={item.price}
                      />
                    );
                  })}
                  <div className="d-flex justify-content-between bgOrder rounded">
                    <div className="d-flex align-items-center">
                      <div>
                        <h5 className="fw-bold">Total</h5>
                        <h4>
                          Rp <span className="fw-bold">224.000</span>
                        </h4>{' '}
                      </div>
                    </div>

                    <div>
                      <h6 className="fw-light text-secondary">QTY</h6>
                      <h5 className="text-center">16</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
