import React from 'react';

const CardOrder = ({ id, qty, name, price }) => {
  return (
    <div key={id} className="d-flex justify-content-between bgOrder rounded">
      <div className="d-flex align-items-center">
        <h4 className="me-2">{id}.</h4>
        <div>
          <h6 className="fw-bold">{name}</h6>{' '}
          <h5>
            Rp <span className="fw-bold">{price}</span>
          </h5>{' '}
        </div>
      </div>

      <div>
        <h6 className="fw-light text-secondary">QTY</h6>
        <h5 className="text-center">{qty}</h5>
      </div>
    </div>
  );
};

export default CardOrder;
