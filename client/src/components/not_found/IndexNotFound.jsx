import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import CustomButton from '../common/button/Custom_Button';

import './indexNotFound.scss';

const IndexNotFound = () => {
  return (
    <div className='not-found'>
      <div className='wrapper m-auto'>
        <h1 className=''>Oops!</h1> 
        <h4 className='text-center'>404 - Page not found</h4>
        <p>The page you are looking for might have been removed, had its name changed or is temporarily unavailable.</p>
        <div className='link d-flex'>
          <Link to='/' className='m-auto'>
            <CustomButton value='Go to Homepage' isClass='inverted' />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(IndexNotFound);
