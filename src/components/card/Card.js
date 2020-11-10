import React from 'react';

import './Card.styles.css';

const Card = ({ name, email, id }) => {
  return (
    <div className='card-container'>
      <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
