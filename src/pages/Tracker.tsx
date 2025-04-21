//import { useState } from 'react';
import './style.css';
import '../components/Header';
import Header from '../components/Header';

function Tracker() {
  return (
    <div>
      <Header />

      <div className="custom-container">
          <h1 className="custom-heading">Tracker</h1>
      </div>
    </div>
  );
}

export default Tracker;
