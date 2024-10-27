import React from 'react';
import './App.css';
import { pricingPlans } from './data';
import Card from './Card';

const App = () => (
  <div className="app">
    <h1>Pricing Plans</h1>
    <div className="card-container">
      {pricingPlans.map((plan, index) => (
        <Card
          key={index}
          title={plan.title}
          price={plan.price}
          features={plan.features}
          disabledFeatures={plan.disabledFeatures}
        />
      ))}
    </div>
  </div>
);

export default App;
