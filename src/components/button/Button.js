import React from 'react';
import './button.css';

const Button = ({ onLoadMore }) => (
  <button className="Button" onClick={onLoadMore}>
    Load More
  </button>
);

export default Button;
