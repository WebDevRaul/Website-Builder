import React, { useState } from 'react';

import Responsive from '../common/authWrapper/Responsive';
import Input from '../common/input/Input';

import './indexDashboard.scss';

const IndexDashboard = () => {
  const [error, setErrors] = useState(undefined);
  const [text, useText] = useState('')

  const onChange = () => {
    
  }

  const onFocus = () => {

  }

  return (
    <div className='dashboard'>
      <Responsive>
        <div className='img'>img</div>
      </Responsive>
    </div>
  )
}

export default IndexDashboard;
