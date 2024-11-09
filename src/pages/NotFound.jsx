/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className='not-found-container'>
      <h1 className='not-found-title'>404</h1>
      <p className='not-found-description'>
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to='/'>
        <button className='not-found-button'>Go Back Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
