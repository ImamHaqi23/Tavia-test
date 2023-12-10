import React from 'react';

const Card = ({ id, img, name, price }) => {
  return (
    <div key={id} className="col-xs-12 col-md-6 col-lg-3 mb-4">
      <div className="card border border-0">
        <img className="card-img-top" src={img} alt={`Menu ${name}`} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-text">Rp {price}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
