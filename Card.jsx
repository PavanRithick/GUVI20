import React from 'react';
import './Card.css';

const Card = ({ title, price, features, disabledFeatures }) => (
  <div className="card">
    <h3>{title}</h3>
    <h2>{price}</h2>
    <ul>
      {features.map((feature, index) => (
        <li key={index} className="enabled">
          <span>✔</span> {feature}
        </li>
      ))}
      {disabledFeatures.map((feature, index) => (
        <li key={index} className="disabled">
          <span>✖</span> {feature}
        </li>
      ))}
    </ul>
    <button>Button</button>
  </div>
);

export default Card;
